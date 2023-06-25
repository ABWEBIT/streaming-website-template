'use strict';
let channelsPanel = document.getElementById('channelsPanel');
let sidePanelToggleButton = document.querySelectorAll('.sidePanelToggleButton');

if(typeof(Storage) !== 'undefined'){
  let status = localStorage.getItem('channelsPanelStatus');
  if(status === null){
    localStorage.setItem('channelsPanelStatus','maximized');
    status = localStorage.getItem('channelsPanelStatus');
    channelsPanel.setAttribute('data-condition',status);
  }
  else{
    channelsPanel.setAttribute('data-condition',status);
  }
};

/*
let app;
app = document.getElementById('app');

const resizeApp = new ResizeObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.contentRect.width <= 1024){
      channelsPanel.setAttribute('data-condition','minimized');
    }
    else if(entry.contentRect.width > 1024){
      channelsPanel.setAttribute('data-condition','maximized');
    }
  });
});

resizeApp.observe(app);
*/

sidePanelToggleButton.forEach(function(el) {
  el.addEventListener('click',()=>{

    if(!el.parentElement.classList.contains('animated')){
      el.parentElement.classList.add('animated');
    };

    //resizeApp.unobserve(app);
    if(el.parentElement.dataset.condition === 'minimized'){
      localStorage.setItem('channelsPanelStatus','maximized');
      el.parentElement.setAttribute('data-condition','maximized');
    }
    else{
      localStorage.setItem('channelsPanelStatus','minimized');
      el.parentElement.setAttribute('data-condition','minimized');
    }
  });
});
