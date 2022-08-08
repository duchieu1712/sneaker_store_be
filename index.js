const express = require('express');
const app = express();


app.use(express.static('.'))
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {

})

app.get("/",(req,res)=>{
    res.send(200,"hello")
})