//动态规划

// 动态规划和递归的解题区别
// 递归是从上至下解决问题，通过嵌套调用来得到子问题解，从而解决整个问题
// 动态规划是至下而上解决问题，先计算低阶段的值，依赖层层递推，得到最终解


// 爬楼梯 n阶楼梯，每次1，2台阶，有多少中爬法
function climbstairs(n){
    if(n<3)return n
    let temp=[1,1]
    for (let i = 2; i <= n; i++) {
        temp[i]=temp[i-1]+temp[i-2]
    }
    return temp[n]
}

//路径  leetcode [62] 不同路径
var uniquePaths = function(m, n) {
    var arr=new Array(m);
    for (let i = 0; i < n; i++) {
        arr[i]=new Array(m)
        arr[i][0]=1
    }
    for (let j = 0; j < m; j++) {
        arr[0][j]=1
    }
    for (let p = 1; p < n; p++) {
       for (let q = 1; q < m; q++) {
           arr[p][q]=arr[p-1][q]+arr[p][q-1]
       }
    }
    return arr[n-1][m-1]
};
