require('babel-polyfill');
const React = require('react');
require('./index.less');

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    let value = e.target.value;
    e.preventDefault();
    this.props.onChange(value);
    this.setState({
      value
    });
  }

  toggleFocus(isFocus) {
    this.setState({
      isFocus
    });
    console.log(`isFocus: ${isFocus}`);
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div className="component">
        <h1>Hello {props.name} !</h1>
        <input value={state.value} onChange={this.handleChange}
          onFocus={this.toggleFocus.bind(this, true)}
          onBlur={this.toggleFocus.bind(this, false)} />
      </div>
    );
  }
}

Component.defaultProps = {
  name: '蛤蛤',
  value: '10',
  onChange: () => {}
};

Component.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

module.exports = Component;
