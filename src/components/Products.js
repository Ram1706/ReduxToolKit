import { useSelector, useDispatch } from "react-redux";
import { favProductsAction } from "../store/favouiteProducts-slice";

import { DEFAULT_ITEMS } from "../App";
import { useEffect } from "react";

function Products() {
  const products = useSelector((state) => state.favProductsItems.products);
  const dispatch = useDispatch();

  const addFavouriteItem = (e, product) => {
    dispatch(favProductsAction.addfavouiteFoods(product));
  };

  useEffect(() => {
    dispatch(favProductsAction.addAllProducts({ items: DEFAULT_ITEMS }));
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={(e) => addFavouriteItem(e, product)}>
              Add to favourites
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
