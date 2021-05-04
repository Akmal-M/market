import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Products from "../products";
import Login from "../auth/login";
import Register from "../auth/register";
import Cart from "../cart";
import NotFound from "../notFound";
import ProductDetail from "../productDetail";

const Main = () => {
    return (
        <Switch>
           <Route path='/' exact component={Products}/>
           <Route path='/detail/:id' exact component={ProductDetail}/>
           <Route path='/login' exact component={Login}/>
           <Route path='/register' exact component={Register}/>
           <Route path='/cart' exact component={Cart}/>



           <Route path='*' exact component={NotFound}/>
        </Switch>
    );
};

export default Main;