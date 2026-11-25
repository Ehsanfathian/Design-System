# Open Decisions

This registry prevents unresolved choices from becoming accidental policy. Owners are roles, not invented people. Gates describe when a decision is required; dates should be added only through planning.

| ID | Decision | Owner | Decision gate | Status |
| --- | --- | --- | --- | --- |
| OD-001 | Which tool stores the component and implementation registry? | Design System + Engineering | Before Registry pilot is operational | Open |
| OD-002 | Is no-new-legacy enforcement manual review, linting, or a staged combination? | Frontend Chapter | Before Migration Control moves from Warning to Block | Open |
| OD-003 | What evidence triggers Active Migration for the long tail? | Engineering owner | After pilot baseline exists | Open |
| OD-004 | What approval process governs promotion to a shared runtime package? | CTO or relevant Tech Lead | Before the first promotion | Open |
| OD-005 | What is the List Item Pressed visual treatment, and is a distinct Pressed state needed? | List Item design owner | Before the List Item pilot contract is frozen | Open |
| OD-006 | Does persistent Selected belong in the Base List Item or only in specific Domain contracts? | Design System + pilot Domain | Before adding Selected variants or CST | Open |
| OD-007 | What token source format, build pipeline, and generated package topology will code use? | Engineering owner | Before design-to-code automation | Open |
| OD-008 | How are product overrides resolved, and where is the boundary between theme and product mode? | Design System + Engineering | Before the second product implementation | Open |
| OD-009 | How is the CST API versioned and how are breaking changes propagated? | Design System + Engineering | Before the first breaking CST change | Open |
| OD-010 | What automated validation links design variables, code tokens, and component properties? | Frontend Chapter + Design System | Before enforcement at scale | Open |
| OD-011 | What quantitative adoption and migration targets are realistic? | Pilot owners | After Inventory and pilot baseline | Open |
| OD-012 | Which [six-Mode Core mappings](alias-color-mapping.md) and contrast pairs are approved, including the open Prime Success gap? | Design System | Before accepting Alias Color mode mappings | Open |
| OD-013 | What approval and migration process governs adding, renaming, or removing an Alias Color product mode? | Design System + affected product owners | Before changing the current Alias Color mode set | Open |
| OD-014 | Which intensity levels and ordering criteria apply to strokes and translucent color roles beyond the recorded opaque Bg, Fg, and Surface scale? | Design System | Before mapping the remaining stroke and translucent color roles | Open |
| OD-015 | Which published Alias Color paths and keys require compatibility, and what evidence allows each legacy alias to be retired? | Design System + affected library owners | Before renaming, hiding, or removing a published legacy alias | Open |

## Resolution format

When resolving an item, record:

- Decision and status
- Date and decision owner
- Evidence and alternatives considered
- Affected references and implementations
- Compatibility and migration impact
- Replacement decision ID if later superseded
