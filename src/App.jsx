import "./App.css";
import { Component } from "react";
import CountryCard from "./components/country-card.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { countries: users };
          },
          () => {
            console.log(this.state.countries);
          }
        )
      );
  }

  onChangeHandler = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { onChangeHandler } = this;
    const { searchField, countries } = this.state;

    let filteredCountries = countries.filter((el) => {
      return el.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input placeholder="search" type="search" onChange={onChangeHandler} />
        <CountryCard countries={filteredCountries}/>
      </div>
    );
  }
}

export default App;
