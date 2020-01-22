function calculate()
{
    var a=document.getElementById('amt').value;
        var s=document.getElementById('sq').value;
            var tp=document.getElementById('totalPeople').value;
    
    if(a==""||s==0 )
        {
            window.alert("enter valid values please");
            return;
        }
    if(tp=="" || tp<=1)
        {
            tp=1;
            document.getElementById("each").style.display='none';        
        }
    else { document.getElementById("each").style.display='block';    }
    
    var total = (a * s) / tp;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    document.getElementById("TTip").style.display='block';
    document.getElementById("tip").innerHTML=total;
    
}
document.getElementById("TTip").style.display='none';


document.getElementById("but").onclick = function() { calculate(); };