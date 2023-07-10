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

panelToggle.forEach(function(el){
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

let groupFavoritesToggle = document.getElementById('groupFavorites').querySelector('.channelsToggle');

groupFavoritesToggle.addEventListener('click',()=>{
  groupFavoritesToggle.classList.toggle('showMore');
  groupFavoritesToggle.classList.toggle('showLess');
  let buttonText = groupFavoritesToggle.querySelector('.buttonText');

  if(groupFavoritesToggle.classList.contains('showMore')){
    buttonText.innerHTML = 'Показать больше';
  }
  else if(groupFavoritesToggle.classList.contains('showLess')){
    buttonText.innerHTML = 'Показать меньше';
  };
});


class Textarea{
  constructor(elementId,rowsMax){
    this.element = document.getElementById(elementId);
    this.element.value = '';
    this.rowsMax = rowsMax;
    this.rowsCount = 0;
    this.style = window.getComputedStyle(this.element);
    this.padding = parseFloat(this.style.paddingTop) + parseFloat(this.style.paddingBottom);
    this.rowHeight = this.element.clientHeight - this.padding;
    this.element.addEventListener('input',()=>this.textareaAutoHeight());
  };
  textareaAutoHeight(){
    this.element.rows = 1;
    this.rowsCount = Math.round((this.element.scrollHeight - this.padding) / this.rowHeight);
    if(this.rowsMax === 0) this.element.rows = this.rowsCount
    else if(this.rowsMax > 0) this.rowsCount <= this.rowsMax ? this.element.rows = this.rowsCount : this.element.rows = this.rowsMax
    else throw new Error('кол-во строк должно быть 0 или больше');
  };
};
new Textarea('textarea',3);

function numberFormat(number){
  number = Math.trunc(Math.abs(number));
  if(number > 999) number = (number/1000).toFixed(1) + 'К'
  return number;
};

function channelCreate(id,status,name,title,viewers){
  let viewersBlock,viewersFormatted;
  viewersFormatted = numberFormat(viewers);

  if(status === 'offline'){
    title = 'Не в сети';
    viewersBlock = '';
  }
  else if(status === 'online'){
    viewersBlock = 
   `<div class="channelViewers">
      <div class="channelViewersIcon">
        <svg><use xlink:href="#svgIconOnline"></use></svg>
      </div>
      <div class="channelViewersNumber" data-number="`+viewers+`">`+viewersFormatted+`</div>
    </div>`;
  };

  let html =
   `<a href="" class="channel" data-state="`+status+`">
      <div class="channelImage">
        <img src="avatar.png">
      </div>
      <div class="channelText">
        <div class="channelName">`+name+`</div>
        <div class="channelTitle">`+title+`</div>
        `+viewersBlock+`
       </div>
    </a>`;
  document.getElementById(id).insertAdjacentHTML('beforeend',html);
  
};

// избранное
channelCreate(
  'listFavorites',
  'online',
  'Алёша Попович и Тугарин Змей',
  'Этот стример думает, что вам интересно смотреть',
  '123456'
);

channelCreate(
  'listFavorites',
  'online',
  'Колобок',
  '✅ Заголовок трансляции',
  '12345'
);

channelCreate(
  'listFavorites',
  'online',
  'СИНЬОР ПОМИДОР',
  'ОЧЕНЬ ДЛИННЫЙ ЗАГОЛОВОК ТРАНСЛЯЦИИ, ЗАХОДИ ПОСМОТРЕТЬ',
  '1234'
);

channelCreate(
  'listFavorites',
  'offline',
  'Домовёнок Кузя',
  '',
  ''
);

channelCreate(
  'listFavorites',
  'offline',
  'Кот Леопольд',
  '',
  ''
);

// рекомендуемое
channelCreate(
  'listRecommend',
  'online',
  'Доктор Айболит',
  'Добрый доктор',
  '123456'
);

channelCreate(
  'listRecommend',
  'online',
  'Дюймовочка',
  'Маленькая и добрая девочка',
  '12345'
);

channelCreate(
  'listRecommend',
  'online',
  'Леший',
  'Лесной дух',
  '1234'
);

channelCreate(
  'listRecommend',
  'online',
  'Змей-горыныч',
  'Огнедышащий дракон',
  '123'
);

channelCreate(
  'listRecommend',
  'online',
  'Кащей бессмертный',
  'Злой чародей',
  '12'
);


let channelsArray = document.querySelector('#channelsPanel').querySelectorAll('.channel');

channelsArray.forEach(function(el){
  el.addEventListener('mouseover',()=>{

    if(localStorage.getItem('channelsPanelState') === 'closed'){
      let popup,clone;
      popup = document.createElement('div');
      popup.id = 'channelPopup';
      popup.style.top = el.getBoundingClientRect().top+'px';
      clone = el.querySelector('.channelText').cloneNode(true);
      popup.appendChild(clone);
      document.body.appendChild(popup);
    };

  });
  el.addEventListener('mouseout',()=>{
    if(localStorage.getItem('channelsPanelState') === 'closed'){
      document.getElementById('channelPopup').remove();
    };
  });
});
