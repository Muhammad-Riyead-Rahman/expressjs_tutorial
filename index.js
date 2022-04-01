const express = require('express');

const app = express();

// app.use(express.static(`${__dirname}/public/`, {
//     index: 'home.html',
// }));

const router = express.Router({
    caseSensitive: true,
});

app.use(router);

router.get('/about', (req, res) => {
    res.send(`This is about page with get request`);
});

router.post('/', (req, res) => {
    // console.log(req.body);
    res.send(`This is home page with post request`)
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
