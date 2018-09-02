const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Potato123",
  database: "Bamazon"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("Database Connected...");
  searchAll();
});

const searchAll = () => {
  connection.query("SELECT product_name FROM products", (error, response) => {
    if (error) throw error;
    console.log("Response", response);
    inquirer
      .prompt([
        {
          name: "Name of the Product",
          type: "input",
          message: "Enter the name of the product you wish to purchase:"
        },
        {
            name: "Quantity",
            type: "input",
            message: "Enter the quantity of the product:"
        }
      ])
      .then(answer => {
        console.log(answer);
        console.log(answer,parseInt(answer.Quantity))
      });
  });
};

// Create control flow statement to check if the product is in stock

// Update the database if the product is in stock
// Then show the customer the total cost of their purchase