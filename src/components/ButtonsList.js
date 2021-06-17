import React from "react"
import Button from "./Button";

class ButtonsList extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.Lists=[]
        
    }
    preProcess=()=>{
        this.Lists=[]
        for(let x in this.props.elements){
            if(parseInt(x)==this.props.date.month){
                this.Lists.push(<Button style={{backgroundColor:"red"}} callback={this.props.callback} value={x} name={this.props.elements[x]} />)
            }else{
                this.Lists.push(<Button callback={this.props.callback} value={x} name={this.props.elements[x]} />)
            }
        }
    }
    render(){
        this.preProcess()
        return (
            <div style={{height:"50%"}}>
                {this.Lists}
            </div>
        );
    }
}
export default ButtonsList;