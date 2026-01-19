### Question 1.
---

## Why is `db.json` not suitable as a database for real projects?

`db.json` (file-based storage) is useful for **learning, demos, and small projects**, but it is **not suitable for real-world production applications** due to several limitations.

---

### 1. Performance Issues
- Every read or write operation requires **reading the entire file into memory**
- Frequent file I/O operations are **slow compared to database queries**
- As data grows, response time increases, causing **poor application performance**

---

### 2. Scalability Problems
- File-based storage **does not handle large data volumes efficiently**
- Cannot manage **multiple concurrent users** properly
- Simultaneous write requests can cause **data conflicts or corruption**
- No built-in support for **indexing, pagination, or optimized querying**

---

### 3. Reliability & Data Safety Issues
- If the server crashes during a write operation, **data may be lost or corrupted**
- No support for **transactions** (rollback on failure)
- No automatic **backup, replication, or recovery mechanisms**
- Manual error handling increases **risk in production**

---

### 4. Concurrency Limitations
- File locking is difficult to manage in Node.js
- Parallel requests can **overwrite each other’s data**
- Not safe for **multi-user or high-traffic applications**

---

### 5. Lack of Advanced Database Features
- No schema validation  
- No indexing  
- No query optimization  
- No access control or role management  

---

### Conclusion
> `db.json` is best suited for **practice, prototyping, and small learning projects**.  
> For real-world applications, databases like **MongoDB, PostgreSQL, or MySQL** are preferred because they offer **high performance, scalability, reliability, and data safety**.

### Question 2.
---
## What are the ideal characteristics of a database system (apart from just storage)?

A good database system does more than store data. It ensures that data is **fast to access, safe, consistent, scalable, and reliable**, even under heavy usage.

---

### 1. Performance
- Supports **fast read and write operations**
- Uses **indexes and optimized query execution**
- Minimizes response time even with **large data volumes**
- Efficient memory and disk usage

---

### 2. Concurrency
- Allows **multiple users** to access and modify data at the same time
- Prevents **data conflicts and race conditions**
- Uses locking or MVCC (Multi-Version Concurrency Control)
- Ensures **data consistency** during simultaneous operations

---

### 3. Reliability
- Ensures data is **safe and available** at all times
- Protects against **data loss**
- Supports **transactions** (commit and rollback)
- Maintains consistent behavior even during failures

---

### 4. Data Integrity
- Ensures data is **accurate, valid, and consistent**
- Enforces **constraints** (primary keys, foreign keys, unique values)
- Prevents **duplicate or invalid data**
- Maintains relationships between data correctly

---

### 5. Scalability
- Handles **growing data and traffic** efficiently
- Supports **vertical scaling** (better hardware)
- Supports **horizontal scaling** (distributed systems)
- Maintains performance as usage increases

---

### 6. Fault Tolerance
- Continues functioning even if part of the system fails
- Supports **replication and backups**
- Provides **automatic recovery mechanisms**
- Minimizes downtime during failures

---

### Conclusion
> An ideal database system ensures **high performance, safe concurrency, strong reliability, data integrity, scalability, and fault tolerance**, making it suitable for real-world, production-grade applications.

### Question 3.
---

## How many types of databases are there? What are their use cases or applications?

Databases are broadly classified into **two main types** based on how data is stored and managed:

- **Relational Databases (SQL)**
- **Non-Relational Databases (NoSQL)**

Each type is used for different kinds of applications depending on data structure, scale, and flexibility needs.

---

## 3. Relational Databases (SQL)

### Description
Relational databases store data in **tables (rows and columns)** and follow a **fixed schema**. They use **SQL (Structured Query Language)** to manage and query data.

### Key Characteristics
- Structured data with a predefined schema
- Strong **data integrity** using constraints
- Supports **ACID transactions**
- Uses SQL for complex queries and joins

### Common Examples
- MySQL  
- PostgreSQL  
- Oracle  
- Microsoft SQL Server  

### Real-World Use Cases
- **Banking systems** (accounts, transactions, balances)
- **E-commerce platforms** (orders, payments, inventory)
- **Employee management systems**
- **School/college databases**
- **Financial and accounting applications**

---

## 2. Non-Relational Databases (NoSQL)

### Description
NoSQL databases store data in **flexible formats** such as key-value, document, column-family, or graph structures. They are designed for **scalability and high performance**.

### Key Characteristics
- Schema-less or flexible schema
- Designed for **horizontal scalability**
- Handles large volumes of unstructured or semi-structured data
- High availability and fast access

### Common Examples
- MongoDB (Document-based)
- Redis (Key-Value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

### Real-World Use Cases
- **Social media applications** (posts, comments, likes)
- **Real-time chat and messaging apps**
- **Content management systems**
- **IoT and sensor data**
- **Big data and analytics platforms**