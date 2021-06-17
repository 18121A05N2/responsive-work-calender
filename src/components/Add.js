import React from "react";
import { render } from "react-dom";
import Button from "./Button";
import Task from '../taskList'
class Add extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.state ={value:" "}
    }
    formOnSubmit=(event)=>{
        event.preventDefault()
        Task.addToList(this.props.date,this.state.value)
        this.props.callback()
        this.setState({value:''})
    }
    inputOnChange=(event)=>{
        this.setState({value:event.target.value})
    }
    render(){
        return (
            <form className='ui form' onSubmit={this.formOnSubmit} >
                <div className='field'>
                    <label >Enter new Task</label>
                    <input class='item' type='text' value={this.state.value} onChange={this.inputOnChange} required/>
                </div>
                <Button class='ui submit button' type='submit' name='Add'/>
            </form>
        );
    }
}
export default Add;