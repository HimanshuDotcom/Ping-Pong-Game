const rod1 = document.getElementById('rod1');
const rod2 = document.getElementById('rod2');
const print = console.log;

rod1.style.left = 0 + "px";
rod2.style.left = 0 + "px";

window.addEventListener('keydown', (e)=> {
    let position = parseInt(rod1.style.left);
    if(e.key == 'd' || e.key == 'D') {
        if(position < (window.innerWidth - 250 - 5) ) {
            rod1.style.left =  (position + 5) + 'px';
            rod2.style.left = (position + 5) + "px";
        }

    }
    if(e.key == 'a' || e.key == 'A') {
        if(position > 0) { 
            rod1.style.left = (position - 5) + 'px';
            rod2.style.left = (position - 5) + "px";
        }
    }
});