import React, { Component } from 'react';
import { connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {count_increment, count_decrement} from '../actions/counter.action';
import CounterComponent from '../components/counter.component';
import {Redirect} from 'react-router-dom';
import {getCounterState, getLoggedInState} from '../selectors/selectors';

class CounterContainer extends Component{
  
    getCounterComponent =()=>{
        if(this.props.login.loggedIn){
            return <CounterComponent {...this.props} />;
        }
        return <Redirect to="/" />
    }

    render(){
        console.log(this.props);
        return(
            <>
                {this.getCounterComponent()}
            </>
        )
    }

}


const mapStateToProps = (store) => {
    return {
      count: getCounterState(store),
      login : getLoggedInState(store)
    }
  }
  
  const mapActionToProps = dispatch =>{
    return bindActionCreators({
      count_increment : count_increment,
      count_decrement : count_decrement
    }, dispatch)
  }
  
  export default connect(mapStateToProps,mapActionToProps)(CounterContainer);