import { Component } from "react";
import { Header, Footer} from "./Components/Sections/index";
import {Home, Browse, Profile, Streams} from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Container } from "./Components/index";
import "./App.css";
// import Gaming from "./Data/Gaming/Gaming";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Router basename={'/React_Cybrog_Website'}>
            <Header />
            <Container>
                <Routes>
                  <Route path="/" element = {<Home />}/>
                  <Route path="/browse" element = {<Browse />}/>
                  <Route path="/profile" element = {<Profile />}/>
                  <Route path="/streams" element = {<Streams />}/>
                </Routes>
            </Container>
            <Footer />
        </Router>
      </>
    );
  }
}

export default App;
