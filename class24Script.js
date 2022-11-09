var i = 0;
while (i < 100){

    if (i % 2 == 0){
        console.log(i);
    }
    i++;    
}

//switch case 

let day = new Date ("11/09/2022") ;
switch((new Date().getDay)){
    case 0:
        day = "Sunday";
        break;
    
    case 1: 
        day = "Monday";
        break;

    case 2: 
        day ="tuesday";
        break;
        
    case 3: 
        day ="Wednesday";

        break;
    
    case 4: 
        day ="Thursday";
        break;
    
}
console.log(day);