import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions';

// FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const ProductCard = (props) => {
  
  return (
    <div>

      <button onClick={() => props.deleteProduct(props.id)}>x</button>

      <Link to={`/product/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>

      <img src={props.image} alt={props.name}></img>

      <p>Stock: {props.stock}</p>

      <p>Precio: ${props.price}</p>


    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: id => dispatch(deleteProduct(id))
  }
}

export default connect(null, mapDispatchToProps)(ProductCard);