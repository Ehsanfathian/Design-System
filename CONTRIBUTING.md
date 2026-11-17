# Contributing

This library is maintained as an architectural source of truth. Changes should make ownership and consequences clearer, not merely add more rules.

## Contribution workflow

1. Create a dedicated branch. Do not commit architectural changes directly to `main`.
2. Identify whether the change is a clarification, a new accepted decision, a provisional pilot rule, a deprecation, or an open decision.
3. Update the smallest relevant reference. Keep `SKILL.md` concise and use it only for routing and non-negotiable invariants.
4. Update affected component contracts and cross-links.
5. If the decision is unresolved, add or update an item in `references/open-decisions.md`; do not present a preferred option as accepted.
6. Open a pull request with the owner and affected consumers identified.

## Required pull-request context

- Problem and affected products or domains
- Current decision status
- Proposed owner
- Token and dependency-layer impact
- Design and code impact
- Accessibility and interaction impact
- Migration or backward-compatibility impact
- Known local deviations
- Open questions and the gate at which they must be resolved

## Change rules

- Do not make Alias tokens component-specific.
- Do not let CST reference Core directly.
- Do not add a Base component because two screens look similar; show shared anatomy and behavior.
- Do not move a Domain component into a shared runtime package without satisfying the promotion criteria in `references/governance.md`.
- Do not remove a deprecated contract until remaining usage is zero or an explicitly approved exception exists.
- Do not invent dates, adoption targets, package topology, or implementation details when evidence is missing.

## Documentation style

- Use English for normative documentation and preserve established token names verbatim.
- Label decisions as **Accepted**, **Provisional**, **Open**, **Deprecated**, or **Superseded**.
- Use examples to clarify a rule, not to create a universal requirement from one product case.
- Keep one canonical definition and link to it instead of copying it across references.
