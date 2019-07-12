import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

/**
 * Renders a simple table with basic client side sorting.
 * Use to show a list of documents in a table view.
 * */
export default class Table extends Component {
  static propTypes = {
    action: PropTypes.func,
    data: PropTypes.array,
    sortBy: PropTypes.string,
    sortDir: PropTypes.oneOf(['asc', 'desc']),
    tableColumns: PropTypes.arrayOf(
      PropTypes.shape({
        arrayKey: PropTypes.string,
        btnValue: PropTypes.string,
        changeCaseType: PropTypes.string,
        header: PropTypes.string,
        key: PropTypes.string,
        link: PropTypes.string,
        sorting: PropTypes.bool,
        type: PropTypes.oneOf([
          'array',
          'link',
          'action',
          'label',
          'changeCase',
          'custom'
        ]).isRequired
      })
    ),
    noDataMessage: PropTypes.string.isRequired,
    sortEnabled: PropTypes.bool,
    hoverEnabled: PropTypes.bool
  };

  static defaultProps = {
    noDataMessage: 'No accounts have been added.',
    sortBy: 'name',
    sortDir: 'asc',
    sortEnabled: true,
    hoverEnabled: true
  };

  constructor(props) {
    super(props);
    this.state = {
      sortDir: this.props.sortDir,
      sortBy: this.props.sortBy,
      data: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    const { sortBy, sortDir, sortEnabled } = this.props;
    if (sortEnabled) {
      this.setState({
        data: _.orderBy(
          nextProps.data,
          row => {
            const value = _.get(row, sortBy);
            return _.isNumber(value) ? value : _.toLower(value);
          },
          sortDir
        )
      });
    }
  }

  changeSort = sortBy => {
    let sortDir;
    /* always default to ascending (A-Z) when we are clicking a different column */
    if (sortBy !== this.state.sortBy) sortDir = 'asc';
    else sortDir = this.state.sortDir === 'asc' ? 'desc' : 'asc';

    this.setState({
      sortBy,
      sortDir,
      data: _.orderBy(
        this.state.data,
        row => {
          const value = _.get(row, sortBy);
          return _.isNumber(value) ? value : _.toLower(value);
        },
        sortDir
      )
    });
  };

  renderColumnType = (column, row) => {
    console.log('row: ', row);
    switch (column.type) {
      case 'custom':
        return column.custom(row);

      // case 'link':
      //   return <Link to={`${column.link}`}>{_.get(row, column.key)}</Link>;
      case 'link':
        return <a href={`${column.link}`}>{_.get(row, column.key)}</a>;

      case 'action':
        return (
          <button
            className="btn control-button sm-size"
            onClick={() => this.props.action(row.id)}
          >
            {column.btnValue}
          </button>
        );

      case 'array': {
        const items = _.map(_.get(row, column.key), column.arrayKey).join(', ');
        return <span title={items}>{items}</span>;
      }

      default:
        return _.get(row, column.key, '-');
    }
  };

  render() {
    // const { data } = this.state;
    const { tableColumns, data } = this.props;

    if (!data) return null;

    console.log('tableData: ', data);

    return (
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              {tableColumns.map((column, index) => (
                <th>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => (
                <tr key={index}>
                  {tableColumns.map((column, colIndex) => (
                    <td key={colIndex} style={column.style}>
                      {this.renderColumnType(column, row)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
