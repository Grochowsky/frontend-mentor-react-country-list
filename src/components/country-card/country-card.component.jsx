import { Component } from "react";
import "./country-card.component.css";
import CountryInfo from "../cuntry-info/country-info.component";

class CountryCard extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      selectedCountry: null
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }


  handleCardClick = (event, country) => {
    this.setState(()=> {
      return {selectedCountry: country}
    })
  }

  handleCardClose = (event, country) => {
    this.setState(()=>{
      return { selectedCountry: null}
    })
  }

  render() {
    const { countries } = this.props;
    const { selectedCountry } = this.state;


    return (
      <>
        {countries.map((country) => {
          return (
            <div className="card" onClick={(event) =>{
              this.handleCardClick(event, country)
              
            } } key={country.alpha2Code}>
              <div className="cardimg">
                <img src={country.flags.svg} alt="" />
              </div>
              <div className="card-text">
                <h2>{country.name}</h2>
                <p>
                  <b>Population:</b> {country.population}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Capital:</b> {country.capital}
                </p>
              </div>
            </div>
          );
        })}
        {selectedCountry && <CountryInfo country={selectedCountry} closeHandler={this.handleCardClose} />}
      </>
    );
  }
}

export default CountryCard;
