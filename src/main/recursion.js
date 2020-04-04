/*递归算法的关键点有两个
 1.写出递归公式
 2.明确终止条件
*/


//计算1+2+3+4+......+n
function sum(number) {
    if (number===1) {
        return 1
    }
   return sum(number-1)+number
}


//爬楼梯，N阶楼梯，每次只能爬1阶或者2阶，有多少种爬法。
//采用递归容易造成超时，建议使用动态规划

function climbstairs(n){
    if(n===1)return 1
    if(n===2) return 2
    
    return climbstairs(n-1)+climbstairs(n-2)
}

//深拷贝
function deepcopy(obj){
    if (typeof obj!=='object') return

    let newObj=Array.isArray(obj)?[]:{}
    //如果数组有自定义属性也会被遍历出来，后续验证修改
    for(let key in obj){
       if( obj.hasOwnProperty(key)){
          newObj[key]=typeof obj[key]==='object'?deepcopy(obj[key]):obj[key]
       }
    }
    return newObj
}

//数组降维
function simpleArr(array){
    if(!Array.isArray(array))return
    let newArray=[]
    array.forEach(arr=>{
        Array.isArray(arr)?newArray=newArray.concat(simpleArr(arr)):newArray.push(arr)
    })
    return newArray
}
export {sum,climbstairs,deepcopy,simpleArr}