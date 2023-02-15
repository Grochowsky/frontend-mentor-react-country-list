import { Component } from "react";
import "./country-info.css";

class CountryInfo extends Component {


  render() {
    const { country } = this.props;
    const {closeHandler} = this.props;
    return (
      <div className="country-info-container">
        <div class="btn-container" onClick={(event) => {closeHandler(event,country)}}>BACK</div>
        <div class="country-info">
          <div class="country-info-img">
            <img src={country.flags.svg} alt="" />
          </div>
          <div class="country info text">
            <h2>{country.name}</h2>
            <div class="additional-info">
              <div class="first-column">
                <p>Native name: {country.nativeName}</p>
                <p>population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div class="second-column">
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: 
                    {
                        
                    }
                </p>
                <p>Language:
                     {
                     country.languages.map((el) => {
                        return(
                            <span key={el.name}>{el.name} </span>
                        )
                    })
                     }
                     
                </p>
              </div>
             
            </div>
            <div class="border-countries">
                <p>
                  
                </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryInfo;
