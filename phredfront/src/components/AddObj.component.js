import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "../services/obj.service";
export const AddObj = () => {
  const initialObjState = {
    id: null,
    name: "",
    datum: null,
    pH: 0.00,
    SPO2: 0.00,
    temperature: 0.00,
    SPO2color: "",
    turbidity: "",
  };
  const [obj, setObj] = useState(initialObjState);
  const [submitted, setSubmitted] = useState(false);
  const handleObjChange = (e) => {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };
  const submitObj = () => {
    let data = {
      name: obj.name,
      datum: obj.datum,
      pH: obj.pH,
      SPO2: obj.SPO2,
      temperature: obj.temperature,
      SPO2color: obj.SPO2color,
      turbidity: obj.turbidity
    };
    axios
      .post(`${baseURL}core/`, data, {
        /*headers: {
          headers,
        },*/
      })
      .then((response) => {
        setObj({
          id: response.data.id,
          name: response.data.name,
          datum: response.data.datum,
          pH: response.data.pH,
          SPO2: response.data.SPO2,
          temperature: response.data.temperature,
          SPO2color: response.data.SPO2color,
          turbidity: response.data.turbidity
        });
        setSubmitted(true);
        console.log(response.data);
        console.log()
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newObj = () => {
    setObj(initialObjState);
    setSubmitted(false);
  };
  
return (
    <div className="submit-form">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Obj Added!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newObj}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={obj.name}
                  onChange={handleObjChange}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pH">pH</label>
                <input
                  type="number"
                  className="form-control"
                  id="pH"
                  required
                  value={obj.pH}
                  onChange={handleObjChange}
                  name="pH"
                />
              </div>
              <div className="form-group">
                <label htmlFor="SPO2">SPO2</label>
                <input
                  type="number"
                  className="form-control"
                  id="SPO2"
                  required
                  value={obj.SPO2}
                  onChange={handleObjChange}
                  name="SPO2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="temperature">temperature</label>
                <input
                  type="number"
                  className="form-control"
                  id="temperature"
                  required
                  value={obj.temperature}
                  onChange={handleObjChange}
                  name="temperature"
                />
              </div>
              <div className="form-group">
                <label htmlFor="SPO2color">SPO2color</label>
                <input
                  type="text"
                  className="form-control"
                  id="SPO2color"
                  required
                  value={obj.SPO2color}
                  onChange={handleObjChange}
                  name="SPO2color"
                />
              </div>
              <div className="form-group">
                <label htmlFor="turbidity">turbidity</label>
                <input
                  type="text"
                  className="form-control"
                  id="turbidity"
                  required
                  value={obj.turbidity}
                  onChange={handleObjChange}
                  name="turbidity"
                />
              </div>
              <button onClick={submitObj} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
  );
};