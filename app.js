const start = document.getElementById("start");
const codeIn = document.getElementById("codeIn");

const Milliseconds = document.getElementById("Milliseconds");
const Seconds = document.getElementById("Seconds");
const Minutes = document.getElementById("Minutes");
const Hours = document.getElementById("Hours");
const Days = document.getElementById("Days");
const Years = document.getElementById("Years");
const Centuries = document.getElementById("Centuries");

const valid = document.getElementById("valid");
var check = false;
valid.addEventListener("click",function(){
        firebase.database().ref().child(codeIn.value).once("value",function(snap){
            console.log(snap.val());
            if(snap.val()!=null){
                check = true;
                document.getElementById("checky").style.display = "none";
                document.getElementById("tims").style.display = "block";
            }else{
                check = false;
                $(document).ready(function(){
                    $("#notACode").slideDown().delay("3000").slideUp();
                });
            }
        });
});


start.addEventListener("click",function(){
    var timerMilli = Number(tim.value);
    if(timerMilli>0){
            if(Seconds.selected)
                timerMilli=timerMilli*(1000);
            else if(Minutes.selected)
                timerMilli=timerMilli*(1000*60);
            else if(Hours.selected)
                timerMilli=timerMilli*(1000*60*60);
            else if(Days.selected)
                timerMilli=timerMilli*(1000*60*60*24);
            else if(Years.selected)
                timerMilli=timerMilli*(1000*60*60*24*365);
            else if(Centuries.selected)
                timerMilli=timerMilli*(1000*60*60*24*365*100);

            firebase.database().ref().child(codeIn.value).set({
                duration:new Date().getTime() + timerMilli
            });
    }else{
        $(document).ready(function(){
           $("#notANumber").slideDown().delay("3000").slideUp();
		});
    }
});

function checkCode(code){

}