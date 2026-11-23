import { createListItem } from "./list-item.js";

const list = document.querySelector("#examples");
const theme = document.querySelector("#theme");
const density = document.querySelector("#density");
const result = document.querySelector("#result");

function text(value, classes = "") {
  const node = document.createElement("span");
  node.className = classes;
  node.textContent = value;
  return node;
}

function label(title, support) {
  const node = document.createElement("span");
  node.className = "grid gap-0.5";
  node.append(text(title, "text-sm font-semibold"), text(support, "text-sm text-[var(--demo-muted)]"));
  return node;
}

function mark(initial) {
  const node = text(initial, "grid size-9 place-items-center rounded-lg bg-[var(--demo-chip)] text-sm font-semibold");
  node.setAttribute("aria-hidden", "true");
  return node;
}

function loadingPlaceholder() {
  const content = document.createElement("span");
  content.className = "grid motion-safe:animate-pulse gap-2 py-1";
  const skeleton = text("", "h-3 w-28 max-w-full rounded-sm bg-[var(--demo-chip)]");
  skeleton.setAttribute("aria-hidden", "true");
  content.append(skeleton, text("Loading row content", "sr-only"));
  return content;
}

function renderExamples() {
  const shared = { density: density.value };
  const detail = text("›", "text-xl text-[var(--demo-muted)]");
  detail.setAttribute("aria-hidden", "true");
  list.replaceChildren(
    createListItem({ ...shared, leading: mark("A"), content: label("Actionable row", "Hover, press, or focus this row"), trailing: detail,
      onActivate: () => { result.textContent = "Actionable row activated."; } }),
    createListItem({ ...shared, leading: mark("R"), content: label("Read-only row", "A row with no assigned action"), trailing: text("Default", "text-sm text-[var(--demo-muted)]") }),
    createListItem({ ...shared, content: loadingPlaceholder(), state: "loading" }),
    createListItem({ ...shared, leading: mark("D"), content: label("Disabled row", "Its original shell stays visible"), state: "disabled",
      onActivate: () => { result.textContent = "Disabled row activated."; } }),
  );
}

theme.addEventListener("change", () => { document.documentElement.dataset.theme = theme.value; });
density.addEventListener("change", renderExamples);
renderExamples();
