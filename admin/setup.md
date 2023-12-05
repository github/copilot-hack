
# Repository structure and preparation

## Repository structure

The repository contains the following key folders:

- [content](../content/): The content to support learners through the workshop.
- [data](../data/): The container for the CSV file the learners will use for the project.
- [possible-solution]: A possible solution for the workshop. Learners can use this to "catch up" or bypass challenges. It's built using Python for the model, Flask for the API, and Svelte for the front end.

## Setting up the repository

The base repository is private for Hubbers to be able to build upon and learn from. To make the repository available for customers:

1. [Create a new repository from the template](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fnew%3Fowner%3Dgithubcustomers%26template_name%3Dcopilot-hack%26template_owner%3Dgithub).
1. Select **GitHubCustomers** as the owner of the new repository, or an organization the customer has access to.
1. Provide a new name for the repository, such as **_customer-name_-copilot-hack**.
1. Set the visibility as **Private** or **Internal**.
1. Create the repository.
1. Delete the [admin](../admin) folder as it's not needed for the event.
1. If needed, grant access to the customer to the repository if it is hosted on **GitHubCustomers**.

> **IMPORTANT**: Do not mark the visibility of the repository as public

## Prebuilding the codespace

Because the container can take several minutes to build, you should [create a prebuild](https://docs.github.com/en/codespaces/prebuilding-your-codespaces) which will allow learners to open the dev environment within seconds.

1. Navigate to **Settings** > **Codespaces**.
1. Select **Set up prebuild**.
1. Select **main** for the branch.
1. Select **Reduce prebuild availability to only specific regions** and ensure the regions appropriate for the customer are selected.
1. Add your handle to the list for **Failure notifications**.
1. Leave default values for the remainder of the settings unless you desire a different configuration.
1. Select **Create**.

The image will be created and cached, and become available for learners for the event.
