const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/message');
const app = express();

app.listen(2000);

app.set('view engine', 'ejs');

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbURI = 'mongodb+srv://tom123:Graphic4@mynewcluster.coxgo.mongodb.net/portfolio_dashboard?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {

    })
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/administrator', (req, res) => {
    User.find().sort({ name: -1 })
        .then((result) => {
            res.render('messages', { title: 'admin', messages: result });
        })
        .catch((err) => console.log(err));
});

app.post('/', (req, res) => {
    let MessageFromUser = new User(req.body);
    MessageFromUser.save()
        .then((result) => {
            // setTimeout(() => {}, 2000)
            res.redirect('/#contact');
        })
        .catch(err => console.log(err));
});

app.get('/details/:id', (req, res) => {
    const user_id = req.params.id;

    console.log(user_id)
    User.findById(user_id)
        .then((result) => {
            res.render('details', { result });
        })
        .catch((err) => console.log(err));
});

app.get('/delete/:id', (req, res) => {
    const user_id = req.params.id;

    User.findByIdAndRemove(user_id, (err, result) => {
        
        res.redirect('/administrator');
    });
});

app.use((req, res) => {
    res.send('page not found');
});
