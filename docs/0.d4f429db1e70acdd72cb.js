(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{FpdJ:function(t,a,n){"use strict";n.r(a);var r=n("CcnG"),e=function(){},l=n("FVSy"),i=n("Fzqc"),c=n("Wf4p"),o=r.La({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:24px;border-radius:2px}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-card .mat-divider{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider{left:auto;right:0}.mat-card .mat-divider.mat-divider-inset{position:static;margin:0}.mat-card.mat-card-flat{box-shadow:none}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle,.mat-card-title{display:block;margin-bottom:16px}.mat-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 48px);margin:0 -24px 16px -24px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-footer{display:block;margin:0 -24px -24px -24px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 4px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header-text{margin:0 8px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0}.mat-card-lg-image,.mat-card-md-image,.mat-card-sm-image{margin:-8px 0}.mat-card-title-group{display:flex;justify-content:space-between;margin:0 -8px}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}@media (max-width:599px){.mat-card{padding:24px 16px}.mat-card-actions{margin-left:-8px;margin-right:-8px}.mat-card-image{width:calc(100% + 32px);margin:16px -16px}.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}.mat-card-header{margin:-8px 0 0 0}.mat-card-footer{margin-left:-16px;margin-right:-16px}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-24px}.mat-card>.mat-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function s(t){return r.Za(2,[r.Ua(null,0),r.Ua(null,1)],null,null)}var u=r.La({encapsulation:2,styles:[],data:{}});function d(t){return r.Za(2,[r.Ua(null,0),(t()(),r.Na(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),r.Ua(null,1),r.Ua(null,2)],null,null)}var m=n("bujt"),p=n("UodH"),f=n("dWZg"),h=n("lLAP"),g=function(){function t(){}return t.of=function(t,a){return{id:(new Date).getMilliseconds(),franchise:t,cardNumber:a,purchases:0}},t}(),x=n("F/XL"),b=function(){function t(t){this.storage=t}return t.prototype.get=function(t){try{return JSON.parse(this.storage.getItem(t))}catch(t){return null}},t.prototype.set=function(t,a){this.storage.setItem(t,JSON.stringify(a))},t.prototype.remove=function(t){this.storage.removeItem(t)},t}();function y(t){if(!t)return!1;try{var a=Date.now(),n="storage-test-entry-"+a,r="storage-test-value-"+a;t.setItem(n,r);var e=t.getItem(n);return t.removeItem(n),e===r}catch(t){return!1}}var v=function(){function t(){this.storage=new Map}return t.prototype.get=function(t){return this.storage.has(t)?this.storage.get(t):null},t.prototype.set=function(t,a){this.storage.set(t,a)},t.prototype.remove=function(t){this.storage.delete(t)},t}(),w=new r.o("SESSION_STORAGE"),T=new r.o("LOCAL_STORAGE");function O(){return y(sessionStorage)?new b(sessionStorage):new v}function N(){return y(localStorage)?new b(localStorage):new v}var M=function(){},S=n("AytR"),P=function(){function t(t){this.storage=t,this.defaultCards=[{id:1,franchise:"Visa Platinum",cardNumber:"8047",purchases:4},{id:2,franchise:"Mastercard AAdvantage",cardNumber:"8396",purchases:1},{id:3,franchise:"Mastercard Prestige",cardNumber:"0692",purchases:0}],this.initLists()}return t.prototype.get=function(){return this.storage.get("ccards")},t.prototype.save=function(t){this.storage.set("ccards",t)},t.prototype.initLists=function(){(null==this.storage.get("ccards")||S.a.resetStorage)&&this.storage.set("ccards",this.defaultCards)},t}(),C=function(){function t(t){this.repository=t,this.cards=this.repository.get()}return t.prototype.findAll=function(){return this.rawObservableCopyOf(this.cards)},t.prototype.create=function(t,a){var n=g.of(t,a);return this.cards.push(n),this.repository.save(this.cards),this.rawObservableCopyOf(n)},t.prototype.incrementPurchases=function(t,a){void 0===a&&(a=1);var n=this.modifyPurchases(t,a);return Object(x.a)(n.purchases)},t.prototype.decrementPurchases=function(t,a){void 0===a&&(a=1);var n=this.modifyPurchases(t,-1*a);return Object(x.a)(n.purchases)},t.prototype.rawObservableCopyOf=function(t){return Object(x.a)(JSON.parse(JSON.stringify(t)))},t.prototype.modifyPurchases=function(t,a){var n=this.findById(t);return n.purchases+a>=0&&(n.purchases=n.purchases+a,this.repository.save(this.cards)),n},t.prototype.findById=function(t){var a=this.cards.filter(function(a){return a.id===t});if(0===a.length)throw new Error("Credit card not found");if(a.length>1)throw new Error("More than one credit card found");return a[0]},t}(),k=function(){function t(t){this.cardService=t}return t.prototype.ngOnInit=function(){},t.prototype.increment=function(){var t=this;this.cardService.incrementPurchases(this.card.id).subscribe(function(a){return t.card.purchases=a})},t.prototype.decrement=function(){var t=this;this.cardService.decrementPurchases(this.card.id).subscribe(function(a){return t.card.purchases=a})},t}(),j=r.La({encapsulation:0,styles:[[".flex-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.mat-card[_ngcontent-%COMP%]{padding:12px 8px}.mat-card-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:8px}.mat-card[_ngcontent-%COMP%] > .mat-card-actions[_ngcontent-%COMP%]:last-child{flex-direction:row-reverse;display:flex;padding:0;margin:-10px 0}.mat-mini-fab[_ngcontent-%COMP%]{font-size:20px;-webkit-transform:scale(.7);transform:scale(.7)}"]],data:{}});function I(t){return r.Za(0,[(t()(),r.Na(0,0,null,null,19,"mat-card",[["class","mat-card"]],null,null,null,s,o)),r.Ma(1,49152,null,0,l.a,[],null,null),(t()(),r.Na(2,0,null,0,8,"div",[["class","flex-container"]],null,null,null,null,null)),(t()(),r.Na(3,0,null,null,4,"mat-card-header",[["class","mat-card-header"]],null,null,null,d,u)),r.Ma(4,49152,null,0,l.d,[],null,null),(t()(),r.Na(5,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),r.Ma(6,16384,null,0,l.f,[],null,null),(t()(),r.Ya(7,null,[" "," ****"," "])),(t()(),r.Na(8,0,null,null,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),r.Ma(9,16384,null,0,l.c,[],null,null),(t()(),r.Ya(10,null,[" Purchases "," "])),(t()(),r.Na(11,0,null,0,8,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),r.Ma(12,16384,null,0,l.b,[],null,null),(t()(),r.Na(13,0,null,null,6,"div",[["class","button-row"]],null,null,null,null,null)),(t()(),r.Na(14,0,null,null,2,"button",[["color","primary"],["mat-mini-fab",""]],[[8,"disabled",0]],[[null,"click"]],function(t,a,n){var r=!0;return"click"===a&&(r=!1!==t.component.increment()&&r),r},m.b,m.a)),r.Ma(15,180224,null,0,p.b,[r.k,f.a,h.b],{color:[0,"color"]},null),(t()(),r.Ya(-1,0,["+"])),(t()(),r.Na(17,0,null,null,2,"button",[["color","warn"],["mat-mini-fab",""]],[[8,"disabled",0]],[[null,"click"]],function(t,a,n){var r=!0;return"click"===a&&(r=!1!==t.component.decrement()&&r),r},m.b,m.a)),r.Ma(18,180224,null,0,p.b,[r.k,f.a,h.b],{color:[0,"color"]},null),(t()(),r.Ya(-1,0,["-"]))],function(t,a){t(a,15,0,"primary"),t(a,18,0,"warn")},function(t,a){var n=a.component;t(a,7,0,n.card.franchise,n.card.cardNumber),t(a,10,0,n.card.purchases),t(a,11,0,"end"===r.Va(a,12).align),t(a,14,0,r.Va(a,15).disabled||null),t(a,17,0,r.Va(a,18).disabled||null)})}var L=n("Ip0R"),A=function(){function t(t){this.cardsService=t,this.cards=[]}return t.prototype.ngOnInit=function(){var t=this;this.cardsService.findAll().subscribe(function(a){return t.cards=a})},t}(),Z=r.La({encapsulation:0,styles:[[".cards-list[_ngcontent-%COMP%]{padding:10px}.card[_ngcontent-%COMP%]{margin-bottom:10px}"]],data:{}});function _(t){return r.Za(0,[(t()(),r.Na(0,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(t()(),r.Na(1,0,null,null,1,"cc-credit-card",[],null,null,null,I,j)),r.Ma(2,114688,null,0,k,[C],{card:[0,"card"]},null)],function(t,a){t(a,2,0,a.context.$implicit)},null)}function J(t){return r.Za(0,[(t()(),r.Na(0,0,null,null,2,"div",[["class","cards-list"]],null,null,null,null,null)),(t()(),r.Ea(16777216,null,null,1,null,_)),r.Ma(2,802816,null,0,L.h,[r.N,r.K,r.q],{ngForOf:[0,"ngForOf"]},null)],function(t,a){t(a,2,0,a.component.cards)},null)}var F=r.Ja("cc-cards-list",A,function(t){return r.Za(0,[(t()(),r.Na(0,0,null,null,1,"cc-cards-list",[],null,null,null,J,Z)),r.Ma(1,114688,null,0,A,[C],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),E=n("SMsm"),U=n("t/Na"),V=n("ZYjt"),Y=n("eDkP"),z=n("ZYCi"),R=function(){},q=n("4c35"),D=n("qAlS"),G=n("mVsa"),B=n("LC5p"),K=n("Nsh5"),W=n("8mMr"),H=n("hctd");n.d(a,"PurchaseCounterModuleNgFactory",function(){return X});var X=r.Ka(e,[],function(t){return r.Sa([r.Ta(512,r.j,r.Z,[[8,[F]],[3,r.j],r.v]),r.Ta(4608,L.j,L.i,[r.s,[2,L.o]]),r.Ta(5120,E.c,E.a,[[3,E.c],[2,U.a],V.b,[2,L.c]]),r.Ta(4608,Y.a,Y.a,[Y.g,Y.c,r.j,Y.f,Y.d,r.p,r.x,L.c,i.b]),r.Ta(5120,w,O,[]),r.Ta(5120,T,N,[]),r.Ta(4608,P,P,[T]),r.Ta(4608,C,C,[P]),r.Ta(1073742336,L.b,L.b,[]),r.Ta(1073742336,z.m,z.m,[[2,z.r],[2,z.k]]),r.Ta(1073742336,R,R,[]),r.Ta(1073742336,i.a,i.a,[]),r.Ta(1073742336,c.c,c.c,[[2,c.a]]),r.Ta(1073742336,f.b,f.b,[]),r.Ta(1073742336,c.e,c.e,[]),r.Ta(1073742336,p.c,p.c,[]),r.Ta(1073742336,E.b,E.b,[]),r.Ta(1073742336,q.b,q.b,[]),r.Ta(1073742336,D.a,D.a,[]),r.Ta(1073742336,Y.e,Y.e,[]),r.Ta(1073742336,G.a,G.a,[]),r.Ta(1073742336,l.e,l.e,[]),r.Ta(1073742336,B.a,B.a,[]),r.Ta(1073742336,K.a,K.a,[]),r.Ta(1073742336,W.b,W.b,[]),r.Ta(1073742336,H.a,H.a,[]),r.Ta(1073742336,M,M,[]),r.Ta(1073742336,e,e,[]),r.Ta(1024,z.i,function(){return[[{path:"",component:A},{path:"cards",component:A}]]},[])])})}}]);