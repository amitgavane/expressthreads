const express =require("express");
const app = express();
// console.dir(app);

let port=8080;
app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
});

// app.use((req,res)=>{
//     //console.log(req);
//     console.log("request received");
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// });

app.get("/",(req,res)=>{
    res.send("Ram ram bhau root directory madhe ahes");
})

app.get("/:username/:id",(req,res)=>{
    let{username ,id}=req.params;
    res.send(`you are in ${username} path with ${id}`);
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("success");
})