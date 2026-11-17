# Design System Knowledge Library

This repository is the persistent source of truth for the design-system architecture shared across Lantern and its products. It records accepted decisions, explicit constraints, reusable component contracts, migration guidance, and unresolved decisions without treating assumptions as settled policy.

## Core model

```text
Core values
    ↓
System-wide Alias semantics
    ↓
Product or component CST decisions
    ↓
Component implementation
    ↓
Domain and product composition
```

The central principle is:

> Share the design language and behavioral contracts. Do not require every product to share the same component implementation.

Foundations owns `Core` and `Alias`. A component library or product owns its component-specific tokens (`CST`) and implementation. CSTs reference Alias tokens, never Core values directly.

## Repository map

| File | Purpose |
| --- | --- |
| [`SKILL.md`](SKILL.md) | Lightweight entry point and routing rules for AI-assisted work |
| [`references/architecture.md`](references/architecture.md) | System layers, dependencies, and architectural invariants |
| [`references/token-architecture.md`](references/token-architecture.md) | Core → Alias → CST token contract |
| [`references/surface-model.md`](references/surface-model.md) | Canonical Surface Alias taxonomy |
| [`references/component-contracts.md`](references/component-contracts.md) | Required component contract fields and state rules |
| [`references/multi-product-model.md`](references/multi-product-model.md) | Product autonomy within a shared design language |
| [`references/base-domain-ownership.md`](references/base-domain-ownership.md) | Base, Domain, Pattern, and Product ownership boundaries |
| [`references/governance.md`](references/governance.md) | Ownership, decision, promotion, and registry rules |
| [`references/migration.md`](references/migration.md) | Incremental adoption and legacy retirement |
| [`references/design-to-code.md`](references/design-to-code.md) | Design-to-code contract and hand-off guidance |
| [`references/components/list-item.md`](references/components/list-item.md) | First concrete component contract |
| [`references/open-decisions.md`](references/open-decisions.md) | Unresolved decisions, owners, and decision gates |

## Decision status

- **Accepted** — normative until superseded by a recorded decision.
- **Provisional** — usable for a pilot, but must be validated before broader enforcement.
- **Open** — not decided. Do not invent or silently standardize an answer.
- **Deprecated** — no new usage; migration guidance must exist.
- **Superseded** — replaced by a newer recorded decision.

## How to use this library

1. Start with [`SKILL.md`](SKILL.md) to identify the relevant reference.
2. Treat statements labeled **Accepted** as the current contract.
3. Check [`references/open-decisions.md`](references/open-decisions.md) before filling a gap.
4. Record a local deviation with an owner and reason instead of changing a shared contract implicitly.
5. Propose architectural changes through a dedicated branch and pull request as described in [`CONTRIBUTING.md`](CONTRIBUTING.md).

This repository documents a design and governance model. It does not, by itself, create a runtime service, package manager, or mandatory shared component package.
