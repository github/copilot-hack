# Expose data through an API

In the prior exercise you created a model to predict the likelihood a flight will be delayed into an airport by more than 15 minutes on a given day of the week. Now it's time to expose both this model and the associated list of airports so you can create the front-end application.

## Defining success

You will have successfully completed the challenge after:

- creating an endpoint to accept the id of the day of week and airport, which calls the model and returns both the chances the flight will be delayed and the confidence percent of the prediction.
- creating an endpoint which returns the list of airport names and IDs, sorted in alphabetical order.
- all data is returned as JSON.

## Tips

While you may find [Flask](https://flask.palletsprojects.com/en/2.3.x/) and [FastAPI](https://fastapi.tiangolo.com/) best suited for the task, you can use the framework you feel most comfortable with.

> **NOTE:** When using [GitHub Codespaces](https://docs.github.com/codespaces/overview) you are able to connect to a web server running in the cloud-based container. If you receive a 404 error, you may need to update [devcontainer.json](../.devcontainer/devcontainer.json) to add a [forwarded port](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#automatically-forwarding-a-port-1).

### Jump start

To get started with this challenge:

1. Create a new folder named **server**, and the file you'll use to be the server.
2. Start the file by adding in a couple of lines of comment describing what you're looking to accomplish.

## Sparking imagination

There's a few directions you could go to build upon the solution you've created. You could add a [Swagger](https://swagger.io/) implementation. You could implement caching to improve performance. You could add unit tests for the APIs. If you created additional models or data manipulations, you can expose those as well.

## Next steps

The primary goal of this exercise is to provide the opportunity to explore how GitHub Copilot works with a framework, and how you can help provide context by adding descriptive text at the beginning of the file. Now it's time to finish out the application by [creating the frontend](./3-create-frontend.md)!
