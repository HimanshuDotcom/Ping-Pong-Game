const rod1 = document.getElementById('rod1');
const rod2 = document.getElementById('rod2');
const ball = document.querySelector('.ball');

let move,
    ballXSpeed = 10,
    ballYspeed = 10;

let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

rod1.style.left = (window.innerWidth - 250) / 2 + "px";
rod2.style.left = (window.innerWidth - 250) / 2 + "px";


window.addEventListener('keypress',(e)=> {

    let rodSpeed = 20;

    let rodRect = rod1.getBoundingClientRect();

    // For moving the rod
    let position = parseInt(rod1.style.left); 
    if(e.key == 'd' || e.key == 'D') {
        if(position + rodRect.width <= (windowWidth - rodSpeed) ) {
            rod1.style.left =  (position + rodSpeed) + 'px';
            rod2.style.left = rod1.style.left;
        }

    }
    if(e.key == 'a' || e.key == 'A') {
        if(position > 0) { 
            rod1.style.left = (position - rodSpeed) + 'px';
            rod2.style.left = rod1.style.left;
        }
    }

    if(e.key == "Enter") {
        let rod1Height = rod1.offsetHeight;
        let rod1Width = rod1.offsetWidth;
        let rod2Height = rod2.offsetHeight;
        let rod2Width = rod2.offsetWidth;
            

         move = setInterval(function() {

            rod1X = rod1.getBoundingClientRect().x;
            rod2X = rod2.getBoundingClientRect().x;
            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY = ballRect.y;
            let ballWid = ballRect.width;
            console.log(ballYspeed)
            ball.style.left = ballX + ballXSpeed + 'px';
            ball.style.top = ballY + ballYspeed + 'px';

            // on hitting left
            if( (ballX + ballWid) >= windowWidth - ballXSpeed) 
                ballXSpeed = -10;

            // on hitting right
            if(ballX <= 0)
                ballXSpeed = 10;

            // rod1 hit
            if(ballY <= rod1Height) {
                if(ballX + ballWid >= rod2X && ballX < rod2X + rod1Width) 
                    ballYspeed = 10;
                else
                    alert("oops you missed");
            }
           
            // rod2 hit
           if(ballY + ballWid >= (windowHeight - rod2Height) ) {
               if(ballX + ballWid >= rod1X && ballX < rod1X + rod1Width)
                    ballYspeed = -10;
                else
                    clearInterval(move);
            }


        }, 30);
    }
}) 