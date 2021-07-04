window.onload=function(){
    let password = "";
    const input = document.getElementById('password')

    input.addEventListener('input', (event)=>{
        const password = input.value
        console.log(password);
        checkPassword(password);          
    })
}

const checkPassword = (pass) => {
    const length = pass.length;

    const possibilities = checkPossibilities(pass);

    const timeToCrack = estimateTime(length, possibilities)   
    
    const finalEstimate = convertSeconds(timeToCrack)
    
    document.getElementById("time").innerHTML = finalEstimate

}

const checkPossibilities = (pass) => {
    
    const lower = false
    const upper = false
    const num = false
    const special = false

  
    for(let i = 0; i < pass.length; i++){
        if(pass[i] >= "A" && pass[i] <= "Z"){
            upper == true
        }else if(pass[i] >= "a" && pass[i] <= "z"){
            lower == true
        }else if(pass[i] >= "0" && pass[i] <= "9"){
            num == true
        }else{
            special == true
        }
    }

    if(lower || upper){
        return 26
    } else if(lower && upper){
        return 26
    }  else if(special){
        return 33
    }else if((num && lower) || (num && upper)){
        return 36
    } else if(num && lower && upper){
        return 56
    } else if (num && lower && upper && special){
        return 96
    }else{
        return 96
    }
}

const estimateTime = (length, possibities) => {
    const out = possibities**length/30000000

    if(out < 0.0000005){
        return ''
    }else{
        return out
    }

}

const convertSeconds = (n) =>{

    var year = n/(3.2*(10**7))
    if(year < 1){
        year = 0
    }

    var day = year % 365;
    if(day < 1){
        day = 0
    }
 
    n = n % (24 * 3600);
    var hour = (n / 3600);
    if(hour < 1){
        hour = 0
    }
 
    n %= 3600;
    var min = n / 60;
    if(min < 1){
        min = 0
    }
 
    n %= 60;
    var sec = n;

    if (year < 10000){
        return `${year.toFixed(0)} years ${parseInt(day)} days ${parseInt(hour)} hours ${parseInt(min)} minutes ${sec.toFixed(6)} seconds`
    } else {
        return `${(year/1000).toFixed(0)} centuries`
    }

    
}