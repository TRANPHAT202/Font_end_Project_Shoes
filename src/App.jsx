import { Routes, Route } from "react-router-dom";
import TYPE_URL from "./utils/utils-path";
import Home from "./components/public/Home";
import Login from "./components/public/Login";
import Body from "./components/public/Body";
import ProductDetail from "./components/public/ProductDetaill";
function App() {
  return (
    <>
      <Routes>
        <Route path={TYPE_URL.HOME} element={<Home />}>
          <Route index element={<Body />} />
          <Route path={TYPE_URL.PRODUCT_DETAIL} element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
