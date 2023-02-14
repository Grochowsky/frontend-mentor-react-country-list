import { Component } from "react";
import './country-card.component.css'

class CountryCard extends Component {
  render() {
    const { countries } = this.props;
    console.log(countries)

    return (
      <>
        {countries.map((country) => {
            console.log(country.flags)
          return (
            <div className="card">
              <div className="cardimg">
                <img src={country.flags.svg} alt="" />
              </div>
              <div className="card-text">
                <h2></h2>
                <p>Population</p>
                <p>Region</p>
                <p>Capital</p>
              </div>
              </div>
          );
        })}
      </>
    );
  }
}

export default CountryCard;
