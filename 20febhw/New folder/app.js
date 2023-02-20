var btn = document.getElementById('btn');
var inp = document.getElementById('inp');
btn.onclick = function() {
    
    document.body.style.backgroundColor = inp.value
    
}
var minus = document.getElementById('button1');
var plus = document.getElementById('button2');
var nmb = document.getElementById('number')
minus.onclick = function(){
    nmb.innerHTML = `${Number(nmb.innerHTML) - 1}`;
}
plus.onclick = function(){
    nmb.innerHTML = `${Number(nmb.innerHTML) + 1}`;
}