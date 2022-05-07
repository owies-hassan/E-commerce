

import Home from "./Pages/Home/Home";
import Buy from "./Pages/Buy/Buy";
import Details from "./Pages/Details/Details";
import Error from './Pages/Error/Error'
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/Sign-in/Sign-in";
import LogIn from "./Pages/Log-in/Log-in";
import Products from "./Pages/Products/Products";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Pages/Profile/Profile";
import 'animate.css'
function App() {
    return (
        <div className="App">

        <BrowserRouter>
            <Header />
            <LogIn />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/buy' element={<Buy/>}/>
                <Route exact path='/details/:id' element={<Details />}/>
                <Route exact path='/sign' element={<SignIn/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/products' element={<Products/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/:anything' element={<Error />}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
