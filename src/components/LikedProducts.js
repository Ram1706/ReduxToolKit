import { useSelector, useDispatch } from "react-redux";
import { favProductsAction } from "../store/favouiteProducts-slice";

function LikedProducts() {
  const dispatch = useDispatch();

  const favproducts = useSelector(
    (state) => state.favProductsItems.favproducts
  );

  const removeFavouriteItem = (e, product) => {
    dispatch(favProductsAction.removeFavourite(product));
  };
  return (
    <div>
      <h2>Favourite Products</h2>
      {favproducts.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={(e) => removeFavouriteItem(e, product)}>
              Remove item from favourites
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default LikedProducts;
