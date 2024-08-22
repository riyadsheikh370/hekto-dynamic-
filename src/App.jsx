import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "../src/pages/Home"
import Pages from "./pages/Pages"
import Blog from "./pages/Blog"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/pages" element={<Pages />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
  </Route>
))


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}