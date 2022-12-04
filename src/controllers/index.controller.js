import { pool } from '../dbConection.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.send(result[0]);
  }