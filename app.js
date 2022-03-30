// const express = require("express");

// const express = require("express");

// const users = require("./users.json")

// const app = express();

// app.use(express.json());


// app.get("/", (req,res)=>{
//     res.send({ users })
// })

// app.post("/", (req,res)=>{
//     const newUsers = [...users, req.body];

//     res.send(newUsers);
// })

// app.patch("/:email", (req,res)=>{
//     const newUsers = users.map((user) =>{
//         if(req.params.email===user.email){
//         return req.body
//         }
//         return user
//     });
//     res.send(newUsers);
// })


// app.delete("/:email", (req,res)=>{
//     const newUsers = users.filter((user) => user.email !== req.params.email);

//     res.send(newUsers)
// })

// app.get("/:email", (req,res)=>{
//     const newUsers = users.filter((user) => user.email === req.params.email);
//     res.send(newUsers);
// })


// app.listen(2346, function (){
// console.log("Listening on 2346")
// })

const express = require("express");

const app = express();

const users = require("./users.json");

app.get("/",(req,res) => {
    console.log("Welcome to Home page");
    // console.log({users})
});

app.get("/:email",(req,res) => {
    const newUsers = users.filter((user) => req.params.email == user.email)
        res.send(newUsers)
        console.log(newUsers);
})

app.listen(2347,function(){
    console.log("listening on port 2347");
})