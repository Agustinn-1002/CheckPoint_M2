import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {

   const [input, setInput] = React.useState({
      name: '',
      price: 0,
      description: '',
      stock: 0,
   })

   const handleInputChange = (event) => {
      setInput({
         ...input,
         [event.target.name]: event.target.value
      })
   }


   const dispatch = useDispatch();
   const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(createProduct(input));
   }

  return (
      <form onSubmit={handleSubmit}>
         <label>Name: </label>
         <input name='name' onChange={handleInputChange}></input>

         <label>Price: </label>
         <input type='number' name='price' onChange={handleInputChange}></input>

         <label>Description: </label>
         <textarea name='description' onChange={handleInputChange}></textarea>

         <label>Stock: </label>
         <input type='number' name='stock' onChange={handleInputChange}></input>
         
         <button type='submit'>Create Product</button>
      </form>
   );
};

export default CreateProduct;
