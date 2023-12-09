let data = [
    { name : 'pizza',price : "₹465",value : 'pizza',   img : "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"} ,
    { name : 'fries',price : "₹260",value : 'fries',   img : "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"} ,
    { name : 'burger',price : "₹360",value : 'burger',  img : "https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww"} ,
    { name : 'lolypop',price : "₹130",value : 'lolypop', img : "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMGRydW1zdGlja3xlbnwwfHwwfHx8MA%3D%3D"}, 
    { name : 'coldrink',price : "₹40",value : 'coldrink', img : "https://images.unsplash.com/photo-1625126590447-cb769384e1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww"} ,
    { name : 'coffe',price : "₹20",  value : 'coffe',  img : "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmV8ZW58MHx8MHx8fDA%3D"} ,
    { name : 'chicken',price : "₹375",value : 'chicken', img : "https://plus.unsplash.com/premium_photo-1676049461933-28e3e6ee359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9wY29ybnxlbnwwfHwwfHx8MA%3D%3D"}, 
    { name : 'popcorn',price : "₹172",value : 'popcorn', img : "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfHx8MA%3D%3D"} ,
 ];
let root = document.querySelector('.product')  
    for(let i = 0; i < data.length; i++){
       let div = document.createElement('div');
       let div1 = document.createElement('div');
       div1.setAttribute('id', 'divimg')
       let img = document.createElement('img');
       img.setAttribute('src', data[i].img)
       img.setAttribute('alt', 1);
       let div2 = document.createElement('div');
       div2.setAttribute('id', 'div2')
       let p = document.createElement('p');
       p.innerHTML = data[i].price; 
       let h4 = document.createElement('h4');
       h4.innerHTML = data[i].name;
       let input = document.createElement('input');
       input.setAttribute('value', data[i].value);
       input.setAttribute('type', 'checkbox');
       input.setAttribute('id', 'c');
       
       div1.append(img)
       div2.append(p,input)
       div.append(div1,h4,div2)
       root.append(div);
    } 


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


 

let root1 = document.querySelectorAll('#div2 > input '); 
let done = document.querySelector('.done');
let progress = document.querySelector('.progress');
let third = document.querySelector('#status');
done.innerHTML = '';  
let count = 0;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function order(){ 

done.innerHTML = ' YOUR ORDER HAS BEEN PLACED PLEASE WAIT...'; 
let item = Array.from(root1);

console.log(item);
setInterval(()=>{
    count++;
    if(count %2 == 1){ done.innerHTML = 'ORDER PROCESSING WAIT FOR 5 MIN ...'; 
        }else{ done.innerHTML = ''; }
    },1000)  
 
        promise(item).then((res)=>{
        res.forEach((ef)=>{ 
            divcreate(ef);
        })
   })
 

 
  
   
 











 }
 
 function promise(item){
    let val = [];
    let checkitem = item.filter(function(ele){
        return ele.checked;
    })
     checkitem.forEach((r)=>{
        console.log(r);
        val.push(r.value)
    })
    // console.log(checkitem[0].value);
    // console.log(val); 
    return new Promise(function(resolve, reject){
        // console.log('Pending order');
       setTimeout(() => {
          resolve(val);
       }, 2000);
    });
 } 

 function divcreate(ef){
let name ;
let price;
    data.forEach((n)=>{
       if(ef == n.name){
        // console.log(n.name);
          name = document.createElement('p');name.innerHTML   = `NAME  : ${n.name}`;
          price = document.createElement('p');price.innerHTML = `Price : ${n.price}`;
 
       }
    }) 
    let div = document.createElement('div');div.setAttribute('class', 'output')
    let oid = Math.ceil(Math.random()*100000000000000)
    let id   = document.createElement('h4');id.innerHTML = oid;
    div.append(name,price,id);
    third.append(div);

}


function view(z){
    
}