'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    //arr[12,32,22,45,78,12,50]
    let max=arr[0];
    for(let i; i<arr.length;i++){
        if (arr[i] > max) {
            max = arr[i];
          }

    }

   
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
//  arr[20,'234','car',41,20,'chair']
    let sum=0;
    for(let i=1;i<arr.length;i++) 
    {
        if (! arr[i].toString) {
            sum+=arr[i]; 
        }else {
            continue
        }
        
    }
  
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
  //  arr['C#','JS','Ruby','Python']
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}

module.exports = {findMax , sumNums, reverseArray};