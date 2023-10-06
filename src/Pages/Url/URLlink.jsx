import React from "react";
import "./urlLink.css";
import RightArrow from "../../assets/RightArrow.svg";
import { data } from "../../constants/urlData";
import { useNavigate } from "react-router-dom";
export default function URLlink() {
  const tableStyle = {
    marginRight: "1em",
    // Replace '1em' with your desired value
  };

  const GenerateRows = () => {
    const navigate = useNavigate();
    return data.map((item) => (
      <tr key={item.srNo}>
        <td>{item.srNo}</td>
        <td>{item.urllink}</td>
        <td>{item.numberOfScreen}</td>
        <td>{item.annotationPercentage}</td>
        <td>
          <select name="verification" className="verification">
            <option value="None">None</option>
            <option value="Approved">Approved</option>
            <option value="Deny">Deny</option>
          </select>
        </td>
        <td>{item.cssEditingPercentage}</td>
        <td>
          <select name="verification" className="verification">
            <option value="None">None</option>
            <option value="Approved">Approved</option>
            <option value="Deny">Deny</option>
          </select>
        </td>
        <td>{item.numberOfComponent}</td>
        <td>
          <select name="verification" className="verification">
            <option value="None">None</option>
            <option value="Approved">Approved</option>
            <option value="Deny">Deny</option>
          </select>
        </td>
        <td>
          <button
            className="arrowBtn"
            onClick={() => {
              navigate("/DomainName/Url/List");
            }}
          >
            <img src={RightArrow} alt="rightarrow" className="arrowIcon" />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="componentsPackTable" style={{ overflowX: "auto" }}>
      <table width="95%" style={tableStyle}>
        <tbody>
          <tr>
            <th>Sr No.</th>
            <th style={{ width: "300px" }}>URL</th>
            <th>No. of Screen</th>
            <th>%Annotation</th>
            <th style={{ width: "150px" }}>Annotation Status</th>
            <th>%CSS Editing</th>
            <th>CSS Editing Status</th>
            <th>No. of Component</th>
            <th>Component Status</th>
            <th>Open</th>
          </tr>
          <GenerateRows />
        </tbody>
      </table>
    </div>
  );
}
