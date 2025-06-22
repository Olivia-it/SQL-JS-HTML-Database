ASSET DATABASE PROJECT



Introduction:


This project contains:
1.	 HTML and CSS file(to provide UI for displaying report, adding, deleting and updating database) 
2.	Javascript file (for the database entries to be updated dynamically based on user’s input)
3.	 Asset Database created in MySQL Workbench which can be updated when connected to the script.

The purpose of this database is to store information about assets and users, create reports and update, delete filter data. As per client’s brief, the system stores relevant data, including unique identifiers, enables categorisation of assets and report generating, clearly defining table names and data types. It also includes data validation built in the constructors. Tables: assets and users are connected by FOREIGN KEY(UserId). HTML also validates barcode entered making sure it is a number. Data validation in JavaScript include: fields set as required and alerts if the product already exists.



Below is the explanation of how the data was created  in MySQL and what are the steps for making changes to the database.

Constructor to create assets table

CREATE TABLE assets (
AssetID INT PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
Category VARCHAR(255) NOT NULL,
Brand VARCHAR(255) NOT NULL,
Barcode VARCHAR(255) NOT NULL,
PurchaseDate DATE NOT NULL,
Status VARCHAR(100) NOT NULL,
User VARCHAR(255),
Department VARCHAR(100),
FOREIGN KEY  (UserId) REFERENCES users(userId))

To populate assets table
INSERT INTO assets (AssetID, Name, Category, Brand, Barcode, PurchaseDate, Status, User, Department, UserId)
VALUES (8, ‘Word Processor’, ‘ Software’, ‘Microsoft’, 88888, 2025-03-10, ‘Working’, ‘Ben’, ‘Customer Service’, 333)



Constructor to create users table

CREATE TABLE users(
UserId INT PRIMARY KEY,
username VARCHAR(255) NOT NULL UNIQUE,
department VARCHAR(255) NOT NULL)

To populate users table

INSERT INTO users (userId, userName, department)
VALUES 
  (111, 'Tom', 'Finance'),
  (222, 'John', 'Finance'),
  (333, 'Ben', 'Customer Service'),
  (444, 'Sam', 'HR');



Full current database:





Commands to generate reports and update data

To select database:
USE auxilium_db

To create a full report of assets:
SELECT * FROM assets

Example of how to update assets entries:
UPDATE assets
SET userID = 111
WHERE User = "Tom";


Example of generating report and ordering the data according to user preferences, order by department: 
SELECT * FROM assets
ORDER BY department

Example of generating JOIN reports on tables and displaying specific data:
SELECT users.userName, assets.department, assets.Name FROM users
JOIN assets
ON users.UserID = assets.UserId;










