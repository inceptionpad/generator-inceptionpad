import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div className="home">
        Home page
      </div>
    );
  }
}

Component.defaultProps = {
};

Component.propTypes = {
};

module.exports = Component;
