---
name: design-system
description: Apply Lantern design-system architecture when defining tokens, classifying Base and Domain components, documenting component contracts, planning multi-product reuse, or migrating legacy components. Use for design-system decisions and hand-off; do not use as a generic visual-design checklist.
---

# Design System Architecture

Use this repository as the source of truth for design-system architecture and component contracts.

## Non-negotiable rules

- Foundations owns `Core` and system-wide `Alias` tokens.
- Component libraries and products own their component-specific tokens (`CST`).
- CST references Alias; it must not reference Core directly.
- Alias expresses reusable semantic roles, not component states.
- Shared design language does not require shared component implementation.
- Base abstractions come from shared anatomy and behavior, not visual similarity alone.
- Product teams may own local implementations and releases while preserving shared accessibility, interaction, state, naming, and token-layer contracts.
- Never convert an unresolved choice into policy. Record it in [`references/open-decisions.md`](references/open-decisions.md).

## Route the task

- For system layers and dependency direction, read [`references/architecture.md`](references/architecture.md).
- For Core, Alias, CST, ownership, and naming, read [`references/token-architecture.md`](references/token-architecture.md).
- For Surface semantics, read [`references/surface-model.md`](references/surface-model.md).
- For Alias Color branch scope, current Core state, product modes, contracts, and open decisions, read [`references/alias-color.md`](references/alias-color.md) after the token and Surface references.
- For anatomy, states, slots, accessibility, and contract fields, read [`references/component-contracts.md`](references/component-contracts.md).
- For repeatable Figma component audit, token mapping, verification, and Spec hand-off, read [`references/component-workflow.md`](references/component-workflow.md).
- For multiple products or themes, read [`references/multi-product-model.md`](references/multi-product-model.md).
- To classify Base, Domain, Pattern, or Product-specific UI, read [`references/base-domain-ownership.md`](references/base-domain-ownership.md).
- For approval, ownership, registries, or promotion to a shared package, read [`references/governance.md`](references/governance.md).
- For incremental adoption, deprecation, or legacy removal, read [`references/migration.md`](references/migration.md).
- For Figma-to-code mapping and developer hand-off, read [`references/design-to-code.md`](references/design-to-code.md).
- For List Item work, read [`references/components/list-item.md`](references/components/list-item.md).

## Working method

1. Identify the layer and owner before proposing a token or component.
2. Separate accepted facts, recommendations, and open decisions.
3. Define the contract before expanding variants: owner, anatomy, allowed states, constraints, fallback, edge cases, accessibility, and migration impact.
4. Prefer a local, traceable implementation over premature shared runtime coupling.
5. Promote only stable, converged behavior with real consumers and an explicit maintainer.
