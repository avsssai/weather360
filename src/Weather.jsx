import React from "react";
import Input from "./Input";
import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      data: [],
      location: "",
      temperatureInC: "",
      temperatureInF: "",
      current: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.getWeather("paris");
  }
  handleChange(value) {
    this.setState({
      cityName: value
    });
  }
  getWeather(city) {
    fetch(
      `https://api.apixu.com/v1/current.json?key=2da827a3ce074ddb854173742190807&q=${city}`
    )
      .then(res => res.json())
      .then(data => {
        this.getData(data);
      })
      .catch(err => {
        return Promise.reject();
      });
  }
  getData(data) {
    if (data.location.name === undefined) {
      data.location.name = "cannot fetch the weather in that city.";
    } else {
      var location = data.location.name;
      var temperatureInCelcius = data.current.temp_c;
      var temperatureInFarenheit = data.current.temp_f;
      var text = data.current.condition.text;
    }

    this.setState({
      data: data,
      location: location,
      temperatureInC: temperatureInCelcius,
      temperatureInF: temperatureInFarenheit,
      current: text
    });
    console.log(this.state.location, this.state.value);
    console.log(this.state.data);
    console.log(this.state.current);
  }
  handleSubmit() {
    var cityName = this.state.cityName;
    if (cityName === "") {
      return;
    }
    this.getWeather(cityName);
    this.setState({ cityName: "" });
  }

  render() {
    return (
      <div className="container ">
        <div className="row justify-content-md-center ">
          <div className="col-2" />
          <div className="col-8">
            <Header />
            <Input
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              value={this.state.cityName}
              className="weather-input"
            />
            <WeatherInfo
              location={this.state.location}
              temperatureInCelcius={this.state.temperatureInC}
              temperatureInFarenheit={this.state.temperatureInF}
              current={this.state.current}
              className="weather-info"
            />
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default Weather;
