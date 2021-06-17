import React from "react"
import DateBlock from "./DateBlock"
import Row from './Row'
import date from '../date'
import Empty from './Empty'

class DatesBlock extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.listRows=[]
    }
    onchageInDate = (date)=>{
        this.props.callback(date)
    }
    preProcess = ()=>{
        let total=1
        this.listRows=[]
        let data = date.getDays(this.props.date.year,this.props.date.month)

        let i=data.day
        let templist =[];
        for(let x=0;x<data.day;x++){
            templist.push(<Empty />)
        }
        while(total<=data.noOfDays){
            
            for(;i<7;i++){
                if(total==this.props.date.day){
                    
                    templist.push(<DateBlock date={this.props.date} callback={this.props.callback} colour="white" value={total}/>)
                }else{
                    templist.push(<DateBlock date={this.props.date} callback={this.props.callback} colour="#e8faff" value={total}/>)
                }
                total+=1
                if(total>data.noOfDays){
                    break;
                }
            }
            this.listRows.push(<Row>{templist}</Row>)
            templist=[]
            i=0;
        }
    }
    
    render(){
        this.preProcess()
        return (
           <div style={{backgroundColor:"#fff5de",height:'92%'}}>
               {this.listRows}
           </div>
        );
    }
}

export default DatesBlock;

/*

 
*/