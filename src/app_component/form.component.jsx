import React from 'react';
import "./form.style.css"

const Form = props =>{
    return(
        <div className="container mb-4 mt-5">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"></input>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"></input>
                </div>
                <div className="col-md-3">
                    <button className="btn">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            <p>Please Enter City and Country</p>
        </div>
    )
}

export default Form;