const { people } = require("../data")

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people})
}

const createNewPerson = (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, message: 'Please provide a name'})
    }
    const newPerson = {id:people.length + 1, name}
    people.push(newPerson)
    res.status(201).json({success: true, person: newPerson})
}

const updatePerson = (req,res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, message: `No person found with id ${id}` });
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person;
    })
    res.status(200).json({success: true, data: newPerson})
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        return res.status(404).json({ success: false, message: `no person with id ${req.params.id}` })
    }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPerson})
}

module.exports = {
    getPeople,
    createNewPerson,
    updatePerson,
    deletePerson
}