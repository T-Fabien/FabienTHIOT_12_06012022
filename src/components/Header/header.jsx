import React from "react";

class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <div className="header__hello">
          <h1> Bonjour </h1>
          <h1 className="header__hello__name"> {this.props.firstname}</h1>
        </div>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
    );
  }
}

export default Header;
