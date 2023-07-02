import "./App.css";
import Dashboard from "./components/Dashboard";
import Soaps from "./components/Soaps"
import Cart from "./components/Cart"
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/soaps" element={<Soaps/>}/>
      <Route path="/cart-items" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
