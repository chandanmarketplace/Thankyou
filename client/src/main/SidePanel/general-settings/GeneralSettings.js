import React from 'react'

const GeneralSettings = (props) => {
  return (
    <>
    <div className="header-LeftSide d-flex col-12 align-items-center bg-white">
    <a onClick={props.closeFunction} className="exit currentPageTitle polaris-custom-back">
      <svg
        viewBox="0 0 20 20"
        className="Polaris-Icon-back-menu"
        focusable="false"
        aria-hidden="true"
      >
        <path d="M1 0a1 1 0 00-1 1v3a1 1 0 002 0V2h16v16H2v-2a1 1 0 10-2 0v3a1 1 0 001 1h18a1 1 0 001-1V1a1 1 0 00-1-1H1z"></path>
        <path d="M6.414 9H14a1 1 0 110 2H6.414l3.293 3.293a.999.999 0 11-1.414 1.414l-5-5a.999.999 0 010-1.414l5-5a.999.999 0 111.414 1.414L6.414 9z"></path>
      </svg>
      <span>Back</span>
    </a>
    <div className="template-title-text template-title">General Settings</div>
  </div>
  </>
  )
}

export default GeneralSettings
