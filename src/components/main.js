import React from "react";

class Main extends React.Component {
    handleLocationSearch = submitEvent => {
        submitEvent.preventDefault();

        console.log('submitted', submitEvent.target);
    }
    
    
    render () {
        return (
            <main>
                <form onSubmit = {this.handleLocationSearch}>
                    <label>
                        Search for a location:
                        {' '} {/*adds a space between the label and the input box*/}
                        <input type = "text" name = "search" placeholder = "location" />
                    </label>
                    <div>
                        <button type = "submit">Search</button>
                    </div>
                </form>
            </main>
        )
    }
}

export default Main;