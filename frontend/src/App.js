import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
import UserPage from "./pages/User.page";
import Layout from "./Layout";
import Drivers from "./pages/Drivers.page";
import Circuits from "./pages/Circuits.page";
import Constructors from "./pages/Constructor.page";

function App() {
  return (
      <BrowserRouter>
        {/* We are wrapping our whole app with UserProvider so that */}
        {/* our user is accessible through out the app from any page*/}
        <UserProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home/>} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route exact path="/drivers" element={<Drivers />} />
                  <Route exact path="/circuits" element={<Circuits />}/>
                  <Route exact path="/constructors" element={<Constructors />}/>
                {/* We are protecting our Home Page from unauthenticated */}
                {/* users by wrapping it with PrivateRoute here. */}
                <Route element={<PrivateRoute />}>
                  <Route exact path="/user" element={<UserPage />} />
                </Route>
              </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
  );
}

export default App;
