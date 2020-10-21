import React from "react"
import AutoComplete from "./AutoComplete"
import "./Autocomplete.css"
import Table1 from './Table1'
import './meter.css'
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
import MyApp from "./date"
import AutoComplete1 from './Autocomplete/AutoComplete1'
import AutoComplete4 from './Autocomplete/Autocomplete4'
import AutoComplete3 from './Autocomplete/Autocomplete3'
import AutoComplete5 from './Autocomplete/Autocomplete5'
import Basic from "./Table2"
import Auto1 from "./Auto1"

function FormComponent(props){
    return(
        <main>
                <Button
                    label="Add Meter"
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                <br />
                <br />
                <h4 style={{textAlign:"left"}}>Network Hierarchy / Address</h4>
                <hr />
                <table >
                <th className="space1">
                <Auto1 items={props.Circle_name} label="Circle Name" /></th>
                <th className="space">
                <AutoComplete items={props.Division_name} label="Division Name"/></th>
                <th className="space">
                <AutoComplete items={props.Sub_divname} label="SubDivision Name" /></th>
                <th className="space">
                <AutoComplete items={props.Section_name} label="Section Name" /></th>
                <tr>
                <th className="space1">
                <AutoComplete items={props.Town_name} label="Town Name" /></th>
                <th className="space">
                <AutoComplete items={props.ss_name} label="SS Name" /></th>
                <th className="space">
                <AutoComplete items={props.Feeder_name} label="Feeder Name" /></th>
                <th className="space"><AutoComplete items={props.Dt_name} label="DT Name" /></th>
                </tr>
                </table>
                <div>
                    {props.data.on?
                    <div className="container-fluid" ><h4 >Meter Manufacturer</h4>
                    <hr />
                    <table>
                <th className="space1">
                <AutoComplete items={props.M_name} label="Manfacturer Name" /> </th>
                <th className="space">
                <AutoComplete1 label="Meter Name"/></th>
                <th className="space">
                <AutoComplete items={props.year} label="Manfacturer Year" /></th>
                <th className="space">
                <AutoComplete3 label="Meter Category" /></th>
                <tr>
                <th className="space1">
                <AutoComplete4 label="Firmware Version" /></th>
                </tr>
                </table>
                </div>:null}
                </div>
                <div>
                    {props.data.on1?
                   <div> <h4 >Communication Status</h4>
                   <hr />
                    <table>
                <th className="space1">
                <AutoComplete items={props.Comm} label="Communicated" /> </th>
                <th className="space">
                <label>From Date</label><MyApp /></th>
                <th className="space">
                <label>To Date</label><MyApp /></th>
                </table></div>
                :null}
                </div>
                <div>
                    {props.data.on2?
                    <div>
                    <th className="space1">
                <AutoComplete items={props.mg} label="Meter Group" /></th>
                <th className="space"><AutoComplete5 label="Meter Serial Number" /></th></div>
                :null}</div>
                <br />
                <div>
                <div className="p-grid">
                <div className="p-col-12 p-md-3">
                <div class="dropup">
  <Button
                    label="Advance Filter"
                    type="button"
                    class="dropbtn"
                    style={{ width: 200 }}
                  />
  <div class="dropup-content">
    <a onClick={props.toggle}>Meter Manufacturer</a>
    <a onClick={props.toggle1}>Communication Status</a>
    <a onClick={props.toggle3}>To Search Further</a>
  </div>
</div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="p-col-12 p-md-4">
                  <Button
                    label="Search"
                    onClick={props.handlechange}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div></div>
                    <h5>
               {/*  <button style={{width:"10%"}} type="button" class="btn btn-block btn-primary btn"  onClick={()=> alert("Form is Submitted!!")}>Save Filter</button></h5> */}</h5></div>
               {props.data.table?
               <Basic/>:null}
    </main>

    )
}

export default FormComponent
