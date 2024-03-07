'use strict';
class Channel extends HTMLElement{
  constructor(){
    super();
  };
  connectedCallback(){
    this.channelPartner = String(this.getAttribute('_partner')).trim();
    this.channelName = String(this.getAttribute('_name')).trim();
    this.channelTitle = String(this.getAttribute('_title')).trim();
    this.channelCategory = String(this.getAttribute('_category')).trim();
    this.channelStatus = String(this.getAttribute('_status')).trim();
    this.channelViwers = String(this.getAttribute('_viwers')).trim();

    if(this.channelStatus === 'broadcasting'){
      this.channelViwersNumber = Math.trunc(Math.abs(Number(this.channelViwers)));

      if(this.channelViwersNumber > 999){
        this.channelViwersFormat = (this.channelViwersNumber/1000).toFixed(1) + 'К'}
      else this.channelViwersFormat = this.channelViwersNumber;

      this.channelViwersHTML =`
        <div class="channelViewers">
          <div class="channelViewersIcon">
            <svg><use href="#svgRedDot"></use></svg>
          </div>
          <div class="channelViewersNumber" data-number="${this.channelViwersNumber}">${this.channelViwersFormat}</div>
        </div>`;

      this.channelStatusHTML=`
        <div class="channelTitle">${this.channelTitle}</div>
        <div class="channelCategory">${this.channelCategory}</div>`;}

    else if(this.channelStatus === 'offline'){
      this.channelViwersHTML = '';
      this.channelStatusHTML=`
        <div class="channelStatus">Не в сети</div>`;}

    else if(this.channelStatus === 'retranslation'){

      this.channelViwersHTML =`
        <div class="channelViewers">
          <div class="channelViewersIcon">
            <svg><use href="#svgBlueDot"></use></svg>
            <svg><use href="#svgRetranslation"></use></svg>
          </div>
         </div>`;

      this.channelStatusHTML=`
        <div class="channelStatus">Ретрансляция</div>`;};

    if(this.channelPartner === 'default') this.channelPartnerHTML = ''
    else if(this.channelPartner === 'verified'){
      this.channelPartnerHTML = `<svg><use href="#svgPartnerVerified"></use></svg>`;}
    else if(this.channelPartner === 'partner'){
      this.channelPartnerHTML = `<svg><use href="#svgPartnerVerified"></use></svg>`;}

    // HTML
    this.innerHTML =`
      <a href="" class="channel" data-state="${this.channelStatus}">
        <div class="channelImage">
          <img src="avatar.png">
          ${this.channelPartnerHTML}
        </div>
        <div class="channelInfo">
          <div class="channelBlock">
            <div class="channelName">${this.channelName}</div>
            ${this.channelViwersHTML}
          </div>
            ${this.channelStatusHTML}
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
            <div class="channel" data-state="${this.channelStatus}">
              <div class="channelInfo">
                <div class="channelBlock">
                  <div class="channelName">${this.channelName}</div>
                  ${this.channelViwersHTML}
                </div>
                  ${this.channelStatusHTML}
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

/*
Partner Level
-
0 - default
1 - verified
2 - partner
*/