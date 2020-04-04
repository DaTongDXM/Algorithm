class Stack{
    constructor(){
        this.stack=[]
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        this.stack.pop()
    }
    //获取末尾数据，数组的一大特点，读取任意位置的数据很快，时间复杂度为O(1)
    peek() {
        return this.stack[this.getCount() - 1]
      }
    getCount(){
        return this.stack.length
    }
    isEmpit(){
        return this.getCount()===0
    }
}