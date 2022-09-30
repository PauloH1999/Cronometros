var sec = document.getElementById("sec")
var min = document.getElementById("min")
var hr = document.getElementById("hr")

var s = 0
var m = 0
var h = 0

var i = 0


setInterval(()=>{
    
    s++
    if(s<10){
        sec.innerText=`${i}${s}`
    }else{
        sec.innerText=s
    }
    
    if(s == 59){
        m++
        s=0
        if(m<10){
            min.innerText=`${i}${m}`
        }else{
            min.innerText=m
    }
    }
    
    if(m == 59){
        h++
        m=0
        if(h<10){
            hr.innerText=`${i}${h}`
        }else{
            hr.innerText=h
    }
    }
    
    
},1000)

var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")

var horario =document.getElementById("horario")


var data = new Date()
var segundos = data.getSeconds()
var minutos = data.getMinutes()
var horas = data.getHours()

console.log(horas)

