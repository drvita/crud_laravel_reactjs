(this.webpackJsonpreactjs_test=this.webpackJsonpreactjs_test||[]).push([[0],{17:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(9),o=s.n(n),c=s(2),i=s(3),l=s(5),d=s(4),u=s(6),h=s(0),j=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).changeform=function(e){var t=e.target,s=t.value,r=t.name;a.setState(Object(u.a)({},r,s))},a.getToken=function(){var e={email:a.state.email,password:a.state.password};console.log("INICIANDO LOGIN",e.email),a.setState({load:!0}),fetch("http://localhost:3001/api/user/login",{method:"POST",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e);return e.json()})).then((function(e){e.data?(console.log("[Login] Credenciales validadas",e),a.props.logreturn(!0,e.data.token)):a.setState({load:!1})})).catch((function(e){console.error("[Login] Error de conexion con el servidor\n",e),a.setState({load:!1})}))},a.state={email:"",password:"",load:!1},a}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.email,s=e.password,a=e.load;return Object(h.jsx)("div",{className:"row justify-content-md-center mt-4",children:Object(h.jsxs)("div",{className:"col-sm-12 col-lg-6 col-md-8",children:[Object(h.jsx)("h4",{className:"card-title",children:"Sistema de usuarios"}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h5",{children:"Inicio de session"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Correo electronico"}),Object(h.jsx)("input",{type:"email",name:"email",className:"form-control",value:t,onChange:this.changeform})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password",className:"form-control",value:s,onChange:this.changeform})]})]}),Object(h.jsx)("div",{className:"card-footer text-right",children:Object(h.jsx)("button",{type:"submit",className:a?"btn btn-dark disabled":"btn btn-dark",onClick:this.getToken,children:"Iniciar session"})})]})]})})}}]),s}(a.Component),m=s(8),b=s.n(m),p=s(10),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;Object(c.a)(this,s),(a=t.call(this,e)).cancel=function(){a.props.relod()},a.changeform=function(e){var t=e.target,s=t.value,r=t.name;a.setState(Object(u.a)({},r,s))},a.setUser=function(){var e=a.state,t=e.token,s=e.id,r=s?"http://localhost:3001/api/user/"+s:"http://localhost:3001/api/user",n={email:a.state.email,name:a.state.name};a.state.password.length&&(n.password=a.state.password),console.log("[Form add user] Enviando datos de usuario: ",n.email),a.setState({load:!0}),fetch(r,{method:s?"PUT":"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){if(!e.ok)throw new Error(e);return e.json()})).then((function(e){e.data?(console.log("[Form add user] Usuario almacenado con exito"),a.props.relod()):a.setState({load:!1})})).catch((function(e){console.error("[Form add user] Error de conexion con el servidor\n",e),a.setState({load:!1})}))};var r=e.user,n=r.name,o=r.email,i=r.id;return a.state={id:i||0,name:n||"",email:o||"",password:"",load:!1,token:e.token},a}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(e,t){if(this.props.user.id&&e.user.id!==this.props.user.id){var s=this.props.user,a=s.name,r=s.email,n=s.id;console.log("[Add user] UPDATE!!!"),this.setState({id:n,name:a,email:r})}}},{key:"render",value:function(){var e=this.state,t=e.id,s=e.name,a=e.email,r=e.password,n=e.load;return Object(h.jsxs)("div",{className:"card bg-secondary text-white",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h5",{children:[Object(h.jsx)("i",{className:"fas fa-user mr-2"})," ",t?"Actualizar usuario":"Registro de nuevo usuario"]})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Nombre"}),Object(h.jsx)("input",{type:"text",name:"name",className:"form-control",value:s,onChange:this.changeform})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Correo electronico"}),Object(h.jsx)("input",{type:"email",name:"email",className:"form-control",value:a,onChange:this.changeform})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password",className:"form-control",value:r,onChange:this.changeform})]})]}),Object(h.jsxs)("div",{className:"card-footer text-right",children:[Object(h.jsx)("button",{type:"submit",className:n?"btn btn-dark disabled":"btn btn-dark",onClick:this.cancel,children:"Cancelar"}),Object(h.jsx)("button",{type:"submit",className:n?"btn btn-dark disabled":"btn btn-primary",onClick:this.setUser,children:t?"Actualizar":"Guardar"})]})]})}}]),s}(a.Component),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).closeSesion=function(){window.confirm("Esta seguro de cerrar la sesion?")&&a.props.logreturn(!1,"")},a.editUser=function(e){a.setState({form:!0,user:e})},a.deleteUser=function(e,t){var s=a.state.token;console.log("[Dashboard] Eliminando usuario:",e),window.confirm("Esta seguro de eliminar al usuario: '"+t+"'")&&(a.setState({load:!0}),fetch("http://localhost:3001/api/user/"+e,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+s}}).then(function(){var e=Object(p.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={},204===t.status){e.next=5;break}return e.next=4,t.json();case 4:s=e.sent;case 5:if(t.ok){e.next=7;break}throw new Error(s.message);case 7:return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log("[Dashboard] Usuario eliminado",e,a.state.load),a.getUsers()})).catch((function(e){console.error("[Dashboard] Error de conexion con el servidor\n",e),a.setState({load:!1})})))},a.reloadForm=function(){a.setState({form:!1,load:!1,user:{}})},a.setUser=function(){a.setState({form:!a.state.form})},a.getUsers=function(){var e=a.state.token;console.log("[Dashboard] Descargando usuarios"),a.setState({load:!0}),fetch("http://localhost:3001/api/user",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){if(!e.ok)throw new Error(e);return e.json()})).then((function(e){e.data?(console.log("[Dashboard] Usuarios descargandos",e.data),a.setState({load:!1,users:e.data})):a.setState({load:!1})})).catch((function(e){console.error("[Dashboard] Error de conexion con el servidor\n",e),a.setState({load:!1})}))},a.state={load:!1,users:[],form:!1,token:e.token,user:{}},a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e,t){t.form!==this.state.form&&(console.log("[Dashboard] UPDATE!!!"),this.getUsers())}},{key:"render",value:function(){var e=this,t=this.state,s=t.load,a=t.users,r=t.form,n=t.user,o=t.token;return Object(h.jsxs)("div",{className:"row mt-4",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsxs)("h4",{className:"card-title",children:[Object(h.jsx)("i",{className:"fas fa-users mr-2"}),Object(h.jsx)("span",{className:"mr-4",children:"Sistema de usuarios"}),Object(h.jsx)("span",{className:"badge badge-secondary",onClick:this.closeSesion,children:"[Cerrar sesion]"})]}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h5",{children:[Object(h.jsx)("i",{className:"fas fa-table mr-2"})," ",Object(h.jsx)("span",{className:"mr-4",children:"Tabla de usuarios"}),s?Object(h.jsx)("small",{children:"Cargando..."}):null]})}),Object(h.jsx)("div",{className:"card-body table-responsive",children:Object(h.jsxs)("table",{className:"table table-sm ",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Nombre"}),Object(h.jsx)("th",{children:"Correo electronico"}),Object(h.jsx)("th",{children:"Password"}),Object(h.jsx)("th",{children:"Acciones"})]})}),Object(h.jsx)("tbody",{children:a.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{className:"fas fa-user mr-2"})," ",t.name]}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{children:"************"}),Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{className:"fas fa-trash mr-2",onClick:function(s){return e.deleteUser(t.id,t.name)}}),Object(h.jsx)("i",{className:"fas fa-pencil-alt mr-2",onClick:function(s){return e.editUser(t)}})]})]},t.id)}))})]})}),r?null:Object(h.jsx)("div",{className:"card-footer text-right",children:Object(h.jsxs)("button",{type:"submit",className:s?"btn btn-dark disabled":"btn btn-dark",onClick:this.setUser,children:[Object(h.jsx)("i",{className:"fas fa-user mr-2"})," Nuevo usuario"]})})]})]}),r?Object(h.jsx)("div",{className:"col-sm-12 col-lg-4 col-md-12 mt-1",children:Object(h.jsx)(f,{token:o,relod:this.reloadForm,user:n})}):null]})}}]),s}(a.Component),x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).logReturnChange=function(t,s){e.setState({login:Boolean(t),token:s})},e.state={login:!1,token:""},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.login,s=e.token;return Object(h.jsx)("div",{className:"container",children:t?Object(h.jsx)(O,{login:this.logReturnChange,token:s,logreturn:this.logReturnChange}):Object(h.jsx)(j,{logreturn:this.logReturnChange})})}}]),s}(a.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5c7a330f.chunk.js.map