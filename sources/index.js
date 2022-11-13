/* Exo 1
const tab = [1, 2, 5, 4, 10, 34]

let some = 0;

for (let i = 0; i < tab.length; i++) {
    some = some + tab[i]
}

console.log(`somme = ${some}`)

*/


/*
Exo 2
const array1 = [1, 2, 3]
const array1Length = array1.length

const array2 = [4, 5, 6, 7, 8, 9]
const array2Length = array2.length

const array = []

for (let index = 0; index < array1Length; index++) {
    const value = array1[index]

    array[index] = value
}

for (let index = 0; index < array2Length; index++) {
    const value = array2[index]

    array[index + array1Length] = value
}

console.log(array)
 */


/*
exo 3
const users = [
    {
        id: 1,
        programmingLanguages: [
            "HTML",
            "CSS"
        ]
    },
    {
        id: 2,
        programmingLanguages: [
            "PHP",
            "JavaScript"
        ]
    },
    {
        id: 3,
        programmingLanguages: [
            "Elm",
            "JavaScript"
        ]
    },
    {
        id: 4,
        programmingLanguages: [
            "Haskell",
            "PureScript"
        ]
    }
]

const searchedLanguage = "JavaScript"

const filteredUsers = []

let index = 0

for (const user of users) {
    for (const programmingLanguage of user.programmingLanguages) {
        if (programmingLanguage === searchedLanguage) {
            filteredUsers[index++] = user
            break
        }
    }
}

console.log(filteredUsers)
 */


/*
Exo 4
const database = {
    operatingSystem: {
        user: {
            location: {
                latitude: 1.2345,
                longitude: 5.4321
            }
        }
    }
}

const path = ["operatingSystem", "user", "location", "latitude"]

let value = database

for (const part of path) {
    if (typeof value === "undefined") {
        break
    }

    if (part in value) {
        value = value[part]
    } else {
        value = undefined
    }
}

console.log(value)
 */


/*const siren = "543s21 5 "

function verifSiren(siren) {
    let result = 0
    siren = siren.toString()
    for (let i = 0; i < siren.length; i++) {
        if (!isNaN(parseInt(siren[i]))) {

            result = parseInt(siren[i]) + result
        }
    }
    if (result*2 % 10 === 0) {
        console.log(result)
        console.log("OK")
    } else {
        console.log("PAS OK")

    }
}


verifSiren(siren)*/


/*function adresse(pays, ville, cp) {
    this.pays = pays
    this.ville = ville
    this.cp = cp
}

function user(firstname, lastname, adresse) {
    this.firstname = firstname
    this.lastname = lastname
    this.adresse = adresse
}


const adresse1 = new adresse("FR","PARIS","75001")
const adresse2 = new adresse("FR","PARIS","75002")
const adresse3 = new adresse("FR","PARIS","75003")


const user1 = new user("firstname","lastname",adresse1)
const user2 = new user("firstname","lastname",adresse2)
const user3 = new user("firstname","lastname",adresse3)

console.log(user1)
console.log(user2)
console.log(user3)*/

/*

function List(array) {
    this.array = array
}

List.prototype.toText = function () {
    let chain = "";
    for (let i = 0; i < this.array.length; i++) {
        chain += this.array[i]
    }
    return chain;
}

function Text(text) {

}

const test = new List(["a", "c", "b"])
console.log(test.toText())
*/

/*
function Human(name) {
    this.name = name;
}

Human.prototype.charge = function () {
    return `${this.name} charge !!`
}

function Warrior(name, specialization) {
    Human.call(this, name)
    this.specialization = specialization;
}

Warrior.prototype.warcry = function () {
    return `En avant guerriers de  ${this.specialization} !`
}

function DeathKnight(weapon) {
    this.weapon = weapon;
}


const ossama = new Human("ossama");
console.log(ossama.charge())
*/
