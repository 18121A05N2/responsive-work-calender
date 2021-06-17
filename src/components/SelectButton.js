import React from "react"
import date from "../date"
class SelectButton extends React.Component{
    constructor(props){
        super(props)
        this.props= props
        this.state={value:date.todayDate().year}
        this.optionsList = []
        for(let i in this.props.options){
            this.optionsList.push(<option value={this.props.options[i]}>{this.props.options[i]}</option>)
        }
    }
    selectOnChange = (event) =>{
        this.setState({value:parseInt(event.target.value)})
        this.props.callback(parseInt(event.target.value))
    }
    componentDidUpdate(){
        
    }
    render(){
        return (
            <select value={this.state.value} onChange={this.selectOnChange} className='ui search dropdown round'>
                {this.optionsList}
            </select>
        );
    }
}
export default  SelectButton;