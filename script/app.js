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

let channelsComponent = document.querySelector('.channelsComponent');
let channelsToggle    = document.querySelector('.channelsToggle');

channelsToggle.addEventListener('click',()=>{
  if(channelsComponent.classList.contains('opened')){
    channelsComponent.classList.remove('opened');
    channelsComponent.classList.add('closed');
    //localStorage.setItem('channelsPanelState','closed');
  }
  else if(channelsComponent.classList.contains('closed')){
    channelsComponent.classList.remove('closed');
    channelsComponent.classList.add('opened');
    //localStorage.setItem('chattingPanelState','opened');     
  };
});

function numberFormat(number){
  number = Math.trunc(Math.abs(number));
  if(number > 999) number = (number/1000).toFixed(1) + 'К'
  return number;
};