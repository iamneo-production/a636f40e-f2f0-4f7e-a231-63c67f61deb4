const express = require("express");
const path=require("path");

const app=express();

app.get("/*",(req,res) => {
    res.sendFile(path.resolve("app1","index.html"));
});

app.listen(process.env.PORT || 8081, () => console.log("Server running ...."));
