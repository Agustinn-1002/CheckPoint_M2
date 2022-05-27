import axios from 'axios';

// Recuerden inicializar la variable de idProduct.

// Aca deben declarar las variables donde tengan el action types.
// Esten atentos a que los nombres de las variables coincidan.


// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

export const getAllProducts = () => {
  return async function (dispatch) {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products
    // Pueden hacer la peticion con fetch o axios (documentación de axios: https://axios-http.com/docs/example)
    // Aclaración: todas las peticiones al back son asíncronas.
    
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products/:id
  };
};

// Desde el componente correspondiente ejecutamos esta action creator, pasandole por params las values que vamos a usar para
export const createProduct = undefined;

export const deleteProduct = undefined;
