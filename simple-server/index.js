import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});