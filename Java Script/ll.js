// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Linked List</title>
// </head>
// <body>
//     <script>

//         class node
//         {
//             constructor (value)
//             {
//                 this.value = value;
//                 this.next = null;

//             }
//         }

//         class Linked_list
//         {
//             constructor (value)
//             {
//                 this.head={
//                     value: value,
//                     next: null

//                 }
//                 this.tail=this.head;
//                 this.length = 1;

//                 } 
                
//             }
            
//             var obj1 = new Linked_list(1000)
//             console.log(obj1)

//     </script>
// </body>
// </html>



class node
{
    constructor (value)
    {
        this.value =value;
        this.next =null;
    }
}
class linkedList
{
//linked list structure
    constructor(value) 
    {
        this.head ={
            value : value,
            next : null
        }
      this.tail=this.head
        this.length =1
        // this.value=value
        // this.next =null

    }
    //appending tail
    append(value){
        const newnode =new node(value)
        if(this.head==null){
            this.head =Node
        
        
        }
        else{
            this.tail.next=newnode
            this.tail=newnode
            this.length++
        }
        
    }
}


var linkedListObject = new linkedList(1000);
console.log(linkedListObject);

linkedListObject.append(342)
linkedListObject.append(7643)


