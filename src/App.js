import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PrivateRoute from './components/Header/privateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import ManageService from './Pages/manageService/ManageService';
import NotFound from './Pages/NotFound/NotFound';
import Addservice from './Pages/service/Addservice';
import ServicesDetails from './Pages/serviceDetails/ServicesDetails';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/addservice">
            <Addservice></Addservice>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/manageService">
              <ManageService></ManageService>
          </Route>
          <Route path="/login">
              <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/service/:serviceId">
              <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <Route path="*">
                <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
