(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),i=c(2),o=c(3),r=c(5),s=c(4),l=c(1),u=c.n(l),b=(c(12),c(0)),h=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={currentTime:new Date,timerId:void 0},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){t.setState({currentTime:new Date})}),1e3);this.setState({timerId:e})}},{key:"componentDidUpdate",value:function(){console.log(this.state.currentTime.toLocaleTimeString())}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state.currentTime;return Object(b.jsxs)("div",{className:"clock",children:[Object(b.jsx)("h1",{className:"clock__title",children:"React clock"}),Object(b.jsxs)("p",{className:"clock__time",children:["Current time:"," ",t.toLocaleTimeString()]})]})}}]),c}(u.a.Component),k=h,m=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0},t.startClock=function(){t.setState({isClockVisible:!0})},t.stopClock=function(){t.setState({isClockVisible:!1})},t}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[this.state.isClockVisible&&Object(b.jsx)(k,{}),Object(b.jsx)("button",{type:"button",onClick:this.stopClock,className:"button__red",children:"Hide clock"}),Object(b.jsx)("button",{type:"button",onClick:this.startClock,className:"button__green",children:"Show clock"})]})}}]),c}(u.a.Component),j=m;a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7b663a69.chunk.js.map