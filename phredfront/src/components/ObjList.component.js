import axios from "axios";
    import React, { useState, useEffect, useRef } from "react";
    import { baseURL, headers } from "../services/obj.service";
    import { useHistory } from "react-router-dom";
    export const ObjList = () => {
      const [objs, setObjs] = useState([]);
      const history = useHistory();
      const countRef = useRef(0);
      const [deleted, setDeleted] = useState(false);
      useEffect(() => {
        retrieveAllObjs();
      }, [countRef]);
      const retrieveAllObjs = () => {
        axios
          .get(`${baseURL}core/`, {
            /*headers: {
              headers,
            }, */
          })
          .then((response) => {
            setObjs(response.data);
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const deleteObj = (id) => {
        axios
          .delete(`${baseURL}core/${id}/`, {
           /* headers: {
              headers,
            }, */
          })
          .then((response) => {
            setDeleted(true);
            retrieveAllObjs();
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const handleUpdateClick = (id) => {
        history.push(`/core/${id}/update/`);
      };
    return (
        <div className="row justify-content-center">
          <div className="col">
            {deleted && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                Obj deleted!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            {objs &&
              objs.map((obj, index) => (
                <div className="card my-3 w-25 mx-auto">
                  <div className="card-body">
                    <h2 className="card-title font-weight-bold">{obj.name}</h2>
                    <h4 className="card-subtitle mb-2">{obj.pH}</h4>
                    <h4 className="card-text">{obj.SPO2}</h4>
                    <h4 className="card-text">{obj.temperature}</h4>
                    <h4 className="card-text">{obj.SPO2color}</h4>
                    <h4 className="card-text">{obj.turbidity}</h4>
                  </div>
                  <div classNameName="card-footer">
                    <div
                      className="btn-group justify-content-around w-75 mb-1 "
                      data-toggle="buttons"
                    >
                      <span>
                        <button
                          className="btn btn-info"
                          onClick={() => handleUpdateClick(obj.id)}
                        >
                          Update
                        </button>
                      </span>
                      <span>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteObj(obj.id)}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    };