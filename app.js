'use strict';
let channelsPanel,channelsButton,channelsFunction;
channelsPanel = document.getElementById('channelsPanel');
channelsButton = document.querySelector('.channelsButton');

channelsFunction=()=>{
  if(channelsPanel.dataset.condition === 'minimized') channelsPanel.setAttribute('data-condition','maximized');
  else channelsPanel.setAttribute('data-condition','minimized');
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
channelsButton.addEventListener('click',()=>{
  channelsFunction();
  //resizeApp.unobserve(app);
});

let channelsBodyTitle,channelsTitleFunction;
channelsBodyTitle = document.querySelectorAll('.channelsBodyTitle');
//channelsBodyTitle.forEach(channelsTitleFunction);

channelsTitleFunction=()=>{
  
};



/*
// scroll to top
let upButton,template;
upButton = document.querySelector('.button[data-type="up"]');
template = document.getElementById('template');
upButton.addEventListener('click',()=>template.scrollTo(0,0));
*/

//function loadHTML(){
//  fetch('home.html')
//  .then(response=> response.text())
//  .then(text=> document.getElementById('homePage').innerHTML = text);
//}