import React from 'react'
import '../Autocomplete.css'
import axios from 'axios'

export default class AutoComplete3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            suggestion:[],
            text:"",
            MC:[]
        }
    }
    componentDidMount(){
        axios.get(`/getMeterMfDetailsByCategoryType?type=${this.state.text}`)
       .then(x => {
      console.log(x);
      this.setState({MC: x.data});
    });
    }
    fyear=()=>{
        return this.state.MC.map(s=>s)
    }

    onTextchange=(e)=>{
        const value=e.target.value
        let suggestion=[]
        if(value.length){
            const regex = new RegExp(`^${value}`,'i')
            suggestion=this.fyear().sort().filter(v=>regex.test(v))
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
        return(     <div>      
                <table>
                    
              
                  
                <label className="label">{this.props.label}</label>
                        <div className="AutocompleteText input">
                            <input  value={text} onChange={this.onTextchange}  />
                            {this.rendersuggestion()}
                          
                        </div>
                    
                </table>
                </div>
        )       
    }
}