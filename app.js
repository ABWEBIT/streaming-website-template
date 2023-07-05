'use strict';
let channelsPanel,chattingPanel;
channelsPanel = document.getElementById('channelsPanel');
chattingPanel = document.getElementById('chattingPanel');
let panelToggle = document.querySelectorAll('.panelToggle');

if(typeof(Storage) !== 'undefined'){

  let channelsPanelState = localStorage.getItem('channelsPanelState');
  let chattingPanelState = localStorage.getItem('chattingPanelState');

  if(channelsPanelState === null){
    localStorage.setItem('channelsPanelState','closed');
    channelsPanelState = localStorage.getItem('channelsPanelState');
  }
  else{
    channelsPanel.setAttribute('data-state',channelsPanelState);
  };

  if(chattingPanelState === null){
    localStorage.setItem('chattingPanelState','closed');
    chattingPanelState = localStorage.getItem('chattingPanelState');
  }
  else{
    chattingPanel.setAttribute('data-state',chattingPanelState);
  };

};

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

panelToggle.forEach(function(el) {
  el.addEventListener('click',()=>{

    if(!el.parentElement.classList.contains('animated')){
      el.parentElement.classList.add('animated');
    };

    //resizeApp.unobserve(app);
    if(el.parentElement.dataset.state === 'closed'){
      if(el.parentElement.getAttribute('id') === 'channelsPanel'){
        localStorage.setItem('channelsPanelState','opened');
        el.parentElement.setAttribute('data-state','opened');
      }
      else if(el.parentElement.getAttribute('id') === 'chattingPanel'){
        localStorage.setItem('chattingPanelState','opened');
        el.parentElement.setAttribute('data-state','opened');        
      };
    }
    else{
      if(el.parentElement.getAttribute('id') === 'channelsPanel'){
        localStorage.setItem('channelsPanelState','closed');
        el.parentElement.setAttribute('data-state','closed');
      }
      else if(el.parentElement.getAttribute('id') === 'chattingPanel'){
        localStorage.setItem('chattingPanelState','closed');
        el.parentElement.setAttribute('data-state','closed');        
      };
    };

  });
});




function createChannelsGroupItem(id,status,name,title,viewers){
  let v;
  if(status === 'offline'){
    title = 'Не в сети';
    v = '';
  }
  else if(status === 'online'){
    v = `<div class="channelsGroupItemViewers"><span>`+viewers+`</span></div>`;
  };


  let html =
   `<a href="" class="channelsGroupItem" data-state="`+status+`">
      <div class="channelsGroupItemImage">
        <img src="avatar.png">
      </div>
      <div class="channelsGroupItemText">
        <div class="channelsGroupItemName">`+name+`</div>
        <div class="channelsGroupItemTitle">`+title+`</div>
        `+v+`
       </div>
    </a>`;
  document.getElementById(id).insertAdjacentHTML('beforeend',html)
};

// избранное
createChannelsGroupItem(
  'listFavorites',
  'online',
  'Алёша Попович и Тугарин Змей',
  'Этот стример думает, что вам интересно смотреть',
  '123,456'
);

createChannelsGroupItem(
  'listFavorites',
  'online',
  'Колобок',
  '✅ Заголовок трансляции',
  '12,345'
);

createChannelsGroupItem(
  'listFavorites',
  'online',
  'СИНЬОР ПОМИДОР',
  'ОЧЕНЬ ДЛИННЫЙ ЗАГОЛОВОК ТРАНСЛЯЦИИ, ЗАХОДИ ПОСМОТРЕТЬ',
  '1,234'
);

createChannelsGroupItem(
  'listFavorites',
  'offline',
  'Домовёнок Кузя',
  '',
  ''
);

createChannelsGroupItem(
  'listFavorites',
  'offline',
  'Кот Леопольд',
  '',
  ''
);

// рекомендуемое
createChannelsGroupItem(
  'listRecommend',
  'online',
  'Доктор Айболит',
  'Добрый доктор',
  '123,456'
);

createChannelsGroupItem(
  'listRecommend',
  'online',
  'Дюймовочка',
  'Маленькая и добрая девочка',
  '12,345'
);

createChannelsGroupItem(
  'listRecommend',
  'online',
  'Леший',
  'Лесной дух',
  '1,234'
);

createChannelsGroupItem(
  'listRecommend',
  'online',
  'Змей-горыныч',
  'Огнедышащий дракон',
  '123'
);

createChannelsGroupItem(
  'listRecommend',
  'online',
  'Кащей бессмертный',
  'Злой чародей',
  '12'
);
