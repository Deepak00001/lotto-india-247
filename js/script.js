function random (){
    document.getElementById("number").innerHTML=Math.floor(Math.random()*11)+10;
    document.getElementById("Enterbtn").style.display = "none";
}
function checklottery() {
    var num = document.getElementById("text").value;
    if(num==10||num==15||num==20){
        document.getElementById("result").style.display = "block";
        document.getElementById("winner").style.display = "block";
        document.getElementById("submitvalue").style.display = "none";
    }
    else if(num>10&&num<15||num>15&&num<20) {
        document.getElementById("result").style.display = "block";
        document.getElementById("loose").style.display = "block";
        document.getElementById("submitvalue").style.display = "none";
    }
}