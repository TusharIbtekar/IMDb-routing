import React from 'react';
import Movies from './components/movies.component';
import Navbar from './components/navbar.component';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import NewMovie from './components/new-movie.component';
import NotFound from './components/not-found.component';
import Login from './components/login.component';
import SignUp from './components/sign-up.component';

const App = () => {
    return (
        <>
            <Navbar />
            <br />
            {/* <Movies /> */}
            <Link to="/movies">Movies</Link>
            <Link className='p-2' to="/new-movie">Create Movie</Link>
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/new-movie" component={NewMovie} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" />
                <Redirect to="not-found" />
            </Switch>
        </>
    );
}
 
export default App;