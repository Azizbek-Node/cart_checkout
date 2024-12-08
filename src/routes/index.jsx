import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact";
import Help from "../pages/help/Help";
import Cart from "../pages/cart/Cart";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/yordam" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
