# Base and Domain Ownership

## Status

**Accepted**

## Mental model

> A Base component does not know the product. A Domain component knows a reusable product concept. A Pattern knows a flow or page context.

| Layer | Recognition test | Example | Owner |
| --- | --- | --- | --- |
| Base | Meaningful without product data or vocabulary | List Item, Button, Text Input | Design System |
| Domain | Models a reusable business or product concept | Asset List Item, Order Status, Balance Item | Domain team |
| Pattern | Coordinates multiple components for a flow or section | Market Movers section, Search result group | Product or pattern owner |
| Feature-specific | Exists for one local use case and lacks reusable evidence | A one-off campaign row | Feature team |

## Classification flow

```text
Feature-specific implementation
    ↓ repeated evidence inside one domain
Domain component
    ↓ repeated evidence across domains with shared anatomy and behavior
Base component
```

Similarity alone is not evidence. Promote only when anatomy, behavior, constraints, and ownership converge.

## Base responsibilities

- Generic anatomy and slots
- Shared interaction behavior
- Shared accessibility behavior
- Generic states
- Container- or content-driven layout contracts
- CST and Alias mapping for the Base implementation

Base must not contain product entities such as Coin, Market, Bank, Wallet, or Order unless the component is explicitly a Domain component.

## Domain responsibilities

- Domain meaning and data anatomy
- Domain content rules and edge cases
- Composition of Base components and primitives
- Domain-specific properties, analytics, and validation
- Local implementation, testing, release, and migration

## Pattern responsibilities

- Cross-component flow and orchestration
- Page or section layout
- Domain sequencing and conditional behavior
- Feature-level loading, empty, error, and permission states

## Admission criteria for a Domain library

A component enters the Domain library only when:

1. It has a named Domain concept.
2. It is reusable beyond one screen or flow.
3. It has an explicit API, states, owner, and content rules.

Otherwise, keep it in the feature or product file until evidence emerges.

## Ownership rule

The Design System team governs shared Foundation and Base contracts but is not the approver for every Domain change. Domain owners are accountable for semantic correctness, implementation, testing, release, and local migration.
