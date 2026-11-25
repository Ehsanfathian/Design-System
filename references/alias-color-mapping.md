# Alias Color Core Mapping

## Status

**Proposed for review.** This table records the opaque Background, Foreground, and Surface candidates for all six Foundations V3 Modes. The [Alias Color contract](alias-color.md) defines their intensity bands. The table uses existing Core variables.

## Reading the table

Each cell expands to `Colors/<product>/<family>/solid/<step>`. For example, `brand/010` in Lantern means `Colors/lantern/brand/solid/010`. A `white` or `black` cell expands to `Colors/<product>/static/<white-or-black>/solid`. The product is taken from the column. Within each product, the Light and Dark columns currently select the same reference Core. Alias intensity has the same meaning in both Modes.

## Bg

| Alias | Lantern / Light | Lantern / Dark | Karat / Light | Karat / Dark | Prime / Light | Prime / Dark |
| --- | --- | --- | --- | --- | --- | --- |
| `bg/brand/light` | `brand/010` | `brand/010` | `brand/050` | `brand/050` | `brand/050` | `brand/050` |
| `bg/brand/mid` | `brand/060` | `brand/060` | `brand/110` | `brand/110` | `brand/110` | `brand/110` |
| `bg/brand/deep` | `brand/100` | `brand/100` | `brand/140` | `brand/140` | `brand/140` | `brand/140` |
| `bg/neutral/lightest` | `white` | `white` | `white` | `white` | `white` | `white` |
| `bg/neutral/light` | `neutral/040` | `neutral/040` | `neutral/030` | `neutral/030` | `neutral/030` | `neutral/030` |
| `bg/neutral/mid` | `neutral/090` | `neutral/090` | `neutral/080` | `neutral/080` | `neutral/080` | `neutral/080` |
| `bg/neutral/deep` | `neutral/120` | `neutral/120` | `neutral/100` | `neutral/100` | `neutral/100` | `neutral/100` |
| `bg/neutral/deepest` | `black` | `black` | `black` | `black` | `black` | `black` |
| `bg/error/light` | `red/020` | `red/020` | `red/020` | `red/020` | `red/020` | `red/020` |
| `bg/error/mid` | `red/080` | `red/080` | `red/090` | `red/090` | `red/090` | `red/090` |
| `bg/error/deep` | `red/120` | `red/120` | `red/140` | `red/140` | `red/140` | `red/140` |
| `bg/success/light` | `green/100` | `green/100` | `green/040` | `green/040` | `green/110` | `green/110` |
| `bg/success/mid` | `green/120` | `green/120` | `green/110` | `green/110` | `green/160` | `green/160` |
| `bg/success/deep` | `green/140` | `green/140` | `green/130` | `green/130` | `green/170` | `green/170` |
| `bg/warning/light` | `yellow/050` | `yellow/050` | `yellow/060` | `yellow/060` | `yellow/060` | `yellow/060` |
| `bg/warning/mid` | `yellow/110` | `yellow/110` | `yellow/130` | `yellow/130` | `yellow/130` | `yellow/130` |
| `bg/warning/deep` | `yellow/130` | `yellow/130` | `yellow/150` | `yellow/150` | `yellow/150` | `yellow/150` |

## Fg

| Alias | Lantern / Light | Lantern / Dark | Karat / Light | Karat / Dark | Prime / Light | Prime / Dark |
| --- | --- | --- | --- | --- | --- | --- |
| `fg/brand/lightest` | `brand/000` | `brand/000` | `brand/000` | `brand/000` | `brand/000` | `brand/000` |
| `fg/brand/deep` | `brand/110` | `brand/110` | `brand/140` | `brand/140` | `brand/140` | `brand/140` |
| `fg/neutral/lightest` | `white` | `white` | `white` | `white` | `white` | `white` |
| `fg/neutral/deepest` | `black` | `black` | `black` | `black` | `black` | `black` |
| `fg/error/lightest` | `red/000` | `red/000` | `red/000` | `red/000` | `red/000` | `red/000` |
| `fg/error/deep` | `red/120` | `red/120` | `red/140` | `red/140` | `red/140` | `red/140` |
| `fg/success/lightest` | `green/010` | `green/010` | `green/000` | `green/000` | `green/010` | `green/010` |
| `fg/success/deep` | `green/140` | `green/140` | `green/140` | `green/140` | `green/170` | `green/170` |
| `fg/warning/lightest` | `yellow/000` | `yellow/000` | `yellow/010` | `yellow/010` | `yellow/010` | `yellow/010` |
| `fg/warning/deep` | `yellow/130` | `yellow/130` | `yellow/150` | `yellow/150` | `yellow/150` | `yellow/150` |

## Surface

| Alias | Lantern / Light | Lantern / Dark | Karat / Light | Karat / Dark | Prime / Light | Prime / Dark |
| --- | --- | --- | --- | --- | --- | --- |
| `surface/lightest` | `white` | `white` | `white` | `white` | `white` | `white` |
| `surface/light` | `neutral/020` | `neutral/020` | `neutral/020` | `neutral/020` | `neutral/020` | `neutral/020` |
| `surface/deep` | `neutral/170` | `neutral/170` | `neutral/170` | `neutral/170` | `neutral/170` | `neutral/170` |
| `surface/deepest` | `black` | `black` | `black` | `black` | `black` | `black` |

## Pair checks

Pair examples were calculated from the [Foundations V3 Core colors](https://www.figma.com/design/ah6hM6Cfj71lLpIuzNQbUa/Foundations-V3). Using black neutral foreground on `lightest`, `light`, and `mid` backgrounds and white neutral foreground on `deep` and `deepest` backgrounds gave a minimum of **4.75:1** across this table. These checks establish representative readable combinations. Evaluate other pairings separately using the [WCAG 2.2 minimum contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## Open issue for Prime Success

This issue is tracked in [OD-012](open-decisions.md). Both Prime Modes resolve `fg/success/deep` to `Colors/prime/green/solid/170`. It reaches **4.75:1** on `surface/lightest` and **3.74:1** on `surface/light`. In the same Modes, `fg/success/lightest` on `bg/success/deep` reaches **4.42:1**. `fg/neutral/lightest` on that background reaches **4.75:1**.

The current Core ramp needs a darker green if the contract requires a green foreground to meet **4.5:1** on both light Surface levels. Leave that mapping open for review. The neutral foreground pairing for the deep Success background is available with the current Core.
