(function (global) {
    "use strict";
/*
!function(undef){
    if( document.createElement('div').firstElementChild===undef ){
        Object.defineProperty(Element.prototype, 'firstElementChild', {
            get : function () { // faster then this.children[0]
                var el = this.firstChild;
                do {
                    if(el.nodeType===1){
                        return el;
                    }
                    el = el.nextSibling;
                } while(el);
                return null;
            }
        });
        Object.defineProperty(Element.prototype, 'lastElementChild', {
            get : function () {
                var el = this.lastChild;
                do {
                    if(el.nodeType===1){
                        return el;
                    }
                    el = el.previousSibling;
                } while(el);
                return null;
            }
        });
        Object.defineProperty(Element.prototype, 'nextElementSibling', {
            get : function () {
                var el = this.nextSibling;
                while(el) {
                    if(el.nodeType===1){
                        return el;
                    }
                    el = el.nextSibling;
                };
                return null;
            }
        });
        Object.defineProperty(Element.prototype, 'previousElementSibling', {
            get : function () {
                var el = this.previousSibling;
                while(el){
                    if(el.nodeType===1){
                        return el;
                    }
                    el = el.previousSibling;
                };
                return null;
            }
        });
    }
}();

    global.Element && (function(ElementPrototype) {
        // In Internet Explorer 8 Object.defineProperty works with DOM objects
        Object.defineProperty(ElementPrototype, METHOD+'ElementChild', {
            get : function () { // faster then this.children[0]
                var el = this[METHOD+'Child'];
                do {
                    if(el.nodeType===1){
                        return el;
                    }
                    el = el.nextSibling;
                } while(el);
                return null;
            }
        });
    }(global.Element.prototype));
*/
}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));