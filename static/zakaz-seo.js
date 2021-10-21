"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const   iconeMenu= document.getElementById("mobile-icone"),
            visibleMenu = document.getElementById('visible-menu'),
            nav = document.getElementById('chief-nav'),
            headerImage = document.getElementById('header-image'),
            allContent = document.getElementById('content-block'),
            tarifBlock = document.getElementById('tarif-block'),
            // allBody = document.querySelector('body'),
            fonPhoto = document.getElementById('fon-photo'),
            fonTarifBlock = document.getElementById('fon');
    
    // console.log(tarifBlock);
    function heightSize(){
        
        // nav.getBoundingClientRect();
        // headerImage.getBoundingClientRect();
        // allContent.getBoundingClientRect();
        return nav.getBoundingClientRect().height + headerImage.getBoundingClientRect().height + allContent.getBoundingClientRect().height - tarifBlock.getBoundingClientRect().height + 80;
    }     
    // window.addEventListener('load', (event)=>{
    //     if (event){
    //         // let size = nav.getBoundingClientRect() + headerImage.getBoundingClientRect() + allContent.getBoundingClientRect();
    //         // let allHeight = tarifBlock.getBoundingClientRect().right;
    //         let size = heightSize();
    //         // console.log(size);
    //         // console.log(insideHeight);
    //         fonTarifBlock.style.top = `${size}px`;
    //         fonPhoto.style.top = `${size}px`;
    //     }
    // });
    window.addEventListener('load', (event)=>{
        if (event){
            if(window.innerWidth === 320&& window.innerWidth <384){
                // console.log(window.innerWidth);
                let size = heightSize();
                fonTarifBlock.style.top = `${size-60}px`;
                fonPhoto.style.top = `${size-60}px`;
            }
            if(window.innerWidth === 384&& window.innerWidth <412) {
                let size = heightSize();
                fonTarifBlock.style.top = `${size - 60}px`;
                fonTarifBlock.styl.height = `${tarifBlock.getBoundingClientRect().height}`;
                fonPhoto.style.top = `${size}px`;
            }
            if(window.innerWidth === 412&& window.innerWidth <768) {
                let size = heightSize();
                fonTarifBlock.style.top = `${size - 60}px`;
                // fonTarifBlock.styl.width = `${tarifBlock.getBoundingClientRect().height}`;
                fonPhoto.style.top = `${size}px`;
            }else{
                let size = heightSize();
                fonTarifBlock.style.top = `${size}px`;
                fonPhoto.style.top = `${size}px`;
  
            }
            
        }
    });

    
    function OpenCloseMenu(){
        iconeMenu.addEventListener('click', (event)=>{
            event.preventDefault();
            if (event.target){
                iconeMenu.classList.toggle('close-button');
                visibleMenu.classList.toggle('nav-menu-close');
            }
        });
    }
   
    OpenCloseMenu();

 

    // ТАЙМЕР АКЦИИ
    // const deadline = '2021-06-30';
    // function getTimeRemaining(endtime) {
    //     const t = Date.parse(endtime) - Date.parse(new Date()),
    //         days = Math.floor( (t/(1000*60*60*24)) ),
    //         seconds = Math.floor( (t/1000) % 60 ),
    //         minutes = Math.floor( (t/1000/60) % 60 ),
    //         hours = Math.floor( (t/(1000*60*60) % 24) );

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }
    // function getZero(num){
    //     if (num >= 0 && num < 10) { 
    //         return '0' + num;
    //     } else {
    //         return num;
    //     }
    // }
    // function setClock(selector, endtime) {

    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector("#days"),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    // setClock('.timer', deadline);

});