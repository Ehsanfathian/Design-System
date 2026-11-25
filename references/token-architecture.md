# Token Architecture

## Status

**Accepted**

## Layer contract

```text
Core       What values exist?
Alias      What do those values mean across the system?
CST        How does this component use those meanings?
Component  How is the interface assembled and how does it behave?
```

Existing compatibility example:

```text
Core: neutral/50
        ↓
Alias: surface/sunken
        ↓
CST: list-item/filled/bg/hover
        ↓
List Item: Hover state
```

## Ownership

- The Foundations file owns Core and Alias.
- The component library owns CST for its component implementations.
- A separate product may own a separate CST and component implementation while consuming the same Alias language.
- A CST may reference Alias tokens only. It must not reference Core directly.
- A system-wide Alias must not contain component names or component states.

## What belongs in each layer

### Core

Raw values and scales. Examples include a color ramp, spacing values, opacity values, or numeric dimensions. Core names answer which value exists, not where it is used.

### Alias

Reusable semantic roles shared across multiple components or contexts. Alias groups start with the concept they represent, such as `bg`, `fg`, `border`, `content`, `surface`, `size`, and `corner-radius`. Families sit below the concept where needed. Variable type is metadata. The [Alias Color contract](alias-color.md) defines the role-first paths for new color aliases. Existing color paths listed here are compatibility examples.

```text
surface/base
surface/sunken
focus-ring/color
space/gap/sm
space/inset/md
opacity/disabled
```

### CST

Decisions that only make sense because a specific component exists. Examples:

```text
list-item/filled/bg/hover
list-item/density/compact/gap
text-input/focus-ring/color
```

The lifecycle of a CST follows the component API. If states, anatomy, or variants change, the CST may change with them.

## Naming rules

- Use the [Alias Color naming model](alias-color.md) for new color aliases, with the visual role first and an adjective from the shared intensity scale.

- Prefer semantic intent over raw value names outside Core.
- Preserve component context in CST names.
- Name interaction states explicitly in CST when they represent a real contract.
- Do not create tokens for layout behavior that should remain content- or container-driven.
- Do not create distinct tokens only to make a matrix look complete; a real design decision must exist.
- Multiple CSTs may reference the same Alias when their semantics are distinct but their current values are equal.

## Product-specific CST

Products may create their own CST mapping and component implementation:

```text
Core → Alias → Prime CST → Prime components
             → Ayarin CST → Ayarin components
```

This is intentional. Shared Foundation semantics preserve a common language while product-owned CST preserves autonomy.

## Accepted type rule

Opacity values are unitless numbers. For example:

```text
opacity/disabled → Core opacity/50 → 0.5
```

Do not store `"50%"` as a string in the token contract.

## Open engineering details

The generated package structure, product override resolution, build pipeline, and CST versioning policy are not yet accepted. Track them in [`open-decisions.md`](open-decisions.md).
