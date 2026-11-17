# Surface Model

## Status

**Accepted**

Surface Alias tokens describe a visual semantic role in the current context. They do not describe a component or interaction state.

## Canonical taxonomy

| Alias | Meaning |
| --- | --- |
| `surface/base` | Base surface of the current context |
| `surface/raised` | Surface one level above the base context |
| `surface/sunken` | Recessed or inset surface relative to its environment |
| `surface/floating` | Independent floating surface such as a popover or dropdown |
| `surface/inverse` | Contrast reversed relative to the current theme |
| `surface/fixed/light` | Always light, independent of the current theme |
| `surface/fixed/dark` | Always dark, independent of the current theme |

## Inverse versus fixed

```text
surface/inverse
Light mode → dark surface
Dark mode  → light surface

surface/fixed/light
Light mode → light surface
Dark mode  → light surface

surface/fixed/dark
Light mode → dark surface
Dark mode  → dark surface
```

## State boundary

Do not create system-wide Alias tokens such as:

```text
surface/hover
surface/pressed
surface/selected
surface/disabled
```

These names mix component state with reusable visual meaning. The component CST chooses which Surface Alias a state consumes:

```text
list-item/filled/bg/hover
    → surface/sunken
```

This preserves the separation:

```text
CST   = component behavior and decision
Alias = reusable visual semantic role
Core  = raw value
```

## Open implementation choices

The exact Core value for each Surface Alias may differ by theme or product and must be validated for contrast. The taxonomy is accepted; specific theme values and elevation mechanics remain implementation decisions unless recorded separately.
