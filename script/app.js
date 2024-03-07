'use strict';
/*
let app;
app = document.getElementById('app');

const resizeApp = new ResizeObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.contentRect.width <= 1280){
      channelsPanel.setAttribute('data-state','closed');
    }
    else if(entry.contentRect.width > 1280){
      channelsPanel.setAttribute('data-state','opened');
    }
  });
});

resizeApp.observe(app);
*/
let app = document.getElementById('app');
let channelsToggle = document.querySelector('.channelsToggle');

channelsToggle.addEventListener('click',()=>{
  if(app.classList.contains('channelsOpened')){
    app.classList.remove('channelsOpened');
    app.classList.add('channelsClosed');
    //localStorage.setItem('channelsPanelState','channelsClosed');
  }
  else if(app.classList.contains('channelsClosed')){
    app.classList.remove('channelsClosed');
    app.classList.add('channelsOpened');
    //localStorage.setItem('chattingPanelState','channelsOpened');     
  };
});

function numberFormat(number){
  number = Math.trunc(Math.abs(number));
  if(number > 999) number = (number/1000).toFixed(1) + 'К'
  return number;
};