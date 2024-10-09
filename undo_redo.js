class Queue{
    constructor(){
        this.queue=[]
        this.available=4
    }
    enqueue(req){
        this.queue.push(req)
        console.log(this.queue)
    }
    dequeue(){
        if(this.available>0){
        const item=this.queue.shift()
        this.available=this.available-1
        return item
        }else{
            return console.log("no free autos")
        }
    }
    free(){
        this.available=this.available+1
    }
    view(){
        return this.queue()
    }
}
const queue=new Queue()
queue.enqueue("Mangalore jn.to adyar")
queue.enqueue("State bank to padil")
queue.enqueue("jyothi to state bank")
queue.enqueue("state bank to thannir baavi")
queue.enqueue("udupi to mangalore")
queue.enqueue("Mangalore to kundapur")
