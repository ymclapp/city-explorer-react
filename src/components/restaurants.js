import React from 'react';

class Restaurants extends React.Component {
    render () {
        return (
            <section id = "restaurants">
                <h3>Restaurants in {this.props.location.formatted_query}</h3>
                <ul>
                    {this.props.restaurants && this.props.restaurants.map ((place, idx) => (
                        <li key = {idx}>
                            <p> Name:  {place.restaurant}</p>
                            <p> {place.restaurant} serves {place.cuisines} food</p>
                        </li>
                                        
                    ))}
                </ul>
            </section>
        )
    }
}