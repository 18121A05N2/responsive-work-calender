import React from "react"
import Button from "./Button"
import BasicBlock from "./BasicBlock"
class Lists extends React.Component{
    constructor(props){
        super(props)
        this.daysList =[]
        for(let x in this.props.elements){
            this.daysList.push(<BasicBlock name={this.props.elements[x]}/>)
        }
    }
    render(){
        return (
            <div  style={{height:'8%',display:"flex",backgroundColor:'#fff5de'}}>
                {this.daysList}
            </div>
        );
    }
}
export default Lists;