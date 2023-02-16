import React, { useEffect } from "react";
import { useState } from "react";

function Form() {
  // frontend data handlimg
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    date: "",
    Activitytype: "",
  });

  const [data, setdata] = useState([]);
  const [Api, setApi] = useState([]);
  const [getId, setGetId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

//  Purpose of handleChange function is to handle data changes in variable state formData/ Update state whenever value of input field is changed by user
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  // Purpose of savedata function is to update state with latest Api/form data added by user
  const savedata = (form) => {
    fetchdb();
    console.log(form);
    setdata([...data, form]);
  };
  console.log(data);

  
   //Purpose of fetchdb function is to fetch data from database and store in state variable Api 
  const fetchdb = async () => {
    var fetcheddata = await fetch("http://127.0.0.1:4000/exer");
    fetcheddata = await fetcheddata.json();
    setApi(fetcheddata);
  };
  useEffect(() => {}, []);
  // console.log(Api);

  // Edit data
  const editData = async (id) => {
    console.log(id);
    var fetcheddb = await fetch(`http://127.0.0.1:4000/exer/${id}`);
    fetcheddb = await fetcheddb.json();
    setGetId(id);
    setIsUpdating(!isUpdating);
    formData.name = fetcheddb.name;
    formData.description = fetcheddb.description;
    formData.duration = fetcheddb.duration;
    formData.date = fetcheddb.date;
    formData.Activitytype = fetcheddb.Activitytype;
    console.log(formData);
  };


  // Delete API
  const deleteData = async (id) => {
    await fetch(`http://127.0.0.1:4000/exer/${id}`, { method: "Delete" });
    fetchdb();
  };

  useEffect(() => {
    fetchdb();
  }, []);

  const postdata = async () => {
    if (!isUpdating) {
      savedata(formData);
      await fetch("http://127.0.0.1:4000/exer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      savedata(formData);
      await fetch(`http://127.0.0.1:4000/exer/${getId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }
    formData.name = "";
    formData.description = "";
    formData.duration = "";
    formData.date = "";
    formData.Activitytype = "";
  };

  const showdata = () => {
    fetchdb();
  };

  return (
    <>
      <div id="formback">
        <div
          className="container  mb-1 mt-0 pb-5 ml-2"
          style={{ border: "1px solid black" }}
        >
          l
          <div className="row">
            <div className="col-6 bg-dark">
              <form className="container mt-5">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    id="a1"
                    className="form-control text-dark"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    id="a2"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Duration:</label>
                  <input
                    id="a3"
                    className="form-control"
                    type="time"
                    name="duration"
                    onChange={handleChange}
                    value={formData.duration}
                  />
                </div>
                <div className="form-group">
                  <label>Date:</label>
                  <input
                    id="a4"
                    className="form-control"
                    type="date"
                    name="date"
                    onChange={handleChange}
                    value={formData.date}
                  />
                </div>
                <div className="form-group">
                  <label>Activity type:</label>
                  <select
                    value={formData.Activitytype}
                    // value=""
                    id="a5"
                    name="Activitytype"
                    class="custom-select"
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Running">Running</option>
                  </select>
                </div>

                <button 
                  type="button"
                  class="btn btn-primary btn-lg m-2"
                  onClick={() => postdata(formData)}
                  // onClick={() => fetchdb}
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-lg m-2"
                  onClick={showdata}
                  // onClick={() => fetchdb}
                >
                  Show card
                </button>
              </form>
            </div>

            {Api.map((ele) => {
              return (
                <div className="col-6">
                  <div class="card">
                    <div class="card-body ">
                      <h5 class="card-title">User Data</h5>
                      <p class="card-text"></p>
                      <div>
                        <div>
                          <label id="label2" value="varone">
                            Name :{ele.name}
                          </label>

                          <inp value="varone"> </inp>
                        </div>
                        <div>
                          
                          <label id="label2" value="vartwo">
                            Description :{ele.description}
                          </label>
                        </div>
                        <div>
                         
                          <label id="label2">
                            Duration :{ele.duration}
                          </label>
                        </div>
                        <label id="label2">Date : {ele.date} </label>
                        <div>
                         
                          <label id="label2">
                            Activity Type : {ele.Activitytype}
                          </label>
                        </div>

                        {/* Buttons */}
                        <div className="space-between">
                          <button
                            onClick={() => {
                              editData(ele._id);
                            }}
                            href="#"
                            class="btn btn-success m-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              deleteData(ele._id);
                            }}
                            href="#"
                            class="btn btn-danger m-2"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Form;
