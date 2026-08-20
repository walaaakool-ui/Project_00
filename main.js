const data = [1, 6, 8, 9, 7, 6];
console.log(data);

export const sum =(data =[]) =>{
    for(let i=0; i<data[i].length; i++){
        data[i]= data[i] + data[i+1];
    }
};

console.log(sum(data));
