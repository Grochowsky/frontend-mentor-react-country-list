import { Component } from "react";
import "./nav-component.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navigationBar">
        <span>Where in the world?</span>
        <div>
          <img src="" alt="" />
          Dark Mode
        </div>
      </nav>
    );
  }
}

export default Nav;
