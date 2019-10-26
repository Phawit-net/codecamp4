function main(str) {
	let pair={"{":"}",	
			"[":"]",
            "(":")"}

    let countStart =0;
    let countEnd=0;
    
    if((str[0] == "{") ||(str[0] ==  "[") || (str[0] ==  "(")){
        for (let i in str){
           if ((str[i] == "(") || (str[i] == "[") || (str[i] == "{")){
                countStart+=1;
            }
            else{
                countEnd+=1;
            }
        }
        if (countStart != countEnd){
             return false;
        }
        else {
            let count =0;
            for (let i=0;i<str.length-1;i++){
                for (let j=i+1 ; j <= (str.length-1) ; j+=2){
                    var key = Object.keys(pair).find(key => pair[key] === str[j]);
                    if(str[i] === key){
                        count = count+1; 
                        break;
                    }
                    continue;
                } 
            }
            if (count == (str.length)/2){
                console.log("True");
                return true;
            }
            else{
                console.log("False");
                return false;
            }
        }
    }
    else{
        return false;
    }	
        
}
module.exports = { main };
