import taskList from "../taskList"
let PreProcess = (props)=>{
    let data = taskList.getListLength(props.date)
    if(data==0){
        return <div></div>;
    }else{
        return (
            <div style={{position:"relative",top:"50%",right:"0px",float:"right"}}>
                <label style={{fontSize:'13px'}}>{data}</label>
                <i className='tiny certificate icon' ></i>
            </div>
        );
    }
    
}
export default PreProcess;