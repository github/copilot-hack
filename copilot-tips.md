# Getting the most out of GitHub Copilot

GitHub Copilot is a generative AI tool which will create code suggestions based both on the context it sees and its training data. Due to its probabilistic nature, there isn't a set way to use the tool. You'll discover new ways to interact with it to best guide it towards what you're looking for.

Notice the name is *Copilot* rather than Autopilot. A developer is necessary, and the tool isn't able to complete every task a human can. There are certain tasks where GitHub Copilot shines, and others it's not able to complete or needs more assistance for.

- Boilerplate code
- Repetitive code
- Unit tests
- Obscure syntax like regular expressions or chron jobs

## Guiding GitHub Copilot

Consider the following analogy. You ask a stranger, "Bring me some ice cream." While there's enough information provided to technically complete the task successfully, there's a strong chance you won't be satisfied with the results. There's more context which is needed to ensure you get what you want, like what flavor? Serving vessel? Sprinkles? These are important. (And the answer is always sprinkles.)

The same holds true with GitHub Copilot. A blank page with a 5 word comment likely won't illicit a code suggestion which meets the specifications you had in mind. You can help set GitHub Copilot up for success by giving it good context and background about what you're building.

## Starting on the right foot

Every developer is familiar with the importance of comment documentation to help developers who'll later support the code (or when you return to it in the future). This holds true with GitHub Copilot as well. As highlighted above, providing GitHub Copilot with a clear idea of what you're trying to accomplish, and how you're trying to do it, will drive better suggestions. Starting a new file (or updating an existing one) with a few sentences describing the tasks at hand will payoff in the long run. You might want to include:

- the frameworks you're using
- a brief description of what needs to be done
- examples of the data you'll be with or actions you need to perform
- any additional supporting context

For example, let's say I'm creating a set of views using [Django](https://www.djangoproject.com/) for talks for a conference. I might start the file with the following comment block (or maybe as a [docstring](https://peps.python.org/pep-0257/)):

```python
# Using Django
# Using the generic views, display all talks, all talks by track, and all talks by speaker
# Preload all data whenever possible
# Readonly, no edit views are needed
```

## Coding for success

GitHub Copilot understands natural language and code. Just as it will read comments and make inferences when generating code, it will read your code and do the same. As a result, it's important to be clear when naming items in code.

It is common for developers to use single-letter variables (`x`, `i`, etc.), or use abbreviations (`spkr_count`, `tlk_ttl`, etc.). When using GitHub Copilot, it's generally best to spell things out and give items clear names. This helps provide clear context and will improve the quality of suggestions. (It's also just a better coding practice.)

## Defining context

GitHub Copilot uses both the file you're currently working on and the tabs open in your IDE as context. While there are a couple of reasons GitHub Copilot uses open tabs rather than the project structure, the biggest is because it's most likely to be the relevant context. If you think about how you code you likely naturally open files related to the task you're currently focused on. GitHub Copilot is built this same way.

You can use this functionality to better guide GitHub Copilot towards what you're looking to code and how you're looking to do it. If you have a representative example of a framework you're using, a data model, or an API, you can open that tab for use by GitHub Copilot.

GitHub Copilot will also look at the entirety of the file you're currently working on, not just what's above your cursor. This means you can introduce new code into the middle of a file with GitHub Copilot's support.

## Quick tips

Here's some quick, actionable tips you can use to help get the most out of GitHub Copilot:

- Add a header to the top of a file with a short description of what you're building and how you're building it
- Write short but specific requests when using comment driven development
- Be flexible with your wording, realizing you might need to rephrase or reframe to get a better response
- Because GitHub Copilot is probabilistic, you may notice you receive different responses to the same prompt; this is the nature of generative AI
- Good variable, function and class names help provide additional context and drive better suggestions (and it's a good practice anyway)
- Model the coding style you want to see from GitHub Copilot, as its suggestions are based on the practices it sees in action

## Resources

- [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
