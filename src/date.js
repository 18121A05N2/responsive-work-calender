function getDays(year,month){
    let days = {
        "Sun":0,"Mon":1,"Tue":2,"Wed":3,"Thu":4,"Fri":5,"Sat":6
    } 
    let date1 = new Date(year,month+1,0);
    let date2 = new Date(year,month,1);
    return {
        noOfDays : date1.getDate(),
        day : days[date2.toString().split(' ')[0]]
    }
}
function todayDate(){
    let months = {
        1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec" 
    }
    let date = new Date()
    return {
        year : date.getFullYear(),
        month : date.getMonth(),
        day:date.getDate()
    }
}
export default {
    getDays,
    todayDate
}