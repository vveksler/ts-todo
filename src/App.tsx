import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path="/" exact />
                    <Route component={AboutPage} path="/about" />
                    <Route
                        path="*"
                        component={() => <h1>Page not found 404</h1>}
                    />{' '}
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
