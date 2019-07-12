import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'nes-react';
import { simpleAction } from './actions/simpleAction';
import Home from './modules/Home/Home';
import CreateEditSite from './modules/Site/CreateEditSite';
import './App.css';
class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <Container>
        <div className="App">
          <ul className="nes-list is-disc">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-site">Create Site</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-site" component={CreateEditSite} />
          </Switch>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
  ...state
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
