"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const   iconeMenu= document.getElementById("mobile-icone"),
            visibleMenu = document.getElementById('visible-menu'),
            // degCard = document.querySelectorAll('#presantation-card'),
            // degCardEvan = document.getElementById('articles-line-block'),
            // allImagesReklama = document.querySelectorAll('#card-image-size'),
            allButtons = document.querySelectorAll('.under'),
            allText = document.querySelectorAll('#click-reading'),
            coverFon = document.querySelectorAll('#buttons-cover'),
            clickButton = document.getElementById('click-button'),
            showTouch = document.querySelector('.touch'),
            priceCards = document.querySelectorAll('.price'),
            priceDetailOPenBtn = document.querySelectorAll('#detai_price_card_button_open'),
            priceDetailBtn = document.querySelectorAll('#detai_price_card_button'),
            detailsButton = document.querySelectorAll("#detai_price_card_button_open"),
            closeDetailsButton = document.querySelectorAll("#close_detail_menu_butom"),
            phoneDesktopButton = document.getElementById('phone-desktop'),
            allPhoneBlock = document.getElementById('phone-block');
            
    
    function phoneDesktop (){
        phoneDesktopButton.style.background= 'white';
    }
    allPhoneBlock.addEventListener("click", (e)=>{
        if(e.target){
            phoneDesktopButton.style.background= 'black';
            setTimeout(phoneDesktop, 14000);
  
        } 
        
    })
    function noEffect (){
        showTouch.style.display = 'none';   
    }

    function effects (){
        showTouch.style.display = 'block';
    }
//    НИЖЕ ФУНКЦИЯ ПОКАЗЫВАЮЩАЯ click here
    // const promise = new Promise();
    //     promise((result,error)=>{
            
    //         let click = blockTouch.getBoundingClientRect().top + window.pageYOffset;
    //         let windowHeight = document.documentElement.scrollTop;
    //         if(windowHeight === click){
    //             effects();
    //         }
    //     }).then(result=>{console.log('done');
            
    //     }).finally(setTimeout(noEffect,3300));

    // мигающая подсказка для оборотных карточек
    // window.addEventListener('scroll', (event)=>{
    //     let click = blockTouch.getBoundingClientRect().top + window.pageYOffset;
    //     let windowHeight = document.documentElement.scrollTop;
    //     // console.log(`Общая высота: ${windowHeight}`);
    //     // console.log(`Высота элемента: ${click} `);
    //     const count = 0;
    //     if (windowHeight === click){
    //         // console.log("КОНТАКТ");
            
    //         effects();
    //         window.setTimeout(noEffect, 3300);
    //         return count+1;
    //         degCardEvan.addEventListener('click', (event)=>{
    //             if(event.target) {
    //                 noEffect();
    //             }
    //         });
            
    //     }
    //     console.log(count);
    // });
    

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

    // Переварачивающиеся картинки на 180 градусов:
    // degCardEvan.addEventListener('click', (event)=>{
    //     event.preventDefault();
    //     let deg = 180;
    //     for (let x = 0; x != allImagesReklama.length; ++x){
    //         if (allImagesReklama[x] == event.target) {
    //         let mention;
    //         degCard.forEach(function(item,i){
    //             if (x == i){
    //                 mention = item;
    //                 return mention;
    //             }
    //         });
    //         mention.style.transform = `rotateY(${deg}deg)`;
    //         deg += 180;
    //     }
    // }
    // });
    // ИЗМЕНЕНИЕ КУРСОРА ПРИ НАВЕДЕНИЕЕ НА ПОВОРОТНЫЕ КАРТОЧКИ
    // degCardEvan.addEventListener('mousedown', (event)=>{
    //     event.preventDefault();
        
    //     for (let x = 0; x != allImagesReklama.length; ++x){
    //         if (allImagesReklama[x] == event.target) {
    //         let cursor;
    //         degCard.forEach(function(item,i){
    //             if( i == x){
    //                 cursor = item;
    //                 return cursor;
    //             }
    //         });
    //         cursor.style.cursor = 'pointer';
            
    //     }
    // }
    // });

    // Нажатие кнопок в 3й части и появления окна (версия без фона поверх):
    // clickButton.addEventListener('click', (event)=>{
    //     if(event.target) {
    //         allText.forEach((item)=>{
    //             item.style.display = 'none';
    //         });
    //         allButtons.forEach((item)=>{
    //             // item.style.zIndex = 'none';
    //             item.style.boxShadow = 'none';
    //         });

    //     }

    //     let reading;
    //     let shadow;
    //     for (let z = 0; z != allButtons.length; ++z){
    //         if (allButtons[z] == event.target) {
    //             allButtons.forEach((item, u)=>{
    //                 if (u == z){
    //                     shadow = item;
    //                     return shadow;
    //                 }
    //             });
    //             // shadow.style.zIndex = '5';
    //             shadow.style.boxShadow = '-14px -6px 5px 4px rgba(34, 60, 80, 0.2)';
    //             allText.forEach((item, y)=>{
    //                 if (z == y){
    //                     reading = item;
    //                     return reading;
    //                 }
    //             });
    //             reading.style.display = 'block';
    //         } 
    //     }
    // });
    // НАЖАТИЕ ОКНА - НАЖАТИЕ НА ФОН
    clickButton.addEventListener('click', (event)=>{
        if(event.target) {
            allText.forEach((item)=>{
                item.style.display = 'none';
            });
            allButtons.forEach((item)=>{
                // item.style.zIndex = 'none';
                item.style.boxShadow = 'none';
            });

        }

        let reading;
        let shadow;
        for (let z = 0; z != coverFon.length; ++z){
            if (coverFon[z] == event.target) {
                allButtons.forEach((item, u)=>{
                    if (u == z){
                        shadow = item;
                        return shadow;
                    }
                });
                // shadow.style.zIndex = '5';
                shadow.style.boxShadow = '-14px -6px 5px 4px rgba(34, 60, 80, 0.2)';
                allText.forEach((item, y)=>{
                    if (z == y){
                        reading = item;
                        return reading;
                    }
                });
                reading.style.display = 'block';
            } 
        }
    });

    // ТАЙМЕР АКЦИИ
    const deadline = '2021-10-18';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    // Кнопка открытия и закрытия "детали" в карточке цены
    function priceDetail(name){
        name.forEach((button,number)=>{
            button.addEventListener("click", (event)=>{
                if(event.target){
                //    console.log(number);
                    for (let x = 0; x != priceDetailBtn.length; ++x){
                        if(x == number){
                            // console.log(`Кнопка ${x} : Карточка ${number}`);
                            priceDetailBtn.forEach((item, count)=>{
                                if(count == x){
                                    item.style.display = "block";
                                }
                            })
                        }
                    }
                    detailsButton.forEach((item)=>{
                        item.style.display = "none";
                    })
                    priceCards.forEach((item)=>{
                        item.style.display = "none";
                    })
                    // часть ниже работает на закрытие
                    closeDetailsButton.forEach((items, num)=>{
                        for (let y = 0; y != closeDetailsButton.length; ++y){
                            if(y == num){
                                items.addEventListener('click', (e)=>{
                                    priceDetailBtn.forEach((item, count)=>{
                                        if(count == y){
                                            item.style.display = "none";
                                        }
                                    })
                                    detailsButton.forEach((item)=>{
                                    item.style.display = "block";
                                    })
                                    priceCards.forEach((item)=>{
                                        item.style.display = "block";
                                    })
                                })

                            }
                        }
                    })

                }
            })
        });
    }

    priceDetail(priceDetailOPenBtn);




});