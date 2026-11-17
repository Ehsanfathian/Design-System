# Component Contracts

## Status

**Accepted**

A component contract separates stable meaning and behavior from a specific implementation. It enables reuse, local ownership, and comparison between implementations without requiring one runtime package.

## Required contract fields

| Field | Purpose |
| --- | --- |
| Component ID, domain, and purpose | Identity, problem boundary, and intended context |
| Owner and status | Accountability and lifecycle |
| Anatomy and slots | Named structural regions and their responsibility |
| Properties and variants | Public configuration with semantic names |
| States | Supported state meanings and allowed combinations |
| Interaction rules | Pointer, keyboard, touch, focus, and selection behavior |
| Accessibility rules | Roles, labels, focus order, contrast, and assistive-technology behavior |
| CST mapping | Component decisions mapped to Alias tokens |
| Layout constraints | Hug, Fill, container-driven sizing, min/max rules, and composition limits |
| Content rules | Required, optional, fallback, truncation, and localization behavior |
| Known edge cases | Empty, loading, error, disabled, offline, overflow, and exceptional combinations |
| Analytics contract | Only when the Domain requires event semantics |
| Origin and local deviations | Traceability across implementations |
| Design and code links | Canonical sources and implementation references |

## Contract-first test

Before adding a variant or abstraction, answer:

```text
Owner
Constraint
Allowed
Not allowed
Fallback
State combinations
Edge cases
Accessibility impact
Migration impact
```

If those answers are unclear, the implementation may be exploratory and should not yet become a shared Base contract.

## Slot rules

- A slot defines responsibility and layout behavior, not a catalog of every object that may appear inside it.
- Use instance or composition boundaries for Domain content instead of teaching a Base component about Domain entities.
- Prefer one composed child inside a slot when multiple independent children would force the Base component to manage Domain anatomy.
- Do not tokenize slot width or size when content-driven layout is the contract.

## State rules

- `Pressed`, `Selected`, and `Focused` are distinct meanings.
- Focus is an input/navigation state and may coexist with selection.
- A focus indicator is semantically separate from a component's base border even when the visual implementation temporarily reuses or replaces that border.
- Do not add a state solely for completeness. Add it when behavior, accessibility, or visual feedback requires it.
- Loading ownership must be explicit: a Base contract may require the state without owning the skeleton or placeholder implementation.

## Implementation independence

Two implementations can conform to the same contract while differing in composition, visual expression, density, and release cadence. Conformance is judged against shared semantics, behavior, and accessibility—not pixel identity.
