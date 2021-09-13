import axios from 'axios';
import React from "react";
import Map from './map';
// import Restaurants from './components/restaurants';
// import Restaurants from [need the url];
// import mapLink from 'https://maps.locationiq.com/v3/staticmap';
// import Weather from './weather';

const apiURL = process.env.REACT_APP_API_URL;

class Main extends React.Component {
    state = {
        q: null,  //this q needs to match the other commented search items so that state is updated
        location:  null,
        restaurants: null,
        };
    
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
        
        console.log(this.state.location);  //will help show when setState has finished

        this.getWeather(location);//if you pass location in, then you can do the location.lat below without this.state.location.lat
        this.getMovies(q);
    };

    getWeather = async (location) => {
        const response = await axios.get(`${apiURL}/weather`, {
            params:  {
                // key:  process.env.REACT_APP_WEATHER_KEY,  //needs to match .env and it has to start with REACT_APP_ then the name you want it to have
                q: location.q,
                lat:  location.lat,
                lon:  location.lon,
            },
        });
        console.log(response);

        this.setState({
            weatherData:  response.data,
        })
        console.log(this.state.weatherData);
    }

    getMovies = async (query) => {
        const response = await axios.get(`${apiURL}/movies`, {
            params: {
                q: query,
            },
        });
        console.log(response);

        this.setState({
            movieData:  response.data,
        })
        console.log(this.state.movieData);
    }
    
    render () {
        return (
            <main>
                <div>
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

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    
                    {this.state.weatherData && this.state.weatherData.map(weather => (
                        <div>
                            <strong>The weather forecast is:</strong><br />
                            <strong>Forecast Date:</strong>  {this.state.weatherData[0].time }<br />
                            <strong>Forecast Description:</strong>  {this.state.weatherData[0].description}<br />
    
                        </div>
                    ))}
                        
                </div>
               
                {this.state.q &&
                    <div>
                        {this.state.location ?
                        <p>Formal Location Name:  {this.state.location.display_name}<br />
                        Longitude:  {this.state.location.lat}<br />
                        Latitude:  {this.state.location.lon}</p>
                        :  <p>Loading...</p>    
                        }
                        <Map location = {this.state.location}/>
                        {/* <Weather forecast = {this.state.weatherData} /> */}

                    </div>
                }
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    
                    {this.state.movieData && this.state.movieData.map(movie => (
                        <div>
                            <strong>The movies associated with this location is/are:</strong>
                            <strong>Movie:</strong>  {this.state.movieData[0].title}<br />
                            <strong>Overview:</strong>  {this.state.movieData[0].overview}<br />
                            <strong>Average Votes:</strong>  {this.state.movieData[0].vote_average}<br />
                            <strong>Total Votes:</strong>  {this.state.movieData[0].vote_count}<br />
                            <strong>Poster URL:</strong>  {this.state.movieData[0].poster_path}<br />
                            <strong>Popularity:</strong>  {this.state.movieData[0].popularity}<br />
                            <strong>Released On:</strong>  {this.state.movieData[0].release_date}<br />
                        </div>
                    ))}
                        
                </div>
            </main>
        )
    }
}

export default Main;