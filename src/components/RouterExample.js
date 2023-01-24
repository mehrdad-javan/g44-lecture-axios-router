import React, { useState } from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
    useHistory,
    useParams,
    useLocation,
    Redirect
} from 'react-router-dom';

const RouterExample = () => {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route  path="/register" component={Form} />
                    
                    <Redirect from='/form' to="register" />

                    <Route  path="/data/:id" component={Data} />

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


const Form = () => {
    const history = useHistory();

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    const redirectToDisplayComponent = () => {
        const data = {id: id, name: name};

        history.push('/data/'+ id, data);
    }

    return (
        <div className='container p-5'>
        <div className='card'>
        <div className='card-header bg-dark text-white'>Form Component</div>
        <div className='card-body'>
            <br/>
            <div className='row'>
                <div className='col-3'>
                    <input type="text" name='id' onChange={(e)=> setId(e.target.value)} placeholder="Enter Id..." className='form-control'/>
                </div>
                <div className='col-3'>
                    <input type="text" name='name' onChange={(e)=> setName(e.target.value)} placeholder="Enter Name..." className='form-control'/>
                </div>

                <div className='col-2'>
                    <button type='button' className='btn btn-primary' onClick={redirectToDisplayComponent} >Add</button>
                </div>
            </div>



        </div>
    </div>
        </div>
    );
}

const Data = () => {
    let params = useParams();
    const location = useLocation();

    return (
        <div className='container'>Data Component - Id: {params.id}  -  {location.state.id} - {location.state.name}</div>
    )
};


const PageNotFound = () => <div className='container'>Page Not Found</div>;

export default RouterExample;