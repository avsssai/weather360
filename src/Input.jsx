import React from "react";
import './styles.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit();
  }
  handleChange(e){
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
    
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            className='form-control'
            id="input"
            type="text"
            placeholder="Enter the city name.."
            onChange={this.handleChange}
            value={this.props.value}
          />
        
        <button className='btn btn-primary ml-3' id='button' >Search</button>
        </div>
        
      </form>
    );
  }
}

export default Input;