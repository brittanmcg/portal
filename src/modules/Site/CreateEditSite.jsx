import React, { Component } from 'react';
import { connect } from 'react-redux';
import GeneralSiteInfo from './components/GeneralSiteInfo';
import * as asyncActions from './asyncActions';

class CreateEditSite extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // You would probably want to wrap this in a validate method
    this.props.onCreateSite(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create Site</h2>
        <GeneralSiteInfo handleChange={this.handleChange} />
        <input className="nes-btn is-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCreateSite: formData => dispatch(asyncActions.createSite(formData))
  };
};

const mapStateToProps = state => {
  return {
    siteInfo: state.siteReducer.view
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditSite);
