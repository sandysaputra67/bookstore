# Bookstore - Express Server


---

## Starting the Server

To start up dev server with nodemon:

```shell
# Run the appropriate command based on your system:
# On Mac/Linux:
npm run dev
# On Windows:
npm run dev_windows
```

## Setting up the server
First ensure you have a database setup and have access to the passwrod, we recommend postgre or elephantsql.
Create a `.env` file within the BackEnd directory and save your `LOCAL_DATABASE_PASSWORD` in this file.

```shell
LOCAL_DATABASE_PASSWORD=YourDatabasePassword
```

If no password is set up for your database, please pass an empty string like so:

```shell
LOCAL_DATABASE_PASSWORD=''
```


## Express Generator

You can use this Express Generator command, indicating the directory to build your project in instead of `my-app`:

```shell
npx express-generator --no-view --git my-app
```

Move into the directory and install dependencies

```shell
cd my-app
npm install
```
Next back out of express directory and install these dependencies via `npm install`:

```shell
cd ..
npm i compression dotenv helmet pgtools sequelize nodemon
```
