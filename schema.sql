CREATE DATABASE Bamazon;

USE Bamazon;
CREATE TABLE products (
    item_id INT(3) AUTO_INCREMENT, 
    product_name VARCHAR (30),
    department_name VARCHAR (30),
    price INT (3),
    stock_quantity INT (3),
    PRIMARY KEY(item_id)
); 
