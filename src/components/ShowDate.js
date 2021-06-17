import React from "react"
class ShowDate extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.months={
            1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"
        }
    }
    
    render(){
        return(
            <div style={{width:"100%",height:"20%",fontSize:"50px",position:"relative",top :'15px'}}>
                {this.props.date.day}  {this.months[this.props.date.month+1]}, {this.props.date.year}
            </div>
        );
    }
}
export default ShowDate;
