import weatherConfig from "../config/weatherConfig.js";
import express from "express";

const router = express.Router();

router.get('/:city', async (req,res) => {
const city = req.params.city;
try {
  const response = await fetch(
      `${weatherConfig.baseUrl}/current.json?key=${weatherConfig.apiKey}&q=${city}`
    );
    const data = await response.json();
    res.json(data);
} catch (error) {
  console.error(error)
  res.status(500).json('Some Error happened')
}
})

export default router;