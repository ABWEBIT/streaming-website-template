'use strict';
class Button extends HTMLElement{
  constructor(){
    super();
  };
  connectedCallback(){
    this.buttonPrefix = String(this.getAttribute('bPrefix')).trim();
    this.buttonCore = String(this.getAttribute('bCore')).trim();
    this.buttonSuffix = String(this.getAttribute('bSuffix')).trim();

    // prefix
    if(this.buttonPrefix && this.buttonPrefix !== 'null'){
      this.buttonPrefixHTML =`
        <div class="buttonPrefix">
          <svg><use href="#${this.buttonPrefix}"/></svg>
        </div>`;}
    else this.buttonPrefixHTML = '';

    // core
    if(this.buttonCore && this.buttonCore !== 'null'){
      this.buttonCoreHTML =`
        <div class="buttonCore">
          <span>${this.buttonCore}</span>
        </div>`;}
    else this.buttonCoreHTML = '';

    // suffix
    if(this.buttonSuffix && this.buttonSuffix !== 'null'){
      this.buttonSuffixHTML =`
        <div class="buttonSuffix">
          <svg><use href="#${this.buttonSuffix}"/></svg>
        </div>`;}
    else this.buttonSuffixHTML = '';

    // HTML
    this.innerHTML =`
      ${this.buttonPrefixHTML}
      ${this.buttonCoreHTML}
      ${this.buttonSuffixHTML}
    `;

  };
};

customElements.define('button-',Button);