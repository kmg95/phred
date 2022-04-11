import axios from "axios";
    import React, { useState, useEffect, useRef } from "react";
    import { useParams } from "react-router-dom";
    import { baseURL, headers } from "./../services/obj.service";
    export const UpdateObj = () => {
      const initialObjState = {
        id: null,
        name: "",
        datum: null,
        pH: 0.00,
        SPO2: 0.00,
        temperature: 0.00,
        SPO2color: "",
        turbidity: ""
      };
      let { id } = useParams();
      const [currentObj, setCurrentObj] = useState(initialObjState);
      const [submitted, setSubmitted] = useState(false);
      const countRef = useRef(0);
      useEffect(() => {
        retrieveObj();
      }, [countRef]);
      const handleObjChange = (e) => {
        const { name, value } = e.target;
        setCurrentObj({ ...currentObj, [name]: value });
      };
      const retrieveObj = () => {
        axios
          .get(`${baseURL}core/${id}/`, {
            /*headers: {
              headers,
            },*/
          })
          .then((response) => {
            setCurrentObj({
                id: response.data.id,
                name: response.data.name,
                datum: response.data.datum,
                pH: response.data.pH,
                SPO2: response.data.SPO2,
                temperature: response.data.temperature,
                SPO2color: response.data.SPO2color,
                turbidity: response.data.turbidity
            });
            console.log(currentObj);
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const updateObj = () => {
        let data = {
            name: currentObj.name,
            datum: currentObj.datum,
            pH: currentObj.pH,
            SPO2: currentObj.SPO2,
            temperature: currentObj.temperature,
            SPO2color: currentObj.SPO2color,
            turbidity: currentObj.turbidity
        };
        axios
          .put(`${baseURL}/obj/${id}/`, data, {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setCurrentObj({
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
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const newObj = () => {
        setCurrentObj(initialObjState);
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
              Obj Updated!
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
              Update
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
                value={currentObj.name}
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
                value={currentObj.pH}
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
                value={currentObj.SPO2}
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
                value={currentObj.temperature}
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
                value={currentObj.SPO2color}
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
                value={currentObj.turbidity}
                onChange={handleObjChange}
                name="turbidity"
              />
            </div>
            <button onClick={updateObj} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
      );
    };