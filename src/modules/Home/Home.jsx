import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Table from './components/Table';
import * as asyncActions from './asyncActions';

class Home extends Component {
  componentDidMount() {
    this.props.onGetSiteInfo();
  }
  render() {
    const tableColumns = [
      {
        key: 'siteTitle',
        type: 'link',
        link: 'https://natureboy.mindtouch.be/',
        header: 'Site Name'
      },
      {
        key: 'licenseInformation.contactName',
        header: 'Site Owner'
      },
      {
        key: 'hostName',
        header: 'Host Name'
      },
      {
        key: 'licenseInformation.startDate',
        header: 'Start Date'
      }
    ];

    return (
      <div className="home-container">
        <Table data={this.props.siteData} tableColumns={tableColumns} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetSiteInfo: () => dispatch(asyncActions.getSiteInfo())
  };
};

const mapStateToProps = state => {
  return {
    siteData: _.get(state, 'homeReducer.list.siteData', [])
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
