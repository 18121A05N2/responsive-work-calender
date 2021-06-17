import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.props=props
    }
    callbackIfExists=()=>{
        if(this.props.callback){
            this.props.callback(parseInt(this.props.value))
        }
    }
    render(){
        return (
            <button onClick={this.callbackIfExists} className='ownbutton' style={this.props.style}> {this.props.name}
            
             </button>
        );
    }
}
export default Button;