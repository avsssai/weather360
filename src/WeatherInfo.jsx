import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faSun,faCloudSun,faCloudShowersHeavy,faCloudRain} from '@fortawesome/free-solid-svg-icons';


class WeatherInfo extends React.Component {
    
  render() {
    // var icon;
    // if(this.props.current === 'Clear'){
    //     icon = <i className="fas fa-sun"></i>
    // }
    var icon;
    if(this.props.current === 'Clear'){
        icon = faSun;
    }if(this.props.current === 'Overcast' ){
        icon = faCloudShowersHeavy;
    }if(this.props.current.includes('cloud')){
        icon = faCloudSun;
    }if(this.props.current.includes('rain')){
        icon = faCloudRain;
    }
    if(this.props.current === ('Cloudy' || 'mist')){
        icon = faCloudSun;
    }
    if(this.props.current.includes('rain')){
        icon = faCloudRain;
    }
    if(this.props.current === 'Sunny'){
        icon = faSun;
    }

    

    return (
      <div className="container" id='weather-info'>
        <div className="row justify-content-center">
          <div className="col-2" />
          <div className="col-8">
            <div className="card text-center">
              <div className="card-header">
                <h2>{this.props.location}</h2>
              </div>
              <div className="card-body">
                <h5 className="card-title">{this.props.current} <FontAwesomeIcon icon={ icon }/>
 </h5>
                <div className="card-text">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-5">
                        <h1>{this.props.temperatureInCelcius} &#176;C</h1>
                      </div>
                      <div className="col-5">
                        <h1>{this.props.temperatureInFarenheit} &#176;F</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
