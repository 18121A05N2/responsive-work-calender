import React from "react"
import ShowDate from "./ShowDate"
import ShowTaskList from './ShowTaskList'
import task from '../taskList'
import Add from './Add'
class ShowTask extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.state={messages:task.getList(this.props.date)}
    }
    onChange=()=>{
        this.props.callback()
        /**

        * 
        * 
        * *
        * *
        * */
    }
    render(){
        return (
            <div style={{width:"29%",height:"100%",float:"right"}}>
                <ShowDate  date={this.props.date} />
                <ShowTaskList  callback={this.onChange} date={this.props.date} />
                <Add date={this.props.date} callback={this.onChange}/>
            </div>
        );
    }
}

export default ShowTask;