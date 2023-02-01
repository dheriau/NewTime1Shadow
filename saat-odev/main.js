
    function clock() {

  
        let saat = document.getElementById('saat');
        let dakika = document.getElementById('dakika');
        let saniye = document.getElementById('saniye');
    
        let s = new Date().getHours();
        let d = new Date().getMinutes();
        let ss = new Date().getSeconds();
    
        saat.innerHTML = s;
        dakika.innerHTML = d;
        saniye.innerHTML = ss;
    }
        let interval = setInterval(clock, 100);


