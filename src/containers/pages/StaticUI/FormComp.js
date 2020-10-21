import React from "react"
import AutoComplete from "./Auto"
import "./Autocomplete.css"
import './App.css'




function FormComponent(props) {
    

    return(
        <>
                
               
                < >
                
                <AutoComplete items={props.Circle_name} label="Circle Name" />
                
                <AutoComplete items={props.Division_name} label="Division Name"/>
                
                <AutoComplete items={props.Sub_divname} label="SubDivision Name" />
                
                <AutoComplete items={props.Section_name} label="Section Name" />
                
                <AutoComplete items={props.Town_name} label="Town Name" />
                
                <AutoComplete items={props.ss_name} label="SS Name" />
                
                <AutoComplete items={props.Feeder_name} label="Feeder Name" />
                <AutoComplete items={props.Dt_name} label="DT Name" />
                           
            
            </>
                
    </>

    )
}

export default FormComponent
