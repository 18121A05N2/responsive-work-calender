import React from "react"
class Row extends React.Component{
    render(){
        return (
            <div style={{height:'16.66%',width:'100%',display:"flex"}}>
                {this.props.children}
            </div>
        );
    }
}
export default Row;