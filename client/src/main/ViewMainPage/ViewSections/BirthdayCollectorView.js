import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../ViewMainPage.css"

export const BirthdayCollectorView = ({
  buttonBg,
  buttonText,
  buttonTextColor,
  dateFormat,
  errorMsgClr,
  errorMsgText,
  free_text,
  placeHolderText,
  thankyouText,
  thankyouTextClr,
}) => {
  const [startDate, setStartDate] = useState();
  const [error, setError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className={"social_icons b-day-section"}>
      <div dangerouslySetInnerHTML={{ __html: free_text }}></div>
      <form className="thankyou-birthday">
        <div className="bday-eee">
          <label style={{ width:"100%" }}>
            <DatePicker
              placeholderText={placeHolderText}
              dateFormat={dateFormat}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>
          {error && (
            <div style={{ color: errorMsgClr || "red" }}>{errorMsgText}</div>
          )}
          {showThankYou && (
            <div style={{ color: thankyouTextClr || "green" }}>
              {thankyouText}
            </div>
          )}

            <button
              className="bday-button"
              style={{ color: buttonTextColor, backgroundColor: buttonBg }}
              onClick={() => {
                if (startDate) {
                  setError(false);
                  setShowThankYou(true);
                  // Call Api
                } else {
                  setError(true);
                  setShowThankYou(false);
                }
              }}
            >
              {buttonText}
            </button>

        </div>
      </form>
      <ul className={"social-media"}></ul>
    </div>
  );
};
