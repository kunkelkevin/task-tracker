import React, { useEffect } from "react";
import ProjectList from "../Project";
import { useStoreContext } from "../../utils/GlobalState";
import { EDIT_CUSTOMER } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CUSTOMER } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"

function CustomerList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_CUSTOMER);

  useEffect(() => {
    if(data) {
      dispatch({
           type: EDIT_CUSTOMER,
          customer: data.customer
        });
        data.customer.forEach((customer) => {
          idbPromise('customer', 'put', customer);
        });
    } else if (!loading) {
      idbPromise('customer', 'get').then((customer) => {
        dispatch({
          type: EDIT_CUSTOMER,
         customer: customer
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
            {filterProducts().map(product => (
                <ProductItem
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default ProductList;