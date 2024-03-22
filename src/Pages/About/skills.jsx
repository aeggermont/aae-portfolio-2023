import React from "react";
import PropTypes from 'prop-types';
import "./Skills.scss";

function Skills (props) {
  const data = Array.from(props.data);
  const screenDevice = props.screenDevice;

  return (
    <>
      {data.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;

Skills.prototype = {
  data: PropTypes.Array,
  screenDevice: PropTypes.object.isRequired
};
