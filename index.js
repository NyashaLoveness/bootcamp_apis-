import express from 'express';
//import cors from 'cors';

import longestWord from './public/bootcamp_funcs/longestWord.js';
import shortestWord from './public/bootcamp_funcs/shortestWord.js'
import wordLengths from './public/bootcamp_funcs/wordLengths.js';
import totalPhoneBill from './public/bootcamp_funcs/phoneBill.js';
import enoughAirtime from './public/bootcamp_funcs/enoughAirtime.js';

const app = express(); //app is running on express
//app.use(cors());
app.use(express.static('public'))

app.get('https://localhost:6007/api/word_game', function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: 'Sentence not found!'
        })
    }

    res.json({
        'longestWord': longestWord(sentence),
        'shortestWord': shortestWord(sentence),
        'sum': wordLengths(sentence)
    });
});

//enable body parser as middleware to the Express 'app' instance
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('http://localhost:6007/api/phonebill/total', async function (req, res) {
    const string = req.body.string;
    console.log(string)

    res.json({
        'total': totalPhoneBill(string)
    })
});

app.post('http://localhost:6007/api/enough', async function (req, res) {
    const string1 = req.body.string1;
    const string2 = req.body.string2

    res.json({
        'result': enoughAirtime(string1, string2)
    })
});

const PORT = 6007;
app.listen(PORT, function () {
    console.log('API started...', PORT)
});
