# Workshop flow

The workshop is built to take roughly a day. Learners may move through the core challenges relatively quickly, but are encouraged to take the time to explore side quests, creating additional features.

## Suggested schedule

The workshop is built in a way which it could be completely self-guided. However, regular touch points should be scheduled to ensure learners are actively engaged. This can be done by using the schedule below, and potential solutions can be presented by Hubbers or fellow learners.

Attention should be paid to ensure learners know mentors are available to answer their questions. If the event is IRL, mentors should walk around the room. For virtual events, a periodic message in the discussion channel can help spark conversation.

| Time          | Content                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 08:00 - 09:00 | Welcome and [GitHub Copilot overview presentation](https://docs.google.com/presentation/d/1eoH-BNhqopnl9IcwZpvH6bwLIw5V4lGK9EXN2396Ubk/edit?usp=sharing)                                                                                                 |
| 09:00 - 11:00 | Learners hack, getting their environments setup and working through the challenges                                                                                   |
| 11:00 - 11:30 | Present a possible solution for creating and exporting the model, and tips about getting support from GitHub Copilot                                                 |
| 11:30 - 12:30 | Lunch                                                                                                                                                                |
| 12:30 - 2:00  | Learners hack, working on the second challenge of creating the API                                                                                                   |
| 2:00 - 2:30   | Present a possible solution for creating the API, and tips about getting support from GitHub Copilot                                                                 |
| 2:30 - 4:30   | Learners hack, working on the third challenge, creating the frontend                                                                                                 |
| 4:30 - 5:00   | Present a possible solution for creating the frontend, and close with best practices for using GitHub Copilot, and a CTA to install the extension and begin using it |

## Mentor preparation

Mentors are expected to be able to support learners as they explore the challenges and build their solutions. Learners are allowed to use the languages and frameworks they desire, and are encouraged to follow their imagination. They will also have questions about GitHub Copilot, use cases, and about how to best use the tooling. While you do not need to be an expert in every possible approach, the following steps will help prepare you for supporting the event:

1. Complete the [workshop](../content/0-get-started.md) on your own, using the approach which feels most comfortable for you based on your experience. If you like your solution, you can create a PR to include it as a model for learners.
1. Explore [best practices for prompt crafting](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/).
1. Be ready for the most common questions you will receive from attendees:

    - Does GitHub Copilot use my code to retrain the model? (No, the round-trip of context and suggestions is ephemeral, with no information stored.)
    - Does GitHub Copilot read my entire project? (No, it uses the tabs open in your IDE, starting with the ones closest to the file you are currently working on.)
