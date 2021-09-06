import React from "react";
import Map from './components/map';

class Main extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            search: null,  //this search needs to match the other commented search items so that state is updated
            location:  null,
            map:  null,
        };
    }
    
    handleLocationSearch = submitEvent => {
        submitEvent.preventDefault();

        console.log('submitted', submitEvent.target);
        let form = submitEvent.target;
        let input = form.elements.search;  //search is the name of the input element below.  this search needs to match the other commented search items so that state is updated
        let search = input.value;  //value from the form
        this.setState ({
            search,  //this search needs to match the other commented search items so that state is updated
            // location:  [need to set to the actual data source]
            mapSrc:  mapLink,
        });
    }
    
    
    render () {
        return (
            <main>
                <form onSubmit = {this.handleLocationSearch}>
                    <label>
                        Search for a location:
                        {' '} {/*adds a space between the label and the input box - have to do a comment this way when we are inside of the jsx such as render*/}
                        <input type = "text" name = "search" placeholder = "location" />  {/* this search needs to match the other commented search items so that state is updated*/}
                    </label>
                    <div>
                        <button type = "submit">Explore!!</button>
                    </div>
                </form>

                {this.state.search &&  /*conditional rendering - if the first thing exists, show the second.  If the first does not exist, show the first.  This one is saying if we have a search, then show the Searched location is with the location.  Otherwise, do not show that statement*/

                    <div>
                        Searched location is {this.state.search}  {/* this search needs to match the other commented search items so that state is updated*/}
                        <Map
                        location = {this.state.location}
                        src = {this.state.mapSrc}
                        />
                    </div>
                }
            </main>
        )
    }
}

export default Main;