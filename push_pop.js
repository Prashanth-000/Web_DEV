class Stack{
    constructor(){
        this.array=[]
        this.deleted=[]
    }
    pushItem(val){
        this.array.push(val)
        console.log(this.array)
    }
    popItem(){
        this.array.pop();
        console.log(`item popped`)
        console.log(this.array)
    }
    undo(){
        const item=this.array.pop();
        this.deleted.push(item)
        console.log(this.deleted)
    }
    redo(){
        const item=this.deleted.pop();
        this.array.push(item)
        console.log(this.array)
    }
}
const array_1=new Stack;
array_1.pushItem(1);
array_1.pushItem(2);
array_1.pushItem(3);
array_1.popItem();
array_1.undo();
array_1.redo();

