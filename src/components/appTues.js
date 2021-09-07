import React from 'react';
import './App.css';

class App extends React.Component {
    state = {  //does the same as the constructor(props) super (props) etc
        q: null,
    };
    
    handleSearch = event => {
        event.preventDefault();

        let form = event.target;
        let input = form.elements.search;
        let q = input.value;
        console.log(q);
        this.setState({q});
    };
    
    render () {
        return (
            <div className = "App"
        )

    }
}