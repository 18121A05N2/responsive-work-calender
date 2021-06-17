function getList(date){

    let json =localStorage.getItem(`${date.year}-${date.month}-${date.day}`)
    return JSON.parse(json)
}
function getListLength(date){
    let json =localStorage.getItem(`${date.year}-${date.month}-${date.day}`)
    if(json){
        json = JSON.parse(json)
        return Object.keys(json).length;
    }
    else{
        return 0
    }
}
function addToList(date,message){
    let data = JSON.parse(localStorage.getItem(`${date.year}-${date.month}-${date.day}`))
    if(data){
        data[new Date().getTime()]=message
    }else{
        data={}
        data[new Date().getTime()]=message
    }
    localStorage.setItem(`${date.year}-${date.month}-${date.day}`,JSON.stringify(data))
}
function deleteList(date,key){
    let data =JSON.parse(localStorage.getItem(`${date.year}-${date.month}-${date.day}`))
    delete data[key.toString()]
    localStorage.setItem(`${date.year}-${date.month}-${date.day}`,JSON.stringify(data))
    
}
export default {
    getList,deleteList,addToList,getListLength
};