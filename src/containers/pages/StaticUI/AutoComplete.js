import React from 'react'
import './Autocomplete.css'
import FormComponent from './FormComponent'
import FormContainer from './FormContainer'


export default class AutoComplete extends React.Component{
    constructor(props){
        super(props)
        this.state={
            suggestion:[],
            text:""
        }
    }

    onTextchange=(e)=>{
        const {items}=this.props
        const value=e.target.value
        let suggestion=[]
        if(value.length){
            const regex = new RegExp(`^${value}`,'i')
            suggestion=items.sort().filter(v=>regex.test(v))
        }
        this.setState(()=>({ suggestion,text:value }))
    }
    suggestionselected(value){
        this.setState(()=>({
            text:value,
            suggestion:[]
        }))
    }

    rendersuggestion(){
        const {suggestion}=this.state
        if(suggestion.length===0){
            return null
        }
        return(
                <div>
                    {suggestion.map((items)=><ol  onClick={()=>this.suggestionselected(items)}>{items}</ol>)}
                </div>

        )
    }




    render(){
        const {text}=this.state
        return(           
                <table>
                    
                        <label className="label">{this.props.label}</label>
                  
                    
                        <div className="AutocompleteText input">
                            <input  value={text} onChange={this.onTextchange}  />
                            {this.rendersuggestion()}
                            
                        </div>
                    
                </table>

        )       
    }
}