"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5112,7172],{3033:(b,C,i)=>{i.d(C,{k:()=>u});class u{constructor(d,v,y,M,Z,e,P,T){this.uid=d,this.title=v,this.address=y,this.landmark=M,this.house=Z,this.lat=e,this.lng=P,this.id=T}}},5112:(b,C,i)=>{i.r(C),i.d(C,{HomePageModule:()=>Q});var u=i(4755),O=i(5030),d=i(6794),v=i(4517),y=i(5861),M=i(7123),Z=i(3033),e=i(2223),P=i(2158),T=i(7172),o=i(7020),s=i(2875),a=i(9514),c=i(5098),h=i(3001),m=i(4464);function _(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"swiper-slide",4),e.NdJ("click",function(){const A=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.goToRestaurant(A))}),e._UZ(1,"img",5),e.qZA()}if(2&n){const t=l.$implicit;e.xp6(1),e.Q6J("src",null==t?null:t.banner,e.LSH)}}const f=function(){return{clickable:!0,dynamicBullets:!0}};function x(n,l){if(1&n&&(e.TgZ(0,"ion-row",1)(1,"div")(2,"swiper-container",2),e.YNc(3,_,2,1,"swiper-slide",3),e.qZA()()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("modules",t.swiperModules)("slidesPerView",1.2)("spaceBetween",20)("pagination",e.DdM(5,f)),e.xp6(1),e.Q6J("ngForOf",t.bannerImages)}}let I=(()=>{class n{constructor(t){this.router=t,this.swiperModules=[m.L$]}ngOnInit(){}goToRestaurant(t){console.log(t),t?.res_id&&this.router.navigate(["/","tabs","restaurants",t.res_id])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-banner"]],inputs:{bannerImages:"bannerImages"},decls:1,vars:1,consts:[["class","borderBottom",4,"ngIf"],[1,"borderBottom"],[3,"modules","slidesPerView","spaceBetween","pagination"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"src"]],template:function(t,r){1&t&&e.YNc(0,x,4,6,"ion-row",0),2&t&&e.Q6J("ngIf",(null==r.bannerImages?null:r.bannerImages.length)>0)},dependencies:[u.sg,u.O5,d.Nd],styles:["div[_ngcontent-%COMP%]{transform:translateY(10%);height:28vh;width:94%;margin:auto}div[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%]{--swiper-pagination-color: var(--ion-color-primary)}div[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%]{height:24vh}div[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:20vh;border-radius:5px}"]}),n})();function L(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.location?null:t.location.title)}}function w(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1,"Home"),e.qZA())}function D(n,l){1&n&&(e.TgZ(0,"div"),e._UZ(1,"ion-skeleton-text",5),e.qZA())}function B(n,l){1&n&&e._UZ(0,"app-loading-restaurant")}function H(n,l){if(1&n&&e._UZ(0,"app-banner",6),2&n){const t=e.oxw();e.Q6J("bannerImages",t.banners)}}function R(n,l){1&n&&(e.TgZ(0,"ion-text",9)(1,"p"),e._uU(2,"No Restaurants found near you"),e.qZA()())}const E=function(n){return["/","tabs","restaurants",n]};function U(n,l){if(1&n&&e._UZ(0,"app-restaurant",11),2&n){const t=l.$implicit;e.Q6J("restaurant",t)("routerLink",e.VKq(2,E,t.uid))}}function Y(n,l){if(1&n&&(e.TgZ(0,"ion-item-group"),e.YNc(1,U,1,4,"app-restaurant",10),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.restaurants)}}function J(n,l){if(1&n&&(e.TgZ(0,"ion-list")(1,"ion-list-header",7)(2,"ion-label")(3,"h4"),e._uU(4,"Restaurants Nearby"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Discover unique tastes near you"),e.qZA()()(),e.YNc(7,R,3,0,"ion-text",8),e.YNc(8,Y,2,1,"ion-item-group",2),e.qZA()),2&n){const t=e.oxw();e.xp6(7),e.Q6J("ngIf",0==(null==t.restaurants?null:t.restaurants.length)),e.xp6(1),e.Q6J("ngIf",(null==t.restaurants?null:t.restaurants.length)>0)}}const N=[{path:"",component:(()=>{class n{constructor(t,r,g,A,p,K){this.router=t,this.api=r,this.addressService=g,this.global=A,this.locationService=p,this.mapService=K,this.banners=[],this.restaurants=[],this.isLoading=!1,this.location={}}ngOnInit(){this.addressSub=this.addressService.addressChange.subscribe(t=>{console.log("address",t),t&&t?.lat?(this.isLoading||(this.isLoading=!0),this.location=t,this.nearbyApiCall()):t&&(!this.location||!this.location?.lat)&&this.searchLocation("home","home-modal")},t=>{console.log(t),this.isLoading=!1,this.global.errorToast()}),this.isLoading=!0,this.getBanners(),this.location?.lat||this.getNearbyRestaurants()}getBanners(){this.api.getBanners().then(t=>{console.log("banners: ",t),this.banners=t}).catch(t=>{console.log(t)})}nearbyApiCall(){var t=this;return(0,y.Z)(function*(){try{console.log(t.location),t.restaurants=yield t.api.getNearbyRestaurants(t.location.lat,t.location.lng),console.log(t.restaurants),t.isLoading=!1}catch(r){console.log(r),t.global.errorToast()}})()}getNearbyRestaurants(){var t=this;return(0,y.Z)(function*(){try{const r=yield t.locationService.getCurrentLocation();console.log("get nearby restaurants",r);const{latitude:g,longitude:A}=r.coords,p=yield t.mapService.getAddress(g,A);p&&(t.location=new Z.k("",p.address_components[0].short_name,p.formatted_address,"","",g,A),yield t.getData()),console.log("restaurants: ",t.restaurants),t.isLoading=!1}catch(r){console.log(r),t.isLoading=!1,t.searchLocation("home","home-modal")}})()}getData(){var t=this;return(0,y.Z)(function*(){try{t.restaurants=[],yield t.addressService.checkExistAddress(t.location)}catch(r){console.log(r),t.global.errorToast()}})()}searchLocation(t,r){var g=this;return(0,y.Z)(function*(){try{const A={component:M.t,cssClass:r||"",backdropDismiss:"select-place"==t,componentProps:{from:t}},p=yield g.global.createModal(A);console.log("modal value: ",p),p?"add"==p?g.addAddress(g.location):"select"==p?g.searchLocation("select-place"):(g.location=p,yield g.getData()):(console.log("location value: ",g.location),(!g.location||!g.location?.lat)&&g.searchLocation("home","home-modal"))}catch(A){console.log(A)}})()}addAddress(t){let r;t?t.from="home":t={from:"home"},r={queryParams:{data:JSON.stringify(t)}},this.router.navigate(["/","tabs","address","edit-address"],r)}ngOnDestroy(){this.addressSub&&this.addressSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.F0),e.Y36(P.s),e.Y36(T.D),e.Y36(o.U),e.Y36(s.a),e.Y36(a.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:11,vars:6,consts:[["mode","md"],["color","dark",3,"click"],[4,"ngIf"],["color","dark","name","chevron-down-outline"],[3,"bannerImages",4,"ngIf"],["animated","",2,"height","25vh"],[3,"bannerImages"],[1,"ion-margin-bottom"],["color","danger","class","ion-text-center",4,"ngIf"],["color","danger",1,"ion-text-center"],[3,"restaurant","routerLink",4,"ngFor","ngForOf"],[3,"restaurant","routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e.NdJ("click",function(){return r.searchLocation("select-place")}),e.YNc(3,L,2,1,"span",2),e.YNc(4,w,2,0,"span",2),e._UZ(5,"ion-icon",3),e.qZA()()(),e.TgZ(6,"ion-content"),e.YNc(7,D,2,0,"div",2),e.YNc(8,B,1,0,"app-loading-restaurant",2),e.YNc(9,H,1,1,"app-banner",4),e.YNc(10,J,9,2,"ion-list",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",null==r.location?null:r.location.lat),e.xp6(1),e.Q6J("ngIf",!r.location||!(null!=r.location&&r.location.lat)),e.xp6(3),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("ngIf",!r.isLoading),e.xp6(1),e.Q6J("ngIf",!r.isLoading))},dependencies:[u.sg,u.O5,d.W2,d.Gu,d.gu,d.Ub,d.Q$,d.q_,d.yh,d.CK,d.yW,d.wd,d.sr,d.YI,v.rH,c.m,h.R,I],styles:["ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1rem}ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.7rem}"]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild(N),v.Bz]}),n})();var F=i(5642);let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,O.u5,d.Pc,S,F.K]}),n})()},7172:(b,C,i)=>{i.d(C,{D:()=>e});var u=i(5861),O=i(1135),d=i(3900),v=i(3033),y=i(2223),M=i(1228),Z=i(2158);let e=(()=>{class P{get addresses(){return this._addresses.asObservable()}get addressChange(){return this._addressChange.asObservable()}constructor(o,s){this.authService=o,this.api=s,this._addresses=new O.X([]),this._addressChange=new O.X(null)}getUid(){var o=this;return(0,u.Z)(function*(){return yield o.authService.getId()})()}getAddressRef(o){var s=this;return(0,u.Z)(function*(){return s.uid||(s.uid=yield s.getUid()),yield s.api.collection("address").doc(s.uid).collection("all",o)})()}getAddresses(o){var s=this;return(0,u.Z)(function*(){try{let a;a=o?yield s.getAddressRef(h=>h.limit(o)):yield s.getAddressRef();const c=yield a.get().pipe((0,d.w)(function(){var h=(0,u.Z)(function*(m){let _=yield m.docs.map(f=>{let x=f.data();return x.id=f.id,x});return console.log(_),_});return function(m){return h.apply(this,arguments)}}())).toPromise();return console.log("allAddress: ",c),s._addresses.next(c),c}catch(a){throw console.log(a),a}})()}addAddress(o){var s=this;return(0,u.Z)(function*(){try{const a=s._addresses.value,c=new v.k(s.uid?s.uid:yield s.getUid(),o.title,o.address,o.landmark,o.house,o.lat,o.lng);let h=Object.assign({},c);delete h.id;const m=yield(yield s.getAddressRef()).add(h);console.log("response: ",m);const _=yield m.id,f={...h,id:_};return a.push(f),s._addresses.next(a),s._addressChange.next(f),f}catch(a){throw a}})()}updateAddress(o,s){var a=this;return(0,u.Z)(function*(){try{yield(yield a.getAddressRef()).doc(o).update(s);let c=a._addresses.value;const h=c.findIndex(_=>_.id==o),m=new v.k(s.user_id,s.title,s.address,s.landmark,s.house,s.lat,s.lng,o);return c[h]=m,a._addresses.next(c),a._addressChange.next(m),m}catch(c){throw c}})()}deleteAddress(o){var s=this;return(0,u.Z)(function*(){try{yield(yield s.getAddressRef()).doc(o.id).delete();let a=s._addresses.value;return a=a.filter(c=>c.id!=o.id),s._addresses.next(a),a}catch(a){throw a}})()}changeAddress(o){this._addressChange.next(o)}checkExistAddress(o){var s=this;return(0,u.Z)(function*(){try{console.log("check exist address: ",o);let a=o;const c=yield(yield s.getAddressRef(h=>h.where("lat","==",o.lat).where("lng","==",o.lng))).get().pipe((0,d.w)(function(){var h=(0,u.Z)(function*(m){let _=yield m.docs.map(f=>{let x=f.data();return x.id=f.id,x});return console.log(_),_});return function(m){return h.apply(this,arguments)}}())).toPromise();return console.log("addresses: ",c),c?.length>0&&(a=c[0]),console.log("loc: ",a),s.changeAddress(a),a}catch(a){throw a}})()}}return P.\u0275fac=function(o){return new(o||P)(y.LFG(M.e),y.LFG(Z.s))},P.\u0275prov=y.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),P})()}}]);