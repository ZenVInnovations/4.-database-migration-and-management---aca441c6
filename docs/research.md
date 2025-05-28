# 📘 Phase 1: Research Summary  
**Project**: Database Migration and Management  
**Submitted by**: Ananyashree K G  

---

## 🔍 What I Researched

In this phase, I explored key concepts related to relational databases and how database management works in a Node.js environment using Sequelize.

---

## 1. What is a Relational Database?

A **relational database** organizes data into tables with rows and columns. These tables can be linked using **relationships**, allowing complex data to be managed efficiently.  

Popular relational databases include:

- **PostgreSQL**
- **MySQL**
- **SQLite**

👉 Example: A `User` table can be related to an `Orders` table (One-to-Many relationship).

---

## 2. What is PostgreSQL?

During my research, I found that **PostgreSQL** is a widely used **open-source** relational database. It supports:

- SQL querying
- Complex data types
- Indexing and relationships
- Data integrity and scalability

PostgreSQL is used in many real-world web applications due to its reliability and performance.

---

## 3. What is Sequelize?

I learned that **Sequelize** is an **Object-Relational Mapper (ORM)** for Node.js applications. It acts as a bridge between the JavaScript code and the database.

### Sequelize helps me:
- Connect Node.js to databases like PostgreSQL
- Define **models** for tables
- Use **migrations** to manage schema changes
- Add sample data using **seeders**

---

## 4. Key Sequelize Concepts I Studied

| **Concept**   | **What I Understood**                                                   |
|---------------|-------------------------------------------------------------------------|
| **Model**     | A JavaScript object that represents a table in the database             |
| **Migration** | A version-controlled script to create/update tables and their columns   |
| **Seeder**    | A script to insert dummy/test data into the database                    |

These concepts make the database easier to manage and automate.

---

## 5. Real-Life Example I Understood

Let’s say I’m building an **e-commerce app**. Here's how Sequelize fits in:

- **Model**: I’ll define a `User` model with fields like `name`, `email`
- **Migration**: I’ll write a script to create the `Users` table
- **Seeder**: I can insert test users like `"Ananyashree"` or `"test@example.com"` for development

---

## 6. Why This is Useful (My Reflection)

Doing everything manually with SQL is hard to track and error-prone. Sequelize helps me:

✅ Keep track of every database change (like Git for DB)  
✅ Work in teams and stay organized  
✅ Avoid writing raw SQL by using JavaScript  

---

📌 **Conclusion**:  
Through this research, I now have a solid understanding of relational databases and how tools like Sequelize simplify database management. This knowledge prepares me to move into the next phase of the project: **Design**.

---
