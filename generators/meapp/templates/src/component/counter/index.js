const React = require('react');
require('./index.less');

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.count();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  count() {
    this.setState({
      value: (this.state.value + 1)
    });
    setTimeout(() => {
      this.count();
    }, 1000);
  }

  render() {
    const state = this.state;
    return (
      <span className="counter">{state.value}</span>
    );
  }
}

Component.defaultProps = {
  value: 0
};

Component.propTypes = {
  value: React.PropTypes.number
};

module.exports = Component;
