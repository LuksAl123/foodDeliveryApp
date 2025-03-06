"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{8802:(x,d,e)=>{e.r(d),e.d(d,{LoginPageModule:()=>L});var u=e(4755),g=e(5030),a=e(6794),r=e(4517),p=e(1332),n=e(2223),m=e(1228),h=e(7020);function f(o,s){1&o&&(n.TgZ(0,"ion-text",21)(1,"p",22),n._uU(2,"* Please enter a valid email address"),n.qZA()())}function v(o,s){1&o&&(n.TgZ(0,"ion-text",21)(1,"p",22),n._uU(2,"* Password must be of minimum 8 characters long"),n.qZA()())}function y(o,s){if(1&o&&(n.TgZ(0,"ion-button",23),n._uU(1," SIGN IN "),n.qZA()),2&o){n.oxw();const t=n.MAs(4);n.Q6J("disabled",!t.valid)}}function P(o,s){if(1&o&&(n.TgZ(0,"div",24)(1,"ion-button",25),n._UZ(2,"ion-spinner",26),n.qZA()()),2&o){n.oxw();const t=n.MAs(4);n.xp6(1),n.Q6J("disabled",!t.valid)}}const Z=[{path:"",component:(()=>{class o{constructor(t,i,l){this.authService=t,this.router=i,this.global=l,this.type=!0,this.isLogin=!1}ngOnInit(){}changeType(){this.type=!this.type}onSubmit(t){console.log(t),t.valid&&this.login(t)}login(t){this.isLogin=!0,this.authService.login(t.value.email,t.value.password).then(i=>{console.log(i),this.navigate(i),this.isLogin=!1,t.reset()}).catch(i=>{console.log(i),this.isLogin=!1;let l="Could not sign you in, please try again.";"auth/invalid-credential"===i.code&&(l="Invalid email or password."),this.global.showAlert(l)})}navigate(t){let i=p.e.TABS;"admin"==t&&(i=p.e.ADMIN),this.router.navigateByUrl(i)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(m.e),n.Y36(r.F0),n.Y36(h.U))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:6,consts:[[1,"ion-padding"],["src","assets/imgs/logo.png"],[3,"ngSubmit"],["f","ngForm"],["lines","none"],[1,"ion-margin-bottom"],["color","light"],["name","mail","slot","start","color","primary"],["type","email","name","email","ngModel","","email","","placeholder","Email","required",""],["emailCtrl","ngModel"],["color","danger","class","ion-text-center",4,"ngIf"],["name","key","slot","start","color","primary"],["color","primary","slot","end",3,"name","click"],["name","password","ngModel","","placeholder","Password","required","","minlength","8",3,"type"],["passwordCtrl","ngModel"],[1,"ion-text-right"],["routerLink","/login/forgot-password"],["expand","block","shape","round","type","submit","color","primary",3,"disabled",4,"ngIf"],["class","ion-text-center",4,"ngIf"],["color","primary","routerLink","/login/signup",1,"ion-text-center"],[1,"marginTop"],["color","danger",1,"ion-text-center"],[1,"errorMsg"],["expand","block","shape","round","type","submit","color","primary",3,"disabled"],[1,"ion-text-center"],["shape","round","color","primary",3,"disabled"],["name","circles"]],template:function(t,i){if(1&t){const l=n.EpF();n.TgZ(0,"ion-content",0)(1,"ion-avatar"),n._UZ(2,"ion-img",1),n.qZA(),n.TgZ(3,"form",2,3),n.NdJ("ngSubmit",function(){n.CHM(l);const T=n.MAs(4);return n.KtG(i.onSubmit(T))}),n.TgZ(5,"ion-list",4)(6,"div",5)(7,"ion-item",6),n._UZ(8,"ion-icon",7)(9,"ion-input",8,9),n.qZA(),n.YNc(11,f,3,0,"ion-text",10),n.qZA(),n.TgZ(12,"ion-item",6),n._UZ(13,"ion-icon",11),n.TgZ(14,"ion-icon",12),n.NdJ("click",function(){return i.changeType()}),n.qZA(),n._UZ(15,"ion-input",13,14),n.qZA(),n.YNc(17,v,3,0,"ion-text",10),n.qZA(),n.TgZ(18,"p",15)(19,"span",16),n._uU(20,"Forgot Password?"),n.qZA()(),n.YNc(21,y,2,1,"ion-button",17),n.YNc(22,P,3,1,"div",18),n.qZA(),n.TgZ(23,"ion-text",19)(24,"p",20),n._uU(25," Don't have an account? "),n.TgZ(26,"b"),n._uU(27,"Sign Up"),n.qZA()()()()}if(2&t){const l=n.MAs(10),c=n.MAs(16);n.xp6(11),n.Q6J("ngIf",!l.valid&&l.touched),n.xp6(3),n.Q6J("name",i.type?"eye-outline":"eye-off-outline"),n.xp6(1),n.Q6J("type",i.type?"password":"text"),n.xp6(2),n.Q6J("ngIf",!c.valid&&c.touched),n.xp6(4),n.Q6J("ngIf",!i.isLogin),n.xp6(1),n.Q6J("ngIf",i.isLogin)}},dependencies:[u.O5,g._Y,g.JJ,g.JL,g.Q7,g.wO,g.on,g.On,g.F,a.BJ,a.YG,a.W2,a.gu,a.Xz,a.pK,a.Ie,a.q_,a.PQ,a.yW,a.j9,a.YI,r.rH],styles:["ion-avatar[_ngcontent-%COMP%]{height:20vh;width:20vh;margin:5vh auto}ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;height:100%}.errorMsg[_ngcontent-%COMP%]{font-size:.7rem}ion-button[_ngcontent-%COMP%]{margin-top:5vh}.marginTop[_ngcontent-%COMP%]{margin-top:5vh}"]}),o})()},{path:"signup",loadChildren:()=>e.e(9860).then(e.bind(e,9860)).then(o=>o.SignupPageModule)},{path:"forgot-password",loadChildren:()=>e.e(9203).then(e.bind(e,9203)).then(o=>o.ForgotPasswordPageModule)}];let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[r.Bz.forChild(Z),r.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,g.u5,a.Pc,M]}),o})()}}]);