import { constants } from 'buffer';
import React from 'react';

const key = process.env.REACT_APP_WEATHER_KEY;
const apiUrl = process.env.REACT_APP_API_URL;


class Weather extends React.Component {
    
    render () {
        
        let location
        if(!location) return null;  //skips if no location

        let src = `${apiUrl}?key=${key}&center=${location.lat},${location.lon}&zoom=11`;
        
        return (
            <section id = "weather">
                <h3>Weather in {this.props.location.formatted_query}</h3>
                <ul>
                    {this.props.weather && this.props.weather.map ((place, idx) => (
                        <li key = {idx}>
                            <p> lat:  {place.restaurant}</p>
                            <p> {place.restaurant} serves {place.cuisines} food</p>
                        </li>
                                        
                    ))}
                </ul>
            </section>
        )
    }
}