import React from 'react';

class Weather extends React.Component {
    render() {
        const weather = weatherData.props.weather;

        if(!location) return null;

        return (
            <div>
                {weather.map(
                    (weatherForecast, index) => (
                        key = {index}
                        {weatherForecast}
                    )
                )
            </div>
        )
    }
}

export default Weather;