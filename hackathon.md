# Exploring GitHub Copilot

[GitHub Copilot](https://github.com/features/copilot) is built and designed to be an AI pair programmer. Based on the context it sees and the code you write it will generate suggestions for the next line, block, function or even class it believes you're writing. It can also answer your questions, and provide bespoke answers for your specific scenario. This allows you to offload tedious tasks, lookup obscure syntax, and generate code from comments, allowing you to stay in the zone and focus on the higher level and more difficult challenges.

This workshop is created to give you the opportunity to explore GitHub Copilot, to see how to use and interact with it while building an application. A loose structure is provided to create a scenario and give you a starting point, with a series of challenges to guide you through various aspects of coding with GitHub Copilot.

## The scenario

You have been provided a [dataset with flight information from the FAA](./data/flights.csv). The dataset contains dates, times and carriers for flights in the US which took place in 2013. You want to build an application which will allow someone to select the day of the week and arrival airport to see the chance their flight will be delayed by more than 15 minutes. You'll do so by walking through the following challenges:

1. Create and export the data and model to support the application
2. Create an API to provide a list of airports and their associated ID in the data, and the model
3. Create a frontend to allow a user to select the day and airport to see the information

## Building the application

The goal of the workshop is to create an application which meets the specifications indicated above - a frontend which allows the user to see the chance their flight will be delayed. You will notice there is limited guidance about how to actually build it. This is intentional, as we want you to explore GitHub Copilot using tools you're familiar with or want to explore. The best way to learn GitHub Copilot, after all, is to start using it.

As a result, you're free to use frameworks and languages of your choosing. If you want to create a backend using Node.js and a frontend with Vue.js, you're welcome to do that! Want a Windows app? A mobile app? To explore the dataset more and discover new insights? Feel free to do so!

## Getting support

With the open-ended nature of the workshop the mentors may not be able to help with every possible path. We've provided a couple of solutions which we would consider "official", and the ones the staff are most familiar with. However, as already stated, the primary goal is to explore GitHub Copilot. If you are attending an event, please don't be afraid to ask all the questions you might have!

## Getting started

Let's get started! Here's the list of challenges to help guide you through the workshop:

0. [Starting the project and installing GitHub Copilot](./content/0-get-started.md)
1. [Create the model and supporting data](./content/1-create-model-data.md)
2. [Create the API](./content/2-create-api.md)
3. [Create the frontend](./content/3-create-frontend.md)
