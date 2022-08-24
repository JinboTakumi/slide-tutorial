window.addEventListener('DOMContentLoaded',
function () {
    let leftBtn = document.getElementById('left-icon');
    let rightBtn = document.getElementById('right-icon');
    let textFrame = document.getElementById('slide-text');
    let imgFrame = document.getElementById('slide-img');
    let count = 0;

    let startstop = document.getElementById('startstop');
    let elapsedTime = 3;
    let timerId = null;

    let mySong = document.getElementById('mySong');
    let icon = document.getElementById('icon');

    icon.onclick = function () {
        if(mySong.paused) {
            mySong.play();
            icon.src = './images/pause.png'
        }else {
            mySong.pause();
            icon.src = './images/play.png';
        }
    };

    function Animation () {
        switch (count) {
            case 0:
                gsap.to(textFrame, {
                    duration: 1.7,
                    y: '0px',
                    delay: .3,
                    ease: Elastic.easeInOut.config(1, .7)
                });
                gsap.to(imgFrame, {
                    duration: 1.7,
                    x: '0px',
                    
                    ease: Elastic.easeInOut.config(1, .7)
                });
                break;

                case 1:
                    gsap.to(textFrame, {
                        duration: 1.7,
                        y: '-450px',
                        delay: .3,
                        ease: Elastic.easeInOut.config(1, .7)
                    });
                    gsap.to(imgFrame, {
                        duration: 1.7,
                        x: '-450px',
                        
                        ease: Elastic.easeInOut.config(1, .7)
                    });
                
                break;

                case 2:
                    gsap.to(textFrame, {
                        duration: 1.7,
                        y: '-900px',
                        delay: .3,
                        ease: Elastic.easeInOut.config(1, .7)
                    });
                    gsap.to(imgFrame, {
                        duration: 1.7,
                        x: '-900px',
                        
                        ease: Elastic.easeInOut.config(1, .7)
                    });
                
                break;

                case 3:
                gsap.to(textFrame, {
                    duration: 1.7,
                    y: '-1350px',
                    delay: .3,
                    ease: Elastic.easeInOut.config(1, .7)
                });
                gsap.to(imgFrame, {
                    duration: 1.7,
                    x: '-1350px',
                    
                    ease: Elastic.easeInOut.config(1, .7)
                });
                break;

                case 4:
                gsap.to(textFrame, {
                    duration: 1.7,
                    y: '-1800px',
                    delay: .3,
                    ease: Elastic.easeInOut.config(1, .7)
                });
                gsap.to(imgFrame, {
                    duration: 1.7,
                    x: '-1800px',
                    
                    ease: Elastic.easeInOut.config(1, .7)
                });
                break;
        
            default:
                break;
        }
    }
    

    leftBtn.addEventListener('click', function() {
        count--;
        count < 0 ? (count = 4) : count;
        Animation();
    });
    
    rightBtn.addEventListener('click', function() {
        count++;
        count > 4 ? (count = 0) : count;
        Animation();
    });


    startstop.addEventListener('click', function () {
        if(startstop.innerHTML == 'START') {
            timerId = setInterval(function () {
                elapsedTime--;
    
        if (elapsedTime === 0) {
            count++;
            count > 4 ? (count = 0, clearInterval(timerId), startstop.innerHTML = 'START') : count;
            Animation();
            elapsedTime = 3;
        }
            }, 1000);

            startstop.innerHTML ='STOP';

        } else {
            clearInterval(timerId);
            startstop.innerHTML = 'START';
            
        }
    });
   
})



