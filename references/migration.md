# Migration

## Status

**Accepted**

Migration is incremental. Do not require a feature freeze or a big-bang rewrite.

## Migration sequence

```text
Inventory → Classify → Copy → Refactor → Publish → Migrate → Deprecate → Remove
```

Do not use Cut and Paste as the default migration strategy. It can obscure dependencies, break instances, and transfer ownership before the new contract is proven.

## Phase 1: Inventory and registry

- Classify existing components as Base, Domain, Pattern, Product-specific, or Legacy.
- Record owner, origin, consumers, known limitations, and usage locations.
- Create the initial usage map.
- Avoid building heavy tooling before the workflow is validated.

## Phase 2: Pilot workflow

- Choose one real Domain and named design and engineering owners.
- Define or clean the Base contract only where shared anatomy and behavior are proven.
- Create a canonical Domain component using Base capabilities and shared Alias semantics.
- Execute one real Reuse, Clone and Own, or Build New decision and record the reason.
- Capture process and tooling gaps.

## Phase 3: Migration control

Use this lifecycle:

1. **Replacement ready** — critical use cases, accessibility, migration guidance, and rollback path are covered.
2. **No new legacy** — new usage is warned, then blocked after false positives are resolved.
3. **Touch to migrate** — migrate deprecated usage inside the scope of ordinary changes.
4. **Scoped exception** — if migration is disproportionate, record an owner and follow-up task without blocking the feature indefinitely.
5. **Active migration** — assign the long tail an owner, automation where appropriate, and a removal condition.
6. **Removal** — remove the dependency or asset after usage reaches zero.

## Rollback

If enforcement disrupts delivery because of false positives, return the rule from Block to Warning while preserving registry and migration state. This architecture does not require a user-data rollback because it introduces no operational data migration by itself.

## Success measures

- No new legacy usage after deprecation enforcement
- Every active migration has a replacement, owner, status, and removal condition
- Every registered implementation has an owner
- Local clones preserve origin and deviation metadata
- Pilot feedback shows that the workflow is usable by both designers and developers

Quantitative adoption targets should be set after pilot baseline data exists.
