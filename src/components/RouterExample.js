import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
    useHistory
} from 'react-router-dom';

const RouterExample = () => {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />

                    <Route component={PageNotFound} />
                </Switch>

            </Router>
        </div>
    );
};

const Header = () => {

    return (<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container-fluid'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/" >Welcome</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link' to="/home" >Home</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link' to="/register" >Register</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link' to="/about" >About</Link>
                </li>
            </ul>

        </div>

    </nav>)
};
const Welcome = () => <div className='container'>Welcome Component</div>;


const Home = () => {

    const history = useHistory();

    return (<div className='container p-5'>
    <div className='card'>
        <div className='card-header bg-dark text-white'>Home Component</div>
        <div className='card-body'>
            <button type='button' className='btn btn-outline-danger' onClick={ ()=> history.goBack()}>Back</button>

            <button type='button' className='btn btn-outline-success' onClick={ ()=> history.push('/welcome')}>Go To Welcome Component</button>

        </div>
    </div>
    </div>)
    };

const About = () => <div className='container'>About Component</div>;

const PageNotFound = () => <div className='container'>Page Not Found</div>;

export default RouterExample;