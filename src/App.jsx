import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "../src/pages/Home"
import Pages from "./pages/Pages"
import Blog from "./pages/Blog"
import ProductDetails from "./pages/ProductDetails"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Error from "./pages/Error";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/pages" element={<Pages />}></Route>
    <Route path="/pages/:id" element={<ProductDetails />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Route>
))


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}