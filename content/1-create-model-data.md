# Working with a dataset and machine learning

The scenario for this workshop revolves around a [dataset from the FAA](../data/flights.csv) which contains core information about flights in the US in 2013. It contains the carrier, the date and time the flights took off and arrived (and their origin and destination), and information about delays including both the time and a flag if it was more than 15 minutes. For this scenario you will explore and cleanse the data, build an export a model trained to show the percent chance a flight will be delayed for a day of the week and an airport, and create a new CSV file containing the list of all airports and their associated id in the dataset.

> **NOTE:** The CSV file is in the [data](../data/) folder, and is named **flights.csv**.

## Defining success

You will have successfully completed this challenge after:

- cleansing the data by identifying null values and replacing them with an appropriate value (zero in this case).
- creating a model which provides the chances a flight will be delayed by more than 15 minutes for a given day and airport pair.
- saving the model to a file for use in an external application.
- creating a new file with the names and associated ids from the dataset of all airports.

## Tips

If you're new to data science and machine learning, the first step when working with a new dataset is to explore the data. You'll typically start by loading the data into memory, displaying a portion to gain an understanding about how the data is structured, and looking for any issues which need to be cleaned up. (There are always issues which need to be cleaned up.) As these are common tasks, you'll find GitHub Copilot will be able to provide a fair amount of support.

Two popular libraries for these types of tasks are [pandas](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) and [scikit-learn](https://scikit-learn.org/stable/), with [Jupyter notebooks](https://code.visualstudio.com/docs/datascience/jupyter-notebooks) being the most common tool used to perform these tasks. Fortunately, Visual Studio Code natively supports Jupyter notebooks, so you won't need to install any additional tooling.

### Jump start

To get started with this challenge:

1. Inside of your codespace, in the root of the project, create a new notebook named **manage-flight-data.ipynb**.
2. In the first cell, add a comment describing what you're looking to do.
3. Start by displaying the data to get a sense for the values included.
4. If you're not sure of what to do, start by asking GitHub Copilot in the form of a comment.

## Sparking imagination

There's quite a bit of data in this dataset, and numerous directions you could go with it. You could explore delay information by airline, which routes are most likely to be delayed, or what city has the best on-time performance. While the workshop is centered on the one scenario, if you're comfortable with data science and machine learning, you can take some extra time here to play with other aspects of the data.

## Next steps

This first scenario is designed to provide a sense of how to work with GitHub Copilot and how to interact with it. You'll likely have seen it was able to suggest libraries to use and the tasks necessary to complete a given scenario. With the data setup, let's turn our attention to [creating the API](./2-create-api.md).
