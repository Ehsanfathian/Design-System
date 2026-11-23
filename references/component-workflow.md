# Component Workflow in Figma

## Status

**Provisional.** This workflow comes from the List Item pilot and can be reused for other components. Architectural rules remain defined by the linked references. Each component supplies its own anatomy, states, token names, mappings, and acceptance criteria.

## Inputs

| Input | What to record |
| --- | --- |
| Ownership and scope | Component classification, design and engineering owners, target products, and a list of the files and objects that may be edited |
| Figma sources | Foundations file, CST destination file, canonical component node, documentation section, and any existing samples |
| Contract | Current reference, accepted decisions, known gaps, and the owner of each open decision |
| Coverage | Supported themes, states, densities or variants, target platforms, and at least one real usage example where available |

Confirm the Figma file that owns the main component by inspecting the node type, parent, and existing bindings. Establish whether any other library or product consumes the assets before migrating a variable, changing its identity, or publishing an update.

## 1. Audit the component and agree on the contract

- Use [component contracts](component-contracts.md) and [ownership boundaries](base-domain-ownership.md) to identify what the component owns and what its container, slots, or consuming product owns.
- Inventory the existing variants and interactions, current variable references, and hardcoded values. Compare them with the agreed contract and distinguish existing behavior from approved changes.
- Resolve naming conflicts before creating tokens. Record open items with an owner, a decision gate, and any provisional behavior. Follow the [open-decisions process](open-decisions.md) for shared decisions.
- Include only axes and combinations the component needs. Use a real consumer to confirm slot behavior, sizing, semantic role, and any state that requires different feedback.

## 2. Prepare Foundations

- Classify each required value using the [token architecture](token-architecture.md). Reuse an existing Alias when it expresses the intended role. A component-specific variant or state belongs in CST.
- Keep raw colors and numbers in Core. Keep domains such as space, size, and opacity meaningful in Alias. Record numerical units and preserve the distinction between a dimension and a unitless ratio.
- For each Alias change, record its direct Core target and expected resolved value in the supported product and theme contexts. Validate contextual color pairs and applicable contrast. Treat missing primitives and new shared roles as decisions with evidence.
- When a component lives in another Figma file, publish the approved Foundations changes and verify that the destination can resolve the published Alias. Preserve the identity of existing published tokens and check dependencies before retiring a primitive. See [migration guidance](migration.md).

## 3. Create or update the component’s CST

- Make the smallest change in the component’s owning library. Reuse its approved CST collection or create an isolated one when the pilot scope calls for it. Limit the first pass to the named component.
- Record the token path, value type, component property, state or variant, Alias target, and scope. Verify that each CST is an actual Alias reference. Resolve an unavailable library dependency before binding instead of substituting a Core reference or copying a literal.
- Give every in-scope CST token a description and platform code syntax. Name the role and property it controls and identify its Alias target. Follow the target repository’s conventions as defined in [design-to-code guidance](design-to-code.md). For the Lantern stack, use lower camel case for Kotlin and a CSS custom-property reference such as `var(--component-role)` for Web code syntax. Add a Tailwind consumption example where it clarifies the intended utility. Treat these as hand-off names until the corresponding code exists.
- Use the same Alias for several CSTs where their roles currently share a value. Add a separate token only when the component needs an independently maintained decision.

## 4. Bind and verify the named Figma component

- Bind the approved CSTs to the matching properties of the identified master and variants. Preserve existing slot identities, default variant, and established interactions unless the component scope explicitly changes them.
- Test the supported states and densities with the actual target product and theme modes. Verify the resolved value through CST and Alias and review visual output. Use representative content for slot, wrapping, state, and layout checks when those behaviors are in scope. Restore temporary mode overrides after validation.
- Check the accessibility behavior that belongs to the contract. For interactive components, include keyboard focus, disabled behavior, and pointer or touch feedback where applicable. Record which checks passed in Figma and which still require product or code validation.
- Document any property Figma cannot bind with the contract’s units or semantics. Record how the Figma representation stays correct, which value code consumes, and who owns any follow-up. Verify the exception visually. The [List Item pilot](https://www.figma.com/design/5WVFftNosYXY3KIkkGhXo4/Lantern-V2?node-id=52274-3691) includes examples for opacity and focus offset.

## 5. Write the native Figma Spec and organize the section

- Use the native Figma Spec feature in the agreed section. Write the component purpose and ownership boundary, anatomy and sizing, supported states and interactions, accessibility, token mapping, platform usage, validation results, and open items.
- Arrange the Spec, master or variant matrix, and any representative sample within the agreed bounds. Keep a sample when it demonstrates real content or behavior the master alone does not show. Label the product, theme, or variant coverage where useful.
- Read back the saved Spec and check its links and placement. Preserve node identities when arranging existing assets and verify the edit scope before handing off.

## Acceptance checks

- [ ] Ownership, edit scope, canonical component, and supported contexts are recorded.
- [ ] Approved component bindings follow Component → CST → Alias → Core.
- [ ] In-scope CST metadata and platform syntax are complete.
- [ ] The supported contexts were checked for reference resolution and appearance. Exceptions and remaining product checks have owners.
- [ ] The native Figma Spec and scoped section link to the current master, dependencies, and representative examples.
- [ ] The hand-off lists what changed, what was verified, and where approval is still required before publication or adoption.

The [List Item contract](components/list-item.md) and [its Figma pilot section](https://www.figma.com/design/5WVFftNosYXY3KIkkGhXo4/Lantern-V2?node-id=52266-147533) show one application of this workflow.
