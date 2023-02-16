import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Display() {
  const [exerData, setExerData] = useState([]);
  const getData = async () => {
    var data = await fetch("http://localhost:4000/exer");
    data = await data.json();
    setExerData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Activity Type</th>
            </tr>
            {exerData.map((element) => {
              return (
                <tr key={element._name}>
                  <td>{element._description}</td>
                  <td>{element.duration}</td>
                  <td>{element.date}</td>
                  <td>{element.activity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
