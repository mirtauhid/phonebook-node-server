/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/person');

const logger = (request, response, next) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(logger);
app.use(cors());
app.use(express.json());

morgan.token('body', (res) => JSON.stringify(res.body));

app.use(morgan(':method :url => :response-time ms => :body'));

app.get('/api/persons', (req, res) => {
    Person.find({}).then((persons) => {
        res.json(persons);
    });
});

app.get('/api/persons/:id', (req, res) => {
    Person.findById({ _id: req.params.id })
        .then((person) => {
            if (person) {
                res.json(person);
            } else {
                res.status(400).end();
            }
        })
        .catch((err) => next(err));
});

app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then((person) => {
            if (person) {
                res.json(person);
            } else {
                console.error(err);
                res.status(400).end();
            }
        })
        .catch((err) => next(err));
});

app.put('/api/persons/:id', (request, response, next) => {
    const { body } = request;

    const person = {
        name: body.name,
        number: body.number,
    };

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then((updatedPerson) => {
            response.json(updatedPerson.toJSON());
        })
        .catch((error) => next(error));
});

app.post('/api/persons', (req, res) => {
    const { body } = req;

    if (!body.name || !body.number) {
        return res.status(400).send('content missing');
    }

    const person = new Person({
        name: req.body.name,
        number: req.body.number,
    });

    person
        .save()
        .then((savedPerson) => {
            res.json(savedPerson.toJSON());
        })
        .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' });
    }
    if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }

    next(error);
};

app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
