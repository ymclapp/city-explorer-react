import React from "react";

class Location extends React.Component {
    componentDidMount () {
        const apiURL = 'https://maps.locationiq.com/v3/staticmap';
        fetch (apiURL)
        .then ((response) => response.json())
        .then ((data) => console.log('This is your data', data));
    }
    render () {
        return <h1>My component has Mounted.  Check the browser 'console'</h1>;
    }
}

export default Location;