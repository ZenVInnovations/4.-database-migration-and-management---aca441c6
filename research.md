# Phase 1: Research Summary  
**Project**: Database Migration and Management  
**Author**: Ananyashree K G  
**Date**: 4th June 2025  

---

## 📄 Overview

This research phase explores the foundational concepts of relational databases, PostgreSQL, and Sequelize in a Node.js environment to prepare for migrating a MySQL database to PostgreSQL and implementing management processes.

---

## 🔍 Key Findings

### 1. Relational Databases

A **relational database** organizes data into tables with rows and columns, connected through relationships (e.g., primary and foreign keys). This structure enables efficient data management and querying.

**Popular Relational Databases:**
- **MySQL**: Widely used, open-source, known for simplicity and performance.  
- **PostgreSQL**: Advanced open-source database with strong support for complex queries and data integrity.  
- **SQLite**: Lightweight, suitable for smaller applications.

**Example**: In an e-commerce app, a `Users` table (with columns `id`, `name`, `email`) can have a **one-to-many** relationship with an `Orders` table.

---

### 2. PostgreSQL

**PostgreSQL** is an open-source relational database management system (RDBMS) known for:

- **SQL Compliance**: Supports standard SQL for querying.  
- **Complex Data Types**: Handles JSON, arrays, and custom types.  
- **Indexing and Relationships**: Efficient indexing and support for foreign keys.  
- **Scalability and Reliability**: Suitable for large-scale web applications.

**Use Case**: PostgreSQL’s scalability makes it ideal for replacing MySQL in applications requiring advanced features or high data integrity.

---

### 3. Sequelize

**Sequelize** is an Object-Relational Mapper (**ORM**) for Node.js, simplifying database interactions by mapping JavaScript objects to database tables.

**Key Features:**
- **Database Connection**: Connects Node.js to databases like MySQL and PostgreSQL.  
- **Models**: JavaScript objects representing database tables.  
- **Migrations**: Version-controlled scripts to manage schema changes (e.g., creating or altering tables).  
- **Seeders**: Scripts to populate tables with test or dummy data.

**Benefits**: Reduces the need for raw SQL, improves team collaboration, and tracks database changes like version control.

---

### 4. Key Sequelize Concepts

| **Concept** | **Description** |
|------------|-----------------|
| **Model** | A JavaScript class representing a database table, defining its structure (e.g., columns, data types). |
| **Migration** | A script to create, update, or delete database tables and schemas, ensuring consistency across environments. |
| **Seeder** | A script to insert predefined data for testing or development (e.g., sample users). |

---

### 5. Real-World Application

For an **e-commerce application**:

- **Model**: Define a `User` model with fields like `id`, `name`, `email`.  
- **Migration**: Create a `Users` table in PostgreSQL with a migration script.  
- **Seeder**: Insert test data, such as `{ name: "Ananyashree", email: "ananyashree@example.com" }`.

This approach streamlines development and testing by automating database setup.

---

### 6. Why Sequelize is Useful

- ✅ **Change Tracking**: Migrations track schema changes, similar to Git for code.  
- ✅ **Team Collaboration**: Simplifies database management in team settings.  
- ✅ **Abstraction**: Allows developers to use JavaScript instead of raw SQL, reducing errors.

**Reflection**: Manual SQL management is error-prone and hard to track. Sequelize’s ORM capabilities make database operations more manageable and scalable.

---

## ✅ Conclusion

This research establishes a solid foundation for the project by clarifying relational database concepts, PostgreSQL’s strengths, and Sequelize’s role in simplifying migration and management.  

The next phase (**Design**) will outline the **architecture for migrating a MySQL database to PostgreSQL** and implementing management features using Sequelize in a Node.js environment.
