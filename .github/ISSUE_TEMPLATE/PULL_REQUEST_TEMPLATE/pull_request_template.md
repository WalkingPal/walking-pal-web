name: ↗️ PULL REQUEST
description: Report an issue to help improve the project.
title: "bug: <description>"
labels: ["bug", "hacktoberfest"]
body:

- type: textarea
  id: description
  attributes:
  label: Description
  description:
  Write a brief description of the question or issue, also include what you tried and what didn't work. _Please add screenshots if applicable along with_ **_steps to reproduce the issue and reference links (if applicable)_**. If you need help or if you want to to discuss something with us, join the WalkingPal [Discord community](https://discord.gg/Et3aQTsW6a)!  
   You can assign this issue to yourself if you want to work on it.
  validations:
  required: true
- type: checkboxes
  id: terms
  attributes:
  label: "Have you read the Guidelines to create a new Issue?"
  options: - label: I have read and I am following [the guidelines for creating a new issue](https://github.com/WalkingPal/walking-pal-web/blob/dev/.docs/CONTRIBUTING.md#make-sure-to-follow-these-when-opening-issues)
  required: true
