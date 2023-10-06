import React from 'react'
import './componentPackMain.css'
import RightArrow from '../../assets/RightArrow.svg'
export default function componentsPack() {
  const tableStyle = {
    marginRight: '1em'
     // Replace '1em' with your desired value
  };
  return (
    <div className='componentsPackTable' style={{overflowX: 'auto'}}>
      <table width={'95%'} style={tableStyle}>
        <tbody>
          <tr>
            <th>Sr No.</th>
            <th style={{ width: '200px' }}>Componenet Pack</th>
            <th style={{ width: '200px' }}>Category</th>
            <th>No. of Domain</th>
            <th style={{ width: '50px' }}>No. of URL</th>
            <th>No. of Screen</th>
            <th>%Annotation</th>
            <th style={{ width: '150px'}}>Annotation Status</th>
            <th>%CSS Editing</th>
            <th>CSS Editing Status</th>
            <th>No. of Component</th>
            <th>Component Status</th>
            <th>Open</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Musical Store</td>
            <td>E-Commerce</td>
            <td>3</td>
            <td>20</td>
            <td>50</td>
            <td>100%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>90%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>32</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>
              <button className='arrowBtn'>
              <img src={RightArrow} alt="rightarrow" className='arrowIcon'/>
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Musical Store</td>
            <td>Project Management</td>
            <td>3</td>
            <td>20</td>
            <td>50</td>
            <td>100%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>90%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>32</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>
              <button className='arrowBtn'>
              <img src={RightArrow} alt="rightarrow" className='arrowIcon'/>
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Musical Store</td>
            <td>E-Commerce</td>
            <td>3</td>
            <td>20</td>
            <td>50</td>
            <td>100%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>90%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>32</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>
              <button className='arrowBtn'>
              <img src={RightArrow} alt="rightarrow" className='arrowIcon'/>
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Musical Store</td>
            <td>E-Commerce</td>
            <td>3</td>
            <td>20</td>
            <td>50</td>
            <td>100%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>90%</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>32</td>
            <td>
              <select name="verifaction" id="verifaction">
                <option value="None">None</option>
                <option value="Approved">Approved</option>
                <option value="Deny">Deny</option>
              </select>
            </td>
            <td>
              <button className='arrowBtn'>
              <img src={RightArrow} alt="rightarrow" className='arrowIcon'/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
