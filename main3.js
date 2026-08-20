const arr = [[1,3], [7,2], [0,8]];
console.log(data);

const gt =(x,y) => {
    return x>y;
};

const st =(x,y) => {
    return x<y;
};


export const sort =(arr = []) =>{
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(gt(arr[j],arr[j+1])){
                let temp= arr[j];
                arr[j] =arr[j+1];
                arr[j+1]=temp;
            }
            let distA= arr[j]

        }
    }
};
