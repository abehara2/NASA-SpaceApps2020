const express = require('express')
var Papa = require("papaparse");
const app = express()
var fs = require('fs');
var bodyParser = require('body-parser')
const rrag = require('real-random-address');
const fetch = require('node-fetch');


const data = "https://raw.githubusercontent.com/EthanRBrown/rrad/master/addresses-us-100.json"

const { uniqueNamesGenerator, adjectives, colors, animals, starWars } = require('unique-names-generator');

const star = {
    dictionaries: [starWars],
    length: 1
  }

const an = {
    dictionaries: [animals],
    length: 1
}

const port = 3000
// require API_helper.js
var convert = require('xml-js');
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/users', (req, res) =>{
   
    console.log(req.body["users"])
    var n = req.body["users"]
    const i = Math.floor(Math.random() * 100);
    const name = uniqueNamesGenerator(star)
    const email = uniqueNamesGenerator(an)
    const address = fetch(data).then(data=>{return data.json()})
                                .then(res => {
                                    const ad = res['addresses'][i]
                                    const add = (ad["address1"] + " " + ad["city"] + " " + ad['state'] + " " + ad["postalCode"])
                                    //console.log(address)
                                    return add
                                })


    
    console.log(address)

    for (i = 0; i < n; i++) {

    }
    res.sendStatus(200)
})

app.listen(port)

async function randomAd() {
    
    
}