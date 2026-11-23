# List Item Contract

## Status

**Accepted** for the current pilot, except items listed under Open decisions.

## Purpose

List Item is a product-agnostic Base container for one item inside a List Container. It owns generic item anatomy, interaction states, density, and slot layout. It does not know about Coin, Asset, Market, Bank, Wallet, Order, or another Domain entity.

Domain components such as `Asset List Item` compose the Base contract with Domain-specific content.

## Ownership boundary

### List Item owns

- Item surface
- Interaction states
- Density
- Slot architecture
- Focus indicator contract
- Content-driven height and container-driven width

### List Container owns

- Grouping
- Dividers
- Outer border or outline
- Surrounding surface
- Relationship and spacing between items

The current Base List Item appearance is `Filled`. `Outline`, `Divided`, and `Ghost` are not carried by the item while those responsibilities belong to List Container.

## Anatomy and layout

```text
List Item
├── Leading slot
├── Content slot
├── Trailing slot
└── Optional supporting composition when the contract requires it
```

| Region | Contract |
| --- | --- |
| Leading | Hug content, maximum one direct layer, no fixed width or size |
| Content | Fill available space |
| Trailing | Hug content; prefer one composed child when multiple elements are needed |
| Item width | Driven by the container |
| Item height | Hug content |

Leading may contain an Icon at 16, Checkbox at 24, Avatar at 40, or a Domain component. The Base component must not create size tokens to constrain these cases.

## States

```text
Default
Hover
Pressed
Focused
Loading
Disabled
```

- `Pressed` is a temporary pointer or touch state; it is not `Selected` or current navigation state.
- `Focused` may coexist with a future persistent `Selected` state.
- Focus adds a semantic focus indicator. It does not require a distinct background token when the background does not change.
- In the current pilot, actionable items expose a transient Pressed state and share the same surface treatment as Hover. Product implementations still validate press feedback on their target input methods.

## Focus contract

Focus Ring is semantically independent from the component's normal border. An implementation may render an outer ring or change the visible border, but it must preserve the focus-indicator meaning and meet accessibility requirements.

```text
list-item/focus-ring/color  → focus-ring/color
list-item/focus-ring/width  → focus-ring/width
list-item/focus-ring/offset → focus-ring/offset
```

## Required Alias tokens

```text
surface/base
surface/sunken

focus-ring/color
focus-ring/width
focus-ring/offset

space/gap/sm
space/gap/md
space/inset/md
space/inset/lg

opacity/disabled
```

The broader Surface taxonomy remains available, but this component currently consumes `surface/base` and `surface/sunken` only.

## CST

```text
list-item/filled/bg/default
list-item/filled/bg/hover
list-item/filled/bg/pressed
list-item/filled/bg/loading
list-item/filled/bg/disabled

list-item/focus-ring/color
list-item/focus-ring/width
list-item/focus-ring/offset

list-item/density/compact/padding-inline
list-item/density/compact/padding-block
list-item/density/compact/gap

list-item/density/breathable/padding-inline
list-item/density/breathable/padding-block
list-item/density/breathable/gap

list-item/content/opacity/disabled
```

There is no `list-item/filled/bg/focus` token because Focus currently adds a focus indicator without changing the base surface.

## CST to Alias mapping

### Background

```text
list-item/filled/bg/default  → surface/base
list-item/filled/bg/hover    → surface/sunken
list-item/filled/bg/pressed  → surface/sunken
list-item/filled/bg/loading  → surface/base
list-item/filled/bg/disabled → surface/base
```

The pilot mapping is recorded in [OD-005](../open-decisions.md#od-005) and verified in [the Figma Spec](https://www.figma.com/design/5WVFftNosYXY3KIkkGhXo4/Lantern-V2?node-id=52274-3691) for Lantern Light and Dark.

### Density

```text
list-item/density/compact/padding-inline → space/inset/md
list-item/density/compact/padding-block  → space/inset/md
list-item/density/compact/gap            → space/gap/sm

list-item/density/breathable/padding-inline → space/inset/md
list-item/density/breathable/padding-block  → space/inset/lg
list-item/density/breathable/gap            → space/gap/md
```

Current Core mappings discussed for the pilot are:

```text
space/gap/sm   → Core spacing/8
space/gap/md   → Core spacing/12
space/inset/md → Core spacing/16
space/inset/lg → Core spacing/20
```

These values must remain behind Alias and may be remapped by an accepted theme or product decision.

### Disabled content

```text
list-item/content/opacity/disabled
    → opacity/disabled
    → Core opacity/50
    → 0.5
```

The surface remains unchanged. Slot content receives the disabled opacity treatment. The token value is a number, not a string.

## Loading contract

Loading exists in the Base contract so designers and developers must cover it during hand-off. Base List Item does not generate a skeleton.

```text
List Item contract  → requires Loading state
Domain composition  → supplies appropriate loading components inside slots
```

Do not create `list-item/skeleton/*` tokens unless List Item later becomes the explicit owner of that placeholder behavior.

## Intentionally not tokenized

```text
slot size
slot width
slot max-width
content width
list-item width
list-item height
list-item max-width
```

These are governed by the layout contract rather than token values.

## Domain composition example

```text
Base / List Item
    ↓
Domain / Asset / Asset List Item
    ├── Leading = Asset Identity
    ├── Content = Asset name and symbol
    └── Trailing = Asset Value composition
```

Trend, mini chart, balance, and price semantics belong to their Domain components, not to the Base List Item variant matrix.

## Open decisions

- Whether a persistent Selected state belongs in a later Base contract
- Exact focus-ring Core values and platform implementation
- Final accessibility role by usage context; List Item container alone must not force one role for every Domain composition

Track resolution in [`../open-decisions.md`](../open-decisions.md).
