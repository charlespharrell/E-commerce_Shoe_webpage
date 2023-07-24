let cart = document.getElementById('cart')
let pop_up = document.querySelector('.pop_up')
let cart_num = document.getElementById('cart_num')

let minus =document.querySelector('.minus')
let plus = document.querySelector('.plus')
let num = document.querySelector('.num')

let add = document.querySelector('.add_to_cart')
let popnum = document.querySelector('.pop_num')
let pop_totals = document.querySelector('.pop_totals')
let pop_amount = document.querySelector('.pop_amount')
let delet = document.querySelector('.pop_delete')
let delcon = document.querySelector('.delcon')

let pop_fall = document.querySelector('.pop_fall_con')


cart_num.innerText = ''
cart.onclick =(e)=>{
    
    if(cart_num.innerText === ''){
            pop_up.style.display ='inline-block'
            pop_up.innerHTML =
             `      
                <p class="pop_cart">Cart</p>
                <div class="pop_empty">Your cart is empty</div> 
            `       
    }

    if (cart){
        cart = false
        pop_up.style.display ='inline-block'
    }
        else{
            cart = true;
            pop_up.style.display = 'none'
        }
        
    }
    let numm = 0
    plus.onclick=()=>{  
        numm = numm + 1;
        num.innerText = numm;          
    }

    minus.onclick=()=>{       
        numm = numm - 1;
        num.innerText = numm;
        if (numm < 0){
            numm = 0
            num.innerText = numm
        }       
        console.log('Charlesuj')
    }

    add.onclick=()=>{
        if (numm<1){
            cart_num.innerText = ''
            pop_up.style.display ='none'
        }
        else{
            cart_num.style.display = 'inline-block'
            cart_num.innerText = num.innerText
            popnum.innerText = num.innerText;
            pop_totals.innerText = popnum.innerText  * 125;
        }        
    }

    delet.onclick=()=>{
        console.log('char')
        pop_up.style.display = 'none'   
        cart_num.style.display ='none'
        numm = 0
        num.innerText=0
    }

    // the left side of the web page

    let smallone = document.querySelector('.smallone')
    let smalltwo = document.querySelector('.smalltwo')
    let smallthree = document.querySelector('.smallthree')
    let smallfour = document.querySelector('.smallfour')
    
    let big_shoe = document.querySelector('.big_shoe')
    let shoes_container = document.querySelector('.shoes_container')
    
    smallone.onclick=()=>{            
            big_shoe.src ='./img/image-product-1.jpg' 
            console.log('char')
        }
        smalltwo.onclick=()=>{
            big_shoe.src = './img/image-product-2.jpg'
        }
        smallthree.onclick=()=>{
            big_shoe.src = './img/image-product-3.jpg'
        }
        smallfour.onclick=()=>{
            big_shoe.src = './img/image-product-4.jpg'
        }
         
    let lightbox = document.createElement('div')
    lightbox.id ='lightbox'
    document.body.appendChild(lightbox)
    let nextcon= document.createElement('div')  
    let imgone = document.createElement('img')
    let bigshoe  = document.createElement('img')
    let prevcon= document.createElement('div')
    let next = document.createElement('img')
    let prev = document.createElement('img')

    let prevvcon = document.querySelector('.prevvcon')
    let nexttcon = document.querySelector('.nexttcon')
    let menu = document.querySelector('.menu')

    let array=[
        './img/image-product-1.jpg',
        './img/image-product-2.jpg',
        './img/image-product-3.jpg',
        './img/image-product-4.jpg'
    ]
    let arr = 0
    big_shoe.onclick = ()=> {
        lightbox.classList.add('active')
        let imgcon = document.createElement('div')

        imgcon.id ='imgcon'
        next.id ='next'
        prev.id ='prev'
        imgone.id ='activate'
        bigshoe.id = 'bigshoe'
        nextcon.id ='nextcon'
        prevcon.id = 'prevcon'

        bigshoe.src = big_shoe.src
        next.src = './img/next.png'
        imgone.src = './img/close.png'
        prev.src = './img/prev.png'

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        imgcon.appendChild(bigshoe)
        lightbox.appendChild(imgcon)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        imgcon.appendChild(imgone)
        imgcon.appendChild(nextcon)
        nextcon.appendChild(next)
        imgcon.appendChild(prevcon)
        prevcon.appendChild(prev)
    }

    lightbox.onclick=(e)=>{
        if(e.target !== e.currentTarget) return
        lightbox.classList.remove('active')
    }
    imgone.onclick=(e)=>{
        console.log('ch')
        if(e.target !== e.currentTarget) return
        lightbox.classList.remove('active')
    }

    prevcon.onclick=()=>{
        if(arr<=0)arr=array.length;
        arr--;
        return setImg();
    }

    nextcon.onclick=()=>{
        if (arr >=array.length-1)

          arr = -1;
          arr++
          return setImg()
        
    }
    function setImg(){
        return bigshoe.setAttribute('src', array[arr])
    }

    prevvcon.onclick=()=>{
        if(arr<=0)arr=array.length;
        arr--;
        return setImgg();
    }

    nexttcon.onclick=()=>{
        if (arr >=array.length-1)

          arr = -1;
          arr++
          return setImgg()
        
    }
    function setImgg(){
        return big_shoe.setAttribute('src', array[arr])
    }
    function setImgg(){
        return big_shoe.setAttribute('src', array[arr])
    }
    
    let navul = document.querySelector('.navul')
    let close = document.querySelector('.close')
    let menublock = document.querySelector('.menublock')
    let menuu = true
    menublock.onclick=()=>{
        console.log('ch')
        
        if(menuu){  
        navul.style.display='inline-block'
        close.style.display ='inline-block'
        menu.style.display = 'none'
        menuu = false
       }
       else{
        menuu = true
        navul.style.display='none'
        close.style.display ='none'
        menu.style.display = 'block'
       }
    }