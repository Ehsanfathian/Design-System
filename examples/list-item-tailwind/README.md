# List Item Tailwind spike

This example implements the Lantern List Item pilot as a reusable DOM factory with Tailwind CSS. The demo supplies its own slot content and List Container. The token snapshot covers Lantern Light and Dark.

## Run

From this directory:

```sh
npm ci
npm run build
python3 -m http.server 4173
```

Open `http://localhost:4173`. Use the controls to switch the theme and density. Tab to the first row to see Focused, hold the pointer down for Pressed, and activate it with Enter or a click. Run `npm run dev` in a separate terminal for CSS watch mode.

## Use

```js
import { createListItem } from "./list-item.js";

list.append(createListItem({
  leading: accountIcon,
  content: displayName,
  trailing: statusLabel,
  density: "compact",
  onActivate: () => openAccount(accountId),
}));
```

`content` is required. Slots accept DOM nodes or text. The caller supplies data, row actions, and loading placeholders. Supply one node for a composed slot. A row with `onActivate` uses a native button and expects phrasing content without nested controls. Provide `state: "loading"` or `"disabled"` to suppress activation. The browser supplies Hover, Pressed, and keyboard Focused interactions.

- Code contract: [List Item](../../references/components/list-item.md)
- Design reference: [List Item Pilot Spec](https://www.figma.com/design/5WVFftNosYXY3KIkkGhXo4/Lantern-V2?node-id=52274-3691)
