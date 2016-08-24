require('./index.less');
const React = require('react');
const ReactDom = require('react-dom');
const Counter = require('../../component/counter/index');

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div className="page-react">
        <h4>Value: {props.value}</h4>
        <hr></hr>
        <h4>Counter:</h4>
        <Counter value={300}/>
      </div>
    );
  }
}

Page.defaultProps = {
  value: 0
};

Page.propTypes = {
  value: React.PropTypes.number,
};


ReactDom.render(<Page {...window.initData}/>, document.getElementById('container'));
