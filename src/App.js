import React from "react"
import Home from "./components/Home/Home";
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";


function App() {
  return (
    <>
      <Nav />
      <Route exact path='/'> <Home /> </Route>
      <Route path='/product/:id'> <ProductDetail /> </Route>
      <Route path='/products/create'> <CreateProduct /> </Route>
    </>
    )
}
export default App;

