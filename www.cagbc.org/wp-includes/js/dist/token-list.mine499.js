/*! This file is auto-generated */
!function(){"use strict";var r={d:function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o:function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}},e={};r.d(e,{default:function(){return t}});class t{constructor(r=""){this.value=r,this._currentValue,this._valueAsArray}entries(...r){return this._valueAsArray.entries(...r)}forEach(...r){return this._valueAsArray.forEach(...r)}keys(...r){return this._valueAsArray.keys(...r)}values(...r){return this._valueAsArray.values(...r)}get value(){return this._currentValue}set value(r){r=String(r),this._valueAsArray=[...new Set(r.split(/\s+/g).filter(Boolean))],this._currentValue=this._valueAsArray.join(" ")}get length(){return this._valueAsArray.length}toString(){return this.value}*[Symbol.iterator](){return yield*this._valueAsArray}item(r){return this._valueAsArray[r]}contains(r){return-1!==this._valueAsArray.indexOf(r)}add(...r){this.value+=" "+r.join(" ")}remove(...r){this.value=this._valueAsArray.filter((e=>!r.includes(e))).join(" ")}toggle(r,e){return void 0===e&&(e=!this.contains(r)),e?this.add(r):this.remove(r),e}replace(r,e){return!!this.contains(r)&&(this.remove(r),this.add(e),!0)}supports(){return!0}}(window.wp=window.wp||{}).tokenList=e.default}();