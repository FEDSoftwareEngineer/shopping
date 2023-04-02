import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { Suspense } from "react";

import { Provider } from "react-redux";
import store from "./store";
import Loading from "./components/LoadingSuspense";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="details/:productId" element={<ProductDetails />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
