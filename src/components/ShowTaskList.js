import React from "react"
import task from "../taskList"
import Message from './Message'
class  ShowTaskList extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        
    }
    render(){
        this.lists=[]
        let msgList = task.getList(this.props.date)
        for(let x in msgList){
            this.lists.push(<Message keyValue={x} date={this.props.date} callback={this.props.callback} value={msgList[x]}/>)
        }
        return (
            <div className='ui container'>
                {this.lists}
            </div>
        );
    }
       
}
export default ShowTaskList;