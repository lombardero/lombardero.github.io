(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{25:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(16),n=a.n(c),i=(a(25),a(5)),r=a(6),o=a(7),l=a(8),j=a(14),d=a(19),h=a.n(d),b=(a(28),a(20)),u=a(10),m=a.n(u),O=a(1),p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,a=this.props.data.presentation,s=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{color:"#dbe9f4",type:"cobweb",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:a})}),Object(O.jsx)(m.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[s,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]}),Object(O.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(O.jsx)("i",{className:"fa fa-linkedin"}),"LinkedIn"]})]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(s.Component),x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsxs)("li",{children:["Design by"," ",Object(O.jsx)("a",{title:"Manuel Lombardero",href:"http://www.github.com/lombardero",children:"Manuel Lombardero"})]}),Object(O.jsxs)("li",{children:["Adapted code from "," ",Object(O.jsx)("a",{title:"template",href:"https://github.com/lombardero/react-nice-resume",children:"this awesome template"})]})]})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(s.Component),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(m.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:e,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About me"}),Object(O.jsx)("p",{children:t}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:a,className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})})]})]})})})}}]),a}(s.Component),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{})}}]),a}(s.Component),N=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.email,a=this.props.data.address.city,s=this.props.data.address.state,c=this.props.data.address.zip,n=this.props.data.phone;this.props.data.contactmessage;return Object(O.jsx)("section",{id:"contact",children:Object(O.jsx)(u.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[e,Object(O.jsx)("br",{}),a,", ",s," ",c,Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t})]})]})})})]})})})}}]),a}(s.Component),w=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),s}return Object(r.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(N,{data:this.state.resumeData.main}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),a}(s.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(w,{}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.7be5f71d.chunk.js.map