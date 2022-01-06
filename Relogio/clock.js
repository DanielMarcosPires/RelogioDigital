
    var estilo = document.querySelector("#tempo,#autor")
    var estilo2 = document.querySelector("#autor")
    estilo2.addEventListener("mouseenter",(e)=>{
        e.preventDefault()
        var anim2 
        anim2 = document.body.querySelector("#autor")
        anim2.style.background = "#fffc00"
        anim2.style.color = 'black'
        anim2.style.cursor = 'pointer'
    })
     estilo2.addEventListener("mouseout",(e)=>{
        e.preventDefault()
        var anim2 
        anim2 = document.body.querySelector("#autor")
        anim2.style.background = null
        anim2.style.color =null
    })
    estilo2.addEventListener("click",(e)=>{
      
       e = (n)=>{
           return n
       }
       e = document.querySelector("#autor").innerHTML =e("Daniel Marcos Pires")
      
    })
    estilo2.addEventListener("mouseout",(e)=>{
      
        e = (n)=>{
            return n
        }
        e = document.querySelector("#autor").innerHTML =e('Criador:')
       
     })
    estilo.addEventListener("mouseenter",(e)=>{
        
        e.preventDefault()//previnir que apareça default no console do navegador

        var anim 
        anim = document.body.querySelector("#tempo")
        anim.style.background = "cyan"
        anim.style.color = 'black'
            
    })
   estilo.addEventListener("mouseout",(e)=>{
       
        e.preventDefault()

    var anim
       anim = document.body.querySelector("#tempo")
       anim.style.background = null
       anim.style.color = null
       
   })
   estilo.addEventListener("click",(e)=>{
   var e = querySelector(".autor")
  var texto = e.innerHTML
     
    
   })
 showTime=()=>{
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"

    if(h ==0){
        h=12
    }
    if(h > 12){
        h = h - 12
        session = " PM "
    }    

    h = (h<10) ? "0"+ h:h;
    m = (m<10) ? "0"+ m:m;
    s = (s<10) ? "0"+ s:s;

    var time = session +": "+h + ":" + m + ":" + s + ""
    document.getElementById("tempo").innerHTML = time;
    document.getElementById("tempo").textContent = time;

setTimeout(showTime, 1000)
}
showTime();

