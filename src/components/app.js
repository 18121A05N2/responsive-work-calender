import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import date from '../date'
import ShowTask from './ShowTask'
import Divider from "./Divider"

class App extends React.Component{
    constructor(props){
        super(props)
        this.props=props
        this.state = date.todayDate()
    }
    onChangeDate = (data)=>{
        this.setState({year:data.year,month:data.month,day:data.day})
    }
    onShowTaskChange=()=>{
        this.forceUpdate()
    }
    render(){
        return (
            <div className='full' >
                
                <div className="ui" style={{width:'69%',height:"100%",float:"right",backgroundColor:"#fff5de"}}>
                    <Header callback={this.onChangeDate} date={this.state}/>
                    <Footer date={this.state} callback={this.onChangeDate}/>
                </div>
                <Divider width='3px'/>
                <ShowTask callback={this.onShowTaskChange} date={this.state}/>
            </div>
        );
    }
}
 export default App;