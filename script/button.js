'use strict';
class Button extends HTMLElement{
  constructor(){
    super();
  };
  connectedCallback(){
    this._prefix = String(this.getAttribute('_prefix')).trim();
    this._core   = String(this.getAttribute('_core')).trim();
    this._suffix = String(this.getAttribute('_suffix')).trim();

    // prefix
    if(this._prefix && this._prefix !== 'null'){
      this._prefixHTML =`
        <div class="buttonPrefix">
          <svg><use href="#${this._prefix}"/></svg>
        </div>`;}
    else this._prefixHTML = '';

    // core
    if(this._core && this._core !== 'null'){
      this._coreHTML =`
        <div class="buttonCore">
          <span>${this._core}</span>
        </div>`;}
    else this._coreHTML = '';

    // suffix
    if(this._suffix && this._suffix !== 'null'){
      this._suffixHTML =`
        <div class="buttonSuffix">
          <svg><use href="#${this._suffix}"/></svg>
        </div>`;}
    else this._suffixHTML = '';

    // HTML
    this.innerHTML =`
      ${this._prefixHTML}
      ${this._coreHTML}
      ${this._suffixHTML}
    `;

  };
};

customElements.define('button-',Button);