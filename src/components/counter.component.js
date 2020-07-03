import React from 'react';

const CounterComponent = (props) =>{
    const {count, count_increment, count_decrement} = props;
    return(
        <div>
            <h1>Counter: {count.counter}</h1>
            <p>{count.loading ? 'Loading...' :''}</p>
            <br />
            <button onClick={count_increment}>Increment</button>
            <button onClick={count_decrement}>Decrement</button>
        </div>
    )
}

export default CounterComponent;