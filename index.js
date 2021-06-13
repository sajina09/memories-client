import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';
import createRoutes from './routes/post.js';

const app = express();
const PORT = process.env.PORT || 5000


mongoose.connect(
    "mongodb://localhost/memories",{
        useNewUrlParser : true ,
        useUnifiedTopology : true
}).then(()=>app.listen(PORT, () => console.log(`Server runninng at ${PORT}`)))
.catch((error)=>{console.log(error)})
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json({ limit : "30mb" , extended: true}));
app.use(express.urlencoded({ limit : "30mb" , extended: true}));
app.use('/posts',postRoutes);
app.use('/create',createRoutes);
