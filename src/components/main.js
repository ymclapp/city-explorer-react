import React from "react";
import Map from './components/map';
// import Location from [need the url];
import Restaurants from './components/restaurants';
// import Restaurants from [need the url];
// import mapLink from [need the url];
import axios from 'axios';

class Main extends React.Component {
    state = {
        q: null,  //this q needs to match the other commented search items so that state is updated
        location:  null,
        mapSrc:  null,
        restaurants: null,
        };
    }
    
    handleLocationSearch =  async submitEvent => {
        submitEvent.preventDefault();

        console.log('submitted!!', submitEvent.target);
        let form = submitEvent.target;
        let input = form.elements.q;  //q is the name of the input element below.  this q needs to match the other commented q items so that state is updated
        let q = input.value;  //value from the form
        console.log(q);
        
        this.setState ({
            q,  //this q needs to match the other commented q items so that state is updated
            location:  null,
            mapSrc:  mapLink,
            // restaurants: [need to set to the actual data source],
        });

        const url = `https://us1.locationiq.com/v1/search.php`;
        const response = await axios.get(url, {
            params:  {
                key:  process.env.REACT_APP_LOCATION_KEY,  //needs to match .env and it has to start with REACT_APP_ then the name you want it to have
                q,
                format:  'json',
            }  
        });

        console.log(response);

        const location = response.data[0];
        this.setState({location});
    };

    
    
    render () {
        return (
            <main>
                <form onSubmit = {this.handleLocationSearch}>
                    <label>
                        Search for a location:
                        {' '} 
                        <input type = "text" name = "q" placeholder = "location" />
                    </label>
                    <div>
                        <button type = "submit">Explore!!</button>
                    </div>
                </form>

                {this.state.q &&
                    <div>
                        Searched location is {this.state.q}
                        {this.state.location ?
                        <p>Display Name:  {this.state.location.display_name}</p>
                        :  <p>Loading...</p>    
                        }
                        <Map
                        location = {this.state.location}
                        src = {this.state.mapSrc}
                        />
                        <Restaurants
                        location = {this.state.location}
                        restaurants = {this.state.restaurants}
                        />
                    </div>
                }
            </main>
        )
    }

export default Main;