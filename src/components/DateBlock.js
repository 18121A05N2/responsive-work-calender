import React from "react"
import taskList from "../taskList";
import Button from "./Button"
import PreProcess from "./PreProcess";

class DateBlock extends React.Component{
    
    render(){

        let date = {
            month:this.props.date.month,
            day:this.props.value,
            year:this.props.date.year
        }
        return (
            <div className='dateblock' style={{backgroundColor:this.props.colour}} value={this.props.value} onClick={(e)=>{this.props.callback(this.props.value)}} >
                <div style={{position:'relative',fontSize:'16px', width:"20%",height:'10%',left:'3px',top:'3px'}}>
                     {this.props.value}
                </div>
                <PreProcess date={date} />
            </div>
        );
    }
}

export default DateBlock;
