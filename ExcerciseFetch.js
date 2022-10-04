"use strict";

const URL = "https://reqres.in/api/users"
const URL2 = "https://reqres.in/api/users/2"




axios.get(URL)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(response);
    })

function getUsers() {
    axios.get("https://reqres.in/api/users")
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

function createUsers() {
    const name = document.getElementById("userName").value;
    console.log("NAME:" , name);
    axios.post("https://reqres.in/api/users", {
        name,
        "job": "leader"
}).then(res => console.log(res))
    .catch(err => console.error(err));
    }


axios.post(URL, {
 
name: "morphius",
job: "leader"
})
.then(function (response) {
    console.log(response);
})
.catch(function (error1) {
    console.error(error1);
})