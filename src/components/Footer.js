import React from "react"
import Button from "./Button"
import ButtonsList from "./ButtonsList"
import SelectButton from "./SelectButton"
import date from "../date"
class Footer extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.state={month:date.todayDate().month,year:date.todayDate().year}
    }
    selectOnChange= (value)=>{
        this.setState({year:value})
        this.props.callback({
            month:this.props.date.month,
            year:value,
            day:this.props.date.day
        })
    }
    onMonthChange = (value)=>{
        this.setState({month:value})
        this.props.callback({
            month:value,
            day:this.props.date.day,
            year:this.props.date.year
        })
    }
    render(){
        this.Months=["January","February","March","April","May","June","July","August","September","October","November","December"]
        return (
            <div className='foot'>
                <ButtonsList date={this.props.date} callback={this.onMonthChange} elements={this.Months}/>
                <SelectButton date={this.props.date} callback={this.selectOnChange} options={[2018,2019,2020,2021]}/>
            </div>
        )
    }
}




export default Footer;