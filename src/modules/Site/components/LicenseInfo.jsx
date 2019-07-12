import React, { Fragment, memo } from 'react';

function LicenseInfo({ handleChange }) {
  return (
    <Fragment>
      <div className="license-info-container nes-field">
        <label htmlFor="siteTitle" className="default_select">
          MindTouch Version:
          <select
            type="select"
            required
            id="default_select"
            name="mindTouchVersion"
            className="input nes-select"
          >
            <option value="1">Mindtouch Responsive</option>
            <option value="2">Mindtouch TCS</option>
            <option value="3">Mindtouch 4</option>
            <option value="4">Mindtouch 4 with responsive ready content</option>
          </select>
        </label>
      </div>
      <div className="nes-field">
        <label htmlFor="contactName">
          Contact Name:
          <input
            type="text"
            name="contactName"
            className="input nes-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="nes-field">
        <label htmlFor="contactEmail">
          Contact Email:
          <input
            type="text"
            name="contactEmail"
            className="input nes-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="nes-field">
        <label htmlFor="contactPhone">
          Phone Number:
          <input
            type="phone"
            name="contactPhone"
            className="input nes-input"
            onChange={handleChange}
          />
        </label>
      </div>
    </Fragment>
  );
}

export default memo(LicenseInfo);
