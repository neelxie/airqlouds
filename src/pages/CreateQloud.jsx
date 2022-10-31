import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RemoveIcon from "../assets/images/remove.svg";
import TagsInput from "../components/TagsInput";

function CreateQloud() {
  const navigate = useNavigate();

  const notify = (message) => toast.error(message, { theme: "colored" });

  const [tags, setTags] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const addEnvVar = () => {
    if (latitude && longitude) {
      setLocation([...location, [latitude, longitude]]);
      setLatitude("");
      setLongitude("");
    }
  };

  const removeLocation = (index) => {
    setLocation((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const selectedTags = (tags) => {
    console.log(tags);
    setTags(tags);
  };
  console.log(tags);

  const submit = () => {
    if (!name || !description || location.length < 1) {
      notify("Some parts of the form are not filled in");
    } else if (name.length < 5 || name.length > 50) {
      notify("Name is either too long or too short");
    } else {
      navigate("/qloud");
      return axios
        .post(`/api/v1/devices/airqlouds?tenant=airqo`, {
          long_name: name,
          description: description,
          admin_level: "District",
          location: {
            type: "Polygon",
            coordinates: [...location],
          },
        })
        .then((response) =>
          localStorage.setItem("state", JSON.stringify(response))
        )
        .catch((error) => {
          notify(error);
        });
    }
  };
  return (
    <div className="Main">
      <Header />
      <div className="CContainer">
        <div className="Form-Wrapper">
          <div className="CreateForm">
            <div className="LoginHeader">Create AirQloud</div>

            <label for="qloudName">AirQloud Name</label>
            <input
              type="text"
              name="name"
              id=""
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <label for="basic-airqloud-type">AirQloud description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label for="tags">Add AirQloud tags</label>
            <TagsInput selectedTags={selectedTags} tags={["School"]} />

            <label for="location">Location</label>
            <div>
              {Object.keys(location).length > 0 && (
                <div className="LocationTable">
                  <table>
                    <thead>
                      <tr>
                        <td>Latitude</td>
                        <td>Longitude</td>
                        <td>Remove</td>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(location).map((oneArray, index) => (
                        <tr key={uuidv4()}>
                          <td>{location[oneArray][0]}</td>
                          <td>{location[oneArray][1]}</td>
                          <td>
                            <img
                              src={RemoveIcon}
                              alt="remove_ico"
                              onClick={() => removeLocation(index)}
                              role="presentation"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="LocationInputGroup">
                <div className="LocationInputs">
                  <input
                    placeholder="Latitude"
                    name="latitude"
                    className="form-control"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                  <input
                    placeholder="Longitude"
                    name="longitude"
                    className="form-control"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </div>
                <div className="LocationAddBtn">
                  <button onClick={addEnvVar} className="AddBtn btn">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary formCenter"
              type="submit"
              onClick={submit}
            >
              Select AirQloud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQloud;
