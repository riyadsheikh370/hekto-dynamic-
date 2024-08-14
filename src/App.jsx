import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "../src/pages/Home"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
  </Route>
))


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}