(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{1014:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(5),r=n(57),a=(n(0),n(233)),o=n(31),i=n(1),s=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,s);return t===o.g.ACTIVE?Object(i.jsx)(a.h,Object(c.a)({},n)):t===o.g.PENDING?Object(i.jsx)(a.g,Object(c.a)({},n)):Object(i.jsx)(a.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(i.jsx)(a.d,Object(c.a)({},n)):Object(i.jsx)(a.b,Object(c.a)({},n))}},1021:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(5),a=n(8),o=(n(0),n(2)),i=n(6),s=n(1),l=i.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(s.jsx)(o.p,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},1057:function(e,t,n){"use strict";var c,r=n(8),a=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},1058:function(e,t,n){"use strict";n(0);var c=n(2),r=n(15),a=n(32),o=n(1021),i=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,j=e.cakeBnbLpBalance,u=e.ifoPoolBalance,d=Object(r.b)().t;return Object(i.jsxs)(o.a,{mb:"0",children:[Object(i.jsx)(c.yc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:d("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(i.jsx)(c.yc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Overview")}),Object(i.jsxs)(o.b,{children:[Object(i.jsx)(c.yc,{color:"secondary",children:d("Your Voting Power")}),Object(i.jsx)(c.yc,{bold:!0,fontSize:"20px",children:Object(a.d)(t,0,3)})]}),Object(i.jsx)(c.yc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Your Cake Held Now")}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("Wallet")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(n,0,3)})]}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("Manual CAKE Pool")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(l,0,3)})]}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("Auto CAKE Pool")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(s,0,3)})]}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("IFO Pool")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(u,0,3)})]}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("Other Syrup Pools")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(b,0,3)})]}),Object(i.jsxs)(c.ab,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.yc,{color:"textSubtle",fontSize:"16px",children:d("CAKE BNB LP")}),Object(i.jsx)(c.yc,{textAlign:"right",children:Object(a.d)(j,0,3)})]})]})}},1059:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(10),i=n(9),s=n(0),l=n(47),b=n(229),j=n(37),u=n(100),d=n(930),x={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,ifoPoolBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,p=Object(s.useState)(x),O=Object(i.a)(p,2),h=O[0],f=O[1],m=Object(s.useState)(!!c),v=Object(i.a)(m,2),g=v[0],y=v[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,i,s,l,x,p,O,h,m,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,u.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(d.g)(c,s,o);case 14:l=n.sent,x=l.cakeBalance,p=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,v=l.cakeVaultBalance,g=l.verificationHash,w=l.IFOPoolBalance,t&&f((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:g,cakeBalance:parseFloat(x),cakeBnbLpBalance:parseFloat(p),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(v),ifoPoolBalance:w?parseFloat(w):0,total:parseFloat(h)})}));case 24:return n.prev=24,y(!1),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[1,,24,27]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,y]),Object(a.a)(Object(a.a)({},h),{},{isLoading:g})}},1121:function(e,t,n){"use strict";var c,r,a,o,i,s=n(5),l=(n(0),n(1129)),b=n.n(l),j=n(1165),u=n.n(j),d=n(8),x=n(2),p=n(6),O=n(1),h=p.e.table(c||(c=Object(d.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),f=p.e.div(r||(r=Object(d.a)(["\n  width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n"]))),m=p.e.div(a||(a=Object(d.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),v=function(e){return Object(O.jsx)(x.cb,Object(s.a)({as:"h4",scale:"lg",my:"16px"},e))},g={h1:v,h2:v,h3:v,h4:v,h5:v,h6:v,p:function(e){return Object(O.jsx)(x.yc,Object(s.a)({as:"p",my:"16px"},e))},table:function(e){var t=Object.assign({},e);return Object(O.jsx)(f,{children:Object(O.jsx)(h,{children:t.children})})},ol:function(e){return Object(O.jsx)(m,Object(s.a)({as:"ol"},e))},ul:function(e){return Object(O.jsx)(m,Object(s.a)({as:"ul"},e))},pre:p.e.pre(o||(o=Object(d.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text})),a:p.e.a(i||(i=Object(d.a)(["\n  word-break: break-all;\n"])))};t.a=function(e){return Object(O.jsx)(b.a,Object(s.a)({remarkPlugins:[u.a],components:g},e))}},1677:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),i=n(2),s=n(47),l=n(87),b=n(105),j=n(72),u=n(31),d=n(983),x=n(469),p=n(15),O=n(303),h=n(1121),f=n(452),m=n(930),v=n(1014),g=n(1057),y=n(8),w=n(6),k=n(889),S=n(39),B=n(187),C=n(939),I=n(1),L=Object(w.e)(i.p)(c||(c=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),A=function(e){var t=e.proposal,n=Object(p.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(I.jsxs)(i.z,{mb:"16px",children:[Object(I.jsx)(i.C,{children:Object(I.jsx)(i.cb,{as:"h3",scale:"md",children:n("Details")})}),Object(I.jsxs)(i.A,{children:[Object(I.jsxs)(i.ab,{alignItems:"center",mb:"8px",children:[Object(I.jsx)(i.yc,{color:"textSubtle",children:n("Identifier")}),Object(I.jsx)(i.qb,{href:"".concat(C.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(I.jsxs)(i.ab,{alignItems:"center",mb:"8px",children:[Object(I.jsx)(i.yc,{color:"textSubtle",children:n("Creator")}),Object(I.jsx)(i.qb,{href:Object(S.e)(t.author,"address"),ml:"8px",children:Object(B.a)(t.author)})]}),Object(I.jsxs)(i.ab,{alignItems:"center",mb:"16px",children:[Object(I.jsx)(i.yc,{color:"textSubtle",children:n("Snapshot")}),Object(I.jsx)(i.qb,{href:Object(S.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(I.jsxs)(L,{p:"16px",children:[Object(I.jsx)(v.a,{proposalState:t.state,mb:"8px"}),Object(I.jsxs)(i.ab,{alignItems:"center",children:[Object(I.jsx)(i.yc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(I.jsx)(i.yc,{ml:"8px",children:Object(k.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(I.jsxs)(i.ab,{alignItems:"center",children:[Object(I.jsx)(i.yc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(I.jsx)(i.yc,{ml:"8px",children:Object(k.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},P=n(450),D=n.n(P),V=n(32),E=Object(w.e)(i.yc)(r||(r=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),N=function(e){var t=e.choices,n=e.votes,c=Object(p.b)().t,r=Object(m.a)(n),a=Object(d.e)(),o=Object(s.c)().account,l=Object(m.f)(n);return Object(I.jsxs)(i.z,{children:[Object(I.jsx)(i.C,{children:Object(I.jsx)(i.cb,{as:"h3",scale:"md",children:c("Current Results")})}),Object(I.jsxs)(i.A,{children:[a===u.k.IDLE&&t.map((function(e,t){var n=r[e]||[],a=Object(m.f)(n),s=0===l?0:a/l*100,b=n.some((function(e){return o&&e.voter.toLowerCase()===o.toLowerCase()}));return Object(I.jsxs)(i.p,{mt:t>0?"24px":"0px",children:[Object(I.jsxs)(i.ab,{alignItems:"center",mb:"8px",children:[Object(I.jsx)(E,{mb:"4px",title:e,children:e}),b&&Object(I.jsxs)(i.vc,{variant:"success",outline:!0,ml:"8px",children:[Object(I.jsx)(i.J,{mr:"4px"})," ",c("Voted")]})]}),Object(I.jsx)(i.p,{mb:"4px",children:Object(I.jsx)(i.Yb,{primaryStep:s,scale:"sm"})}),Object(I.jsxs)(i.ab,{alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(i.yc,{color:"textSubtle",children:c("%total% Votes",{total:Object(V.d)(a,0,2)})}),Object(I.jsxs)(i.yc,{children:[s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),a===u.k.LOADING&&D()(t.length).map((function(e,t){return Object(I.jsx)(i.p,{mt:t>0?"24px":"0px",children:Object(I.jsx)(i.gc,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(5),F=n(3),T=n.n(F),M=n(10),H=n(9),J=n(57),Y=n(113),q=n(116),K=n(17),G=n(214),Q=n(23),R=n(111);!function(e){e.MAIN="main",e.DETAILS="details"}(a||(a={}));var W,_,U,X,Z,$,ee,te,ne=n(1021),ce=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,a=e.onConfirm,o=e.onViewDetails,s=e.onDismiss,l=Object(p.b)().t;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(ne.a,{children:[Object(I.jsx)(i.yc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Voting For")}),Object(I.jsx)(E,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(I.jsx)(i.yc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Your Voting Power")}),r?Object(I.jsx)(i.gc,{height:"64px",mb:"24px"}):Object(I.jsxs)(ne.b,{onClick:o,style:{cursor:"pointer"},children:[Object(I.jsx)(i.yc,{bold:!0,fontSize:"20px",children:Object(V.d)(n,0,3)}),Object(I.jsx)(i.fb,{scale:"sm",variant:"text",children:Object(I.jsx)(i.N,{width:"24px"})})]}),Object(I.jsx)(i.yc,{as:"p",color:"textSubtle",fontSize:"14px",children:l("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(I.jsx)(i.u,{isLoading:c,endIcon:c?Object(I.jsx)(i.j,{spin:!0,color:"currentColor"}):null,disabled:r||0===n,width:"100%",mb:"8px",onClick:a,children:l("Confirm Vote")}),Object(I.jsx)(i.u,{variant:"secondary",width:"100%",onClick:s,children:l("Cancel")})]})},re=n(1058),ae=n(1059),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,l=e.block,b=e.onDismiss,j=Object(o.useState)(a.MAIN),d=Object(H.a)(j,2),x=d[0],O=d[1],h=Object(o.useState)(!0),f=Object(H.a)(h,2),v=f[0],g=f[1],y=Object(o.useState)(!1),w=Object(H.a)(y,2),k=w[0],S=w[1],B=Object(s.c)().account,C=Object(p.b)().t,L=Object(Y.a)().toastError,A=Object(Q.a)(),P=A.library,D=A.connector,V=Object(R.a)().theme,E=Object(ae.a)(l,v),N=E.isLoading,F=E.total,J=E.cakeBalance,q=E.cakeVaultBalance,W=E.cakePoolBalance,_=E.poolsBalance,U=E.cakeBnbLpBalance,X=E.ifoPoolBalance,Z=E.verificationHash,$=x===a.MAIN,ee=$?null:function(){return O(a.MAIN)},te=(t={},Object(K.a)(t,a.MAIN,C("Confirm Vote")),Object(K.a)(t,a.DETAILS,C("Voting Power")),t),ne=function(){g(!1),b()},oe=function(){var e=Object(M.a)(T.a.mark((function e(){var t,a,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(m.e)()),{},{type:u.i.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:F.toString(),verificationHash:Z}}})),e.next=5,Object(G.c)(D,P,B,t);case 5:return a=e.sent,o={address:B,msg:t,sig:a},e.next=9,Object(m.i)(o);case 9:return S(!1),e.next=12,n();case 12:ne(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),S(!1),L(C("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)(i.Eb,{title:te[x],onBack:ee,onDismiss:b,hideCloseButton:!$,headerBackground:V.colors.gradients.cardHeader,children:Object(I.jsxs)(i.p,{mb:"24px",width:"320px",children:[x===a.MAIN&&Object(I.jsx)(ce,{vote:r,isLoading:N,isPending:k,total:F,onConfirm:oe,onViewDetails:function(){return O(a.DETAILS)},onDismiss:ne}),x===a.DETAILS&&Object(I.jsx)(re.a,{total:F,cakeBalance:J,ifoPoolBalance:X,cakeVaultBalance:q,cakePoolBalance:W,poolsBalance:_,cakeBnbLpBalance:U})]})})},ie=["proposal"],se=w.e.label(W||(W=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),le=w.e.div(_||(_=Object(y.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),be=function(e){var t=e.proposal,n=Object(J.a)(e,ie),c=Object(o.useState)(null),r=Object(H.a)(c,2),a=r[0],l=r[1],b=Object(p.b)().t,u=Object(Y.a)().toastSuccess,d=Object(j.b)(),O=Object(s.c)().account,h=function(){var e=Object(M.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(b("Vote cast!")),d(Object(x.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(i.bd)(Object(I.jsx)(oe,{onSuccess:h,proposalId:t.id,vote:a,block:Number(t.snapshot)})),m=Object(H.a)(f,1)[0];return Object(I.jsxs)(i.z,Object(z.a)(Object(z.a)({},n),{},{children:[Object(I.jsx)(i.C,{children:Object(I.jsx)(i.cb,{as:"h3",scale:"md",children:b("Cast your vote")})}),Object(I.jsxs)(i.A,{children:[t.choices.map((function(e,t){var n=t+1===(null===a||void 0===a?void 0:a.value);return Object(I.jsxs)(se,{isChecked:n,isDisabled:!O,children:[Object(I.jsx)("div",{style:{flexShrink:0},children:Object(I.jsx)(i.bc,{scale:"sm",value:e,checked:n,onChange:function(){l({label:e,value:t+1})},disabled:!O})}),Object(I.jsx)(le,{children:Object(I.jsx)(i.yc,{as:"span",title:e,children:e})})]},e)})),O?Object(I.jsx)(i.u,{onClick:m,disabled:null===a,children:b("Cast Vote")}):Object(I.jsx)(q.a,{})]})]}))},je=n(309),ue=n.n(je),de=Object(w.e)(i.ab)(U||(U=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),xe=Object(w.e)(i.gc)(X||(X=Object(y.a)(["\n  flex: 1;\n"]))),pe=function(){return Object(I.jsx)(i.p,{children:D()(10).map((function(e){return Object(I.jsxs)(de,{children:[Object(I.jsx)(i.gc,{height:"21px",mr:"32px",width:"100px"}),Object(I.jsx)(xe,{height:"21px",mr:"32px",width:"100%"}),Object(I.jsx)(xe,{height:"21px",width:"100%"})]},e)}))})},Oe=Object(w.e)(i.p).attrs({alignItems:"center"})(Z||(Z=Object(y.a)(["\n  grid-area: address;\n"]))),he=Object(w.e)(i.p)($||($=Object(y.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),fe=Object(w.e)(i.p)(ee||(ee=Object(y.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),me=Object(w.e)(i.bb)(te||(te=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ve=function(e){var t,n=e.vote,c=e.isVoter,r=Object(p.b)().t,a=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),o=a?parseFloat(n.metadata.votingPower).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3}):"--";return Object(I.jsxs)(me,{children:[Object(I.jsx)(Oe,{children:Object(I.jsxs)(i.ab,{alignItems:"center",children:[Object(I.jsx)(i.qb,{href:Object(S.e)(n.voter,"address"),children:Object(B.a)(n.voter)}),c&&Object(I.jsxs)(i.vc,{variant:"success",outline:!0,ml:"8px",children:[Object(I.jsx)(i.J,{mr:"4px"})," ",r("Voted")]})]})}),Object(I.jsx)(he,{children:Object(I.jsx)(E,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(I.jsx)(fe,{children:Object(I.jsxs)(i.ab,{alignItems:"center",justifyContent:"end",children:[Object(I.jsx)(i.yc,{title:n.metadata.votingPower,children:o}),a&&Object(I.jsx)(i.qb,{href:"".concat(C.b,"/").concat(n.id)})]})})]})},ge=function(e){var t,n=parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower);return n||(n=0),n},ye=function(e){var t=e.votes,n=Object(o.useState)(!1),c=Object(H.a)(n,2),r=c[0],a=c[1],l=Object(p.b)().t,b=Object(s.c)().account,j=ue()(t,[ge,"created"],["desc","desc"]),x=r?j:j.slice(0,20),O=Object(d.e)()===u.k.IDLE;return Object(I.jsxs)(i.z,{children:[Object(I.jsx)(i.C,{children:Object(I.jsxs)(i.ab,{alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(i.cb,{as:"h3",scale:"md",children:l("Votes (%count%)",{count:t.length.toLocaleString()})}),!O&&Object(I.jsx)(i.j,{spin:!0,width:"22px"})]})}),!O&&Object(I.jsx)(pe,{}),O&&x.length>0&&Object(I.jsxs)(I.Fragment,{children:[x.map((function(e){var t=b&&e.voter.toLowerCase()===b.toLowerCase();return Object(I.jsx)(ve,{vote:e,isVoter:t},e.id)})),Object(I.jsx)(i.ab,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(I.jsx)(i.u,{width:"100%",onClick:function(){a(!r)},variant:"text",endIcon:r?Object(I.jsx)(i.O,{color:"primary",width:"21px"}):Object(I.jsx)(i.L,{color:"primary",width:"21px"}),disabled:!O,children:l(r?"Hide":"See All")})})]}),O&&0===x.length&&Object(I.jsx)(i.ab,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(I.jsx)(i.cb,{as:"h5",children:l("No votes found")})})]})},we=n(227);t.default=function(){var e=Object(l.i)().id,t=Object(d.a)(e),n=Object(p.b)().t,c=Object(s.c)().account,r=Object(j.b)(),a=Object(d.d)(e),y=Object(d.e)(),w=Object(d.b)(),k=c&&a.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),S=null!==t&&void 0!==t?t:{},B=S.id,C=void 0===B?null:B,L=S.snapshot,P=void 0===L?null:L,D=y===u.k.LOADING||w===u.k.LOADING;return Object(o.useEffect)((function(){r(Object(x.b)(e))}),[e,r]),Object(o.useEffect)((function(){C&&P&&r(Object(x.d)({proposalId:C,block:Number(P)}))}),[C,P,r]),t?Object(I.jsxs)(O.a,{py:"40px",children:[Object(I.jsx)(we.a,{}),Object(I.jsx)(i.p,{mb:"40px",children:Object(I.jsx)(i.u,{as:b.a,to:"/voting",variant:"text",startIcon:Object(I.jsx)(i.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(I.jsxs)(g.a,{children:[Object(I.jsxs)(i.p,{children:[Object(I.jsxs)(i.p,{mb:"32px",children:[Object(I.jsxs)(i.ab,{alignItems:"center",mb:"8px",children:[Object(I.jsx)(v.a,{proposalState:t.state}),Object(I.jsx)(v.b,{isCoreProposal:Object(m.h)(t),ml:"8px"})]}),Object(I.jsx)(i.cb,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(I.jsx)(i.p,{children:Object(I.jsx)(h.a,{children:t.body})})]}),!D&&!k&&t.state===u.g.ACTIVE&&Object(I.jsx)(be,{proposal:t,mb:"16px"}),Object(I.jsx)(ye,{votes:a})]}),Object(I.jsxs)(i.p,{children:[Object(I.jsx)(A,{proposal:t}),Object(I.jsx)(N,{choices:t.choices,votes:a})]})]})]}):Object(I.jsx)(f.a,{})}},930:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return y}));var c=n(17),r=n(34),a=n(5),o=n(3),i=n.n(o),s=n(10),l=n(52),b=n(36),j=n(31),u=n(100),d=n(939),x=function(e){return d.a.includes(e.author.toLowerCase())},p=function(e,t){switch(t){case j.h.COMMUNITY:return e.filter((function(e){return!x(e)}));case j.h.CORE:return e.filter((function(e){return x(e)}));case j.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"BS",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},m=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,u.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},939:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),a="https://gateway.ipfs.io/ipfs",o="0.1.3",i="cake.eth",s=10},983:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(24),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},a=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},o=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},i=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},s=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}}}]);
//# sourceMappingURL=15.962b6440.chunk.js.map