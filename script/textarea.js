'use strict';
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