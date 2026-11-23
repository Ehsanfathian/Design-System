# Alias Color

## Status

**Accepted branch context and constraints; mappings listed under Open Decisions remain unresolved.**

This reference is the source of truth for the current Alias Color branch. It narrows the broader token architecture to the work that is allowed in this branch without changing the accepted system model.

## Current State

- Core Color has a single mode.
- Core Color primitives are separated by product namespace:
  - `lantern/*`
  - `karat/*`
  - `prime/*`
- Core names represent available raw values. They must not express semantic intent, component meaning, or component state.
- Alias Color is the next layer being designed on top of the existing Core Color structure.
- The accepted dependency model is:

```text
Core → Alias → CST → Component
```

## Branch Scope

This branch is limited to designing, reviewing, naming, and documenting **Alias Color**.

Included:

- Shared semantic color vocabulary
- Alias Color naming and hierarchy
- Product/Brand modes in Alias Color
- Alias-to-Core mappings
- Surface Alias semantics
- Contrast and mapping review required to accept Alias Color values

## Out of Scope

Do not change any of the following in this branch without a separate explicit agreement:

- CST names, values, structure, or versioning
- Component tokens, variants, states, anatomy, behavior, or implementation
- Core Color primitives, scales, namespaces, or the single-mode structure
- Generated package topology, build pipeline, or runtime override mechanism
- Non-color Alias domains

Examples that may be used for validation do not authorize edits to CST or Components.

## Architectural Constraints

1. Foundations owns Core and system-wide Alias tokens.
2. Core exposes raw product-namespaced primitives and carries no semantic or component meaning.
3. Alias Color defines reusable semantic meaning shared by the system.
4. Each Alias Color value must reference Core Color. Do not use a literal value, CST, or Component token as an Alias value.
5. CST must reference Alias and must not reference Core directly.
6. Alias names must not contain a component name, component variant, or component interaction state.
7. A product mode may change the Core primitive behind an Alias, but it must not change the accepted semantic meaning of that Alias.
8. Unresolved mappings or naming choices remain open decisions; do not convert them into policy or implementation by assumption.

The dependency rules are therefore:

```text
Alias Color → Core Color only
CST Color   → Alias Color only
```

## Alias Color Contract

An Alias Color token answers: **What semantic color role does this value serve across the system?**

An accepted Alias Color token must have:

- A reusable semantic name independent of any component
- One stable meaning across all product modes
- A Core Color reference for every supported product mode
- A documented contrast or contextual constraint when legibility depends on surrounding color
- Evidence that the role belongs at system level rather than in a CST

Naming rules:

- Prefer semantic intent over raw color, scale, product, or component names.
- Keep product names in mode names, not in the shared Alias variable name.
- Do not create separate Alias tokens only because two products currently use different Core values; modes own that mapping difference.
- Do not create an Alias merely to complete a naming matrix. A reusable semantic decision must exist.
- Multiple CSTs may consume the same Alias when their component meanings differ but the required semantic color role is the same.

## Product and Brand Modes

Product/Brand modes remain in the Alias Color collection.

The supported modes for this branch are:

| Alias mode | Core Color source | Contract |
| --- | --- | --- |
| `Lantern` | `lantern/*` | Maps shared Alias semantics to Lantern Core primitives |
| `Karat` | `karat/*` | Maps shared Alias semantics to Karat Core primitives |
| `Prime` | `prime/*` | Maps shared Alias semantics to Prime Core primitives |

The Alias variable name and semantic definition stay identical across these modes. Only the referenced Core primitive may change.

The `Prime` and `Ayarin` branches shown in [`multi-product-model.md`](multi-product-model.md) illustrate product-owned CST and component implementations. They are not the Alias Color mode contract for this branch.

Do not add, remove, merge, or rename a product mode as part of routine Alias token work. Treat that as an explicit architecture decision.

## Surface Contract

[`surface-model.md`](surface-model.md) remains the canonical definition of Surface semantics. The accepted Surface Alias Color vocabulary for this branch is:

| Alias | Meaning |
| --- | --- |
| `surface/base` | Base surface of the current context |
| `surface/raised` | Surface one level above the base context |
| `surface/sunken` | Recessed or inset surface relative to its environment |
| `surface/floating` | Independent floating surface such as a popover or dropdown |
| `surface/inverse` | Contrast reversed relative to the current theme |
| `surface/fixed/light` | Always light, independent of the current theme |
| `surface/fixed/dark` | Always dark, independent of the current theme |

### Component-state boundary

Component interaction states are not Surface Alias roles. Do not create:

```text
surface/hover
surface/pressed
surface/selected
surface/disabled
surface/loading
```

The CST owns the state decision and selects an existing semantic Surface Alias:

```text
Core: neutral primitive
        ↓
Alias: surface/sunken
        ↓
CST: list-item/filled/bg/hover
        ↓
Component: Hover state
```

If a component state appears to need a new color, first identify its reusable visual meaning. Create a new system Alias only when that meaning is stable, semantic, and reusable beyond the component.

## Open Decisions

The following items are not settled by this branch context:

1. **Exact mode mappings:** the Core primitive referenced by each Alias in `Lantern`, `Karat`, and `Prime`, including contrast validation for each contextual pairing. Track this as [`OD-012`](open-decisions.md).
2. **Theme versus product-mode resolution:** how product overrides are resolved and where theme behavior ends and product mode begins. Track this as [`OD-008`](open-decisions.md).
3. **Source and delivery format:** token source format, build pipeline, and generated package topology. Track this as [`OD-007`](open-decisions.md).
4. **Surface implementation details:** exact Core values and any elevation mechanics for Surface roles, as noted in [`surface-model.md`](surface-model.md).
5. **Mode lifecycle:** the approval and migration process for adding, renaming, or removing an Alias product mode. Track this as [`OD-013`](open-decisions.md).

Until these decisions are accepted, document proposals and evidence without changing CST, Components, or the accepted architecture.

## Required Reading Order

For Alias Color work, read:

1. [`../SKILL.md`](../SKILL.md)
2. [`token-architecture.md`](token-architecture.md)
3. [`surface-model.md`](surface-model.md)
4. This reference
5. [`architecture.md`](architecture.md) when layer ownership or dependency direction is in question

