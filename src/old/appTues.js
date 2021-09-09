import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    //does the same as the constructor(props) super (props) etc
    state = {  
        q: null,
        location:  null,
    };
    
    handleSearch = async event => {  //have to have async here to have await to work below
        event.preventDefault();

        let form = event.target;
        let input = form.elements.search;
        let q = input.value;
        console.log(q);
        
        //assign q in state to be value of q
        this.setState({q, location: null});  //clears the location info while searching for a new one

        const url = `https://us1.locationiq.com/v1/search.php`;
        const response = await axios.get(url, {
            params: {
                key: process.env.REACT_APP_LOCATION_KEY,  //needs to match .env and it has to start with REACT_APP_ then the name you want it to have
                q,
                format: 'json',
            }
        });
           
        console.log(response);
        
        const location = response.data[0];
        this.setState({location});
    };
    
    render () {
        return (
            <div className = "App">
                <form onSubmit = {this.handleSearch}>
                    <label>
                        Search for a location:
                        {' '}
                        <input type = "text" name = "search" placeholder = "Location" />
                    </label>
                    <div>
                        <button type = "submit">Search</button>
                    </div>
                </form>

                {this.state.q &&
                <>
                <h2>Search: {this.state.q}</h2>
                {this.state.location ?
                <p>Display Name:  {this.state.location.display_name}</p>
                : <p>Loading...</p>
                }
                </>
                }
            </div>
        );
    }
}

export default App;