"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9860],{9860:(J,m,r)=>{r.r(m),r.d(m,{SignupPageModule:()=>q});var f=r(4755),l=r(5030),i=r(6794),c=r(4517),h=r(1332),n=r(2223),v=r(1228),Z=r(7020);function x(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Please enter your name"),n.qZA()())}function A(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Please enter a valid email address"),n.qZA()())}function M(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Please enter a valid phone number"),n.qZA()())}function P(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Password must be of minimum 8 characters long."),n.qZA()())}function S(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Confirm Password must be of minimum 8 characters long."),n.qZA()())}function _(e,a){1&e&&(n.TgZ(0,"ion-text",26)(1,"p",27),n._uU(2,"* Password Mismatch! You have entered a different password."),n.qZA()())}function y(e,a){if(1&e&&(n.TgZ(0,"ion-button",28),n._uU(1," SIGN UP "),n.qZA()),2&e){n.oxw();const t=n.MAs(8),o=n.MAs(37),s=n.MAs(32);n.Q6J("disabled",!t.valid||o.value!=s.value)}}function T(e,a){if(1&e&&(n.TgZ(0,"div",29)(1,"ion-button",30),n._UZ(2,"ion-spinner",31),n.qZA()()),2&e){n.oxw();const t=n.MAs(8),o=n.MAs(37),s=n.MAs(32);n.xp6(1),n.Q6J("disabled",!t.valid||o.value!=s.value)}}const b=[{path:"",component:(()=>{class e{constructor(t,o,s){this.authService=t,this.router=o,this.global=s,this.isLoading=!1}ngOnInit(){}onSubmit(t){t.valid&&this.register(t)}register(t){this.isLoading=!0,console.log(t.value),this.authService.register(t.value).then(o=>{console.log(o),this.navigate(o.type),this.isLoading=!1,t.reset()}).catch(o=>{console.log(o),this.isLoading=!1;let s="Could not sign you up, please try again.";"auth/email-already-in-use"==o.code&&(s=o.message),this.global.showAlert(s)})}navigate(t){let o=h.e.TABS;"admin"==t&&(o=h.e.ADMIN),this.router.navigateByUrl(o)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(v.e),n.Y36(c.F0),n.Y36(Z.U))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:42,vars:8,consts:[["color","primary"],["slot","start"],["defaultHref","/login"],[1,"ion-padding"],[3,"ngSubmit"],["f1","ngForm"],["lines","none"],[1,"ion-margin-bottom"],["color","light"],["name","person","slot","start","color","primary"],["type","text","name","name","ngModel","","placeholder","Name","required",""],["name","ngModel"],["color","danger",4,"ngIf"],["name","mail","slot","start","color","primary"],["type","email","name","email","ngModel","","email","","placeholder","Email","required",""],["emailCtrl","ngModel"],["name","call","slot","start","color","primary"],["type","tel","name","phone","ngModel","","placeholder","Phone","required","","minlength","11","maxlength","11"],["phone","ngModel"],["name","key","slot","start","color","primary"],["type","password","name","password","ngModel","","placeholder","Password","required","","minlength","8"],["passwordCtrl","ngModel"],["type","text","name","c_password","ngModel","","placeholder","Confirm Password","required","","minlength","8"],["c_passwordCtrl","ngModel"],["expand","block","shape","round","type","submit","color","primary",3,"disabled",4,"ngIf"],["class","ion-text-center",4,"ngIf"],["color","danger"],[1,"errorMsg"],["expand","block","shape","round","type","submit","color","primary",3,"disabled"],[1,"ion-text-center"],["shape","round","color","primary",3,"disabled"],["name","circles"]],template:function(t,o){if(1&t){const s=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Create Account"),n.qZA()()(),n.TgZ(6,"ion-content",3)(7,"form",4,5),n.NdJ("ngSubmit",function(){n.CHM(s);const g=n.MAs(8);return n.KtG(o.onSubmit(g))}),n.TgZ(9,"ion-list",6)(10,"div",7)(11,"ion-item",8),n._UZ(12,"ion-icon",9)(13,"ion-input",10,11),n.qZA(),n.YNc(15,x,3,0,"ion-text",12),n.qZA(),n.TgZ(16,"div",7)(17,"ion-item",8),n._UZ(18,"ion-icon",13)(19,"ion-input",14,15),n.qZA(),n.YNc(21,A,3,0,"ion-text",12),n.qZA(),n.TgZ(22,"div",7)(23,"ion-item",8),n._UZ(24,"ion-icon",16)(25,"ion-input",17,18),n.qZA(),n.YNc(27,M,3,0,"ion-text",12),n.qZA(),n.TgZ(28,"div",7)(29,"ion-item",8),n._UZ(30,"ion-icon",19)(31,"ion-input",20,21),n.qZA(),n.YNc(33,P,3,0,"ion-text",12),n.qZA(),n.TgZ(34,"ion-item",8),n._UZ(35,"ion-icon",19)(36,"ion-input",22,23),n.qZA(),n.YNc(38,S,3,0,"ion-text",12),n.YNc(39,_,3,0,"ion-text",12),n.qZA(),n.YNc(40,y,2,1,"ion-button",24),n.YNc(41,T,3,1,"div",25),n.qZA()()}if(2&t){const s=n.MAs(14),d=n.MAs(20),g=n.MAs(26),p=n.MAs(32),u=n.MAs(37);n.xp6(15),n.Q6J("ngIf",!s.valid&&s.touched),n.xp6(6),n.Q6J("ngIf",!d.valid&&d.touched),n.xp6(6),n.Q6J("ngIf",!g.valid&&g.touched),n.xp6(6),n.Q6J("ngIf",!p.valid&&p.touched),n.xp6(5),n.Q6J("ngIf",!u.valid&&u.touched),n.xp6(1),n.Q6J("ngIf",u.valid&&u.value!=p.value),n.xp6(1),n.Q6J("ngIf",!o.isLoading),n.xp6(1),n.Q6J("ngIf",o.isLoading)}},dependencies:[f.O5,l._Y,l.JJ,l.JL,l.Q7,l.wO,l.nD,l.on,l.On,l.F,i.oU,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.pK,i.Ie,i.q_,i.PQ,i.yW,i.wd,i.sr,i.j9,i.cs],styles:[".errorMsg[_ngcontent-%COMP%]{font-size:.7rem}ion-button[_ngcontent-%COMP%]{margin-top:5vh}"]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(b),c.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[f.ez,l.u5,i.Pc,U]}),e})()}}]);