import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DownArrow } from "../assets/images/black.svg";
import { ReactComponent as Logo } from "../assets/images/airqo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef(null);

  const toggleHidden = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("state");
    navigate("/");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHidden(false);
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
    <header>
      <Logo />
      <div
        ref={dropdownRef}
        className="headerWrap"
        onClick={toggleHidden}
        role="presentation"
      >
        <div className="UserNames">Derrick</div>
        <DownArrow className="DropdownArrowSvg" />
        {hidden && (
          <div className="dropdown">
            <div className="DropDownContent">
              <div className="Profile">Profile</div>
              <div
                role="presentation"
                onClick={logout}
              >
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
