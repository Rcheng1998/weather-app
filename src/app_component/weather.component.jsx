import React from 'react';
import "./weather.style.css"

const Weather = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="cards col-lg-4 border">
                    <h1>{props.city}, {props.country}</h1>
                    <h5 className="py-4 float">
                        <i className={`wi ${props.weatherIcon} display-1`}></i>
                    </h5>
                    <h1 className="py-2">
                        {props.temp_fahrenheit}&deg;
                        {minmaxTemp(props.temp_min, props.temp_max)}
                    </h1>

                    <h4 className="py-3">{props.description}</h4>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">
                {min}&deg;
            </span>
            <span>{"-"}</span>
            <span className="px-4">
                {max}&deg;
            </span>
        </h3>
    );

}

export default Weather;