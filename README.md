# Project Erino

Welcome to Project Erino!

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (make sure it's running locally)

## Installation

Clone the repository:

```bash
git clone https://github.com/theXCreator477/project-erino.git
```

Navigate to the project directory:
```bash
cd project-erino
```
Install the dependencies for both the Server and Client (Separately):

For the Server:

```bash
cd Server
npm install
```

For the Client:

```bash
cd ../Client
npm install
```

## Environment Variables
You need to create two .env files for the server and client configurations.

### Server Environment Variables
Navigate to the Server folder and Create a .env file in the Server folder and add the following content:

```bash
cd ../Server
touch .env
```

Copy and paste it in your ENV file:

```bash
PORT=8080
MONGO_URI=mongodb://127.0.0.1/Project_Erino
```

### Client Environment Variables
Navigate to the Client folder and Create a .env file in the Client folder and add the following content:

```bash
cd ../Client
touch .env
```

Copy and paste it in your ENV file:

```bash
REACT_SERVER_URL=http://localhost:8080
```

## Database Initialization
To initialize the database with sample data, follow these steps:

Navigate to the INIT folder inside the Server folder:

```bash
cd ../Server/INIT
```

Run the initialization script:

```bash
node init.js
```
This will set up the database with the necessary sample data.
If this script flashes, your database is initialized successfullly
```bash
MongoDB connected
Database cleared.
Database initialized with sample data
```

## Running the Project
To start the development server, follow these steps:

### Start the Server:

Navigate to the Server folder and run:

```bash
cd ../Server
npm run start
```

### Start the Client:

In a new terminal window, navigate to the Client folder and run:

```bash
cd ../Client
npm run dev
```

You can then open your browser and visit http://localhost:5173 (or the port specified in the terminal) to see your application in action.
