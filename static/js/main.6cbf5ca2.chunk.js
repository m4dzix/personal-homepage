(this["webpackJsonppersonal-homepage"]=this["webpackJsonppersonal-homepage"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(2),i=t.n(o),c=t(7),a=t(15),s=t.n(a),u=t(17),d=t(26),l=Object(u.b)({name:"projects",initialState:{loading:!0,project:[],darkMode:!1},reducers:{fetchProject:function(n){n.loading=!0},fetchProjectSuccess:function(n,e){var t=e.payload;n.project=t,n.loading=!1},fetchProjectError:function(n){n.loading=!1},toggleDarkMode:function(n){n.darkMode=!n.darkMode}}}),p=l.actions,b=p.fetchProject,f=p.fetchProjectSuccess,m=p.fetchProjectError,x=p.toggleDarkMode,j=function(n){return n.project},h=function(n){return j(n).project},g=function(n){return j(n).loading},O=function(n){return j(n).darkMode},v=l.reducer,k=t(10),y=t.n(k),w=t(12),M=t(22),F=function(){var n=Object(M.a)(y.a.mark((function n(){var e,t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.github.com/users/m4dzix/repos",n.next=3,fetch("https://api.github.com/users/m4dzix/repos");case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=y.a.mark(P),S=y.a.mark(L);function P(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.c)(1e3);case 3:return e.next=5,Object(w.b)(F);case 5:return n=e.sent,e.next=8,Object(w.d)(f(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(w.d)(m());case 14:case"end":return e.stop()}}),C,null,[[0,10]])}function L(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.e)(b.type,P);case 2:case"end":return n.stop()}}),S)}var B=y.a.mark(T);function T(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.a)([L()]);case 2:case"end":return n.stop()}}),B)}var G=Object(d.a)(),I=Object(u.a)({reducer:{project:v},middleware:[G]});G.run(T);var z=I,E=t(5),D=t(4);function A(){var n=Object(E.a)(["\n  width: 100%;\n  max-width: 1216px;\n  margin: 115px auto 109.29px auto;\n  display: grid;\n  grid-gap: 72px;\n"]);return A=function(){return n},n}var R=D.d.main(A()),W=function(n){var e=n.children;return Object(r.jsx)(R,{children:e})},H=t.p+"static/media/modeButton.ec885ca5.svg",_=t.p+"static/media/modeButton.8fa7bb86.svg";function J(){var n=Object(E.a)(["\n  transition: 0.5s;\n  width: 48px;\n  height: 26px;\n  ",";\n"]);return J=function(){return n},n}function N(){var n=Object(E.a)(["\n  background-color: transparent;\n  border: none;\n"]);return N=function(){return n},n}function Y(){var n=Object(E.a)(["\n  text-transform: uppercase;\n  color: ",";\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 1.3;\n  margin-right: 12.47px;\n"]);return Y=function(){return n},n}function $(){var n=Object(E.a)(["\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  justify-self: flex-end;\n  margin-bottom: calc(-72px - 32px);\n"]);return $=function(){return n},n}var q=D.d.div($()),U=D.d.p(Y(),(function(n){return n.theme.colors.text})),K=D.d.button(N()),Q=D.d.div(J(),(function(n){return n.darkMode?"background-image: url(".concat(H,");"):"background-image: url(".concat(_,");")})),V=function(){var n=Object(c.c)(O),e=Object(c.b)();return Object(r.jsxs)(q,{children:[Object(r.jsxs)(U,{children:["Dark mode ",n?"on":"off"]}),Object(r.jsx)(K,{onClick:function(){e(x())},children:Object(r.jsx)(Q,{darkMode:n})})]})};function X(){var n=Object(E.a)(["\n      align-items: center;\n      justify-content: center;\n      margin-bottom: -48px;\n    "]);return X=function(){return n},n}function Z(){var n=Object(E.a)(["\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 32px;\n      @media (max-width: ","px) {\n        grid-template-columns: none;\n      }\n    "]);return Z=function(){return n},n}function nn(){var n=Object(E.a)(["\n  display: grid;\n  grid-gap: 72px;\n  margin: 0 14px;\n  ",";\n  ",";\n"]);return nn=function(){return n},n}var en=D.d.section(nn(),(function(n){return n.myGithubProjects&&Object(D.c)(Z(),(function(n){return n.theme.breakpoints.mobileMax}))}),(function(n){return n.portfolio&&Object(D.c)(X())})),tn=function(n){var e=n.body,t=n.myGithubProjects,o=n.portfolio;return Object(r.jsx)(en,{myGithubProjects:t,portfolio:o,children:e})},rn=t.p+"static/media/message.26211eaa.svg",on=t.p+"static/media/github.a7ab0553.svg",cn=t.p+"static/media/linkedin.32dfdb72.svg",an=t.p+"static/media/facebook.1f62b7de.svg",sn=t.p+"static/media/instagram.c4e5ffc5.svg",un=t.p+"static/media/github.422ac5a4.svg",dn=t.p+"static/media/linkedin.df12ab1b.svg",ln=t.p+"static/media/facebook.eb8312b4.svg",pn=t.p+"static/media/instagram.db1d67ee.svg",bn=["Semantic & accessible HTML","Responsive Web Design","Teamwork","immutability","CSS BEM convention","CSS Grid"," CSS Flexbox","Styled-Components","React Router","Redux-Saga","Redux(Toolkit)","Create -react-app","Working witch API","GitHub Pull Request & Review","Scrum"],fn=["React Context","TypeScript","Gatsby","Node.js","JS classes","Unit testing"],mn=t.p+"static/media/image.ec6df721.jpg",xn=t.p+"static/media/roundListStyle.c28602c8.svg",jn=t.p+"static/media/roundListStyle.ce494a6f.svg";function hn(){var n=Object(E.a)(["\n  font-size: 20px;\n  line-height: 1.4;\n  color: ",";\n  margin-top: 8px;\n  font-weight: normal;\n"]);return hn=function(){return n},n}function gn(){var n=Object(E.a)(["\n  color: ",";\n  line-height: 140%;\n  padding: 2px;\n  border-bottom: 1px solid rgba(3, 103, 216, 0.2);\n"]);return gn=function(){return n},n}function On(){var n=Object(E.a)(["\n  filter: ",";\n  transition: 0.3s;\n  &:hover {\n    filter: none;\n  }\n"]);return On=function(){return n},n}function vn(){var n=Object(E.a)(["\n  font-size: 18px;\n  line-height: 1.4;\n  letter-spacing: 0.05em;\n  color: ",";\n"]);return vn=function(){return n},n}function kn(){var n=Object(E.a)(["\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: none;\n      list-style: none;\n      margin-top: 56px;\n      padding: 0px;\n      grid-gap: 24px;\n      width: auto;\n      @media (max-width: ","px) {\n        grid-template-columns: repeat(4, 1fr);\n      }\n    "]);return kn=function(){return n},n}function yn(){var n=Object(E.a)(["\n      grid-template-columns: none;\n      grid-template-rows: 1fr 1fr;\n      list-style: none;\n      padding: 0px;\n      margin: 24px 0 0 0;\n      width: auto;\n    "]);return yn=function(){return n},n}function wn(){var n=Object(E.a)(["\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: repeat(3, 1fr);\n  width: 100%;\n  margin: 32px 0;\n  @media (max-width: ","px) {\n    grid-template-columns: none;\n  }\n  ","\n  ","\n  ","\n"]);return wn=function(){return n},n}function Mn(){var n=Object(E.a)(["\n  font-weight: 600;\n  width: 154px;\n  font-size: 20.0584px;\n  line-height: 24px;\n  padding: 16px 18px;\n  background-color: ",";\n  color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid rgba(209, 213, 218, 0.3);\n  border-radius: 4px;\n  margin-top: 32px;\n  transition: 0.3s;\n  &:hover {\n    ",";\n  }\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(E.a)(["\n      margin-top: 35px;\n    "]);return Fn=function(){return n},n}function Cn(){var n=Object(E.a)(["\n      font-size: 18px;\n    "]);return Cn=function(){return n},n}function Sn(){var n=Object(E.a)(["\n  font-size: 20px;\n  line-height: 1.4;\n  letter-spacing: 0.05em;\n  color: ",";\n  margin: 24px 0 0 0;\n  ","\n  ","\n"]);return Sn=function(){return n},n}function Pn(){var n=Object(E.a)(["\n  grid-area: content;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  font-size: 18px;\n  line-height: 1.4;\n  color: ",";\n  letter-spacing: 0.05em;\n"]);return Pn=function(){return n},n}function Ln(){var n=Object(E.a)(["\n      margin-top: 24px;\n    "]);return Ln=function(){return n},n}function Bn(){var n=Object(E.a)(["\n      color: ",";\n      font-size: 24px;\n      margin: 0;\n    "]);return Bn=function(){return n},n}function Tn(){var n=Object(E.a)(["\n      padding-bottom: 15px;\n      border-bottom: 1px solid ",";\n    "]);return Tn=function(){return n},n}function Gn(){var n=Object(E.a)(["\n      padding-bottom: 15px;\n      border-bottom: 1px solid ",";\n    "]);return Gn=function(){return n},n}function In(){var n=Object(E.a)(["\n  grid-area: title;\n  font-weight: 900;\n  color: ",";\n  font-size: 30px;\n  line-height: 36px;\n  letter-spacing: 0.05em;\n  padding-bottom: 0px;\n  margin: 12px 0 0 0;\n  ","\n  ","\n\n  ","\n  ","\n"]);return In=function(){return n},n}function zn(){var n=Object(E.a)(["\n      text-align: center;\n    "]);return zn=function(){return n},n}function En(){var n=Object(E.a)(["\n  margin: 0px;\n  font-size: 12px;\n  line-height: 130%;\n  text-transform: uppercase;\n  color: ",";\n  ","\n"]);return En=function(){return n},n}function Dn(){var n=Object(E.a)(["\n  grid-area: photo;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 398px;\n  height: 398px;\n  border-radius: 100%;\n  margin-right: 66px;\n  @media (max-width: ","px) {\n    width: 132.67px;\n    height: 132.67px;\n  }\n"]);return Dn=function(){return n},n}function An(){var n=Object(E.a)(['\n      grid-template-areas:\n        "title "\n        "content ";\n      width: 100%;\n      max-width: 670px;\n    ']);return An=function(){return n},n}function Rn(){var n=Object(E.a)(["\n      padding: 56px;\n      border: 6px solid ",";\n      transition: 0.3s;\n      &:hover {\n        border: 6px solid ",";\n      }\n    "]);return Rn=function(){return n},n}function Wn(){var n=Object(E.a)(["\n      background-color: transparent;\n      box-shadow: none;\n      border: none;\n      justify-items: center;\n      padding: 0px;\n    "]);return Wn=function(){return n},n}function Hn(){var n=Object(E.a)(['\n      grid-template-areas:\n        "photo title"\n        "photo content";\n      background-color: transparent;\n      box-shadow: none;\n      border: none;\n      width: auto;\n      @media (max-width: ','px) {\n        grid-template-areas:\n          "photo"\n          "title"\n          "content";\n      }\n    ']);return Hn=function(){return n},n}function _n(){var n=Object(E.a)(['\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "title"\n    "content";\n  padding: 32px;\n  background-color: ',";\n  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),\n    0px 16px 58px rgba(9, 10, 51, 0.03);\n  border-radius: 4px;\n  width: 100%;\n  @media (max-width: ","px) {\n    grid-template-rows: auto;\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return _n=function(){return n},n}var Jn=D.d.div(_n(),(function(n){return n.theme.colors.boxColor}),(function(n){return n.theme.breakpoints.mobileMax}),(function(n){return n.aboutMe&&Object(D.c)(Hn(),(function(n){return n.theme.breakpoints.mobileMax}))}),(function(n){return n.portfolio&&Object(D.c)(Wn())}),(function(n){return n.myGithubProjects&&Object(D.c)(Rn(),(function(n){return n.theme.colors.lightLine}),(function(n){return n.theme.colors.hoverLine}))}),(function(n){return n.contact&&Object(D.c)(An())})),Nn=D.d.div(Dn(),mn,(function(n){return n.theme.breakpoints.mobileMax})),Yn=D.d.h3(En(),(function(n){return n.theme.colors.text}),(function(n){return n.portfolio&&Object(D.c)(zn())})),$n=D.d.h1(In(),(function(n){return n.theme.colors.title}),(function(n){return n.mySkills&&Object(D.c)(Gn(),(function(n){return n.theme.colors.lightLine}))}),(function(n){return n.skillsIWantToLearn&&Object(D.c)(Tn(),(function(n){return n.theme.colors.darkLine}))}),(function(n){return n.myGithubProjects&&Object(D.c)(Bn(),(function(n){return n.theme.colors.mainBlue}))}),(function(n){return n.contact&&Object(D.c)(Ln())})),qn=D.d.div(Pn(),(function(n){return n.theme.colors.text})),Un=D.d.p(Sn(),(function(n){return n.theme.colors.text}),(function(n){return n.myGithubProjects&&Object(D.c)(Cn())}),(function(n){return n.aboutMe&&Object(D.c)(Fn())})),Kn=D.d.button(Mn(),(function(n){return n.theme.colors.mainBlue}),(function(n){return n.darkMode?"box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;":"box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;"})),Qn=D.d.ul(wn(),(function(n){return n.theme.breakpoints.mobileMax}),(function(n){return n.darkMode?"list-style-image: url(".concat(xn,");"):"list-style-image: url(".concat(jn,");")}),(function(n){return n.myGithubProjects&&Object(D.c)(yn())}),(function(n){return n.contact&&Object(D.c)(kn(),(function(n){return n.theme.breakpoints.mobileMax}))})),Vn=D.d.li(vn(),(function(n){return n.theme.colors.text})),Xn=D.d.img(On(),(function(n){return n.darkMode?"invert(0%) sepia(0%) saturate(0%) brightness(500%) contrast(100%)":"invert(10%) sepia(0%) saturate(0%) brightness(50%) contrast(100%)"})),Zn=D.d.a(gn(),(function(n){return n.theme.colors.mainBlue})),ne=D.d.h2(hn(),(function(n){return n.theme.colors.title})),ee=function(n){var e=n.inset,t=n.title,o=n.typeOfContent,i=n.aboutMe,a=n.contact,s=n.portfolio,u=n.myGithubProjects,d=n.mySkills,l=n.skillsIWantToLearn,p=n.urlAdressToDemo,b=n.urlAdressToLive,f=n.description,m=Object(c.c)(O);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Jn,{aboutMe:i,contact:a,portfolio:s,myGithubProjects:u,children:[Object(r.jsx)(Nn,{hidden:"aboutMe"!==o}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Yn,{portfolio:s,children:"portfolio"!==o?e:Object(r.jsx)("img",{src:on,alt:""})}),Object(r.jsx)($n,{aboutMe:i,portfolio:s,myGithubProjects:u,contact:a,mySkills:d,skillsIWantToLearn:l,children:t})]}),Object(r.jsx)(qn,{children:function(){switch(o){case"aboutMe":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Un,{aboutMe:i,children:"My name is Magdalena. I am an ambitious person taking my first steps in the front-end. I recently completed the Become a Front-End Developer course, organized by Youcode.pl. I've already learned a lot about HTML, CSS, JS and also React- which I love. I would like to further expand my knowledge and skills. Below are some of my projects"}),Object(r.jsxs)("a",{href:"mailto:madlen.checinski@gmail.com",rel:"noreferrer noopener",target:"_blank",children:[" ",Object(r.jsxs)(Kn,{children:[Object(r.jsx)("img",{src:rn,alt:""})," Hire me"]})]})]});case"mySkills":return Object(r.jsx)(Qn,{darkMode:m,children:bn.map((function(n){return Object(r.jsx)(Vn,{children:n},n)}))});case"skillsIWantToLearn":return Object(r.jsx)(Qn,{darkMode:m,children:fn.map((function(n){return Object(r.jsx)(Vn,{children:n},n)}))});case"portfolio":return Object(r.jsx)(ne,{children:"My recent projects"});case"myGithubProjects":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Un,{myGithubProjects:u,children:f}),Object(r.jsxs)(Qn,{myGithubProjects:u,children:[Object(r.jsxs)(Vn,{children:[" ","Demo:"," ",Object(r.jsx)(Zn,{href:p,children:p})," "]}),Object(r.jsxs)(Vn,{children:["Live:"," ",Object(r.jsx)(Zn,{href:b,children:b})," "]})]})]});default:return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Un,{children:"I am open to any proposals for cooperation and development opportunities. If you want to have your own website or application - please contact me. We can help each other"}),Object(r.jsxs)(Qn,{contact:a,children:[Object(r.jsx)(Vn,{children:Object(r.jsx)("a",{href:"https://github.com/m4dzix",rel:"noreferrer noopener",target:"_blank",children:Object(r.jsx)(Xn,{darkMode:m,src:m?un:on,alt:""})})}),Object(r.jsx)(Vn,{children:Object(r.jsxs)("a",{href:"https://www.facebook.com/magda.piatkowska.146",rel:"noreferrer noopener",target:"_blank",children:[" ",Object(r.jsx)(Xn,{darkMode:m,src:m?ln:an,alt:""})]})}),Object(r.jsxs)(Vn,{children:[Object(r.jsxs)("a",{href:"",rel:"noreferrer noopener",target:"_blank",children:[" ",Object(r.jsx)(Xn,{darkMode:m,src:m?dn:cn,alt:""})]})," "]}),Object(r.jsxs)(Vn,{children:[Object(r.jsxs)("a",{href:"",rel:"noreferrer noopener",target:"_blank",children:[" ",Object(r.jsx)(Xn,{darkMode:m,src:m?pn:sn,alt:""})]})," "]})]})]})}}()})]})})},te=function(){return Object(r.jsx)(tn,{body:Object(r.jsx)(ee,{aboutMe:!0,inset:"this is",title:"Magdalena Ch\u0119ci\u0144ski",typeOfContent:"aboutMe"})})},re=function(){return Object(r.jsx)(tn,{body:Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)(ee,{mySkills:!0,title:"My Skillset includes",typeOfContent:"mySkills"})," ",Object(r.jsx)(ee,{skillsIWantToLearn:!0,title:"Skills I want to learn",typeOfContent:"skillsIWantToLearn"})]})})},oe=function(){return Object(r.jsx)(tn,{portfolio:!0,body:Object(r.jsx)(ee,{portfolio:!0,title:"Portfolio",typeOfContent:"portfolio"})})},ie=[{name:"homepage",description:'Magdalena\'s Checinski demo "about me" webiste made as part of coding course from \u201cyoucode.pl\u201d.Homepage is a very simple one page website, where I introduce myself.'},{name:"movies-browser",description:"Service, where you can search popular movies and people related to the film industry. The data are fetched from the API interface provided by TMDB. This project was bootstrapped with Create React App."},{name:"currency-converter-react",description:"Simple currency converter. Allows to check currencies value like PLN, \u20ac, \xa3, $ and CHF. Second project made during frontend developer cours on \u201cyoucode.pl\u201d. To created this project I used exchange rates API from http://exchangeratesapi.io/ This project was bootstrapped with Create React App."},{name:"currency-converter",description:"Simple currency converter. Allows to check currencies value like PLN, \u20ac, \xa3, $ and CHF. Second project made during frontend developer cours on \u201cyoucode.pl\u201d. "},{name:"todo-list-react",description:"Simple and basic to-do list - helps organise tasks. Made during the frontend developer course from \u201cyoucode.pl\u201d. This project was bootstrapped with Create React App."},{name:"todo-list",description:"Simple and basic to-do list - helps organise tasks. Made during the frontend developer course from \u201cyoucode.pl\u201d."},{name:"personal-homepage",description:"This is my virtual portfolio. On this website I present all my projects here and provide a contact."}],ce=t.p+"static/media/loader.88a075cf.svg",ae=t.p+"static/media/loader.d1744388.svg";function se(){var n=Object(E.a)(["\n  animation: "," 1s linear infinite;\n  width: 160px;\n  height: 160px;\n  margin-bottom: 88px;\n  ","\n"]);return se=function(){return n},n}function ue(){var n=Object(E.a)(["\n  font-size: 20px;\n  color: ",";\n  margin-bottom: 48px;\n"]);return ue=function(){return n},n}function de(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 16px;\n"]);return de=function(){return n},n}function le(){var n=Object(E.a)([" \nto {\n  transform: rotate(360deg)\n}\n"]);return le=function(){return n},n}var pe=Object(D.e)(le()),be=D.d.div(de()),fe=D.d.p(ue(),(function(n){return n.theme.colors.title})),me=D.d.div(se(),pe,(function(n){return n.darkMode?"background-image: url(".concat(ce,");"):"background-image: url(".concat(ae,");")})),xe=function(){var n=Object(c.c)(O);return Object(r.jsxs)(be,{children:[Object(r.jsx)(fe,{children:"Please wait, projects are being loaded..."}),Object(r.jsx)(me,{darkMode:n})]})};function je(){var n=Object(E.a)(["\n  font-weight: 600;\n  font-size: 20.0584px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.05em;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: ",";\n  color: #ffffff;\n  margin: 44px 0 0 0;\n  transition: 0.3s;\n  &:hover {\n    color: #ffffff;\n    background-color: ",";\n  }\n  &:hover {\n    ",";\n  }\n"]);return je=function(){return n},n}function he(){var n=Object(E.a)(["\n  font-size: 20px;\n  color: ",";\n  margin: 32px 0 0 0;\n  text-align: center;\n  letter-spacing: 0.05em;\n"]);return he=function(){return n},n}function ge(){var n=Object(E.a)(["\n  font-size: 24px;\n  color: ",";\n  letter-spacing: 0.05em;\n  margin: 23.16px 0 0 0;\n"]);return ge=function(){return n},n}function Oe(){var n=Object(E.a)(["\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 71.5px;\n  margin-bottom: 48px;\n"]);return Oe=function(){return n},n}var ve=D.d.div(Oe()),ke=D.d.h3(ge(),(function(n){return n.theme.colors.title})),ye=D.d.p(he(),(function(n){return n.theme.colors.title})),we=D.d.a(je(),(function(n){return n.theme.colors.mainBlue}),(function(n){return n.theme.colors.mainBlue}),(function(n){return n.darkMode?"box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;":"box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;"})),Me=t.p+"static/media/error.a713ca87.svg",Fe=t.p+"static/media/error.fa1220b4.svg",Ce=function(){var n=Object(c.c)(O);return Object(r.jsxs)(ve,{children:[Object(r.jsx)("img",{src:n?Fe:Me,alt:""}),Object(r.jsx)(ke,{children:"Ooops! Something went wrong..."}),Object(r.jsxs)(ye,{children:["Sorry, failed to load Github projects.",Object(r.jsx)("br",{}),"You can check them directly on Github."]}),Object(r.jsx)(we,{darkMode:n,href:"https://github.com/m4dzix",rel:"noreferrer noopener",target:"_blank",children:"Go to Github"})]})},Se=function(){var n=Object(c.c)(h),e=Object(c.c)(g),t=Object(c.b)();return Object(o.useEffect)((function(){t(b())}),[t]),!e&&n.length>0?Object(r.jsx)(tn,{myGithubProjects:!0,body:n.map((function(n){return Object(r.jsx)(ee,{myGithubProjects:!0,title:n.name,typeOfContent:"myGithubProjects",description:(e=n.name,ie.find((function(n){return n.name===e})).description),urlAdressToDemo:n.html_url,urlAdressToLive:"https://".concat(n.owner.login,".github.io/").concat(n.name,"/")},n.name);var e}))}):e?Object(r.jsx)(xe,{}):Object(r.jsx)(Ce,{})},Pe=function(){return Object(r.jsx)(tn,{body:Object(r.jsx)(ee,{aboutMe:!0,contact:!0,inset:"let's talk!",title:Object(r.jsx)("a",{href:"mailto:madlen.checinski@gmail.com",rel:"noreferrer noopener",children:"madlen.checinski@gmail.com"})})})};function Le(){var n=Object(E.a)(["\nhtml{\n box-sizing: border-box;\n}\n\n*, ::after, ::before{\n box-sizing: inherit;\n}\n\nbody {\n font-family: 'Inter', sans-serif;\n background-color: ",";\n}\n\na {\ncolor: ",";\ntext-decoration: none;\ntransition: 0.3s;\n&:hover {\n  color: ",";\n  }\n}\n"]);return Le=function(){return n},n}var Be=Object(D.b)(Le(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.mainBlue})),Te={colors:{background:"#FBFBFE",boxColor:"#FFFFFF",title:"#252525",text:"#6E7E91",lightLine:"rgba(209, 213, 218, 0.3)",darkLine:"rgba(209, 213, 218, 0.3)",hoverLine:"rgba(3, 102, 214, 0.2)",mainBlue:"#0366D6"},breakpoints:{mobileMax:812}},Ge={colors:{background:"#252525",boxColor:" rgba(54, 54, 54, 0.72)",title:"#FFFFFF",text:"#FFFFFF",lightLine:"rgba(209, 213, 218, 0.1)",darkLine:"#E5E5E5",hoverLine:"rgba(3, 102, 214, 0.5)",mainBlue:"#2188FF"},breakpoints:{mobileMax:812}};var Ie=function(){var n=Object(c.c)(O);return Object(r.jsxs)(D.a,{theme:n?Ge:Te,children:[Object(r.jsx)(Be,{}),Object(r.jsxs)(W,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(te,{}),Object(r.jsx)(re,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(Se,{}),Object(r.jsx)(Pe,{})]})]})},ze=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(c.a,{store:z,children:Object(r.jsx)(Ie,{})})}),document.getElementById("root")),ze()}},[[40,1,2]]]);
//# sourceMappingURL=main.6cbf5ca2.chunk.js.map