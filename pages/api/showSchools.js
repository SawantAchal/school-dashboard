import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    try {
      const [rows] = await connection.execute('SELECT name, address, city, image FROM schools');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve schools' });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}