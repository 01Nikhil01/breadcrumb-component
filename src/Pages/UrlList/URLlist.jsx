import React from "react";
import "./urlList.css";
import RightArrow from "../../assets/RightArrow.svg";
import { data } from "../../constants/urlListData";
export default function URLlist() {
  const tableStyle = {
    marginRight: "1em",
    // Replace '1em' with your desired value
  };

  const GenerateRows = () => {
    return data.map((item) => (
      <tr key={item.srNo}>
        <td>{item.srNo}</td>
        <td>{item.screenIdNumber}</td>
        <td>{item.scrapping}</td>
        <td>
          <select name="verification" className="verification">
            <option value="None">None</option>
            <option value="Approved">Approved</option>
            <option value="Deny">Deny</option>
          </select>
        </td>
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
            <option value="Count">Count</option>
            <option value="Remove">Remove</option>
          </select>
        </td>
        <td>
          <button className="arrowBtn">
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
            <th style={{ width: "300px" }}>ScreenId</th>
            <th>Scrapping</th>
            <th style={{ width: "150px" }}>Annotation Status</th>
            <th>CSS Editing Status</th>
            <th>No. of Component</th>
            <th>Accounting</th>
            <th>Open</th>
          </tr>
          <GenerateRows />
        </tbody>
      </table>
    </div>
  );
}
