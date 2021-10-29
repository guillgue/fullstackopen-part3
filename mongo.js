const mongoose = require('mongoose')
const dotenv = require('dotenv')

if (process.argv.length != 2 && process.argv.length != 4) {
  console.log(`Usage : 
      - display all phonebook entries: node mongo.js
      - add an entry: node mongo.js NAME NUMBER`)
  process.exit(1)
}

dotenv.config()

mongoose.connect(process.env.CONNECTION_URL)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 2) {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  const name = process.argv[2]
  const number = process.argv[3]
  const person = new Person({name, number})
  
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
