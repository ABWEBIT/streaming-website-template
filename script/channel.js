'use strict';
class Channel extends HTMLElement{
  constructor(){
    super();
  };
  connectedCallback(){
    this._partner = String(this.getAttribute('_partner')).trim();
    this._name = String(this.getAttribute('_name')).trim();
    this._title = String(this.getAttribute('_title')).trim();
    this._category = String(this.getAttribute('_category')).trim();
    this._status = String(this.getAttribute('_status')).trim();
    this._viwers = String(this.getAttribute('_viwers')).trim();

    if(this._status === 'broadcasting'){
      this._viwersNumber = Math.trunc(Math.abs(Number(this._viwers)));

      if(this._viwersNumber > 999){
        this._viwersNumber = (this._viwersNumber/1000).toFixed(1) + 'К'}
      else this._viwersNumber = this._viwers;

      this._statusHTML =`
        <div class="_status">
          <div class="_statusIcon">
            <svg><use href="#iconRedDot"></use></svg>
          </div>
          <div class="_statusText" data-number="${this._viwers}">${this._viwersNumber}</div>
        </div>`;

      this._infoHTML=`
        <div class="channelTitle">${this._title}</div>
        <div class="channelCategory">${this._category}</div>`;}

    else if(this._status === 'offline'){
      this._statusHTML = '';
      this._infoHTML=`
        <div class="channelText">Не в сети</div>`;}

    else if(this._status === 'retranslation'){

      this._statusHTML =`
        <div class="_status">
          <div class="_statusIcon">
            <svg><use href="#iconRetranslation"></use></svg>
          </div>
         </div>`;

      this._infoHTML=`
        <div class="channelText">Ретрансляция</div>`;};

    if(this._partner === 'none') this._partnerHTML = ''
    else if(this._partner === 'verified'){
      this._partnerHTML = `<svg><use href="#iconPartner"></use></svg>`;}

    // HTML
    this.innerHTML =`
      <a href="" class="channel" data-status="${this._status}">
        <div class="channelImage">
          <img src="avatar.png">
          ${this._partnerHTML}
        </div>
        <div class="channelInfo">
          <div class="channelBlock">
            <div class="channelName">${this._name}</div>
            ${this._statusHTML}
          </div>
            ${this._infoHTML}
        </div>
      </a>`;

    let link = this.querySelector('a');
    link.addEventListener('mouseenter',()=>this.channelMouseenter());
    link.addEventListener('mouseleave',()=>this.channelMouseleave());

  };

  channelMouseenter(){
    //if(localStorage.getItem('channelsPanelState') === 'closed'){
      let app = document.getElementById('app');
      if(app.classList.contains('channelsClosed')){

        let tip,tipHTML;
        tipHTML =`
          <div id="channelTip">
            <div class="channel" data-state="${this._status}">
              <div class="channelInfo">
                <div class="channelBlock">
                  <div class="channelName">${this._name}</div>
                  ${this._statusHTML}
                </div>
                  ${this._infoHTML}
              </div>
            </div>
          </div>`;

        document.body.insertAdjacentHTML("beforeend",tipHTML);
        tip = document.getElementById('channelTip');

        let pad = this.getBoundingClientRect().top - ((tip.offsetHeight / 2) - (this.offsetHeight / 2));
        tip.style.top = pad+'px';
      };

    //};
  };


  channelMouseleave(){
    //if(localStorage.getItem('channelsPanelState') === 'closed'){
      let app = document.getElementById('app');
      if(app.classList.contains('channelsClosed')){
        document.getElementById('channelTip').remove();
      };
    //};
  };

};

customElements.define('channel-',Channel);