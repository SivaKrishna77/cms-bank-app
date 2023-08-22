import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav";

import Home from "./home";
import AddCustomer from "./newcustomer";
import EditCustomer from "./updatecustomer";
import DeleteCustomer from "./customer";
import ViewAll from "./viewAll";
import NewCustomer from "./newcustomer2";
function App() {
    return (<div>
        <Router>
            
                <Nav />
                <Route path="/" component={Home} exact />
                <Route path="/add" component={AddCustomer} exact />
                <Route path="/update" component={EditCustomer} /> 
                <Route path="/delete" component={DeleteCustomer} />
                <Route path="/view" component={ViewAll} exact />
                <Route path="/new" component={NewCustomer} exact />
        </Router>
    </div>);
}

export default App;