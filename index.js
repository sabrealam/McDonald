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


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let img2 = document.querySelector('.img2');
let lottie = [
    '<iframe src="https://lottie.host/embed/6312177b-4064-4802-af6f-195c8a71e331/FuVRs8SkfL.json"></iframe>',
    '<iframe src="https://lottie.host/embed/118ded74-9ef3-4f8f-852f-a7912ddc9351/QBORJoHEFv.json"></iframe>',
    '<iframe src="https://lottie.host/embed/db0fbdd1-e554-4b1e-b392-9c4e2cd41d9b/RczVYCfDp1.json"></iframe>',
    '<iframe src="https://lottie.host/embed/460ae0c6-1068-4e81-a9d1-a23934400b13/wcjoLuiTIn.json"></iframe>',

]


function lot(){
    let ltct = 0;
    let set = setInterval(() => {
        img2.innerHTML = lottie[ltct];
        ltct++;
        if(ltct == 4){
            ltct = 0;
        }
    }, 10000); 
}




// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function order(){ 
let count = 0;
img2.innerHTML = lottie[3];
let item = Array.from(root1); 
  setInterval(()=>{
    count++;
    if(count <= 10){ 
        done.innerHTML = ' YOUR ORDER HAS BEEN PLACED PLEASE WAIT...'; 
    } 
    if(count > 10){
        done.innerHTML = null; 
        console.log('checking');
        if(count % 2 == 1){
            done.innerHTML = 'ORDER PROCESSING WAIT FOR 5 MIN ...'; 
        }else{
            done.innerHTML = ''; 
        } 
    } 
},1000);
setTimeout(() => {
    lot();    
}, 10000);
    

promise(item).then((res)=>{
            lot();
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
        val.push(r.value)
    }) 
    return new Promise(function(resolve, reject){ 
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

 //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::







