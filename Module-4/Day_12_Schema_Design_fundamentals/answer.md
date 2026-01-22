## A schema is like an architectural plan before building a house.
Schema design is the process of creating a blueprint (the database schema) that defines a database's structure, organizing data into tables, fields, relationships and constraints, ensuring integrity and efficient access, much like an architect designs a building's framework before anyone lives in it. A database schema represents this logical structure, outlining how data is organized, its types, rules, and connections, serving as a formal definition without containing the actual data itself. 

### What Schema Design Is
Data Modeling: The practice of designing the schema, involving decisions on tables, columns, data types, keys (primary/foreign), and relationships.
Blueprint Creation: Developing the architectural plan for data storage and organization.
Rule Definition: Establishing constraints (e.g., data length, uniqueness) and rules for data integrity. 

## Why schema design is required before writting backend code

Backend code is written ** based on how is stored**.

Schema design is required before writing backend code because it serves as the **blueprint for how data is organized**, ensuring data integrity, optimizing **performance and scalability**, and providing a stable foundation that is difficult and costly to change later. 

### Without schema design
- APIs break frequently
- Code requires repeated changes
- Data becomes inconsistent
- Bugs increase

### With proper schema design
-Backend logic is clear
-APIs are predictable
-Database handles part of validation
-Future scaling becomes easier

📌Always design the schema **before** writing backend logic.

---

## How poor schema design impacts data consistency, maintenance & scalability

### Datta Consistency Issues
-Duplicate records
-Confliciting values
-Missing or invalid data

→ Same user stored with different spellings

### Maintenance Problems
- Schema changes break multiple APIs
- Complex migrations
- Hard-to-debug issues

### Scalability Issues
- Slow database queries
- Large tables with unnecessary columns
- Difficult to add new features

Poor schema design results in fragile and slow systems

## What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)

**Database validations** in schema design are rules that enforce data integrity and consistency by restricting what data can be stored in a table. The database management system (DBMS) enforces these rules to ensure data accuracy, reliability, and to protect the integrity of the data

-**NOT NULL**: Ensures that a column cannot have an empty value (NULL). This is crucial when a data point is mandatory for a record to be complete (e.g., a user must have a username) [1].

-**UNIQUE**: Guarantees that all values in a column are different. This prevents duplicate entries in a specific field (e.g., ensuring every email address in a Users table is distinct) [1].

-**DEFAULT**: Automatically assigns a predetermined value to a field if no value is explicitly provided during insertion. This helps maintain consistency and speed up data entry by avoiding manual input for common values (e.g., setting a status field to 'Active' by default) [1].

-**PRIMARY KEY**: A combination of NOT NULL and UNIQUE. It serves as a unique identifier for each row in a table, ensuring that every record can be distinctly located and referenced. A table can only have one primary key [1]. 


## The difference between a database schema and a database table

**A database schema** is the logical blueprint or structure defining how data is organized (tables, columns, relationships, constraints) but holds no actual data, while a **database table** is a specific structure within the schema, resembling a spreadsheet with rows and columns, that actually stores the data. Think of the schema as the architectural plan for a building, and the tables as individual rooms (like a 'Customers' room or 'Orders' room) within that building, each holding different data. 

## Why a table should represent only one entity
In database design, a table should represent only one entity (a person, place, thing, or event) to ensure data integrity, minimize redundancy, and maintain clarity. This principle, rooted in normalization, ensures that every table is focused on a single topic, preventing the creation of confusing, inefficient, and error-prone structures. 

### Here are the primary reasons why a table should represent only one entity:
- Reduces Data Redundancy
- Ensures Data Integrity & Accuracy:
- Improves Performance
- Prevents NULL Values
- Simplifies Maintenance and Understanding
- Improves Security

## Why redundant or derived data should be avoided in table design
Redundant or derived data should be avoided in table design primarily to maintain data integrity, optimize storage efficiency, and simplify maintenance.


### Reasons to Avoid Redundant Data
- Data Integrity and Consistency
- Update Anomalies
- Insertion Anomalies
- Deletion Anomalies
- Storage Efficiency

## The importance of choosing correct data types while designing tables

Choosing correct data types when designing database tables is crucial because it directly impacts performance, storage efficiency, data integrity, and functionality [2]. Using appropriate types ensures data is stored correctly, queries run quickly, and potential errors are minimized. 

### Key Reasons for Choosing Correct Data Types

- Storage Efficiency
- Performance
- Data Integrity and Validation
- Functionality and Operations
- Memory Usage
- Code Clarity and Maintenance