import React from 'react'
import Input from './Input/Input'

const Addmeter = () => {
    return (
    
        <div className="content">
            
            <div className="menu">  
            </div>
            <div className="AddMeter">
                <h3 className="title">Meter Info</h3>
                <div className="name">
                  
                   <div className="inputs">
                    <b>Meter Details</b>
                    <Input  label="Meter Serial Number"/>
                    <Input  label="Meter Type"/>
                    <Input  label="Device ID"/>
                    <Input  label="Meter Category"/>
                    <Input  label="Manfacturer Name"/>
                    <Input  label="Current Rating "/>
                    <Input  label="Firmware Version"/>
                    <Input  label="Year of Manfacturer"/>
                    <Input  label="IP Address"/>
                    <Input  label="Meter Sim No"/>
                    <Input  label="Installation Type"/>
                    <Input  label="Installation Sub Type"/>
                    <Input  label="Connection Status"/>
                    <Input  label="Voltage Multiplier"/>
                    <Input  label="Energy Multipler"/>
                    <Input  label="Current Multipler"/>
                    
                    </div>
         <div className="inputs2">
                    <b>Organisation Structure</b>
                    <Input  label="Circle Name"/>
                    <Input  label="Division Name"/>
                    <Input  label="Sub Division Name"/>
                    <Input  label="Section Name"/>
                    <Input  label="Town Name"/>
                    <Input  label="SS Name"/>
                    <Input  label="Feeder Name"/>
                    <Input  label="DT Name"/>
                    <Input  label="Latitude"/>
                    <Input  label="Longitude"/>
                    <Input  label=" Meter Type"/>
                   
                    
                    </div>                          </div>
                  <div className="inputs3">
                    <b>Meter Connection Info</b>
                    <Input  label="Meter IP"/>
                    <Input  label="Meter Port"/>
                    <Input  label="Authentication Type"/>
                    <Input  label="Meter Password"/>
                    <Input  label="System Title"/>
                    <Input  label="Block Cipher Key"/>
                    <Input  label="Authentication Key"/>
                    <Input  label="Referencing Key"/>
                    <Input  label="Is Wrapper"/>
                    <Input  label="IEC"/>
                    <Input  label="Serial Port"/>
                    <Input   label="Connection Status"/>
                   
                    
                </div>  
                <div className="buttons">
                    <button>Save</button>
                    <button>Cancel</button>
                    </div>
                
            </div>
            
                        </div>
        
    )
}
export default Addmeter