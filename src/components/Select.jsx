import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ReactComponent as DownArrow } from "../assets/images/blue.svg";
// import "./Select.css";

const Select = ({ required, placeholder, options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setValue] = useState(
    `${placeholder}${required ? " *" : ""}`
  );
  const openSelectRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleChange = (selectedOption) => {
    setValue(selectedOption.name);
    toggleOptions();
    onChange(selectedOption);
  };

  const handleClickOutside = (event) => {
    if (
      openSelectRef.current &&
      !openSelectRef.current.contains(event.target)
    ) {
      setShowOptions(false);
    }
  };

  // componentWillMount & componentWillUnmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // returned function will be called on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={openSelectRef} className="SelectWrapper">
      <div
        className="SelectElementMain"
        onClick={toggleOptions}
        role="presentation"
      >
        <div
          className={`SelectElementValue ${
            (selected.startsWith(placeholder) || showOptions) &&
            "SelectElementPlaceholder"
          }`}
        >
          {showOptions ? `${placeholder} ${required ? "*" : ""}` : selected}
          <div
            className={`SelectArrow ${showOptions && "SelectArrowShowOptions"}`}
          >
            <DownArrow />
          </div>
        </div>
      </div>
      {showOptions && (
        <div className="SelectOptionsWrapper">
          {options.map((option) => (
            <div
              key={option.id}
              className="SelectOption"
              onClick={() => handleChange(option)}
              role="presentation"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  required: false,
};

export default Select;
