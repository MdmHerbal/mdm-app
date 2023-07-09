import "./App.css";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Register} from "./pages/Auth/Register";
import {Login} from "./pages/Auth/Login";

function App() {
    return (
        <Routes>
            <Route path="/"
                element={<HomePage/>}/>
            <Route path="/sign-up"
                element={<Register/>}/>
            <Route path="/sign-in"
                element={<Login/>}/>
        </Routes>
    );
}

export default App;
