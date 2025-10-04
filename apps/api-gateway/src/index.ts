import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/v1/health', (req, res) => {
	res.status(200).json({ status: 'ok', service: 'API Gateway' });
});

app.listen(PORT, () => {
	console.log(`API Gateway is running on http://localhost:${PORT}`);
});