let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');

setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amdDmd = h >= 12 ? 'PM' : 'AM';
    
    
    
    // CONVERTENDO 24HRS PARA 12HRS
    
    if(h > 12){
        h = h - 12;
    }
    
    // ADCIONAR 0 ANTES DE UM NUMERO MENOR DE 10
    
    h =(h <  10)? '0' + h : h;
    m =(m <  10)? '0' + m : m;
    s =(s <  10)? '0' + s : s;
    
    horas.innerHTML = h + '<br><span>Horas</span>';
    minutos.innerHTML = m + '<br><span>Minutos</span>';
    segundos.innerHTML = s + '<br><span>Segundos</span>';
    ampm.innerHTML = amdDmd;

});