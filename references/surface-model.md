# Surface Model

## Status

**Accepted** for the host-surface boundary and the intensity-based naming model. The selected Surface levels and Core assignments are [recorded for review](alias-color-mapping.md). Previously accepted role names remain supported during compatibility review.

## Host surfaces

A Surface hosts elements within a composition. A Background sits behind the foreground content of an element. A composition may contain both. For example, a transparent element background leaves its foreground in visual contact with the host surface. Check that pair on the resolved host color.

Use `Color/surface/<intensity>` for the new Surface vocabulary. The intensity selects an existing level from the shared Alias Color scale. Surface exposes only the levels it needs. The consuming contract decides which level to use for the page, card, recessed area, or other part of the composition. A surface level can resolve to different Core colors by Mode while keeping its defined position in the scale. The [Alias Color contract](alias-color.md) defines the scale and mapping requirements.

## Compatibility vocabulary

The following paths describe the previous role-based model. Their current meanings remain available to existing references during migration.

| Path | Existing meaning |
| --- | --- |
| `surface/base` | Base surface of the current context |
| `surface/raised` | Surface one level above its surroundings |
| `surface/sunken` | Recessed or inset surface relative to its surroundings |
| `surface/floating` | Independent floating surface |
| `surface/inverse` | Contrast reversed relative to the current theme |
| `surface/fixed/light` | The same light polarity across themes |
| `surface/fixed/dark` | The same dark polarity across themes |

The previous `inverse` role changes polarity with theme. The previous `fixed` roles keep their polarity. Review each case against the new scale and its Mode values before replacing a published reference. A legacy role may require different levels in different consumers. A replacement needs a confirmed mapping and compatibility review under [OD-015](open-decisions.md).
