import React from 'react';

export default class ErrorTest extends React.Component {

    state={
        error:false,
    };

    render() {
        if(this.state.error) {
            this.myTest.test = 'Error test!!!!';
        }
        return(
            <button onClick={() => this.setState({error: true})} >Test Error</button>
        )
    }
}