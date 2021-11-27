import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import mahasiwaRoutes from './routes/posts.js';
import jurusanRoutes from './routes/postsJurusan.js';
import router from './routes/posts.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const CONNECTION_URL = 'mongodb+srv://alvin:alvin123@cluster0.7w3ev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
app.use('/mahasiswa',mahasiwaRoutes)
app.use('/jurusan',jurusanRoutes)

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true , useUnifiedTopology : true })
	.then(() => app.listen(PORT,() => console.log(`server running on port : ${PORT}`)))
	.catch((error) => console.log(error.message));

app.get("/", (req, res) => {
res.json({
message: "CRUD API MAHASISWA telah Berhasil"});
});



