import React, { Fragment, memo } from 'react';

function GeneralSiteInfo({ handleChange }) {
  return (
    <Fragment>
      <div className="nes-field">
        <label htmlFor="siteTitle">
          Site Title:
          <input
            type="text"
            name="siteTitle"
            className="input nes-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="nes-field">
        <label htmlFor="hostName">
          Host Name:
          <input
            type="text"
            name="hostName"
            className="input nes-input"
            onChange={handleChange}
          />
        </label>
      </div>
    </Fragment>
  );
}

export default memo(GeneralSiteInfo);
