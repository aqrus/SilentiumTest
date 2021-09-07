const express = require('express');
const app = express();
const cookiesParser = require('cookie-parser');
app.use(cookiesParser());


app.get('/api/transition/:color', (req, res) => {
    
    const { color } = req.params;
    const { nextstep } = req.query;
    
    let cookieColor = req.cookies.color ? req.cookies.color : "" ;

    if(cookieColor && nextstep === cookieColor || color !== 'blue' && nextstep !== 'blue'){
        return res.status(400).json({
            error: `${nextstep} is invalid`
        })
    } 

    if(nextstep === "yellow" || nextstep === "green") {
        res.cookie('color', nextstep);
    }

    res.json({
        nextstep: nextstep
    })
})
app.get('/', (req, res) => {
    res.send({
        message: "server is started"
    })
})
app.listen(5000, () => {
    console.log(`server started on port 5000 `)
})