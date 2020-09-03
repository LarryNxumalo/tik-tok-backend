import express from 'express';
import mongoose from 'mongoose';

import Data from './data.js';
import Videos from './dbModel.js'


//app config
const app = express();//instance for application - express is the JSON functionality
const port = 9000;

//middleware
app.use(express.json());//converting res to json

//db config
const connection_url = 'mongodb+srv://admin:lAr118nXu@cluster0.retmc.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api end points
app.get('/', (req, res) => res.status(200).send('hello code'));
app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);//downloading data
        }
    })
})

app.post('/v2/posts', (req, res) => {
    //POST request to ADD or PUSH DATA to the database
    //it will let us add a video DOCUMENT to the videos COLLECTION
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
//request sent if okay return response

//listening
app.listen(port, () => console.log(`listening on localhost: ${port}`));

