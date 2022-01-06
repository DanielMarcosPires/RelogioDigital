
    var estilo = document.querySelector("#tempo")
    estilo.addEventListener("mouseenter",function(e){
        
        e.preventDefault()//previnir que apareça default no console do navegador

        var anim 
        anim = document.body.querySelector("#tempo")
        anim.style.background = "blue"
            
    })
   estilo.addEventListener("mouseout",function(e){
       
        e.preventDefault()

    var anim
       anim = document.body.querySelector("#tempo")
       anim.style.background = null
       
   })
   
function showTime(){
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