import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppLayout } from './components/layouts/Layout';

// Pages
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Api } from './pages/Api';
import { Contact } from './pages/Contact';
import { Custom404 } from './pages/Custom404';

// //*
import { Footer } from './components/Footer';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <AppLayout>
        <React.Fragment>

          <Router>
            {/* //site header contains navbar */}
            <Header />
            {/* //Route Links */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/api" component={Api} />
              <Route path="/contact" component={Contact} />
              <Route component={Custom404} />
            </Switch>

            {/* //Site footer */}
            <Footer />
          </Router>

        </React.Fragment>
      </AppLayout>
    </div>
  );
}

export default App;
