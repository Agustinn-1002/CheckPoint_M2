import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = () => {

    const dispatch = useDispatch();
    let id = useParams()
    const state = useSelector( state => state.productDetail )
    

    if(id) {
        React.useEffect(() => {
            dispatch(getProductDetail(id))
        })
    }

    return (
        <div>
            <p>{state.name}</p>
            <p>{state.price}</p>
            <p>{state.description}</p>
            <p>{state.stock}</p>
        </div>
    )
}

export default ProductDetail;
