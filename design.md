# Phase 2: Design - Database Migration and Management  
**Project:** Database Migration and Management  
**Author:** Ananyashree K G  
**Date:** June 2025  

---

## Overview  
This project migrates a MySQL database to PostgreSQL using Sequelize in a Node.js environment and implements management processes.

---

## Migration Strategy  

### 1. Schema Migration  
- Use Sequelize migrations to create tables (e.g., `Users`) in PostgreSQL  
- Map MySQL schema to PostgreSQL  
  - Example: `DATETIME` → `TIMESTAMP`  

### 2. Data Migration  
- Extract data from MySQL using `mysql2`  
- Transform and load into PostgreSQL using Sequelize  
- Use **batch processing** for large datasets (e.g., 1000 rows per batch)  

### 3. Zero-Downtime (Optional)  
- Use logical replication (e.g., **Debezium**) if required  

---

## Management Features  

- **Backup:**  
  - API endpoint: `/backup`  
  - Triggers `pg_dump` for PostgreSQL  

- **Monitoring:**  
  - **Prometheus**: Collects metrics (e.g., query latency, CPU usage)  
  - **Grafana**: Displays metrics via dashboards  

- **Access Control:**  
  - PostgreSQL roles (e.g., `read_only`, `admin`)  

---

## Frontend  

React dashboard includes:  
- Migration progress (e.g., % of rows migrated)  
- Database metrics (e.g., query performance)  
- Button to trigger backups  

---

## Infrastructure  

### Local  
- **Docker Compose:**  
  - MySQL  
  - PostgreSQL  
  - Backend (Node.js/Express)  
  - Frontend (React)  

### Production  
- **AWS RDS:** PostgreSQL  
- **AWS ECS:** Containerized backend and frontend  
- **GitHub Actions:** CI/CD pipeline  
- **Prometheus/Grafana:** Real-time monitoring  

---

## Repository Structure  

| Path                        | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `backend/`                  | Node.js backend for migration and management tasks                         |
| `backend/migrations/`       | Sequelize migration scripts for schema changes (e.g., creating Users table) |
| `backend/seeders/`          | Sequelize seeder scripts for inserting test data                           |
| `backend/src/`              | Core backend application code                                              |
| `backend/src/models/`       | Sequelize models defining database table structures (e.g., `User.js`)      |
| `backend/src/routes/`       | Express API routes (e.g., `/api/migration-status`, `/api/backup`)          |
| `backend/src/app.js`        | Main Express application for the backend                                   |
| `backend/scripts/`          | Scripts for data migration and management tasks (e.g., `migrate_data.js`)  |
| `backend/package.json`      | Backend dependencies and scripts (e.g., `express`, `sequelize`)            |
| `backend/Dockerfile`        | Docker configuration for the backend container                             |
| `frontend/`                 | React frontend for the monitoring dashboard                                |
| `frontend/src/`             | Core frontend application code                                             |
| `frontend/src/components/`  | React components for the dashboard (e.g., migration progress chart)        |
| `frontend/src/App.js`       | Main React application file                                                |
| `frontend/package.json`     | Frontend dependencies and scripts (e.g., `react`, `chart.js`)              |
| `frontend/Dockerfile`       | Docker configuration for the frontend container                            |
| `docs/`                     | Documentation for project phases                                           |
| `docs/research.md`          | Phase 1: Research Summary                                                  |
| `docs/design.md`            | Phase 2: Design Document                                                   |
| `docs/test_results.md`      | Phase 4: Testing Results                                                   |
| `docs/deployment.md`        | Phase 5: Deployment Plan                                                   |
| `docker-compose.yml`        | Docker setup for local development                                         |
| `README.md`                 | Project overview and instructions                                          |

## Next Steps

1. **Develop** migration scripts, backend APIs, and frontend components (Phase 3)  
2. **Test** migration and management features, including backup and monitoring (Phase 4)  
3. **Deploy** to production using AWS RDS, ECS, and CI/CD pipelines (Phase 5)  
