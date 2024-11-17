Sure! Below is the complete README.md content that you can directly copy and paste into your project.

markdown
Insert Code
Edit
Copy code
# Project Erino

Welcome to Project Erino! This is a Vite React project that allows you to build modern web applications with ease. This project has been assigned to me by a company to test my skills.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Database Initialization](#database-initialization)
- [License](#license)

## Features

- Fast and modern development environment using Vite
- React for building user interfaces
- Easy to set up and run

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (make sure it's running locally)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/theXCreator477/project-erino.git
Navigate to the project directory:

bash
Insert Code
Edit
Copy code
cd project-erino
Install the dependencies for both the Server and Client:

For the Server:

bash
Insert Code
Edit
Copy code
cd Server
npm install
For the Client:

bash
Insert Code
Edit
Copy code
cd ../Client
npm install
Running the Project
To start the development server, follow these steps:

Start the Server:

Navigate to the Server folder and run:

bash
Insert Code
Edit
Copy code
cd ../Server
npm run start
Start the Client:

In a new terminal window, navigate to the Client folder and run:

bash
Insert Code
Edit
Copy code
cd ../Client
npm run dev
You can then open your browser and visit http://localhost:3000 (or the port specified in the terminal) to see your application in action.

Environment Variables
You need to create two .env files for the server and client configurations.

Server Environment Variables
Navigate to the Server folder:

bash
Insert Code
Edit
Copy code
cd Server
Create a .env file in the Server folder and add the following content:

plaintext
Insert Code
Edit
Copy code
PORT=8080
MONGO_URI=mongodb://127.0.0.1/Project_Erino
Client Environment Variables
Navigate to the Client folder:

bash
Insert Code
Edit
Copy code
cd ../Client
Create a .env file in the Client folder and add the following content:

plaintext
Insert Code
Edit
Copy code
REACT_SERVER_URL=http://localhost:8080
Database Initialization
To initialize the database with sample data, follow these steps:

Navigate to the INIT folder inside the Server folder:

bash
Insert Code
Edit
Copy code
cd Server/INIT
Run the initialization script:

bash
Insert Code
Edit
Copy code
node init.js
This will set up the database with the necessary sample data.