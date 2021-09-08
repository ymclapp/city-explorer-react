import React from "react";

const key = process.env.REACT_APP_LOCATION_KEY;
const staticMapUrl = 'https://maps.locationiq.com/v3/staticmap';

class Map extends React.Component {
    
    render() {
        
        let location = this.props.location;  //you do not need curly braces if you are inside the JavaScript area (where you can do let, if, functions, etc.), but do if you are inside of the jsx/return area
        
    if(!location) return null;  //skips if no location

        let src = `${staticMapUrl}?key=${key}&center=${location.lat},${location.lon}&zoom=11`;
        
        return (
            <div id = "map">
                <h3>Map of {location.display_name}</h3>  {/* you have to have the curly braces inside the jsx/return area*/}
                <img src = {src}
                    alt = {`Map of ${location.display_name}`} />
            </div>
        )
    }
}


export default Map;