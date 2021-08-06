const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config()



const Person = require('./models/person')



app.use(cors())
app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons);
    })
})


app.use(express.json())


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformed id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
app.use(errorHandler)


morgan.token('body', res => {
    return JSON.stringify(res.body)
})

app.use(morgan(':method :url => :response-time ms => :body'))








app.get('/api/persons/:id', (req, res) => {
    Person.findById({ _id: req.params.id })
        .then(person => {
            if (person) {
                res.json(person);
            } else {
                res.status(400).end()
            }
        })
        .catch(err => next(err));
})

app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then(person => {
            if (person) {
                res.json(person);
            } else {
                console.error(err)
                res.status(400).end()
            }
        })
        .catch(err => next(err))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatePerson => {
            res.json(updatePerson)
        })
        .catch(error => next(error))
})


app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (!body.name || !body.number) {
        return res.status(400).send('content missing')
    }

    const person = new Person({
        name: req.body.name,
        number: req.body.number
    })

    person.save()
        .then(savedPerson => {
            res.json(savedPerson.toJSON())
        })
        .catch(error => next(error))



})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
