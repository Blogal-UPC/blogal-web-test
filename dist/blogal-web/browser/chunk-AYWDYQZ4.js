import{g as c,h as d,j as g}from"./chunk-WKIJ7LZP.js";import{Qb as t,Yb as m,ca as o,ea as s,ub as e,vb as n,wb as r}from"./chunk-Z2UMMSTU.js";var p=class l{authService=o(g);router=o(c);onSubmitReader(){let a={email:"reader@example.com",password:"password123"},i=this.authService.login(a);this.router.navigate(["/reader/homepage"])}onSubmitWriter(){let a={email:"writer@example.com",password:"password123"},i=this.authService.login(a);this.router.navigate(["/writer/homepage"])}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=s({type:l,selectors:[["app-navbar-home"]],standalone:!0,features:[m],decls:34,vars:0,consts:[[1,"navbar","navbar-expand-lg"],[1,"container-fluid"],["href","#",1,"navbar-brand","d-flex","align-items-center"],["src","assets/logo.png","alt","Logo","width","60","height","60",1,"d-inline-block","align-text-top"],[1,"ms-2"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["href","#benefits",1,"nav-link"],["href","#testimonials",1,"nav-link"],["href","#pricing",1,"nav-link"],["href","#about-us",1,"nav-link"],["href","#faqs",1,"nav-link"],["href","#guide",1,"nav-link"],[1,"nav-item","signin-login-button"],["routerLink","/auth/login","routerLinkActive","active",1,"nav-link"],["routerLink","/auth/register","routerLinkActive","active",1,"nav-link"]],template:function(i,v){i&1&&(e(0,"nav",0)(1,"div",1)(2,"a",2),r(3,"img",3),e(4,"span",4),t(5,"Blogal"),n()(),e(6,"button",5),r(7,"span",6),n(),e(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),t(12,"Beneficios"),n()(),e(13,"li",9)(14,"a",11),t(15,"Testimonios"),n()(),e(16,"li",9)(17,"a",12),t(18,"Precios"),n()(),e(19,"li",9)(20,"a",13),t(21,"Nosotros"),n()(),e(22,"li",9)(23,"a",14),t(24,"FAQs"),n()(),e(25,"li",9)(26,"a",15),t(27,"Gu\xEDa"),n()(),e(28,"li",16)(29,"a",17),t(30,"Inicio de Sesi\xF3n"),n()(),e(31,"li",16)(32,"a",18),t(33,"Registro"),n()()()()()())},dependencies:[d],styles:[".navbar[_ngcontent-%COMP%]{background-color:#6fa5f6;color:#000;padding:10px 20px}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;transition:color .3s;padding:10px;border-radius:5%;display:inline-block;background-color:#a4bfe7}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#6fa5f6}.signin-login-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff}.signin-login-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#a4bfe7}"]})};export{p as a};