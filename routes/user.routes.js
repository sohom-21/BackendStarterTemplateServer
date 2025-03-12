import {Router} from "express";

const userRoutes = Router();

userRoutes.get('/',(req ,res )=>{
    res.send({title : 'Get all the users'});
});

userRoutes.get('/:id',(req ,res )=>{
    res.send({title : 'Get user details'});
});

userRoutes.post('/',(req ,res )=>{
    res.send({title : 'create new user'});
});

userRoutes.put('/:id',(req ,res )=>{
    res.send({title : 'update the user'});
});

userRoutes.delete('/id',(req ,res )=>{
    res.send({title : ' delete the users'});
});

export default userRoutes;