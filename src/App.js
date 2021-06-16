import "./styles.css";
import Products from "./components/Products";
import FavProducts from "./components/LikedProducts";
import { Provider } from "react-redux";
import store from "./store/store";

export const DEFAULT_ITEMS = [
  { name: "book", price: "26", id: 1 },
  { name: "pen", price: "10", id: 2 },
  { name: "note", price: "30", id: 3 }
];

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Products />
        <br />
        <FavProducts />
      </Provider>
    </div>
  );
}
