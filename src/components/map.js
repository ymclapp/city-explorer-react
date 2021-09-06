import React from "react";

class Map extends React.Component {
    render() {
        let location = this.props.location;  //you do not need curly braces if you are inside the JavaScript area (where you can do let, if, functions, etc.), but do if you are inside of the jsx/return area
        
        return (
            <div id = "map">
                <h3>Map of {location.formatted_queryquery}</h3>  {/* you have to have the curly braces inside the jsx/return area*/}
                {this.props.src &&
                <img src = {this.props.src} 
                    alt = {`Map of ${location.formatted_query}`} />
                }
            </div>
        )
    }
}






export default Map;