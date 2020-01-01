import React, { cloneElement } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import Footer from './app_component/footer.component';

const API_key = '87a9e743f138e909eb224f2c718871ad';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: "React Weather Application",
      country: undefined,
      icon: this.weatherIcon = "wi-day-sunny",
      main: undefined,
      fahrenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "Please enter the city and country!",
      error: false
    };

    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere:"wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  getWeather = async (e)=>{

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const response = await api_call.json();

      console.log(response);

      this.setState({
        city:response.name,
        country: response.sys.country,
        fahrenheit: this.calcFahrenheit(response.main.temp),
        temp_max: this.calcFahrenheit(response.main.temp_max),
        temp_min: this.calcFahrenheit(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      this.get_WeatherIcons(this.weatherIcon, response.weather[0].id);
    }
    else{
      this.setState({error: true});
    }
  }

  get_WeatherIcons(icons, rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
      case rangeID >= 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      default:
        this.setState({icon:this.weatherIcon.Clouds});
    }
  }

  calcFahrenheit(degree){
    console.log(degree);
    degree = Math.floor(((degree-273.15) * 1.8) + 32);
    console.log(degree);
    return degree;
  }

  render(){
    return(
    <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
      <Weather city={this.state.city} 
      country={this.state.country} 
      temp_fahrenheit={this.state.fahrenheit}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      weatherIcon={this.state.icon}
      />
      <Footer/>
    </div>
    );
  }
}

export default App;
