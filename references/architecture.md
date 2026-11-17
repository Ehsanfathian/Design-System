# Architecture

## Status

**Accepted**

## Goal

Create a shared design language that supports product autonomy. Products should reuse values, semantics, behavioral contracts, and proven knowledge without becoming coupled to another product team's runtime dependency or release cycle.

## Layers and ownership

| Layer | Responsibility | Default owner |
| --- | --- | --- |
| Core | Raw available values such as color, size, spacing, opacity, and typography primitives | Foundations |
| Alias | System-wide semantic roles such as surfaces, content, focus, spacing intent, and disabled opacity | Foundations |
| Component contract and CST | Component anatomy, states, behavior, accessibility, and component-specific decisions mapped to Alias | Component library or product |
| Base component | Product-agnostic implementation of proven shared anatomy and behavior | Design System |
| Domain component | Reusable product-domain meaning composed from Base and Foundation capabilities | Domain owner |
| Pattern or Product UI | Flow, page, or feature-specific composition | Product team |

## Dependency direction

```text
Foundations: Core → Alias
                     ↓
Component contract: CST
                     ↓
Base or product component implementation
                     ↓
Domain composition
                     ↓
Pattern or product usage
```

Dependencies flow downward. Foundations must not know about `List Item`, `Text Input`, `Asset`, or another component or domain. A component may depend on published Foundation semantics, but Foundation must not depend on the component library.

## Reuse without coupling

The default for Domain and composite components is:

```text
Shared contract + reference implementation + local ownership
```

This model permits traceable duplication when local release independence is more valuable than a shared runtime dependency. Duplication must remain owned, discoverable, and linked to its origin.

A shared runtime package is an outcome of proven convergence, not the starting assumption. Extract the stable part, not necessarily the entire feature.

## Architectural invariants

- Share semantics and contracts before sharing implementation.
- Preserve independent product release cycles.
- Keep component states in CST or the component contract, not in Alias naming.
- Keep accessibility semantics, interaction meaning, state meaning, and token-layer rules consistent across products.
- Allow products to differ in density, radius, composition, surface mapping, and visual expression through owned CST and implementation.
- Avoid reverse dependencies and centralized approval for routine Domain implementation changes.

## Non-goals

- Eliminating all duplicate code
- Standardizing every product's component implementation
- Creating a new runtime service, package manager, or central approval team
- Migrating all legacy components in one release
- Making the Design System team the owner of all Domain code

## Related references

- Token layers: [`token-architecture.md`](token-architecture.md)
- Product autonomy: [`multi-product-model.md`](multi-product-model.md)
- Ownership classification: [`base-domain-ownership.md`](base-domain-ownership.md)
- Promotion and governance: [`governance.md`](governance.md)
