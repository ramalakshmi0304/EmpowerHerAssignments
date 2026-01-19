## Definition of Database Relationship

A **database relationship** defines how data in one table is connected to data in another table using related columns.  
These relationships are established using **primary keys** and **foreign keys** to maintain **data integrity**, reduce **data redundancy**, and ensure accurate data retrieval.


---
## Types of Database Relationships

Database relationships define how tables are connected to each other. The main types of relationships are:

---

### 1. One-to-One (1:1)

**Definition:**  
Each record in one table is associated with exactly one record in another table.

**Example:**  
A user has one profile.

---

### 2. One-to-Many (1:N)

**Definition:**  
One record in a table can be associated with multiple records in another table, but each record in the second table is linked to only one record in the first table.

**Example:**  
A customer can place many orders, but each order belongs to one customer.

---

### 3. Many-to-Many (M:N)

**Definition:**  
Multiple records in one table can be associated with multiple records in another table.

**Example:**  
An order can contain many products, and a product can appear in many orders.  
This relationship is implemented using a **junction (bridge) table**.

---

## Summary

| Relationship Type | Description |
|------------------|-------------|
| One-to-One       | One record linked to one record |
| One-to-Many      | One record linked to many records |
| Many-to-Many     | Many records linked to many records |


## Clear E-commerce Examples for Each Type of Database Relationship

Below are the **three main types of database relationships**, explained with **clear e-commerce examples** and **simple diagrams** for better understanding.

---

## 1. One-to-One (1:1) Relationship

### 📘 Definition
Each record in one table is linked to **exactly one** record in another table, and vice versa.

### 🛒 E-commerce Example
**Customer ↔ CustomerProfile**

- Each customer has **one profile**
- Each profile belongs to **one customer**

## 2. One-to-Many (1:N) Relationship

### 📘 Definition
One record in a table can be associated with **multiple records** in another table, but each record in the second table is linked to **only one** record in the first table.

---

### 🛒 E-commerce Example
**Customer ↔ Orders**

- One customer can place **many orders**
- Each order belongs to **one customer**


## 3. Many-to-Many (M:N) Relationship

### 📘 Definition
Records in one table can be associated with **multiple records** in another table, and vice versa.  
This type of relationship is implemented using a **junction (bridge) table**.

---

### 🛒 E-commerce Example
**Orders ↔ Products (via OrderItems)**

- One order can contain **many products**
- One product can appear in **many orders**



## Database Relationship Diagrams (Picture / ASCII Format)

---

## 1. One-to-One (1:1) Relationship

+-------------+        +------------------+
|  Customer   |  1 ↔ 1 | CustomerProfile  |
+-------------+        +------------------+
| id (PK)     |        | id (PK)          |
| name        |        | customer_id (FK) |
| email       |        | address          |
+-------------+        +------------------+

📌 Meaning:
- One customer has one profile
- One profile belongs to one customer

---

## 2. One-to-Many (1:N) Relationship

+-------------+        +-------------+
|  Customer   |  1 → N |   Orders    |
+-------------+        +-------------+
| id (PK)     |        | id (PK)     |
| name        |        | customer_id |
| email       |        | order_date  |
+-------------+        +-------------+

📌 Meaning:
- One customer can place many orders
- Each order belongs to only one customer

---

## 3. Many-to-Many (M:N) Relationship

+---------+        +--------------+        +----------+
| Orders  |  1 → N | Order_Items  | N ← 1  | Products |
+---------+        +--------------+        +----------+
| id (PK) |        | order_id (FK)|        | id (PK)  |
|         |        | product_id   |        | name     |
+---------+        | quantity     |        | price    |
                   +--------------+

📌 Meaning:
- One order can have many products
- One product can be part of many orders
- Order_Items is the junction table

---

## Summary Table

| Relationship Type | Example                    | Description                          |
|------------------|----------------------------|--------------------------------------|
| One-to-One       | Customer ↔ CustomerProfile | One record linked to one record      |
| One-to-Many      | Customer ↔ Orders          | One record linked to many records    |
| Many-to-Many     | Orders ↔ Products          | Many records linked via junction     |

---

## Conclusion

Database relationships are essential in designing scalable and reliable systems.
In e-commerce applications, they help manage customers, orders, and products efficiently.





