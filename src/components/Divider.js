import React from "react"
class Divider extends React.Component{
    render(){
        return (
            <div className='owndivider' style={{backgroundColor:'#fff5de',borderLeftWidth:this.props.width}}></div>
        );
    }
}
export default Divider