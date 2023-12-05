# Administering the GitHub Copilot hack workshop

To help onboard customers with GitHub Copilot we created this hackathon-style workshop. The goal is to allow developers to gain hands-on experience with GitHub Copilot by creating an application using the technologies and languages they would normally use in their day job. This guide will help you get everything setup for both the customer and mentorship teams.

> **IMPORTANT**: Please go through this entire guide in preparing to deliver an event. Ping @GeekTrainer with any questions.

## Running a workshop

> - [Setup](./setup.md)
> - [Workshop flow](./workshop-flow.md)

## Background

Because GitHub Copilot is a coding tool, we wanted to provide a scenario which resembles "real world" as best as can be done in a workshop. We identified the following criteria:

- A set of challenges which can be completed within a few hours.
- A challenge flexible enough to allow for multiple languages to be available for learners to use.
- Something which has enough substance for learners to build, explore, and use real-world techniques and strategies.

To support this style, we've created a workshop in the style of a hackathon. Learners are given a set of [challenges](./content/) based around a [dataset with US flight information](../data/). The "green path" involves learners creating a model to predict the chance a flight will be delayed more than 15 minutes based on the day of the week and the destination, export the model and a list of airports to expose as an API, and a frontend for users to access the mode.

Learners are given the freedom to solve them how they see fit. While [solutions](./possible-solution/) are provided, there isn't a single "right answer." Each challenge puts forth a core requirement to be completed before moving to the next one, with suggestions on possible side quests they could pursue if they wish to dig further into a particular area.

## Requirements

To run the workshop, a customer will need to have access to GitHub Copilot and a development environment.

### GitHub Copilot

Given that the workshop is built to allow developers to gain experience with GitHub Copilot, they will need to have access to GitHub Copilot. Specifically, they'll need access to code completion and chat. Other workloads are nice to have, but not required to successfully complete the workshop.

### Development environment

Developers will also need an environment in which to code. To streamline the process, [a dev container](https://code.visualstudio.com/docs/devcontainers/containers) has been [built](./.devcontainer) which includes Anaconda, Postgres, Node.js and .NET. Learners are of course free to install any additional languages, frameworks and services they desire. If they are using Visual Studio Code (local or in-browser), it will also automatically install the extensions for GitHub Copilot and GitHub Copilot Chat.
