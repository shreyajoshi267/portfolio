import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        Footer Component
        {this.state.count}
      </div>
    );
  }
}

export default Footer;
