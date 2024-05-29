# Getting started with GitHub Copilot

[GitHub Copilot](https://github.com/features/copilot) is a generative AI pair programmer. As you code, context including open files in the IDE, comments and code are sent to GitHub Copilot. Suggestions are then returned based on what it sees and what it knows for the next line or lines of code you're most likely looking for. To do so an extension is needed for your IDE.

Let's start this workshop by launching the project using [GitHub Codespaces](https://github.com/features/codespaces), a cloud-based container for development, and installing the extension.

## Create and start the project

To start creating code you'll of course need to get the code. This repository is setup as a template with a [devcontainer](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) already defined. Let's create an instance of the repository in the appropriate organization or individual account, and start the codespace.

1. Navigate to the [root of the repository on GitHub](../).
2. Select **Use this template** > **Create a new repository**.
3. Enter the appropriate information to configure the name and location of the repository. If a specific organization has been defined for your event, use that as the **owner**. (If you're unsure, ask a mentor).
4. Select **Create repository** to create the repository.
5. Once the repository is created, open it in GitHub Codespaces by selecting **Code** > **Codespaces** > **Create a codespace on main** (indicated by the **+**).
6. The codespace may take a few minutes to setup the first time. It contains everything needed for the workshop, including Python/Anaconda and Node.js. It doesn't yet contain the extension for GitHub Copilot, which you'll install next.

## Install the extension

GitHub Copilot has extensions for Visual Studio, Visual Studio Code, NeoVIM and the JetBrains suite of IDEs. Because the browser-based version of Visual Studio Code for Codespaces is, well, Visual Studio Code, you can install the extension!

1. Open the command pallette by pressing <kbd>F1</kbd>.
2. In the command pallette window, type **Install extensions**.
3. Select **Extensions: Install extensions**.
4. Type **GitHub Copilot** in the newly opened extensions window.
5. Select **Install** on **GitHub Copilot** to install the extension.
6. If prompted, reconnect to the codespace.

## Next steps

You've now got the development environment created and started! You're all set and ready to start writing code. So, let's [begin working with the dataset](./1-create-model-data.md).
