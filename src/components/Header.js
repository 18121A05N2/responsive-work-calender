import React from "react"
import Lists from "./Lists"
import DatesBlock from "./DatesBlock"
class Header extends React.Component{
    constructor(props){
        super(props)
        this.props=props
    }
    onDateUpdate = (date)=>{
        this.props.callback({
            year:this.props.date.year,
            month:this.props.date.month,
            day:date 
        })
    }
    render(){
        return (
            <div className='head'>
                <Lists elements={["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}/>
                <DatesBlock callback={this.onDateUpdate} date={this.props.date}/>
            </div>
        )
    }
}




export default Header;