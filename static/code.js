"use strict";

// document.addEventListener('DOMContentLoaded', ()=> {
//     const iconeMenu = document.querySelector('.menu-icone'),
//             navMenu = document.guerySelectorName('.nav-menu');

// });

document.addEventListener("DOMContentLoaded", ()=>{
    const   iconeMenu= document.getElementById("mobile-icone"),
            visibleMenu = document.getElementById('visible-menu'),
            phoneDesktopButton = document.getElementById('phone-desktop'),
            allPhoneBlock = document.getElementById('phone-block');
            // customTopPart = document.getElementById('under-Mobilemenu-page');
    
    function OpenCloseMenu(){
        iconeMenu.addEventListener('click', (event)=>{
            event.preventDefault();
            if (event.target){
                iconeMenu.classList.toggle('close-button');
                visibleMenu.classList.toggle('nav-menu-close');
                
                // if (visibleMenu.classList.contains('nav-menu-close')) {
                //     window.addEventListener('click', (e)=>{
                //         if (e.target){
                //             console.log("контакт");
                //             visibleMenu.classList.toggle('nav-menu');
                //             iconeMenu.classList.toggle('close-button');
                //         }
                //     });
                // }

            }
            
            
        });
        
    }
  
    // функция ниже не будет работать без единообразной подложкой под меню, на каждой странице в этой части свои классы, поэтому нужно
    // создать один общий невидимый фоновый и по клику по нему уже будет закрытие
    // function ClickOther(){
    //     customTopPart.addEventListener('click', (e)=>{
    //         if(e.target){
    //             iconeMenu.classList.remove('close-button');
    //             visibleMenu.classList.remove('nav-menu-close');
    //         }
    //     });
    // }
    OpenCloseMenu();
    // ClickOther();
    function phoneDesktop (){
        phoneDesktopButton.style.background= 'white';
    }
    allPhoneBlock.addEventListener("click", (e)=>{
        if(e.target){
            phoneDesktopButton.style.background= 'black';
            setTimeout(phoneDesktop, 14000);
  
        } 
        
    })

});



// const iconeMenu = document.querySelector('.menu-icone');
//         // closeMenu = document.querySelector('body');
// let navMenu = document.getElementById('mobile-nav');
// let closeMenu = document.getElementById('close-button');


// iconeMenu.addEventListener('click', (event) => {
//     event.preventDefault();
//     if(event.target){
//         // console.log('Да, нажал!');
//         navMenu.style.height = '240px';
//         navMenu.style.width = '40%';

//     }
// });
// closeMenu.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if(e.target){
//         // console.log('ЗАКРЫТИЕ!');
//         navMenu.style.height = 'px';
//         navMenu.style.width = '0%'; 
//     }
// });


// const iconeMenu = document.querySelector('.menu-icone');
//         // closeMenu = document.querySelector('body');
// let navMenu = document.getElementById('mobile-nav');
// let closeMenu = document.getElementById('close-button');


// iconeMenu.addEventListener('click', (event) => {
//     event.preventDefault();
//     if(event.target){
//         // console.log('Да, нажал!');
//         navMenu.style.height = '240px';
//         navMenu.style.width = '40%';   
//     }
// });
// closeMenu.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if(e.target){
//         // console.log('ЗАКРЫТИЕ!');
//         navMenu.style.height = 'px';
//         navMenu.style.width = '0%'; 
//     }
// });