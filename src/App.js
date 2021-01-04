import { Switch, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import NotFound404 from './pages/NotFound404';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  
  return (
    <>
      <div className="App bg-gray-200">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <ScrollToTop key="scrollToTop" />
          <Switch location={location} key={location.pathname} >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/forgot-password' component={ForgotPasswordPage} />
            <Route component={NotFound404} />
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
