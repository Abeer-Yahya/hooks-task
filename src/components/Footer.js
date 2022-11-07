import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="bg-dark text-center text-light fixed-bottom ">
          <div className="text-center p-3">© All rights reserved</div>
        </footer>
      </>
    );
  }
}

export default Footer;
