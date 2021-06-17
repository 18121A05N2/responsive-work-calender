import React from "react"
import taskList from "../taskList"
class Message extends React.Component{
    render(){

        return (
            <div key={this.props.keyvalue} className='message' >
                <div style={{height:'100%',width:'10%',float:'right'}}>
                    <button onClick={()=>{
                        taskList.deleteList(this.props.date,this.props.keyValue)
                        this.props.callback()
                        }} >done</button>
                </div>
                <div style={{height:'100%',width:'90%'}}>
                    {this.props.value}
                </div>
            </div>
        );
    }
}
export default Message;