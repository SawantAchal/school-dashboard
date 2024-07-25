import multer from 'multer';
import mysql from 'mysql2/promise';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/schoolImages',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  }),
});

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('image')(req, {}, async (err) => {
      if (err) {
        console.error('File upload error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { name, address, city, state, contact, email_id } = req.body;
      const image = req.file ? req.file.filename : 'default_image.jpg';

      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      try {
        await connection.execute(
          'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [name, address, city, state, contact, image, email_id]
        );
        res.status(200).json({ message: 'School added successfully' });
        
      } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Failed to add school' });
      } finally {
        await connection.end();
      }
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
