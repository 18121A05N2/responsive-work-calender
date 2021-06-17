import React from "react"
class BasicBlock extends React.Component{
    constructor(props){
        super(props)
        this.props=props
    }
    render(){
        return (
            <div className='block'>{this.props.name}</div>
        );
    }
}
export default BasicBlock; 