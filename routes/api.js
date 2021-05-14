const router = require('express').Router();
const path = require('path');

router.get("/api/:date", function (req, res) {
    const regExp = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    let input = req.params.date;
    let date;
    
    if(regExp.test(input)){
        date = new Date(input);
    }else{
        date = new Date(Number(input));
    }

    res.json({
        "unix":date.getTime(),
        "utc":date.toUTCString()
    });
});


module.exports = router;