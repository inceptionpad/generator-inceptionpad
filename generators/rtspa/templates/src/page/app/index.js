import React from 'react';
import { Link, hashHistory } from 'react-router'
import './index.less'

function goBack() {
  hashHistory.goBack();
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: ''
    };
    this.handlePathChange = this.handlePathChange.bind(this);
  }

  componentDidMount() {
    hashHistory.listen(this.handlePathChange);
  }

  handlePathChange(obj) {
    let pathname = obj.pathname.substring(1);
    this.setState({
      tab: pathname,
    });
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div className="app">
        <div>narbar: {state.tab}</div>
        <hr/>
        <div className="app-body">
          {this.props.children}
        </div>
        <hr/>
        <div>tabs: <Link to="/home" activeStyle={{color: '#c4c4c4'}} activeClassName="actived">Home</Link> |
          <Link to="/list" activeStyle={{color: '#c4c4c4'}} activeClassName="actived">List</Link> |
          <Link to="/detail/incpad?uid=1234" activeStyle={{color: '#c4c4c4'}} activeClassName="actived">Detail</Link>
        </div>
      </div>
    );
  }
}

Component.defaultProps = {
};

Component.propTypes = {
};

module.exports = Component;
