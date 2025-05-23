import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { reviews: [] });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/reviews', async (req, res) => {
  await db.read();
  res.json(db.data.reviews);
});

app.post('/reviews', async (req, res) => {
  const { roomNumber, email, body } = req.body;
  const newReview = {
    id: nanoid(),
    roomNumber,
    email,
    body,
  };
  await db.read();
  db.data.reviews.push(newReview);
  await db.write();
  res.json({ message: 'Review added successfully', review: newReview });
});

app.put('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  const { roomNumber, email, body } = req.body;

  await db.read();

  const reviewIndex = db.data.reviews.findIndex((review) => review.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({ message: 'Review not found' });
  }

  db.data.reviews[reviewIndex] = {
    ...db.data.reviews[reviewIndex],
    roomNumber,
    email,
    body,
  };

  await db.write();

  res.json({
    message: 'Review updated successfully',
    review: db.data.reviews[reviewIndex],
  });
});
