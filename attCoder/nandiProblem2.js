let arr = [4,4,9,2];
let flag = false;

    for(i=0; i<=arr.length-1;i++){
        if (arr[i] % 2 !== 0){
            flag = true;
            break;
        }
    }


    if(flag){
        console.log("yes! odd available.");
    }else{
        console.log("No");
    }