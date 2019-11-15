(this.webpackJsonpstockswatch_client=this.webpackJsonpstockswatch_client||[]).push([[0],{42:function(e,t,a){},60:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),o=a.n(s),l=a(28),c=a(25),i=a(5),u=a(6),m=a(9),h=a(7),p=a(10),d=a(8),g=a(85),b=a(86),f=a(84),v=a(55),y=a(82),E=function(){function e(t,a,n,r,s,o){Object(i.a)(this,e),this.id=t,this.username=a,this.firstName=n,this.lastName=r,this.isAuth=s,this.stocks=o}return Object(u.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getUsername",value:function(){return this.username}},{key:"getFirstName",value:function(){return this.firstName}},{key:"getLastName",value:function(){return this.lastName}},{key:"getIsAuth",value:function(){return this.isAuth}},{key:"getStocks",value:function(){return this.stocks}},{key:"addStock",value:function(e){this.stocks.push(e)}},{key:"setFirstName",value:function(e){this.firstName=e}},{key:"setLastName",value:function(e){this.lastName=e}}]),e}(),k=function(){return"true"===localStorage.getItem("isAuth")},S=function(e){localStorage.setItem("isAuth",e.getIsAuth()),localStorage.setItem("id",e.getId()),localStorage.setItem("username",e.getUsername()),localStorage.setItem("firstname",e.getFirstName()),localStorage.setItem("lastname",e.getLastName()),localStorage.setItem("stocks",JSON.stringify(e.getStocks()))},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={symbol:"",url:"",firstname:"",lastname:"",username:""},a.searchStock=a.searchStock.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.logout=a.logout.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({symbol:e.target.value})}},{key:"searchStock",value:function(e){var t=this;e.preventDefault();var a=this.state.symbol;a=a.toUpperCase().trim(),this.setState({url:"/search/".concat(a)},(function(){return t.props.history.push(t.state.url)}))}},{key:"logout",value:function(){localStorage.clear(),this.props.history.push("/")}},{key:"render",value:function(){var e=r.a.createElement(g.a,{sticky:"top",bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(g.a.Brand,{href:"/"},"StocksWatch"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{href:"/login"},"Login"),r.a.createElement(b.a.Link,{href:"/register"},"Register")),r.a.createElement(f.a,{inline:!0,onSubmit:this.searchStock},r.a.createElement(v.a,{type:"text",value:this.state.symbol,onChange:this.handleChange,placeholder:"Search a Symbol",className:"mr-sm-2"}),r.a.createElement(y.a,{variant:"outline-info",type:"submit"},"Search"))));if(k()){var t=new E(localStorage.getItem("id"),localStorage.getItem("username"),localStorage.getItem("firstname"),localStorage.getItem("lastname"),localStorage.getItem("isAuth"),JSON.parse(localStorage.getItem("stocks")));e=r.a.createElement(g.a,{sticky:"top",bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(g.a.Brand,{href:"/"},"StocksWatch"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{disabled:!0},r.a.createElement("span",{id:"name"},t.getFirstName()," ",t.getLastName())),r.a.createElement(b.a.Link,{href:"/watchlist"},"Watchlist"),r.a.createElement(b.a.Link,{href:"/settings"},"Settings"),r.a.createElement(b.a.Link,{onClick:this.logout,href:"/"},"Logout")),r.a.createElement(f.a,{inline:!0,onSubmit:this.searchStock},r.a.createElement(v.a,{type:"text",value:this.state.symbol,onChange:this.handleChange,placeholder:"Search a Symbol",className:"mr-sm-2"}),r.a.createElement(y.a,{variant:"outline-info",type:"submit"},"Search"))))}return e}}]),t}(r.a.Component),O=Object(c.f)(C),j=a(11),w=a.n(j),x=a(15),N=a(58),L=a.n(N),I=a(59),F=a.n(I),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={symbol:null,prices:null,chartOptions:{title:{},series:[],colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#F0F0F3",style:{fontSize:"13px"}},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"prepareChart",value:function(){var e=this.state.prices.high,t=this.state.prices.low;this.setState({chartOptions:{title:{text:"".concat(this.state.symbol),style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},series:[{name:"".concat(this.state.symbol," High Price"),data:e.reverse()},{name:"".concat(this.state.symbol," Low Price"),data:t.reverse()}]}})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.data;this.setState({symbol:t.symbol,prices:t.prices},(function(){return e.prepareChart()}))}},{key:"componentDidUpdate",value:function(e){var t=this;if("single"===this.props.type&&e.data.symbol!==this.props.data.symbol){var a=this.props.data;this.setState({symbol:a.symbol,prices:a.prices},(function(){return t.prepareChart()}))}}},{key:"render",value:function(){return r.a.createElement(L.a,{options:this.state.chartOptions,highcharts:F.a,constructorType:"stockChart"})}}]),t}(r.a.Component),U=a(83),A=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(U.a,{className:"spin",animation:"border",variant:"info",size:"lg"}))}}]),t}(r.a.Component)),T=a(87),J=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{variant:"danger"},r.a.createElement(T.a.Heading,null,"Service Unavailable"),r.a.createElement("p",null,"There has been an error. Please try again."))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={data:"",error:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"fetchData",value:function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.api+"/"+this.props.symbol,e.prev=1,e.next=4,fetch(t);case 4:if(200!==(a=e.sent).status){e.next=10;break}return e.next=8,a.json();case 8:n=e.sent,this.setState({data:n});case 10:500===a.status&&this.setState({error:!0}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),this.setState({error:!0});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e){e.symbol!==this.props.symbol&&this.fetchData()}},{key:"render",value:function(){if(""!==this.state.data){var e=this.state.data;if(e.hasOwnProperty("DOW30")){var t=[],a=e.DOW30;return t.push(r.a.createElement(T.a,{variant:"info"},r.a.createElement(T.a.Heading,null,"Dow 30"),r.a.createElement("p",null,"Login or Register to build your personalized watchlist"))),a.forEach((function(e){t.push(r.a.createElement(D,{data:e,type:"multiple"}))})),t}return r.a.createElement(D,{data:e,type:"single"})}return this.state.error?r.a.createElement(J,null):r.a.createElement(A,null)}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={watchlist:[],data:"",error:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"fetchData",value:function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.api,e.prev=1,e.next=4,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({watchlist:localStorage.getItem("stocks")})});case 4:if(200!==(a=e.sent).status){e.next=10;break}return e.next=8,a.json();case 8:n=e.sent,this.setState({data:n});case 10:500===a.status&&this.setState({error:!0}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),this.setState({error:!0});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("stocks"));this.setState({watchlist:t},(function(){return e.fetchData()}))}},{key:"render",value:function(){if(this.state.watchlist.length>0&&""!==this.state.data){var e=this.state.data;if(e.hasOwnProperty("watchlist")){var t=[];return e.watchlist.forEach((function(e){t.push(r.a.createElement(D,{data:e,type:"multiple"}))})),t}}return 0===this.state.watchlist.length?r.a.createElement(T.a,{variant:"warning"},r.a.createElement(T.a.Heading,null,"Your watchlist is empty!"),r.a.createElement("p",null,"Go ",r.a.createElement("a",{href:"/watchlist"},"here")," to start building your watchlist")):this.state.error?r.a.createElement(J,null):r.a.createElement(A,null)}}]),t}(r.a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{variant:"danger"},r.a.createElement(T.a.Heading,null,"Page Not Found"),r.a.createElement("p",null,"The page you are looking for does not exist!"))}}]),t}(r.a.Component),z=a(23),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{variant:"danger"},r.a.createElement(T.a.Heading,null,"An Error Has Occurred"),r.a.createElement("p",null,"There has been an error. Please try again."))}}]),t}(r.a.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",error:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.login=a.login.bind(Object(p.a)(a)),a.toRegister=a.toRegister.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(z.a)({},t,a))}},{key:"login",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var a,n,r,s,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.username,n=this.state.password,a=a.trim(),n=n.trim(),r="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/login"),e.prev=6,e.next=9,fetch(r,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n})});case 9:if(200!==(s=e.sent).status){e.next=17;break}return e.next=13,s.json();case 13:o=e.sent,l=new E(o.user_id,o.username,o.firstname,o.lastname,!0,o.stocks),S(l),this.props.history.push("/");case 17:500===s.status&&this.setState({error:!0}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:!0});case 23:case"end":return e.stop()}}),e,this,[[6,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"toRegister",value:function(){this.props.history.push("/register")}},{key:"render",value:function(){return this.state.error?r.a.createElement(H,null):r.a.createElement("div",{id:"login"},r.a.createElement(f.a,{onSubmit:this.login},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",name:"username",placeholder:"Enter username",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(y.a,{variant:"info",type:"submit"},"Login"),r.a.createElement("span",{className:"space"}),r.a.createElement(y.a,{variant:"outline-info",onClick:this.toRegister},"Register")))}}]),t}(r.a.Component),W=Object(c.f)(R),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",firstname:"",lastname:"",error:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.register=a.register.bind(Object(p.a)(a)),a.toLogin=a.toLogin.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(z.a)({},t,a))}},{key:"register",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var a,n,r,s,o,l,c,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.username,n=this.state.password,r=this.state.firstname,s=this.state.lastname,a=a.trim(),n=n.trim(),r=r.trim(),s=s.trim(),o="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/register"),e.prev=10,e.next=13,fetch(o,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n,firstname:r,lastname:s})});case 13:if(200!==(l=e.sent).status){e.next=22;break}return e.next=17,l.json();case 17:c=e.sent,i=c.id,u=new E(i,a,r,s,!0,[]),S(u),this.props.history.push("/");case 22:500===l.status&&this.setState({error:!0}),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),this.setState({error:!0});case 28:case"end":return e.stop()}}),e,this,[[10,25]])})));return function(t){return e.apply(this,arguments)}}()},{key:"toLogin",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){return this.state.error?r.a.createElement(H,null):r.a.createElement("div",{id:"login"},r.a.createElement(f.a,{onSubmit:this.register},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"First Name"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Enter first name",name:"firstname",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Last Name"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Enter last name",name:"lastname",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:this.handleChange})),r.a.createElement(y.a,{variant:"info",type:"submit"},"Register"),r.a.createElement("span",{className:"space"}),r.a.createElement(y.a,{variant:"outline-info",onClick:this.toLogin},"Login")))}}]),t}(r.a.Component),_=Object(c.f)(M),Y=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{variant:"success"},r.a.createElement(T.a.Heading,null,"Success!"),r.a.createElement("p",null,this.props.message))}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={ogUsername:localStorage.getItem("username"),username:localStorage.getItem("username"),firstname:localStorage.getItem("firstname"),lastname:localStorage.getItem("lastname"),password:"",error:!1,updated:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.update=a.update.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(z.a)({},t,a))}},{key:"update",value:function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,n,r,s,o,l,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,a=this.state.username,n=this.state.password,r=this.state.firstname,s=this.state.lastname,a=a.trim(),n=n.trim(),r=r.trim(),s=s.trim(),0!==a.length&&0!==n.length&&0!==r.length&&0!==s.length||(t=!0),t){e.next=32;break}return o="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/user"),e.prev=12,e.next=15,fetch(o,{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({ogUsername:this.state.ogUsername,username:a,password:n,firstname:r,lastname:s})});case 15:if(200!==(l=e.sent).status){e.next=24;break}return e.next=19,l.json();case 19:c=e.sent,i=new E(localStorage.getItem("id"),c.username,c.firstname,c.lastname,localStorage.getItem("isAuth"),JSON.parse(localStorage.getItem("stocks"))),S(i),this.setState({ogUsername:i.getUsername(),username:i.getUsername(),firstname:i.getFirstName(),lastname:i.getLastName(),updated:!0}),window.location.reload(!1);case 24:500===l.status&&this.setState({error:!0}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(12),this.setState({error:!0});case 30:e.next=33;break;case 32:this.setState({error:!0});case 33:case"end":return e.stop()}}),e,this,[[12,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.error)return r.a.createElement(H,null);var e=r.a.createElement("div",{id:"settings"},r.a.createElement(f.a,null,r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",value:this.state.username,name:"username",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"First Name"),r.a.createElement(f.a.Control,{type:"text",value:this.state.firstname,name:"firstname",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Last Name"),r.a.createElement(f.a.Control,{type:"text",value:this.state.lastname,name:"lastname",onChange:this.handleChange})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",value:this.state.password,name:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"buttons"},r.a.createElement(y.a,{variant:"info",onClick:this.update},"Update"))));return this.state.updated?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{message:"Your settings have been updated!"}),e):e}}]),t}(r.a.Component),K=Object(c.f)(q),Q=a(89),V=a(88),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={stock:"",prevStocks:[],error:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.addUserStock=a.addUserStock.bind(Object(p.a)(a)),a.deleteUserStock=a.deleteUserStock.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(z.a)({},t,a))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("stocks"));e.length>0&&this.setState({prevStocks:e})}},{key:"addUserStock",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var a,n,r,s,o,l,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.stock,n=localStorage.getItem("id"),a=a.trim().toUpperCase(),r="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/watchlist/add"),e.prev=5,e.next=8,fetch(r,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,stock:a})});case 8:if(200!==(s=e.sent).status){e.next=19;break}return e.next=12,s.json();case 12:o=e.sent,l=o.symbol,(c=JSON.parse(localStorage.getItem("stocks"))).push(l),c=JSON.stringify(c),localStorage.setItem("stocks",c),this.setState({prevStocks:JSON.parse(localStorage.getItem("stocks"))});case 19:500===s.status&&this.setState({error:!0}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),this.setState({error:!0});case 25:case"end":return e.stop()}}),e,this,[[5,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteUserStock",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var a,n,r,s,o,l,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.dataset.stock,n=localStorage.getItem("id"),a=a.trim().toUpperCase(),r="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/watchlist/remove"),e.prev=5,e.next=8,fetch(r,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,stock:a})});case 8:if(200!==(s=e.sent).status){e.next=19;break}return e.next=12,s.json();case 12:for(o=e.sent,l=o.symbol,c=JSON.parse(localStorage.getItem("stocks")),i=0;i<c.length;i++)c[i]===l&&c.splice(i,1);c=JSON.stringify(c),localStorage.setItem("stocks",c),this.setState({prevStocks:JSON.parse(localStorage.getItem("stocks"))});case 19:500===s.status&&this.setState({error:!0}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),this.setState({error:!0});case 25:case"end":return e.stop()}}),e,this,[[5,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.error)return r.a.createElement(H,null);var t=r.a.createElement(f.a,{onSubmit:this.addUserStock},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Stock"),r.a.createElement(f.a.Control,{type:"text",name:"stock",placeholder:"Enter a Stock Ticker Symbol",onChange:this.handleChange})),r.a.createElement(y.a,{variant:"info",type:"submit"},"Add"));if(this.state.prevStocks instanceof Array&&this.state.prevStocks.length>0){var a=t;(t=[]).push(a);var n=[];this.state.prevStocks.forEach((function(t){n.push(r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a.Item,{variant:"info"},r.a.createElement("span",null,t),r.a.createElement("span",{className:"float-right"},r.a.createElement(y.a,{"data-stock":t,variant:"danger",size:"sm",onClick:e.deleteUserStock},"Remove")))))}));var s=r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(f.a.Label,null,"Currently Watched Stocks"),r.a.createElement(V.a,{bg:"info"},r.a.createElement(Q.a,{variant:"flush"},n)));return t.push(s),t=r.a.createElement("div",{id:"watchlist"},t)}return r.a.createElement("div",{id:"watchlist"},t)}}]),t}(r.a.Component),Z=(a(79),"".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/monthly")),$="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/dow30"),ee="".concat("http://ec2-18-220-186-209.us-east-2.compute.amazonaws.com:8000","/api/watchlist/stocks"),te=r.a.createElement(l.a,null,r.a.createElement(O,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:function(e){return!0===k()?r.a.createElement(P,{api:ee}):r.a.createElement(B,{api:$,symbol:""})}}),r.a.createElement(c.a,{exact:!0,path:"/search/:stock",component:function(e){return r.a.createElement(B,{api:Z,symbol:e.match.params.stock})}}),r.a.createElement(c.a,{exact:!0,path:"/login",component:function(e){return!1===k()?r.a.createElement(W,null):r.a.createElement(G,null)}}),r.a.createElement(c.a,{exact:!0,path:"/register",component:function(e){return!1===k()?r.a.createElement(_,null):r.a.createElement(G,null)}}),r.a.createElement(c.a,{exact:!0,path:"/settings",component:function(e){return!0===k()?r.a.createElement(K,null):r.a.createElement(G,null)}}),r.a.createElement(c.a,{exact:!0,path:"/watchlist",component:function(e){return!0===k()?r.a.createElement(X,null):r.a.createElement(G,null)}})));o.a.render(te,document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c4731324.chunk.js.map