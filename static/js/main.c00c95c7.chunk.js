(this["webpackJsonpdecipher-drop-frontend"]=this["webpackJsonpdecipher-drop-frontend"]||[]).push([[0],{240:function(e,t,n){"use strict";t.a=n.p+"static/media/escrow.tmpl.091ece65.teal"},296:function(e,t,n){},315:function(e,t){},317:function(e,t){},327:function(e,t){},329:function(e,t){},356:function(e,t){},357:function(e,t){},362:function(e,t){},364:function(e,t){},371:function(e,t){},390:function(e,t){},418:function(e,t){},490:function(e,t){},493:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),s=n.n(c),i=(n(296),n(1)),o=n.n(i),l=n(6),u=n(21),d=n(43),h=n(497),p=n(3),b=n(2);function j(e){var t=r.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=e.sessionWallet,i=e.updateWallet;function j(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(o.a.mark((function t(n){var r,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=n.currentTarget.id)in d.allowedWallets){t.next=4;break}return void 0!==e.sessionWallet.wallet&&e.sessionWallet.disconnect(),t.abrupt("return",c(!1));case 4:return a=new d.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback,r),t.next=7,a.connect();case 7:if(t.sent){t.next=9;break}a.disconnect();case 9:s=setInterval((function(){var t=localStorage.getItem("walletconnect");if(null!==t&&void 0!==t&&""!==t){var n=JSON.parse(t);n.accounts.length>0&&(clearInterval(s),a.setAccountList(n.accounts),e.updateWallet(new d.SessionWallet(a.network,a.permissionCallback,r)))}}),250),e.updateWallet(a),c(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.useEffect((function(){var e;if(!s.connected())return s.connect().then((function(t){t&&(e=setInterval((function(){s.connected()&&(clearInterval(e),i(s))}),500))})),function(){clearInterval(e)}}),[s,i]);for(var x=[],g=0,O=Object.entries(d.allowedWallets);g<O.length;g++){var m=Object(u.a)(O[g],2),w=m[0],v=m[1];"wallet-connect"===w&&x.push(Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{id:w,large:!0,fill:!0,minimal:!0,outlined:!0,onClick:j,children:Object(b.jsxs)("div",{className:"wallet-option",children:[Object(b.jsx)("img",{alt:"wallet-branding",className:"wallet-branding",src:v.img(e.darkMode)}),Object(b.jsx)("h5",{children:v.displayName()})]})})},w))}if(!e.connected)return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{minimal:!0,style:{color:"white",borderColor:"white",borderRadius:"8px"},rightIcon:"selection",intent:"warning",outlined:!0,onClick:function(){c(!0)},children:"Connect"}),Object(b.jsx)(h.e,{isOpen:a,title:"Select Wallet",onClose:j,children:Object(b.jsx)("div",{className:p.a.DIALOG_BODY,children:Object(b.jsx)("ul",{className:"wallet-option-list",children:x})})})]});var y=e.accts.map((function(e,t){return Object(b.jsxs)("option",{value:t,children:[" ",e.substr(0,8),"...  "]},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.f,{onChange:function(t){e.sessionWallet.setAccountIndex(parseInt(t.target.value)),e.updateWallet(e.sessionWallet)},minimal:!0,iconProps:{icon:"symbol-circle",intent:"success"},defaultValue:e.sessionWallet.accountIndex(),children:y}),Object(b.jsx)(h.b,{icon:"log-out",minimal:!0,onClick:function(){e.sessionWallet.disconnect(),e.updateWallet(new d.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback))}})]})}var f=n(74),x=n(41),g=n(64),O=n(65);function m(){var e=a.a.useState(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"help-container",children:[Object(b.jsx)(h.b,{id:"help-text",icon:"help",minimal:!0,intent:"primary",outlined:!0,onClick:function(){return r(!0)},children:"Need Help?"}),Object(b.jsx)(h.e,{isOpen:n,canEscapeKeyClose:!0,canOutsideClickClose:!0,isCloseButtonShown:!0,onClose:function(){return r(!1)},children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"help-text",children:Object(b.jsxs)("p",{style:{color:"#000 !important"},children:[Object(b.jsx)("h3",{children:"How to collect your Algo Gator"}),Object(b.jsxs)("p",{children:["First, you will need to download the ",Object(b.jsx)("a",{href:"https://algorandwallet.com/",children:"Algorand Wallet"}),"(make sure you have the ",Object(b.jsx)("b",{children:"latest version"}),") and load it with at least 0.3 Algo."]}),Object(b.jsx)("p",{children:"Second, click the \u201cConnect\u201d button on the top right of this page and proceed as follows"}),Object(b.jsx)(O.MobileView,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"A pop-up will appear with the toggle on \u201cMobile\u201d -- Choose the account you wish to use -- Click \u201cConnect\u201d"}),Object(b.jsx)("li",{children:"Return to the landing page on your mobile browser. Your Algorand Wallet address should now appear on the top right corner of the page"}),Object(b.jsx)("li",{children:"Click \u201cCollect\u201d on the web page in your mobile browser, and then switch to the wallet App to \u201cApprove\u201d the transaction"})]})}),Object(b.jsx)(O.BrowserView,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Scan the QR code using the scanner within your mobile Algorand Wallet "}),Object(b.jsx)("li",{children:"A pop-up will appear within the mobile app -- Choose the account you wish to use -- Click \u201cConnect\u201d"}),Object(b.jsx)("li",{children:"At this point, your Algorand Wallet address will appear on the top right corner of the desktop landing page"}),Object(b.jsx)("li",{children:"Click \u201cCollect\u201d on the web page, and then \u201cApprove\u201d the transaction within your mobile wallet"})]})}),Object(b.jsx)("p",{children:"Once approved and the transaction is processed, your unique 1/1 Algo Gator NFT asset will appear on this page and within your mobile Algorand wallet. (Note that the Algorand Wallet will show the Asset Name and Asset ID, not an actual image of the NFT...yet)."}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Not working? "})," Try turning the mobile app off and on again. Also please check your App Store to ensure your Algorand Mobile Wallet is updated to the latest version."]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Still not working?"})," During testing we noticed some issues when the entire processes is done using Mobile Safari. If you're having issues on mobile, please try to access the link from a desktop browser."]}),Object(b.jsxs)("p",{children:["If you have any issues with the claiming process, please ",Object(b.jsx)("a",{href:"mailto:decipherevent@algorand.com",children:"reach out"})," for assistance."]})]})})})})]})}function w(){var e=a.a.useState(O.isMobileSafari),t=Object(u.a)(e,2),n=t[0];t[1];return Object(b.jsx)(h.e,{isOpen:n,style:{background:"lightgray"},children:Object(b.jsxs)("div",{className:p.a.DIALOG_BODY,children:[Object(b.jsx)("h3",{children:"Hi! It looks like you're visiting from a mobile browser on iOS."}),Object(b.jsx)("p",{children:"Unfortunately there is an experimental setting enabled by default on iOS that breaks the network connections with the mobile wallet."}),Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Current options:"})}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsxs)("p",{children:["Disable the setting as described",Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://developer.apple.com/forums/thread/685403?answerId=689525022#689525022",children:"here"})]}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)("p",{children:"Safari Settings"}),Object(b.jsx)("p",{children:"->Advanced"}),Object(b.jsx)("p",{children:"--\x3eExperimental Features"}),Object(b.jsx)("p",{children:"----\x3eNSURLSession WebSocket to off"})]})]}),Object(b.jsx)("li",{children:"Or visit this site on a desktop browser"})]})]})})}function v(e){var t=a.a.useState(e.open),n=Object(u.a)(t,2),c=n[0],s=n[1],i=a.a.useState(e.signed),o=Object(u.a)(i,2),l=o[0],d=o[1],j=a.a.useState(0),f=Object(u.a)(j,2),x=f[0],g=f[1],m=a.a.useCallback((function(){return s(!1)}),[]);return Object(r.useEffect)((function(){s(e.open),d(e.signed)}),[e]),Object(r.useEffect)((function(){var e=0;if(!(!l||x>0||x>=1))var t=setInterval((function(){if((e+=.016666666666666666)>1)return clearInterval(t),void g(1);g(e)}),100)}),[l,x]),Object(b.jsx)(h.e,{isOpen:c,onClose:m,style:{background:"lightgray"},children:Object(b.jsx)("div",{className:p.a.DIALOG_BODY,children:l?Object(b.jsx)(h.h,{animate:!0,intent:"success",value:x}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Please Approve the transaction in your Mobile Wallet. "})}),Object(b.jsx)(O.MobileView,{children:Object(b.jsx)(h.a,{style:{borderRadius:"8px",margin:"20px 0px -30px"},text:"Take me there",href:O.isIOS?"algorand-wc://wc?uri=wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1":"wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1",intent:"success",large:!0,minimal:!0,outlined:!0,rightIcon:"double-chevron-right"})})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(h.b,{style:{borderRadius:"4px",margin:"40px 0px -50px"},minimal:!0,outlined:!0,onClick:e.triggerHelp,intent:"warning",text:"Having Issues?"})})]})})})}var y=function(){var e=new d.SessionWallet(g.b.network),t=a.a.useState(e),n=Object(u.a)(t,2),c=n[0],s=n[1],i=a.a.useState({id:0,url:"algo-gator.png",name:"TBD"}),p=Object(u.a)(i,2),O=p[0],y=p[1],k=a.a.useState(e.accountList()),A=Object(u.a)(k,2),S=A[0],C=A[1],I=a.a.useState(e.connected()),N=Object(u.a)(I,2),T=N[0],W=N[1],D=a.a.useState(!0),R=Object(u.a)(D,2),E=R[0],B=R[1],L=a.a.useState(!1),G=Object(u.a)(L,2),M=G[0],P=G[1],U=a.a.useState(!1),F=Object(u.a)(U,2),H=F[0],_=F[1],J=a.a.useState(!1),V=Object(u.a)(J,2),Y=V[0],K=V[1],Q=a.a.useState(!1),q=Object(u.a)(Q,2),X=q[0],Z=q[1],z=new URLSearchParams(window.location.search),$=z.get("escrow"),ee=z.get("addr"),te=z.get("secret");function ne(){return(ne=Object(l.a)(o.a.mark((function e(){var t,n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.createElement("a"),e.next=3,fetch(O.url);case 3:return n=e.sent,e.next=6,n.blob();case 6:r=e.sent,a=URL.createObjectURL(r),t.href=a,t.download=O.name,t.target="_blank",document.body.appendChild(t),t.click(),document.body.removeChild(t);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==te&&null!==ee&&null!==$){t.next=2;break}return t.abrupt("return");case 2:return _(!0),Z(!0),t.prev=4,t.next=7,Object(g.c)($);case 7:return n=t.sent,t.next=10,Object(g.a)(e,n,$,ee,te);case 10:return r=t.sent,K(!0),Object(g.d)(n).then((function(e){y(e)})),t.next=15,Object(g.e)(r);case 15:B(!1),P(!0),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(4),t.t0.message.includes("overspend")?alert("This account doe not have enough Algos to claim. If needed, contact decipherevent@algorand.com"):alert("Something went wrong: "+t.t0);case 23:return t.prev=23,Z(!1),_(!1),t.finish(23);case 27:case"end":return t.stop()}}),t,null,[[4,19,23,27]])})))).apply(this,arguments)}Object(r.useEffect)((function(){B(null!==te&&null!==ee&&null!==$)}),[$,ee,te]);var ae=Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Greetings Algonaut!"}),Object(b.jsx)("p",{children:"Connect your wallet and collect your Algo Gator NFT"})]}),ce=Object(b.jsx)(h.b,{style:{color:"white",borderColor:"white",borderRadius:"8px",width:"100%",marginTop:"8px"},minimal:!0,outlined:!0,intent:"success",large:!0,icon:"circle",text:"Collect",onClick:function(){return re.apply(this,arguments)},disabled:!T||!E,loading:H});return 0!==O.id&&!0===M&&(ce=Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{style:{color:"white",borderColor:"white",borderRadius:"8px",margin:"8px"},minimal:!0,outlined:!0,intent:"success",large:!0,icon:"download",text:"Download",onClick:function(){return ne.apply(this,arguments)}}),Object(b.jsxs)(h.a,{style:{color:"white",borderColor:"white",borderRadius:"8px",margin:"8px"},minimal:!0,outlined:!0,large:!0,intent:"success",href:"https://www.nftexplorer.app/asset/"+O.id,target:"_blank",children:[Object(b.jsx)("img",{style:{width:"20px",float:"left",marginRight:"8px"},alt:"nft explorer icon",src:"/nftexplorer.ico"}),"NFT Explorer"]})]}),ae=O.id<420800534?Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Congrats on successfully collecting your Decipher Ticket!  "}),Object(b.jsx)("p",{children:"Please make sure the asset is in your Algorand Mobile Wallet and ready to be presented when you arrive at the venue. See you at Decipher!"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Note: "}),"If the image of your Algo Gator isn't appearing yet, give it a moment, it might be shy"]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Congrats on successfully collecting your Algo Gator NFT!  "}),Object(b.jsx)("p",{children:"Enjoy it as a commemorative token that you\u2019ve earned by being part of the Algorand community and signing up as a virtual VIP. See you online at Decipher!"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Note: "}),"If the image of your Algo Gator isn't appearing yet, give it a moment, it might be shy"]})]})),Object(b.jsxs)("div",{className:"App",style:{background:"#000"},children:[Object(b.jsxs)(h.g,{style:{background:"linear-gradient(90deg,#b72375 3%,#f37e33 97%)"},children:[Object(b.jsx)(h.g.Group,{align:f.a.LEFT,children:Object(b.jsx)(h.g.Heading,{children:Object(b.jsx)("img",{alt:"Algorand A",className:"header-icon",src:"favicon.ico"})})}),Object(b.jsx)(h.g.Group,{align:f.a.RIGHT,children:Object(b.jsx)(j,{darkMode:!0,sessionWallet:c,accts:S,connected:T,updateWallet:function(e){s(e),C(e.accountList()),W(e.connected())}})})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(h.d,{elevation:x.a.FOUR,className:"ticket-card",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"content-piece",children:Object(b.jsx)("img",{alt:"NFT",className:"gator",src:O.url})}),Object(b.jsxs)("div",{className:"content-details",children:[Object(b.jsx)("div",{className:"detail-prose",style:{color:"white"},children:ae}),Object(b.jsx)("div",{className:"collect-button",children:ce})]})]})})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(m,{})}),Object(b.jsx)(v,{triggerHelp:function(){var e;Z(!1),_(!1),null===(e=document.getElementById("help-text"))||void 0===e||e.click()},open:X,signed:Y}),Object(b.jsx)(w,{})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))},64:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return x})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return N}));var r=n(1),a=n.n(r),c=n(21),s=n(89),i=n(6),o=n(27),l=n.n(o),u=n(238),d=n.n(u),h=n(239),p=n.n(h),b=n(240),j={seeder:"DCIPMQ3SDOVBX5IUY65LR7BZ2R63JCULO72J7IS3W2PUNW7JTAGYEHBRRA",network:"MainNet",algod:{host:"https://algoexplorerapi.io",port:"",token:""}},f=new l.a.Algodv2(j.algod.token,j.algod.host,j.algod.port);function x(e,t,n,r,a){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(a.a.mark((function e(t,n,r,i,u){var d,h,p,b,x,g,m,w,v,y,A,S;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=t.getDefaultAccount(),e.next=3,k(i);case 3:return h=e.sent,e.next=6,f.getTransactionParams().do();case 6:return p=e.sent,b=new o.Transaction(Object(s.a)({from:d,to:d,assetIndex:n,type:o.TransactionType.axfer,amount:0},p)),x=new o.Transaction(Object(s.a)({from:r,to:d,assetIndex:n,type:o.TransactionType.axfer,amount:0,closeRemainderTo:d},p)),g=new o.Transaction(Object(s.a)({from:r,to:j.seeder,type:o.TransactionType.pay,amount:0,closeRemainderTo:j.seeder},p)),m=[b,x,g],l.a.assignGroupID(m),h.lsig.args=[O(x.txID(),r,u)],w=l.a.signLogicSigTransactionObject(x,h),v=l.a.signLogicSigTransactionObject(g,h),e.next=17,t.signTxn(m);case 17:return y=e.sent,A=Object(c.a)(y,2),S=A[0],e.abrupt("return",[S,w,v]);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(t,n,r){var a=e.from("ProgData"),c=l.a.decodeAddress(n).publicKey,s=d.a.decode.asBytes(t),i=new Uint8Array(a.length+c.length+s.length);i.set(a,0),i.set(c,a.length),i.set(s,a.length+c.length);var o=e.from(r,"base64");return p.a.sign.detached(i,o)}function m(e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAssetByID(t).do();case 2:return n=e.sent,r=n.params,c=r.url.split("://"),s="https://ipfs.io/ipfs/"+c[1],e.abrupt("return",{id:t,url:s,name:r.name});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.accountInformation(t).do();case 2:if(1===(n=e.sent).assets.length){e.next=5;break}throw Error("Expected 1 ASA for "+t+" got: "+n.assets.length.toString());case 5:return e.abrupt("return",n.assets[0]["asset-id"]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(a.a.mark((function t(n){var r,c,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="0x"+e.from(l.a.decodeAddress(n).publicKey).toString("hex"),t.next=3,S(b.a);case 3:return c=t.sent,s=c.replace("TMPL_GEN_ADDR",r),t.next=7,f.compile(s).do();case 7:return i=t.sent,t.abrupt("return",new o.LogicSigAccount(e.from(i.result,"base64")));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return I(e)&&e.arrayBuffer()})).then((function(e){return(new TextDecoder).decode(e)})).catch((function(e){return console.error(e),""}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){if(!e.ok)throw new Error("HTTP ".concat(e.status," - ").concat(e.statusText));return e}function N(e){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.sendRawTransaction(t.map((function(e){return e.blob}))).do();case 2:return n=e.sent,r=n.txId,e.next=6,W(f,r,3);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,n){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(a.a.mark((function e(t,n,r){var c,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null==t||null==n||r<0)){e.next=2;break}throw new Error("Bad arguments.");case 2:return e.next=4,t.status().do();case 4:if("undefined"!==typeof(c=e.sent)){e.next=7;break}throw new Error("Unable to get node status");case 7:s=c["last-round"]+1,i=s;case 9:if(!(i<s+r)){e.next=23;break}return e.next=12,t.pendingTransactionInformation(n).do();case 12:if(void 0===(o=e.sent)){e.next=18;break}if(!(null!==o["confirmed-round"]&&o["confirmed-round"]>0)){e.next=16;break}return e.abrupt("return",o);case 16:if(!(null!=o["pool-error"]&&o["pool-error"].length>0)){e.next=18;break}throw new Error("Transaction Rejected pool error".concat(o["pool-error"]));case 18:return e.next=20,t.statusAfterBlock(i).do();case 20:i+=1,e.next=9;break;case 23:throw new Error("Transaction not confirmed after ".concat(r," rounds!"));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(17).Buffer)}},[[493,1,2]]]);
//# sourceMappingURL=main.c00c95c7.chunk.js.map