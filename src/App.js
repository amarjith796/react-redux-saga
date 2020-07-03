import React from 'react';
import './App.css';
import UsersListContainer from "./containers/usersList.container";
import {Switch, Route, Redirect, Prompt} from 'react-router-dom';
// import {Switch, Route, Redirect, BrowserRouter as Router, Link, NavLink, Prompt} from 'react-router-dom';

import HeaderComponent from './components/header.component';
import HomeComponent from './components/home.component';
import UsersComponent from './components/user.component';
import CounterContainer from './containers/counter.container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {handleLogin} from './actions/login.action';


function App(props) {
  const loginHandle = () =>{
    props.handleLogin();
  }

  const {loggedIn} = props;
  if(loggedIn){
    localStorage.setItem('loggedIn',loggedIn);
  }
  return (
    <div className="App">
     <HeaderComponent loggedIn={loggedIn} loginHandle={loginHandle} />
     <Prompt when={!loggedIn} message={(location)=>{return location.pathname.startsWith('/user') ? 'Are you sure?':true}} />
     <Switch>
       <Route exact strict path='/' component={HomeComponent} />
       <Route exact strict path='/counter/' component={CounterContainer} />
       <Route exact path='/user/:userName' render={({match})=> (
      loggedIn ? (<UsersComponent username={match.params.userName} />) : (<Redirect to="/" />)) } />
      <Route exact path='/users' render={()=> (
      loggedIn ? (<UsersListContainer />) : (<Redirect to="/" />)) } />
      <Route component={NoMatch} />
     </Switch>
    </div>
  );
}


const NoMatch = ({location}) =>{
  return (
    <div>
      <h3>
        No Match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    ...store.login
  }
}

const mapActionToProps = dispatch =>{
  return bindActionCreators({
    handleLogin : handleLogin
  }, dispatch)
}

export default connect(mapStateToProps,mapActionToProps)(App);
