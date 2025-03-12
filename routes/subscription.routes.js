import {Router} from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/',(req ,res )=>{
    res.send({title : 'get all subscriptions'});
});

subscriptionRoutes.get('/:id',(req ,res )=>{
    res.send({title : 'get subscriptions details'});
});

subscriptionRoutes.post('/',(req ,res )=>{
    res.send({title : 'create new subscription'});
});

subscriptionRoutes.put('/:id',(req ,res )=>{
    res.send({title : 'update new subscription'});
});

subscriptionRoutes.delete('/:id',(req ,res )=>{
    res.send({title : 'Delete subscriptions'});
});

subscriptionRoutes.get('/user/:id',(req ,res )=>{
    res.send({title : 'get all user subscriptions'});
});

subscriptionRoutes.put('/:id/cancel',(req ,res )=>{
    res.send({title : 'Cancel subscription'});
});
subscriptionRoutes.get('/upcoming-renewals',(req ,res )=>{
    res.send({title : 'get up-coming Renewals'});
});

export default subscriptionRoutes;
