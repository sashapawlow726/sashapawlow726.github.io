webpackJsonp([1],{"/rhT":function(t,e){},"5Fnm":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"app"}},[s("header",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("a",{staticClass:"navbar-brand"},[s("router-link",{attrs:{to:"google.com"}},[t._v("Film Library")])],1),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},t._l(t.linkMenu,function(e){return s("li",{key:e.title,staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:""+e.url}},[t._v(" "+t._s(e.title))])],1)}),0)])])]),s("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var r=s("VU/8")({name:"App",data:function(){return{linkMenu:[{title:"Home",url:"/"},{title:"Login",url:"/login"},{title:"Registration",url:"/registration"},{title:"About",url:"/about"},{title:"Task",url:"/task"}]}}},i,!1,function(t){s("eMa8")},"data-v-3a3592cc",null).exports,n=s("/ocq"),o=s("INCx"),l=s.n(o),c={data:function(){return{taskTitle:"",taskDescription:"",taskWhatWatch:"",filmMinutes:30,filmHours:1,serialSeason:1,serialSeries:11,serialMinutes:40,tagTitle:"",tagMenuShow:!0,tagsUsed:[]}},methods:{newTag:function(){if(""!==this.tagTitle){var t={title:this.tagTitle,use:!1};this.$store.dispatch("newTag",t),this.tags.push({title:this.tagTitle,used:!1}),console.log()}},newTask:function(){if(""===this.taskTitle)return!0;var t=void 0;t="Film"===this.whatWatch?this.filmTime:this.serialTime;var e={title:this.taskTitle,description:this.taskDescription,whatWatch:this.taskWhatWatch,time:t,tags:this.tagsUsed,completed:!1,editing:!1};this.$store.dispatch("newTask",e),console.log(e),this.taskTitle="",this.taskDescription="",this.tagsUsed=[];for(var s=0;s<this.tags.length;s++)this.tags[s].use=!1},addTagUsed:function(t){t.use=!t.use,t.use?this.tagsUsed.push({title:t.title}):this.tagsUsed.splice(t.title,1)},getHoursAndMinutes:function(t){return l()(t/60)+" : Hours , "+t%60+" : Minutes "}},computed:{tags:function(){return this.$store.getters.tags},filmTime:function(){var t=60*this.filmHours+1*this.filmMinutes;return this.getHoursAndMinutes(t)},serialTime:function(){var t=this.serialSeason*this.serialSeries*this.serialMinutes;return this.getHoursAndMinutes(t)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("h1",[t._v("Home")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],attrs:{type:"text",placeholder:"What we will watch?"},domProps:{value:t.taskTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTask(e)},input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}}),s("br"),s("br"),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDescription,expression:"taskDescription"}],attrs:{type:"textarea"},domProps:{value:t.taskDescription},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTask(e)},input:function(e){e.target.composing||(t.taskDescription=e.target.value)}}}),s("div",{staticClass:"option-list"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskWhatWatch,expression:"taskWhatWatch"}],staticClass:"what-watch__radio",attrs:{type:"radio",value:"Film",id:"radioFilm"},domProps:{checked:t._q(t.taskWhatWatch,"Film")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTask(e)},change:function(e){t.taskWhatWatch="Film"}}}),s("label",{attrs:{for:"radioFilm"}},[t._v("Film "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskWhatWatch,expression:"taskWhatWatch"}],staticClass:"what-watch__radio",attrs:{type:"radio",value:"Serial",id:"radioSerial"},domProps:{checked:t._q(t.taskWhatWatch,"Serial")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTask(e)},change:function(e){t.taskWhatWatch="Serial"}}})]),s("label",{attrs:{for:"radioSerial"}},[t._v("Serial")])]),s("div",{staticClass:"total-time"},["Film"===t.taskWhatWatch?s("div",{staticClass:"total-time__film"},[s("span",{staticClass:"time-title"},[t._v("Hours")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filmHours,expression:"filmHours"}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.filmHours},on:{input:function(e){e.target.composing||(t.filmHours=e.target.value)}}}),s("span",{staticClass:"time-title"},[t._v("Minutes")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filmMinutes,expression:"filmMinutes"}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.filmMinutes},on:{input:function(e){e.target.composing||(t.filmMinutes=e.target.value)}}}),s("p",[t._v(t._s(t.filmTime))])]):t._e(),"Serial"===t.taskWhatWatch?s("div",{staticClass:"total-time__serial"},[s("span",{staticClass:"time-title"},[t._v("How many season ?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.serialSeason,expression:"serialSeason"}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialSeason},on:{input:function(e){e.target.composing||(t.serialSeason=e.target.value)}}}),s("span",{staticClass:"time-title"},[t._v("How many series ?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.serialSeries,expression:"serialSeries"}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialSeries},on:{input:function(e){e.target.composing||(t.serialSeries=e.target.value)}}}),s("span",{staticClass:"time-title"},[t._v("How long is one series ?(minutes) ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.serialMinutes,expression:"serialMinutes"}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialMinutes},on:{input:function(e){e.target.composing||(t.serialMinutes=e.target.value)}}}),s("p",[t._v(t._s(t.serialTime))])]):t._e(),s("div",{staticClass:"tag-list tag-list--add"},[s("div",{staticClass:"tag-wrapper"},[s("span",{staticClass:"tag"},[t._v("Add new")]),s("span",{staticClass:"tag"},[t._v(t._s(t.tagMenuShow))]),s("span",{staticClass:"button-close",class:{active:!t.tagMenuShow},on:{click:function(e){t.tagMenuShow=!t.tagMenuShow}}}),t.tagMenuShow?s("div",{staticClass:"tag-list tag-list--menu"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tagTitle,expression:"tagTitle"}],staticClass:"tag-add-input",attrs:{type:"text",placeholder:"New tag"},domProps:{value:t.tagTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTag(e)},input:function(e){e.target.composing||(t.tagTitle=e.target.value)}}}),s("div",{staticClass:"button button-default",on:{click:t.newTag}},[t._v("Send")])]):t._e(),s("div",{staticClass:"tag-list"},t._l(t.tags,function(e){return s("div",{key:e.title,staticClass:"tag__wrapper"},[s("div",{staticClass:"tag",class:{used:e.use},on:{click:function(s){return t.addTagUsed(e)}}},[s("span",{staticClass:"tag-title"},[t._v(t._s(e.title))]),s("span",{staticClass:"button-close",on:{click:function(s){return t.deleteTag(e.id)}}})])])}),0),s("p",[t._v(t._s(t.tagsUsed)+"     ")])])])])])]),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"container"})])}]};var d=s("VU/8")(c,u,!1,function(t){s("XOOc")},"data-v-0ecda95c",null).exports,m=s("+cKO"),p={data:function(){return{email:"",password:"",repeatPassword:"",submitStatus:null}},validations:{email:{required:m.required,email:m.email},password:{required:m.required,minLength:Object(m.minLength)(4)},repeatPassword:{sameAsPassword:Object(m.sameAs)("password")}},methods:{submit:function(){if(console.log("submit!"),this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR";else{var t={email:this.email,password:this.password};this.$store.dispatch("registerUser",t)}}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"auth"},[t._m(0),s("div",{staticClass:"auth__form"},[s("h1",{staticClass:"auth__title"},[t._v("Registration")]),s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"form-item",class:{errorInput:t.$v.email.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:t.$v.email.$error},attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{change:function(e){return t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.$v.email.required?t._e():s("div",{staticClass:"error"},[t._v("Field is required")]),t.$v.email.email?t._e():s("div",{staticClass:"error"},[t._v("Email is not correct")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.password.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:t.$v.password.$error},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{change:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.required?t._e():s("div",{staticClass:"error"},[t._v("Password is required.")]),t.$v.password.minLength?t._e():s("div",{staticClass:"error"},[t._v("Password must have at least "+t._s(t.$v.password.$params.minLength.min)+" letters.    ")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.password.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],class:{errorInput:t.$v.password.$error},attrs:{type:"password",placeholder:"Repeat password"},domProps:{value:t.repeatPassword},on:{change:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}})]),t.$v.repeatPassword.sameAsPassword?t._e():s("div",{staticClass:"error"},[t._v("Passwords do not match")]),t.$v.repeatPassword.sameAsPassword?s("div",{staticClass:"error"},[t._v("Password matches")]):t._e(),s("button",{staticClass:"button__submit",attrs:{type:"submit",disabled:"PENDING"===t.submitStatus}},[t._v("Registration")]),s("div",{staticClass:"button__list"},[s("span",[t._v("Do you have account?"),s("router-link",{attrs:{to:"/login"}},[t._v(" Enter here")])],1)]),"OK"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Thanks for your submission!")]):t._e(),"ERROR"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Please fill the form correctly.")]):t._e(),"PENDING"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Sending...")]):t._e()])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"auth__banner"},[e("h1",{staticClass:"auth__title"},[this._v("Hello Banner")])])}]};var h=s("VU/8")(p,v,!1,function(t){s("5Fnm")},null,null).exports,f={data:function(){return{email:"",password:"",repeatPassword:"",submitStatus:null}},validations:{email:{required:m.required,email:m.email},password:{required:m.required,minLength:Object(m.minLength)(4)}},methods:{submit:function(){var t=this;if(console.log("submit!"),this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR";else{var e={email:this.email,password:this.password};console.log(e),this.submitStatus="PENDING",setTimeout(function(){t.submitStatus="OK"},500)}}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"auth"},[t._m(0),s("div",{staticClass:"auth__form"},[s("h1",{staticClass:"auth__title"},[t._v("Sign In")]),s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"form-item",class:{errorInput:t.$v.email.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:t.$v.email.$error},attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{change:function(e){return t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.$v.email.required?t._e():s("div",{staticClass:"error"},[t._v("Field is required")]),t.$v.email.email?t._e():s("div",{staticClass:"error"},[t._v("Email is not correct")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.password.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:t.$v.password.$error},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{change:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.required?t._e():s("div",{staticClass:"error"},[t._v("Password is required.")]),t.$v.password.minLength?t._e():s("div",{staticClass:"error"},[t._v("Password must have at least "+t._s(t.$v.password.$params.minLength.min)+" letters.    ")])]),s("button",{staticClass:"button__submit",attrs:{type:"submit",disabled:"PENDING"===t.submitStatus}},[t._v("Sing In")]),s("div",{staticClass:"button__list"},[s("span",[t._v("Do you have register?"),s("router-link",{attrs:{to:"/registration"}},[t._v(" Enter here")])],1)]),"OK"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Thanks for your submission!")]):t._e(),"ERROR"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Please fill the form correctly.")]):t._e(),"PENDING"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Sending...")]):t._e()])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"auth__banner"},[e("h1",{staticClass:"auth__title"},[this._v("Hello Login")])])}]};var g=s("VU/8")(f,_,!1,function(t){s("/rhT")},null,null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content-wrapper"},[e("section",[e("div",{staticClass:"container"},[e("h1",[this._v("About")]),e("p",[this._v("Hello ")])])])])])}]};var k=s("VU/8")({data:function(){return{}}},w,!1,function(t){s("q6Vs")},"data-v-53e5fb58",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"task-list__header"},[s("h1",[t._v("Tasks")]),s("div",{staticClass:"buttons-list"},[s("p",[t._v(t._s(t.filter))]),s("div",{staticClass:"button button__filter button-default",on:{click:function(e){t.filter="active"}}},[t._v("Active")]),s("div",{staticClass:"button button__filter button-default",on:{click:function(e){t.filter="completed"}}},[t._v("Completed")]),s("div",{staticClass:"button button__filter button-default",on:{click:function(e){t.filter="all"}}},[t._v("All")])])]),s("div",{staticClass:"task-list"},t._l(t.tasksFilter,function(e,a){return s("div",{key:e.id,staticClass:"task-item",class:{completed:e.completed}},[s("div",{staticClass:"card mycard"},[s("div",{staticClass:"mycard__description"},[s("span",[t._v(t._s(e.whatWatch))]),s("span",[t._v("Total Time:")]),s("span",[t._v(t._s(e.time))]),s("h2",{staticClass:"task__title"},[s("span",{staticClass:"task__completed"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox",name:"scales",checked:""},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(s){var a=e.completed,i=s.target,r=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&t.$set(e,"completed",a.concat([null])):n>-1&&t.$set(e,"completed",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(e,"completed",r)}}}),t._v(t._s(e.title)+" ")])]),s("p",{staticClass:"task__description"},[t._v(t._s(e.description))])]),s("div",{staticClass:"cross",on:{click:function(e){return t.deleteTask(e,a)}}},[s("span"),s("span")]),s("div",{staticClass:"tag-list"},t._l(e.tags,function(e){return s("div",{key:e.title,staticClass:"tag__wrapper"},[s("span",{staticClass:"tag"},[t._v(t._s(e.title))])])}),0)])])}),0)])])])},staticRenderFns:[]};var b=s("VU/8")({data:function(){return{filter:"active"}},computed:{tasksFilter:function(){return"active"===this.filter?this.$store.getters.taskNotCompleted:"completed"===this.filter?this.$store.getters.taskCompleted:"all"===this.filter?this.$store.getters.tasks:"active"===this.filter},tasks:function(){return this.$store.getters.tasks}}},C,!1,function(t){s("TfRd")},"data-v-3c21b886",null).exports,y=s("NYxO"),$=s("Xxa5"),T=s.n($),S=s("exGp"),P=s.n(S),x=s("yviF"),N=s.n(x),E=s("Zrlr"),W=s.n(E),M=function t(e){W()(this,t),this.id=e},F={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(t,e){var s=this,a=t.commit,i=e.email,r=e.password;return P()(T.a.mark(function t(){var e;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,t.next=5,N.a.auth().createUserWithEmailAndPassword(i,r);case 5:e=t.sent,a("setUser",new M(e.user.uid)),a("setLoading",!1),alert(0),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0.message),alert(1);case 16:case"end":return t.stop()}},t,s,[[2,11]])}))()}},getters:{user:function(t){return t.user},checkUser:function(t){return null!==t.user}}},R={state:{tasks:[{id:1,title:"GrowthBusters: Hooked on Growth",description:"I directed this movie",whatWatch:"Film",completed:!1,editing:!1},{id:2,title:"Game of thrones",description:"Best serial ",whatWatch:"Serial",completed:!1,editing:!1}]},mutations:{newTask:function(t,e){t.tasks.push(e)}},actions:{newTask:function(t,e){var s=t.commit;e.id=Math.random(),s("newTask",e)}},getters:{tasks:function(t){return t.tasks},taskCompleted:function(t){return t.tasks.filter(function(t){return t.completed})},taskNotCompleted:function(t){return t.tasks.filter(function(t){return!1===t.completed})}}};a.a.use(y.a);var A=new y.a.Store({modules:{task:R,tags:{state:{tags:[{title:"Comedy",used:!1},{title:"Westerns",used:!1},{title:"Adventure",used:!1}]},mutations:{newTag:function(t,e){t.tags.push(e)}},actions:{},getters:{tags:function(t){return t.tags}}},user:F,user_id:M}});a.a.use(n.a);var q=new n.a({mode:"history",routes:[{path:"/",name:"home",component:d},{path:"/login",name:"Login",component:g},{path:"/registration",name:"registration",component:h},{path:"/about",name:"about",component:k},{path:"/task",name:"Task",component:b}]}),H=(s("K3J8"),s("ESwS")),O=s.n(H);s("dih4"),s("hZls"),s("qb6w");a.a.use(O.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:q,store:A,firebase:N.a,Vuelidate:O.a,components:{App:r},template:"<App/>",created:function(){try{console.log(N.a.initializeApp({apiKey:"AIzaSyAdFzB6Stu7r9Qg7fDD3MMbTuFnDanzmoU",authDomain:"film-library-b58fb.firebaseapp.com",databaseURL:"https://film-library-b58fb.firebaseio.com",projectId:"film-library-b58fb",storageBucket:"film-library-b58fb.appspot.com",messagingSenderId:"254756104954",appId:"1:254756104954:web:a07b93923a49a277fd7743"}))}catch(t){alert(t.message)}}})},TfRd:function(t,e){},XOOc:function(t,e){},eMa8:function(t,e){},q6Vs:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e56a451d8dadcda535c7.js.map