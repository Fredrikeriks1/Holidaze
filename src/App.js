import React from "react";
import Nav from "./components/layout/Nav";
import "./sass/styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthorizationProvider } from "./constants/Authorization";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Accommodations from "./components/accommodations/Accommodations";
import Establishments from "./components/admin/Establishments";
import Add from "./components/admin/Add";
import Edit from "./components/admin/Edit";
import EnquiryDetail from "./components/admin/EnquiryDetail";
import ViewMessage from "./components/admin/ViewMessage";
import Delete from "./components/admin/DeleteEstablishment";
import DeleteMessage from "./components/admin/DeleteMessage";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Detail from "./components/accommodations/Detail";
import Enquiry from "./components/enquiry/Enquiry";
import Messages from "./components/admin/Messages";
import Enquiries from "./components/admin/Enquiries";
import Dashboard from "./components/admin/Dashboard";

function App() {
  return (
    <AuthorizationProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accommodations" exact component={Accommodations} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/accommodations/:id" component={Detail} />
          <Route path="/enquiry/:id" component={Enquiry} />
          <ProtectedRoute
            path="/admin/establishments"
            exact
            component={Establishments}
          />
          <ProtectedRoute path="/admin/add" exact component={Add} />
          <ProtectedRoute path="/admin/delete" exact component={Delete} />
          <ProtectedRoute
            path="/admin/deletemessage"
            exact
            component={DeleteMessage}
          />
          <ProtectedRoute path="/admin/messages" exact component={Messages} />
          <ProtectedRoute path="/admin/enquiries" exact component={Enquiries} />
          <ProtectedRoute path="/admin/edit/:id" exact component={Edit} />
          <ProtectedRoute
            path="/admin/enquirydetail/:id"
            exact
            component={EnquiryDetail}
          />
          <ProtectedRoute
            path="/admin/viewmessage/:id"
            exact
            component={ViewMessage}
          />
          <ProtectedRoute path="/admin/dashboard" exact component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthorizationProvider>
  );
}

export default App;
