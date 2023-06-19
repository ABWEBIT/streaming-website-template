'use strict';
let sidePanelsToggleButton = document.querySelectorAll('.sidePanelsToggleButton');

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

sidePanelsToggleButton.forEach(function(el) {
  el.addEventListener('click',()=>{
    //resizeApp.unobserve(app);
    if(el.parentElement.dataset.condition === 'minimized') el.parentElement.setAttribute('data-condition','maximized');
    else el.parentElement.setAttribute('data-condition','minimized');

  });
});
