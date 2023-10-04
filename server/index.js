
const express = require("express");
const mysql = require('mysql');
require("dotenv").config();
const cors = require("cors")
const app = express();

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 9090

const connection = mysql.createConnection({
  host: 'http://localhost:3306',
  user: process.env.username,
  password: process.env.password
});

const databaseName = 'projectHub';
const createDatabaseSQL = `CREATE DATABASE ${databaseName}`;

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      throw err;
    }
    console.log('Connected to MySQL server');
  
    // Create the new database
    connection.query(createDatabaseSQL, (err) => {
      if (err) {
        console.error('Error creating database:', err);
        throw err;
      }
      console.log(`Database "${databaseName}" created successfully`);
      
      
      connection.end((err) => {
        if (err) {
          console.error('Error closing connection:', err);
          throw err;
        }
        console.log('Connection closed');
      });
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });