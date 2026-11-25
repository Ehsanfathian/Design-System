# Alias Color

## Status

**Accepted** for the layer boundary and naming model. The intensity vocabulary, registry, and Core assignments remain **Open** under [OD-012 and OD-014](open-decisions.md).

## Ownership

Alias Color is the shared vocabulary for color roles and intensity. Foundations owns this vocabulary and maps it to Core. Consumers choose and pair aliases in their own contracts. An alias must remain understandable when a particular product, consumer, interaction, or theme is absent.

The reference direction is `consumer token → Alias Color → Core Color`. Every Alias Color value is a direct reference to a Core Color variable. Core retains raw color values, product namespaces, and its single mode.

## Naming

Use lowercase, kebab-case path segments in the `Color` group of the `Alias` collection.

| Role | Path | Responsibility |
| --- | --- | --- |
| Background | `Color/<family>/bg/<intensity>` | The color underneath foreground content in an element. |
| Foreground | `Color/<family>/fg/<intensity>` | The color of visible content, such as text and glyphs. |
| Stroke | `Color/<family>/stroke/<intensity>` | A boundary color when the role has a reusable intensity scale of its own. |
| Surface | `Color/surface/<intensity>` | A host surface on which elements can be placed. See the [Surface model](surface-model.md). |

A family expresses reusable color meaning, such as `brand` or `neutral`. It keeps that meaning across products. The role determines which kind of visual property the color is for. The intensity is a descriptive adjective from the approved scale for that family and role. Illustrative paths include `Color/brand/bg/strong` and `Color/neutral/fg/bright`. These examples do not establish a scale or a Core assignment.

Product and theme names belong to Mode metadata. Surrounding-surface choices and interaction states belong to the consuming contract. For example, `on-default-surface`, `on-light`, `on-dark`, and `hover` are outside the new Alias Color grammar. A usable light or dark tonal value within a role is independent of the name or presence of a theme.

## Intensity contract

For each family and role, record the visual quality that intensity describes, the ordered adjectives, and the rule used to check that order. Use one axis for the scale. For an opaque tonal scale, the axis can be the lightness or depth of the color. For a translucent scale, document the axis and reference conditions before adding entries. If two properties need to vary independently, a single intensity word cannot represent both.

A level must retain its definition and position in the scale in every supported Mode. Different Core values may satisfy the same level. A family only needs levels with a distinct, reusable purpose. Equal values in one Mode can be acceptable when the levels have different meanings and usable mappings elsewhere. Record any resulting loss of a visual distinction.

Evaluate contrast on resolved color pairs. For translucent colors, composite the color over its intended backdrop before evaluating the pair. Record pair guidance and verification separately from token names. A background intensity and a foreground intensity with similar names do not form a guaranteed accessible pair.

## Modes and Core mappings

The current Foundations V3 collection contains Lantern, Karat, and Prime in Light and Dark. Each alias resolves to one Core color for every supported Mode. The product namespace in Core supplies the raw values for that product. A product that supports only a light theme can implement the same vocabulary with its supported Modes. A light Mode may still include tonal values suitable for use in a dark composition.

Keep separate records for the semantic vocabulary and the Mode inventory. Changes to the current Mode set follow [OD-013](open-decisions.md). Exact Core assignments and reference-pair contrast stay in [OD-012](open-decisions.md).

## Adding or revising an alias

Record the following before taking a proposed alias into the published vocabulary.

1. The family, visual role, and intensity definition.
2. Its position in the role's scale and how to verify that position.
3. Its direct Core reference in every supported Mode.
4. The contrast guidance for representative pairs, when legibility depends on the color.
5. Whether an existing alias is a semantic match and which published paths or keys would be affected.

## Compatibility

Published names remain available as compatibility vocabulary until the replacement mapping and affected references are reviewed. Existing Surface role paths have the compatibility treatment described in the [Surface model](surface-model.md). Keep the new vocabulary separate from rollout and retirement decisions. [OD-015](open-decisions.md) tracks the compatibility mapping and retirement gate.
