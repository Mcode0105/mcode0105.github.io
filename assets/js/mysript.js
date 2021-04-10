
window.setInterval("waktu()", 1000);
    function waktu() {
        let waktu = new Date();
        setTimeout("waktu", 1000);
        document.getElementById('date').innerHTML =
         waktu.getHours() + ':' + waktu.getMinutes() + ':'
          + waktu.getSeconds()+ ', ' + waktu.getDate() +
           '-'+ waktu.getMonth()+ '-' + waktu.getFullYear()  ;
    }
