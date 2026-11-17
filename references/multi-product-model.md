# Multi-product Model

## Status

**Accepted**

The system supports a shared design language with product-owned component decisions and implementations.

```text
                    ┌→ Prime CST → Prime components
Core → Alias ───────┤
                    └→ Ayarin CST → Ayarin components
```

A product may start from a reference component library, clone an implementation, or build its component from the contract. It must continue to consume shared Alias semantics rather than bypassing them with direct Core references.

## Shared across products

- Core value model
- Alias vocabulary and semantic roles
- Token-layer rules
- Accessibility semantics
- Interaction and state meaning
- Required contract fields
- Naming and traceability conventions
- Promotion and deprecation governance

## Product-owned by default

- CST mapping
- Component implementation
- Composition and anatomy where the shared contract permits it
- Visual density
- Radius and shape expression
- Surface mapping
- Product-specific concepts and Domain components
- Release timing

## Product boundaries

A product may customize visual expression, but it may not silently redefine:

- Accessibility semantics
- Interaction meaning
- State meaning
- Shared naming vocabulary
- Token dependency rules
- The semantic meaning of an accepted Alias

If a product needs a genuinely new semantic concept, it should propose a new Alias only when the meaning is reusable beyond one component. Otherwise the concept belongs in that product's CST or Domain contract.

## Shared implementation is optional

A shared component package is justified only when multiple real consumers need the same implementation, the API is stable, variation is limited or configurable, a maintainer exists, and shared maintenance is cheaper than the coupling it introduces.

Until then, prefer a shared contract and reference implementation with local ownership.

## Drift control

Local implementation does not mean invisible divergence. Each implementation should record its origin, owner, reference version, local deviations, consumers, and status. General improvements to interaction or accessibility should flow back into the shared contract even when code remains local.
