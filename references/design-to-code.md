# Design to Code

## Status

The dependency and hand-off rules are **Accepted**. Package topology and build tooling are **Open**.

## Shared contract

Design and code should expose the same semantic chain:

```text
Core source
    ↓
Alias source
    ↓
Product or component CST
    ↓
Component property and state
    ↓
Product usage
```

The implementation technology may differ, but design and code must preserve the same semantic meaning and dependency direction.

## Figma ownership

```text
Foundations file
├── Core
└── Alias
      ↓ published dependency

Component library or product file
├── CST referencing published Alias
└── Components referencing local CST
```

Foundations must not depend on a component file. A product may use its own CST and component file while referencing the shared published Alias collection.

## Hand-off requirements

For each component, provide:

- Figma component and contract link
- Code implementation or reference link
- Anatomy and property mapping
- State mapping, including allowed combinations
- CST → Alias mapping
- Accessibility behavior
- Responsive and content-sizing behavior
- Loading, empty, error, disabled, and overflow responsibility
- Local deviations from the reference contract
- Lifecycle status and migration note

## Token mapping rules

- Preserve semantic names across design and code where platform naming permits.
- Generate or transform names mechanically rather than maintaining unrelated manual mappings.
- Keep numeric types numeric. For example, disabled opacity is `0.5`, not `"50%"`.
- Never resolve a CST directly to a Core value in code when design resolves it through Alias.
- Treat a changed Alias meaning or CST API as a versioned contract change, not a cosmetic edit.

## Implementation independence

A code component can be product-owned even when its design contract is shared. Reference code is guidance unless governance explicitly promotes it to a maintained shared package.

## Open engineering decisions

- Token source format and generated package topology
- Product override resolution
- Theme versus product-mode boundary
- CST versioning and compatibility policy
- Code Connect or equivalent mapping strategy
- Validation and lint rules across design and code

Do not choose these by implication. Record decisions in [`open-decisions.md`](open-decisions.md) with owners and migration impact.
