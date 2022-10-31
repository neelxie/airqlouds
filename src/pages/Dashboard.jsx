import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as Africa } from "../assets/images/Africa.svg";
import Header from "../components/Header";
import Select from "../components/Select";

function Dashboard() {
  const navigate = useNavigate();
  const notify = (message) => toast.error(message, { theme: "colored" });

  const optionals = [{ name: "Uganda", id: 1, value: "Uganda" }];

  const [selected, setSelected] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [location, setLocation] = React.useState("");

  /** This sets different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const handleSelectCountry = (selected) => {
    setCountry(selected.value);
  };

  const selectLocation = (selected) => {
    setLocation(selected.target.value);
    if (selected.target.value === "Create Custom AirQloud") {
      navigate("/create");
    }
  };

  const handleSubmit = () => {
    if (!country || !location || !selected) {
      notify("Select Country, AirQloud type and Location.");
    } else {
      navigate("/qloud");
    }
  };

  /* Different arrays for different dropdowns */
  const districts = [
    "Amolatar",
    "Adjumani",
    "Apac",
    "Arua",
    "Gulu",
    "Kaabong",
    "Kitgum",
    "Koboko",
    "Kotido",
    "Lira",
  ];
  const cities = [
    "Bundibugyo",
    "Bushenyi",
    "Hoima",
    "Jinja",
    "Kabale",
    "Kalangala",
    "Kampala",
    "Kasese",
    "Kibaale",
    "Kiboga",
    "Kisoro",
  ];
  const counties = [
    "Butambala",
    "Bududa",
    "Agago",
    "Bundibugyo",
    "Buvuma",
    "Bugiri",
    "Alebtong",
    "Bushenyi",
    "Gomba",
    "Bukedea",
  ];
  const subcounties = [
    "Central Division ",
    "Kawempe Division",
    "Makindye Division",
    "Nakawa Division",
    "Rubaga Division",
  ];
  const parishes = [
    "Kololo IV",
    "Kibuye II",
    "Katwe II",
    "Old Kampala II",
    "Lubya",
  ];
  const villages = ["Community", "Nyago", "Kiganda", "Lubiri", "Bukesa"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Select City") {
    type = cities;
  } else if (selected === "Select County") {
    type = counties;
  } else if (selected === "Select District") {
    type = districts;
  } else if (selected === "Select Sub-county") {
    type = subcounties;
  } else if (selected === "Select Parish") {
    type = parishes;
  } else if (selected === "Select Village") {
    type = villages;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    let newType = [...type, "Create Custom AirQloud"];
    options = newType.map((place) => (
      <option key={place} className="SelectOptionsWrapper">
        {place}
      </option>
    ));
  }
  return (
    <div className="Main">
      <Header />
      <div className="Container">
        <div className="ImageSide">
          <Africa className="Africa" />
          <div className="Slogan">Clean Air For African Cities.</div>
        </div>
        <div className="FormSide">
          <div className="DashboardForm">
            <div className="LoginHeader">Select AirQloud</div>
            <label for="country">Choose Country</label>
            <Select
              type="select"
              id="exampleCustomSelect"
              name="country"
              class="custom-select"
              required
              placeholder="Select Country"
              options={optionals}
              onChange={handleSelectCountry}
            />
            <label for="basic-airqloud-type">Choose AirQloud type</label>

            <select
              onChange={changeSelectOptionHandler}
              className="SelectWrapper SelectElementValue SelectElementMain SelectElementPlaceholder"
            >
              <option className="SelectOptionsWrapper">
                Choose location..
              </option>
              <option className="SelectOptionsWrapper">Select City</option>
              <option className="SelectOptionsWrapper">Select District</option>
              <option className="SelectOptionsWrapper">
                Select Sub-county
              </option>
              <option className="SelectOptionsWrapper">Select County</option>
              <option className="SelectOptionsWrapper">Select Parish</option>
              <option className="SelectOptionsWrapper">Select Village</option>
            </select>
            <label for="location">Location</label>
            <select
              className="SelectWrapper SelectElementValue SelectElementMain"
              onChange={selectLocation}
            >
              {options}
            </select>
            <button
              className="btn btn-primary formCenter"
              type="submit"
              onClick={handleSubmit}
            >
              Select AirQloud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
