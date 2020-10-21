import React from 'react'
import './Autocomplete.css'


export default class AutoComplete extends React.Component{
    constructor(props){
        super(props)

        this.state={
            suggestion:[],
            text: "",
            fullvalue:{}
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
    suggestionselected(value,index){
        this.setState(()=>({
            text:value,
            suggestion: [],
            
        }))
        
        let values = value;
        localStorage.setItem(this.props.label,
        (index+1));

    }

    rendersuggestion(){
        const {suggestion}=this.state
        if(suggestion.length===0){
            return null
        }
        return(
                <>
                    {suggestion.map((items,index)=><ol  onClick={()=>this.suggestionselected(items,index)}>{items}</ol>)}
                </>

        )
    }




    render(){
        const {text}=this.state
        return(                     
            <div  className="relative">
                  <label className="label2">{this.props.label}</label>
                            <input className="input2"  value={text} onChange={this.onTextchange}  />
                            <ul className="list">{this.rendersuggestion()}</ul>
                        </div>
                    
            

        )       
    }
}