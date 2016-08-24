import React from 'react'

class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        List Page
    </div>);
  }
}

Component.defaultProps = {
};

Component.propTypes = {
};

module.exports = Component;
