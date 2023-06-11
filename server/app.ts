import express from 'express';

const app = express();
const PORT = 5600

app.get('/', (req, res) => {
    res.send("Hello from server")
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))