# Governance

## Status

**Accepted**, except items explicitly listed as Open.

## Governance model

Use federated ownership with a small set of shared architectural constraints. Governance should prevent hidden coupling and semantic drift without turning the Design System team into a delivery bottleneck.

## Roles

| Role | Responsibility |
| --- | --- |
| Foundations or Design System owner | Core, Alias, general component contracts, accessibility, and registry governance |
| Engineering owner | Dependency review, tooling, enforcement, and shared-package decisions |
| Domain owner | Domain semantics, implementation, tests, release, and migration |
| Product team | Local CST, implementation, documented deviations, and consumer feedback |
| Frontend chapter | Linting, codemods, long-tail migration support, and implementation conventions |

## Component registry

Each contract and implementation should record:

- Component ID, domain, and purpose
- Owner and repository or design-file link
- Origin and fork date when cloned
- Reference version
- Local deviations and known limitations
- Consumers
- Lifecycle status

A migration record should add replacement, remaining usage, migration mode, automation, owner, deadline when needed, and removal condition.

## Reuse decision

For a new need:

1. Search the registry and review existing problem statements, contracts, examples, and limitations.
2. Choose **Reuse** when an existing implementation fits without unwanted coupling.
3. Choose **Clone and Own** when the contract is useful but independent change and release are required.
4. Choose **Build New** when existing solutions do not fit; record the Domain or technical reason.
5. Feed general interaction and accessibility improvements back into the shared contract.

## Promotion to a shared package

All of the following evidence is required:

- Multiple real consumers need the same implementation.
- The API has remained stable through multiple change cycles.
- Variation is limited and can be configured without Domain leakage.
- A maintainer and migration path are explicit.
- Shared maintenance has lower total cost than release and dependency coupling.

Promotion may extract only a stable utility or interaction layer rather than the full feature.

## Change classes

- **Contract clarification** — no semantic or API change.
- **Compatible extension** — new optional capability without redefining existing meaning.
- **Breaking contract change** — state, anatomy, accessibility, token, or API meaning changes; requires impact review and migration guidance.
- **Local deviation** — product-owned difference that preserves shared invariants and is recorded in the registry.
- **Deprecation** — no new usage, named replacement, owner, and removal condition.

## Open governance decisions

Registry tooling, enforcement mechanism, active-migration trigger, and shared-package approval process remain open. See [`open-decisions.md`](open-decisions.md).
