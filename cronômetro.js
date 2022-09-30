
var sec = 0
var min = 0
var hr = 0

var i = 0

var interval

function start(){
    interval = setInterval(watch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){

    sec = 0
    min = 0
    hr = 0
    clearInterval(interval)
    document.getElementById("watch").innerText="0:0:0"

}


function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            hr++
            min=0
        }
    }


    document.getElementById("watch").innerText=hr+":"+min+":"+sec
}