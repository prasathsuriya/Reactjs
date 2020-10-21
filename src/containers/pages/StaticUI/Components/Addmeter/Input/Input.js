import React from 'react'

const Input = (props) => {
       const { label } = props;
    return (

        <div className="relative">
             <label className="label2">{label}</label>
            <input 
                className="input2"
                type="text" />
            <label className="label2">{label}</label>
        </div>
    )
}
export default Input