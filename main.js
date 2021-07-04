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
    const timeToCrack = (possibilities**length)/30000000
    document.getElementById("time").innerHTML = timeToCrack
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
        return 56
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