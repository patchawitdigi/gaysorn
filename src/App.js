import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GaysornHomepage from "./pages/GaysornHomepage";
import GaysornTowerpage from "./pages/GaysornTowerpage";
import GaysornCenterpage from "./pages/GaysornCenterpage";
import GaysornAmarinpage from "./pages/GaysornAmarinpage";
import LoginPage from './pages/backend/LoginPage';
import DisplayEnquiries from './pages/backend/DisplayEnquiries';
import DetailEnquiries from './pages/backend/DetailEnquiries';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Switch>
           <Route path="/" exact component={GaysornHomepage} />
           <Route path="/tower" exact component={GaysornTowerpage} />
           <Route path="/center" exact component={GaysornCenterpage} />
           <Route path="/amarin" exact component={GaysornAmarinpage} />
           <Route path="/backend/login" exact component={LoginPage} />
           <Route path="/backend/main" exact component={DisplayEnquiries} />
           <Route path="/backend/detail/:id" exact component={DetailEnquiries} />
           <Route path="/*" component={() => "Page not found"} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
