import React from 'react';

export default class ErrorTest extends React.Component {

    state={
        error:false,
    };

    render() {
        console.log('опять ошибка')
        if(this.state.error) {
            this.myTest.test = 'Сука сломал !!!!';
        }
        return(
            <button onClick={() => this.setState({error: true})} >Texst Error</button>
        )
    }
}