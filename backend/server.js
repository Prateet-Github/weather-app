import express from 'express';
import dotenv from 'dotenv';
import router from './routes/weather.js';
import cors from 'cors';

dotenv.config();



const app = express();
const PORT = process.env.PORT;
app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello from the backend server!');
});

app.use('/weather',router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});