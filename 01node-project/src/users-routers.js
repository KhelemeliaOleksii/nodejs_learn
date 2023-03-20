const Router = require('../server/Router');

const router = new Router();

const users = [
    {id: 1, name:"UU"},
    {id: 2, name: "UI"},
]

router.get("/users", (req,res)=>{
    res.send(users);
})

router.post("/users", (req,res)=>{
    res.send(users);
})

module.exports = router;