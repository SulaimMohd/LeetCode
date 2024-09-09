
function ListNode(val, next){
  this.val = val;
  this.next = next ? next:null;
}

let head = null

function inserAtTheEnd(val){
  if(!head) head = new ListNode(val)
  else{
    let temp = head;
    while(temp.next !== null){
      temp = temp.next
    }
    temp.next = new ListNode(val)
  }
}

function printList(){
  if(!head) console.log("The list is Empty!!")
  else{
    let temp = head;
    while(temp){
      console.log("Item"+temp.val)
      temp = temp.next
    }
  }
}

function removeFromEndN(previous = null, current, n){
  if(!current) return 0
  let count = 1 + removeFromEndN(current, current.next, n)
  if(count === n){
    if(!previous) return head = head.next
    console.log(current.val)
    previous.next = current.next
  }
  return count;
}

inserAtTheEnd(1)
inserAtTheEnd(2)
inserAtTheEnd(3)
inserAtTheEnd(4)
inserAtTheEnd(5)


removeFromEndN(null, head, 5)
printList()