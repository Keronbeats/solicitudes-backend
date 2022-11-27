import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Residentevil.6',
  port: 3306,
  database: 'solicitudesdb',
});
