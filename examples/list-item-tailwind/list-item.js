const densityClasses = {
  compact: "gap-[var(--list-item-density-compact-gap)] [padding-inline:var(--list-item-density-compact-padding-inline)] [padding-block:var(--list-item-density-compact-padding-block)]",
  breathable: "gap-[var(--list-item-density-breathable-gap)] [padding-inline:var(--list-item-density-breathable-padding-inline)] [padding-block:var(--list-item-density-breathable-padding-block)]",
};

const surfaceClasses = {
  default: "bg-[var(--list-item-filled-bg-default)]",
  loading: "bg-[var(--list-item-filled-bg-loading)]",
  disabled: "bg-[var(--list-item-filled-bg-disabled)]",
};

const interactiveClasses = [
  "enabled:cursor-pointer enabled:hover:bg-[var(--list-item-filled-bg-hover)] enabled:active:bg-[var(--list-item-filled-bg-pressed)]",
  "focus-visible:[outline-style:solid] focus-visible:[outline-width:var(--list-item-focus-ring-width)] focus-visible:[outline-color:var(--list-item-focus-ring-color)]",
  "focus-visible:[outline-offset:calc(var(--list-item-focus-ring-offset)_-_var(--list-item-focus-ring-width))]",
].join(" ");

/**
 * Creates one <li>. Slots accept text or DOM nodes. Use phrasing content
 * without nested controls when onActivate makes the whole row a button.
 * @param {{content: Node|string, leading?: Node|string, trailing?: Node|string,
 *   density?: 'compact'|'breathable', state?: 'default'|'loading'|'disabled',
 *   onActivate?: (event: MouseEvent) => void}} options
 */
export function createListItem({ content, leading, trailing, density = "compact", state = "default", onActivate }) {
  if (content == null) throw new TypeError("List Item requires content");
  if (!Object.hasOwn(densityClasses, density)) throw new RangeError(`Unknown density: ${density}`);
  if (!Object.hasOwn(surfaceClasses, state)) throw new RangeError(`Unknown state: ${state}`);

  const item = document.createElement("li");
  item.dataset.listItem = "";
  item.dataset.state = state;
  item.dataset.density = density;

  const interactive = typeof onActivate === "function";
  const row = document.createElement(interactive ? "button" : "div");
  row.className = [
    "flex w-full min-w-0 items-center text-start",
    densityClasses[density],
    surfaceClasses[state],
    interactive ? interactiveClasses : "",
  ].join(" ");

  if (interactive) {
    row.type = "button";
    row.disabled = state !== "default";
    row.addEventListener("click", onActivate);
  } else if (state === "disabled") {
    row.setAttribute("aria-disabled", "true");
  }

  if (state === "loading") item.setAttribute("aria-busy", "true");

  for (const [name, value] of Object.entries({ leading, content, trailing })) {
    if (value == null) continue;
    const slot = document.createElement("span");
    slot.dataset.slot = name;
    slot.className = name === "content" ? "min-w-0 flex-1 wrap-anywhere" : "shrink-0";
    if (state === "disabled") slot.classList.add("[opacity:var(--list-item-content-opacity-disabled)]");
    slot.append(value);
    row.append(slot);
  }

  item.append(row);
  return item;
}
