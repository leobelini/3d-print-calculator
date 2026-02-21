import{u as be,T as ye,D as ot,k as Me,g as st,P as lt,a as ct,b as Ae,M as dt}from"./index-COgYVrSb.js";import{o as W,f as Q,a4 as w,aq as gt,ar as ut,as as pt,e as B,c as L,at as mt,ac as ht,ae as ft,au as vt,g,b as Ge,h as J,P as bt,av as se,ag as j,a2 as m,aa as E,a3 as K,a8 as C,a5 as Y,a6 as p,ah as ge,a7 as V,aw as Pe,d as yt,a9 as We,ax as ke}from"./index-CCtJbuFu.js";import{S as te,c as re,b as ne,a as ae,C as ie,I as pe,d as me,B as oe}from"./section-BYkdblHy.js";import{T as kt,j as wt,X as xt,L as Ct,k as St,l as Mt,m as At,M as Ke,n as Pt,o as Et,K as Tt,G as It,c as Bt,S as Dt,d as Lt,b as zt,P as Ht,E as Ft,C as Nt,e as Ut}from"./main-panel-DQJH4gdo.js";import{u as Qt}from"./goober.modern-D2HZIzZw.js";import{c as Ee}from"./store-CcMuWB6z.js";function qt(n){return n!==null&&(typeof n=="object"||typeof n=="function")}const ce=(n,e)=>n===e||n.length===e.length&&n.every((a,i)=>a===e[i]),Te=n=>typeof n=="function"&&!n.length?n():n,Ie=n=>Array.isArray(n)?n:n?[n]:[];function Be(n,...e){return typeof n=="function"?n(...e):n}const Rt=W;function _(n,e,a,i){return n.addEventListener(e,a,i),Rt(n.removeEventListener.bind(n,e,a,i))}function De(n,e,a,i){const c=()=>{Ie(Te(n)).forEach(d=>{d&&Ie(Te(e)).forEach(l=>_(d,l,a,i))})};typeof n=="function"?Q(c):w(c)}function we(n,e=ut()){let a=0,i,c;return()=>(a++,W(()=>{a--,queueMicrotask(()=>{!a&&c&&(c(),c=i=void 0)})}),c||gt(d=>i=n(c=d),e),i)}function Le(n,e){for(let a=n.length-1;a>=0;a--){const i=e.slice(0,a+1);if(!ce(n[a],i))return!1}return!0}const Je=we(()=>{const[n,e]=B(null);return _(window,"keydown",a=>{e(a),setTimeout(()=>e(null))}),n}),Ze=we(()=>{const[n,e]=B([]),a=()=>e([]),i=Je();return _(window,"keydown",c=>{if(c.repeat||typeof c.key!="string")return;const d=c.key.toUpperCase(),l=n();if(l.includes(d))return;const t=[...l,d];l.length===0&&d!=="ALT"&&d!=="CONTROL"&&d!=="META"&&d!=="SHIFT"&&(c.shiftKey&&t.unshift("SHIFT"),c.altKey&&t.unshift("ALT"),c.ctrlKey&&t.unshift("CONTROL"),c.metaKey&&t.unshift("META")),e(t)}),_(window,"keyup",c=>{if(typeof c.key!="string")return;const d=c.key.toUpperCase();e(l=>l.filter(t=>t!==d))}),_(window,"blur",a),_(window,"contextmenu",c=>{c.defaultPrevented||a()}),n[0]=n,n[1]={event:i},n[Symbol.iterator]=function*(){yield n[0],yield n[1]},n}),Ot=we(()=>{const n=Ze();return L(e=>n().length===0?[]:[...e,n()],[])});function $t(n,e,a={}){if(!n.length)return;n=n.map(o=>o.toUpperCase());const{preventDefault:i=!0}=a,c=Je(),d=Ot();let l=!1;const t=o=>{if(!o.length)return l=!1;if(l)return;const s=c();o.length<n.length?Le(o,n.slice(0,o.length))?i&&s&&s.preventDefault():l=!0:(l=!0,Le(o,n)&&(i&&s&&s.preventDefault(),e(s)))},r=o=>{const s=o.at(-1);if(!s)return;const u=c();if(i&&s.length<n.length){ce(s,n.slice(0,n.length-1))&&u&&u.preventDefault();return}if(ce(s,n)){const v=o.at(-2);(!v||ce(v,n.slice(0,n.length-1)))&&(i&&u&&u.preventDefault(),e(u))}};Q(pt(d,a.requireReset?t:r))}class Yt{#n=!0;#t;#e;#c;#a;#o;#r;#s;#d=0;#u=5;#i=!1;#g=()=>{this.debugLog("Connected to event bus"),this.#o=!0,this.#i=!1,this.debugLog("Emitting queued events",this.#a),this.#a.forEach(e=>this.emitEventToBus(e)),this.#a=[],this.stopConnectLoop(),this.#e().removeEventListener("tanstack-connect-success",this.#g)};#l=()=>{if(this.#d<this.#u){this.#d++,this.dispatchCustomEvent("tanstack-connect",{});return}this.#e().removeEventListener("tanstack-connect",this.#l),this.debugLog("Max retries reached, giving up on connection"),this.stopConnectLoop()};#p=()=>{this.#i||(this.#i=!0,this.#e().addEventListener("tanstack-connect-success",this.#g),this.#l())};constructor({pluginId:e,debug:a=!1,enabled:i=!0,reconnectEveryMs:c=300}){this.#t=e,this.#n=i,this.#e=this.getGlobalTarget,this.#c=a,this.debugLog(" Initializing event subscription for plugin",this.#t),this.#a=[],this.#o=!1,this.#r=null,this.#s=c}startConnectLoop(){this.#r!==null||this.#o||(this.debugLog(`Starting connect loop (every ${this.#s}ms)`),this.#r=setInterval(this.#l,this.#s))}stopConnectLoop(){this.#i=!1,this.#r!==null&&(clearInterval(this.#r),this.#r=null,this.debugLog("Stopped connect loop"))}debugLog(...e){this.#c&&console.log(`🌴 [tanstack-devtools:${this.#t}-plugin]`,...e)}getGlobalTarget(){if(typeof globalThis<"u"&&globalThis.__TANSTACK_EVENT_TARGET__)return this.debugLog("Using global event target"),globalThis.__TANSTACK_EVENT_TARGET__;if(typeof window<"u"&&typeof window.addEventListener<"u")return this.debugLog("Using window as event target"),window;const e=typeof EventTarget<"u"?new EventTarget:void 0;return typeof e>"u"||typeof e.addEventListener>"u"?(this.debugLog("No event mechanism available, running in non-web environment"),{addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>!1}):(this.debugLog("Using new EventTarget as fallback"),e)}getPluginId(){return this.#t}dispatchCustomEventShim(e,a){try{const i=new Event(e,{detail:a});this.#e().dispatchEvent(i)}catch{this.debugLog("Failed to dispatch shim event")}}dispatchCustomEvent(e,a){try{this.#e().dispatchEvent(new CustomEvent(e,{detail:a}))}catch{this.dispatchCustomEventShim(e,a)}}emitEventToBus(e){this.debugLog("Emitting event to client bus",e),this.dispatchCustomEvent("tanstack-dispatch-event",e)}emit(e,a){if(!this.#n){this.debugLog("Event bus client is disabled, not emitting event",e,a);return}if(!this.#o){this.debugLog("Bus not available, will be pushed as soon as connected"),this.#a.push({type:`${this.#t}:${e}`,payload:a,pluginId:this.#t}),typeof CustomEvent<"u"&&!this.#i&&(this.#p(),this.startConnectLoop());return}return this.emitEventToBus({type:`${this.#t}:${e}`,payload:a,pluginId:this.#t})}on(e,a){const i=`${this.#t}:${e}`;if(!this.#n)return this.debugLog("Event bus client is disabled, not registering event",i),()=>{};const c=d=>{this.debugLog("Received event from bus",d.detail),a(d.detail)};return this.#e().addEventListener(i,c),this.debugLog("Registered event to bus",i),()=>{this.#e().removeEventListener(i,c)}}onAll(e){if(!this.#n)return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const a=i=>{const c=i.detail;e(c)};return this.#e().addEventListener("tanstack-devtools-global",a),()=>this.#e().removeEventListener("tanstack-devtools-global",a)}onAllPluginEvents(e){if(!this.#n)return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const a=i=>{const c=i.detail;this.#t&&c.pluginId!==this.#t||e(c)};return this.#e().addEventListener("tanstack-devtools-global",a),()=>this.#e().removeEventListener("tanstack-devtools-global",a)}}class jt extends Yt{constructor(){super({pluginId:"tanstack-devtools-core"})}}const G=new jt;function Vt(n){const e={...n},a={...n},i={},c=l=>{let t=i[l];if(!t){if(!ft())return e[l];i[l]=t=B(e[l],{internal:!0}),delete e[l]}return t[0]()};for(const l in n)Object.defineProperty(a,l,{get:()=>c(l),enumerable:!0});const d=(l,t)=>{const r=i[l];if(r)return r[1](t);l in e&&(e[l]=Be(t,e[l]))};return[a,(l,t)=>{if(qt(l)){const r=mt(()=>Object.entries(Be(l,a)));ht(()=>{for(const[o,s]of r)d(o,()=>s)})}else d(l,t);return a}]}const Xe={width:null,height:null};function he(n){if(!n)return{...Xe};const{width:e,height:a}=n.getBoundingClientRect();return{width:e,height:a}}function Gt(n){const e=typeof n=="function",[a,i]=Vt(vt.context||e?Xe:he(n)),c=new ResizeObserver(([d])=>i(he(d.target)));return W(()=>c.disconnect()),e?Q(()=>{const d=n();d&&(i(he(d)),c.observe(d),W(()=>c.unobserve(d)))}):(c.observe(n),W(()=>c.unobserve(n))),a}var Wt=n=>{const[e,a]=B(!1),[i,c]=B(!1),d=L(()=>e()||i());let l=null;return W(()=>{l&&clearTimeout(l)}),{expanded:d,setForceExpand:c,hoverUtils:{enter:()=>{l&&(clearTimeout(l),l=null),a(!0)},leave:()=>{l=setTimeout(()=>{a(!1)},n.animationMs)}},animationMs:n.animationMs}},_e=yt(void 0),Kt=n=>{const e=Wt({animationMs:n.animationMs});return g(_e.Provider,{value:e,get children(){return n.children}})};function xe(){const n=Ge(_e);if(n===void 0)throw new Error("useDrawContext must be used within a DrawClientProvider");return n}var Ce=()=>{const n=Ge(ot);if(n===void 0)throw new Error("useDevtoolsShellContext must be used within a ShellContextProvider");return n};function Se(){const{settings:n,setSettings:e}=ee();return{theme:L(()=>n().theme),setTheme:i=>e({theme:i})}}var et=()=>{const{store:n,setStore:e}=Ce(),{setForceExpand:a}=xe(),i=L(()=>n.plugins),c=L(()=>n.state.activePlugins);return Q(()=>{c().length===0?a(!0):a(!1)}),{plugins:i,toggleActivePlugins:l=>{e(t=>{const o=t.state.activePlugins.includes(l)?t.state.activePlugins.filter(s=>s!==l):[...t.state.activePlugins,l];return o.length>dt?t:{...t,state:{...t.state,activePlugins:o}}})},activePlugins:c}},ue=()=>{const{store:n,setStore:e}=Ce();return{state:L(()=>n.state),setState:c=>{e(d=>({...d,state:{...d.state,...c}}))}}},ee=()=>{const{store:n,setStore:e}=Ce(),a=L(()=>n.settings);return{setSettings:c=>{e(d=>({...d,settings:{...d.settings,...c}}))},settings:a}},Jt=()=>{const{state:n,setState:e}=ue();return{persistOpen:L(()=>n().persistOpen),setPersistOpen:c=>{e({persistOpen:c})}}},tt=()=>{const{state:n,setState:e}=ue();return{height:L(()=>n().height),setHeight:c=>{e({height:c})}}},rt=(n,e=!0)=>{e?n.setAttribute("tabIndex","-1"):n.removeAttribute("tabIndex");for(const a of n.children)rt(a,e)},Zt=n=>{Q(()=>{const e=document.getElementById(ye);e&&rt(e,!n())})},Xt={colors:{black:"#000000",white:"#ffffff",darkGray:{600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{100:"#D1E9FF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{100:"#D1FADF",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",900:"#054F31"},red:{100:"#fee2e2",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c"},purple:{200:"#D9D6FE",800:"#4A1FB8"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif"}},border:{radius:{full:"9999px"}},size:{2:"calc(var(--tsrd-font-size) * 0.5)",3:"calc(var(--tsrd-font-size) * 0.75)",10:"calc(var(--tsrd-font-size) * 2.5)",48:"calc(var(--tsrd-font-size) * 12)"}},ze=n=>`${(n/1e3).toFixed(2)}s`,He=n=>{const{colors:e,font:a,size:i,border:c}=Xt,{fontFamily:d,size:l}=a,t=Qt,r=(o,s)=>n==="light"?o:s;return{seoTabContainer:t`
      padding: 0;
      margin: 0 auto;
      background: ${r(e.white,e.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:t`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${r(e.gray[200],e.gray[800])};
    `,seoTabSection:t`
      padding: 1.5rem;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoPreviewSection:t`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:t`
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${r(e.white,e.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${r("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:t`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${r(e.gray[700],e.gray[300])};
    `,seoPreviewImage:t`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${r("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:t`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${r(e.gray[900],e.gray[100])};
    `,seoPreviewDesc:t`
      color: ${r(e.gray[600],e.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:t`
      color: ${r(e.gray[500],e.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:t`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${r(e.red[500],e.red[400])};
    `,seoMissingTagsList:t`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:t`
      background: ${r(e.red[100],e.red[500]+"22")};
      color: ${r(e.red[700],e.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:t`
      color: ${r(e.green[700],e.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(o,s)=>t`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${o}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${s?"":"max-height: 90%;"}
      border-top: 1px solid ${r(e.gray[200],e.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:o=>t`
        visibility: ${o?"visible":"hidden"};
        height: ${o?"auto":"0"};
      `,devtoolsPanelContainerResizing:o=>o()?t`
          transition: none;
        `:t`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(o,s,u)=>o?t`
          pointer-events: auto;
          transform: translateY(0);
        `:t`
        pointer-events: none;
        transform: translateY(${u==="top"?-s:s}px);
      `,devtoolsPanel:t`
      display: flex;
      font-size: ${l.sm};
      font-family: ${d.sans};
      background-color: ${r(e.white,e.darkGray[700])};
      color: ${r(e.gray[900],e.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:o=>t`
      position: absolute;
      left: 0;
      ${o==="bottom"?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${r(e.gray[400],e.gray[500])};
      }
    `,mainCloseBtn:t`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${a.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${c.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${r(e.black,e.black)};
      }
    `,mainCloseBtnPosition:o=>t`
        ${o==="top-left"?`top: ${i[2]}; left: ${i[2]};`:""}
        ${o==="top-right"?`top: ${i[2]}; right: ${i[2]};`:""}
        ${o==="middle-left"?`top: 50%; left: ${i[2]}; transform: translateY(-50%);`:""}
        ${o==="middle-right"?`top: 50%; right: ${i[2]}; transform: translateY(-50%);`:""}
        ${o==="bottom-left"?`bottom: ${i[2]}; left: ${i[2]};`:""}
        ${o==="bottom-right"?`bottom: ${i[2]}; right: ${i[2]};`:""}
      `,mainCloseBtnAnimation:(o,s)=>o?t`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:s?t`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:t`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:t`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${r(e.gray[50],e.darkGray[900])};
      border-right: 1px solid ${r(e.gray[200],e.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${i[10]};
    `,tab:t`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${i[10]};
      cursor: pointer;
      font-size: ${l.sm};
      font-family: ${d.sans};
      color: ${r(e.gray[600],e.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.active {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${r(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${r(e.green[700],e.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${r(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${r(e.red[700],e.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${e.gray[300]};
      }
    `,tabContent:t`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:t`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:o=>t`
      width: ${o?i[48]:0};
      height: 100%;
      background-color: ${r(e.white,e.darkGray[900])};
      box-shadow: none;
      ${o?`border-right: 1px solid ${r(e.gray[200],e.gray[800])};`:""}
    `,pluginsTabDrawExpanded:t`
      width: ${i[48]};
      border-right: 1px solid ${r(e.gray[200],e.gray[800])};
    `,pluginsTabDrawTransition:o=>t`
        transition: width ${ze(o)} ease;
      `,pluginsTabSidebar:o=>t`
      width: ${i[48]};
      overflow-y: auto;
      transform: ${o?"translateX(0)":"translateX(-100%)"};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:o=>t`
        transition: transform ${ze(o)} ease;
      `,pluginsList:t`
      flex: 1;
      overflow-y: auto;
    `,pluginName:t`
      font-size: ${l.xs};
      font-family: ${d.sans};
      color: ${r(e.gray[600],e.gray[400])};
      padding: ${i[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        padding: ${i[2]};
      }
      &.active {
        background-color: ${r(e.gray[100],e.gray[800])};
        color: ${r(e.gray[900],e.gray[100])};
        border-left: 2px solid ${r(e.gray[900],e.gray[100])};
      }
      &.active:hover {
        background-color: ${r(e.gray[200],e.gray[700])};
      }
    `,pluginsTabContent:t`
      width: 100%;
      height: 100%;
      overflow-y: auto;

      &:not(:last-child) {
        border-right: 5px solid ${r(e.purple[200],e.purple[800])};
      }
    `,settingsGroup:t`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:t`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${r(e.gray[300],e.gray[600])};
      background-color: ${r(e.gray[50],e.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:t`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:t`
      display: flex;
      gap: 0.5rem;
    `,noPluginsFallback:t`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${r(e.gray[50],e.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:t`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:t`
      width: 64px;
      height: 64px;
      color: ${r(e.gray[400],e.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:t`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:t`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:t`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${r(e.white,e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:t`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:t`
      font-size: 0.875rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:t`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${r(e.gray[50],e.darkGray[900])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${r(e.gray[300],e.gray[600])};
        background: ${r(e.gray[100],e.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:t`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:t`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:t`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:t`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${r(e.green[600],e.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:t`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:t`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${r(e.red[600],e.red[400])};
    `,noPluginsEmptyState:t`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${r(e.white,e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:t`
      font-size: 0.875rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:t`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:t`
      font-size: 0.875rem;
      color: ${r(e.gray[700],e.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${r(e.gray[900],e.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:t`
      color: ${r(e.gray[400],e.gray[600])};
    `,pluginMarketplace:t`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${r("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1a1d23 0%, #13161a 100%)")};
      animation: fadeIn 0.3s ease;

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,pluginMarketplaceHeader:t`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${r(e.gray[200],e.gray[700])};
    `,pluginMarketplaceTitleRow:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:t`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:t`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:t`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${r(e.gray[400],e.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:t`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${r(e.gray[50],e.darkGray[900])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${r(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-family: ${d.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${r(e.gray[400],e.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${r(e.blue[500],e.blue[400])};
        background: ${r(e.white,e.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${r("rgba(59, 130, 246, 0.1)","rgba(96, 165, 250, 0.1)")};
      }
    `,pluginMarketplaceFilters:t`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:t`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:t`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${r(e.white,e.darkGray[700])};
      border: 2px solid ${r(e.gray[300],e.gray[600])};
      border-radius: 0.375rem;
      color: ${r(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[600])};
        border-color: ${r(e.gray[400],e.gray[500])};
        color: ${r(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:t`
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")} !important;
      border-color: ${r("#2563eb","#3b82f6")} !important;
      color: white !important;

      &:hover {
        background: ${r("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")} !important;
        border-color: ${r("#1d4ed8","#2563eb")} !important;
      }
    `,pluginMarketplaceSettingsButton:t`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${r(e.gray[100],e.darkGray[800])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${r(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${r(e.gray[200],e.darkGray[700])};
        border-color: ${r(e.gray[300],e.gray[600])};
        color: ${r(e.gray[900],e.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:t`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${r(e.white,e.darkGray[800])};
      border-left: 1px solid ${r(e.gray[200],e.gray[700])};
      box-shadow: -4px 0 12px ${r("rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.4)")};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: slideInRight 0.3s ease;

      @keyframes slideInRight {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
    `,pluginMarketplaceSettingsPanelHeader:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${r(e.gray[200],e.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:t`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:t`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${r(e.gray[600],e.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[700])};
        color: ${r(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:t`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:t`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: slideUp 0.4s ease;

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,pluginMarketplaceCard:t`
      background: ${r(e.white,e.darkGray[800])};
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${r("linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)")};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${r(e.gray[400],e.gray[500])};
        box-shadow: 0 8px 24px ${r("rgba(0,0,0,0.1)","rgba(0,0,0,0.4)")};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:t`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)")};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:t`
      flex: 1;
    `,pluginMarketplaceCardTitle:t`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${r(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:t`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:t`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:t`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:t`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:t`
      color: ${r(e.green[600],e.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:t`
      color: ${r(e.red[600],e.red[400])};
    `,pluginMarketplaceCardDocsLink:t`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${r(e.blue[600],e.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${r(e.blue[700],e.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:t`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:t`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${r(e.gray[100],e.darkGray[700])};
      border: 1px solid ${r(e.gray[300],e.gray[600])};
      border-radius: 0.25rem;
      color: ${r(e.gray[700],e.gray[300])};
    `,pluginMarketplaceCardImage:t`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:t`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${r(e.green[500],e.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:t`
      border-color: ${r(e.blue[500],e.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:t`
      border-color: ${r(e.green[500],e.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${r(e.green[500],e.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:t`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${r(e.green[600],e.green[400])};
      animation: statusFadeIn 0.3s ease;

      @keyframes statusFadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      svg {
        width: 18px;
        height: 18px;
        animation: iconPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      @keyframes iconPop {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `,pluginMarketplaceCardSpinner:t`
      width: 18px;
      height: 18px;
      border: 2px solid ${r(e.gray[200],e.gray[700])};
      border-top-color: ${r(e.blue[600],e.blue[400])};
      border-radius: 50%;
      animation: spin 0.8s linear infinite;

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,pluginMarketplaceCardStatusText:t`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:t`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${r(e.red[600],e.red[400])};
    `,pluginMarketplaceEmpty:t`
      padding: 3rem 2rem;
      text-align: center;
      background: ${r(e.white,e.darkGray[800])};
      border: 2px dashed ${r(e.gray[300],e.gray[700])};
      border-radius: 0.75rem;
      animation: fadeIn 0.3s ease;
    `,pluginMarketplaceEmptyText:t`
      font-size: 0.95rem;
      color: ${r(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:t`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:t`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${r(e.gray[50],e.darkGray[800])};
      border: 1px solid ${r(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${r(e.gray[100],e.darkGray[700])};
        border-color: ${r(e.gray[300],e.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:t`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:t`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${r(e.gray[700],e.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:t`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:t`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${r(e.gray[900],e.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:t`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceFeatureBanner:t`
      margin-top: 1rem;
      padding: 1.25rem 1.5rem;
      background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)")};
      border-radius: 0.75rem;
      border: 1px solid ${r(e.blue[400],e.blue[800])};
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `,pluginMarketplaceFeatureBannerContent:t`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,pluginMarketplaceFeatureBannerTitle:t`
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceFeatureBannerIcon:t`
      width: 24px;
      height: 24px;
      display: inline-flex;
    `,pluginMarketplaceFeatureBannerText:t`
      font-size: 0.95rem;
      color: ${r("rgba(255, 255, 255, 0.95)","rgba(255, 255, 255, 0.9)")};
      line-height: 1.5;
      margin: 0;
    `,pluginMarketplaceFeatureBannerButton:t`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: white;
      color: ${e.blue[600]};
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${r(e.gray[50],e.gray[100])};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
      }
    `,pluginMarketplaceFeatureBannerButtonIcon:t`
      width: 18px;
      height: 18px;
    `,pluginMarketplaceCardDisabled:t`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:t`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:t`
      background: ${r(e.green[100],e.green[900])};
      color: ${r(e.green[700],e.green[300])};
    `,pluginMarketplaceCardBadgeAdd:t`
      background: ${r(e.blue[100],e.blue[900])};
      color: ${r(e.blue[700],e.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:t`
      background: ${r(e.gray[100],e.gray[800])};
      color: ${r(e.gray[600],e.gray[400])};
    `,pluginMarketplaceButtonInstalled:t`
      opacity: 0.5;
    `,pluginNameAddMore:t`
      font-size: ${l.xs};
      font-family: ${d.sans};
      color: ${r(e.gray[600],e.gray[400])};
      padding: ${i[3]} ${i[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${r("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1f2937 0%, #111827 100%)")};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: sparkle 2s ease-in-out infinite;
        }
      }

      @keyframes sparkle {
        0%,
        100% {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        50% {
          opacity: 0.6;
          transform: scale(1.1) rotate(10deg);
        }
      }

      &:hover {
        background: ${r("linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)","linear-gradient(135deg, #374151 0%, #1f2937 100%)")};
        color: ${r(e.gray[900],e.gray[100])};
        border-left-color: ${r(e.blue[500],e.blue[400])};

        h3::before {
          animation: sparkle 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${r("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
        color: ${r(e.white,e.white)};
        border-left: 2px solid ${r(e.blue[600],e.blue[300])};
        box-shadow: 0 4px 12px
          ${r("rgba(59, 130, 246, 0.3)","rgba(96, 165, 250, 0.3)")};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${r("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")};
      }
    `}};function N(){const{theme:n}=Se(),[e,a]=B(He(n()));return Q(()=>{a(He(n()))}),e}var Fe="data:image/png;base64,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",_t=C('<button type=button aria-label="Open TanStack Devtools"><img alt="TanStack Devtools">'),er=({isOpen:n,setIsOpen:e,image:a=Fe})=>{const{settings:i}=ee(),c=N(),d=L(()=>Y(c().mainCloseBtn,c().mainCloseBtnPosition(i().position),c().mainCloseBtnAnimation(n(),i().hideUntilHover)));return g(E,{get when(){return!i().triggerHidden},get children(){var l=_t(),t=l.firstChild;return l.$$click=()=>e(!n()),j(t,"src",a||Fe),w(()=>p(l,d())),l}})};J(["click"]);var tr=C("<div>"),rr=n=>{const e=N(),{height:a}=tt(),{settings:i}=ee(),c=be();return(()=>{var d=tr();return j(d,"id",ye),m(d,g(Kt,{animationMs:400,get children(){return n.children}})),w(l=>{var t=c().pipWindow?"100vh":a()+"px",r=Y(e().devtoolsPanelContainer(i().panelLocation,!!c().pipWindow),e().devtoolsPanelContainerAnimation(n.isOpen(),a(),i().panelLocation),e().devtoolsPanelContainerVisibility(n.isOpen()),e().devtoolsPanelContainerResizing(n.isResizing));return t!==l.e&&((l.e=t)!=null?d.style.setProperty("height",t):d.style.removeProperty("height")),r!==l.t&&p(d,l.t=r),l},{e:void 0,t:void 0}),d})()},Ne=C("<div>"),nr=n=>{const e=N(),{settings:a}=ee();return(()=>{var i=Ne(),c=n.ref;return typeof c=="function"?se(c,i):n.ref=i,m(i,(()=>{var d=K(()=>!!n.handleDragStart);return()=>d()?(()=>{var l=Ne();return ge(l,"mousedown",n.handleDragStart,!0),w(()=>p(l,e().dragHandle(a().panelLocation))),l})():null})(),null),m(i,()=>n.children,null),w(()=>p(i,e().devtoolsPanel)),i})()};J(["mousedown"]);var fe=C("<div>"),ar=C("<div><div></div>Final shortcut is: "),ir=C("<div><div>"),or=()=>{const{setSettings:n,settings:e}=ee(),a=N(),i=L(()=>e().openHotkey),c=["Control","Alt","Meta","Shift"],d=l=>()=>{if(i().includes(l))return n({openHotkey:i().filter(o=>o!==l)});const t=i().filter(o=>c.includes(o)),r=i().filter(o=>!c.includes(o));n({openHotkey:[...t,l,...r]})};return g(Ke,{withPadding:!0,get children(){return[g(te,{get children(){return[g(re,{get children(){return[g(ne,{get children(){return g(Pt,{})}}),"General"]}}),g(ae,{children:"Configure general behavior of the devtools panel."}),(()=>{var l=fe();return m(l,g(ie,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>n({defaultOpen:!e().defaultOpen}),get checked(){return e().defaultOpen}}),null),m(l,g(ie,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>n({hideUntilHover:!e().hideUntilHover}),get checked(){return e().hideUntilHover}}),null),m(l,g(ie,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>n({triggerHidden:!e().triggerHidden}),get checked(){return e().triggerHidden}}),null),m(l,g(pe,{label:"Trigger Image",description:"Specify the URL of the image to use for the trigger",get value(){return e().triggerImage},placeholder:"Default TanStack Logo",onChange:t=>n({triggerImage:t})}),null),m(l,g(me,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return e().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:t=>n({theme:t})}),null),w(()=>p(l,a().settingsGroup)),l})()]}}),g(te,{get children(){return[g(re,{get children(){return[g(ne,{get children(){return g(Et,{})}}),"URL Configuration"]}}),g(ae,{children:"Control when devtools are available based on URL parameters."}),(()=>{var l=fe();return m(l,g(ie,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return e().requireUrlFlag},onChange:t=>n({requireUrlFlag:t})}),null),m(l,g(E,{get when(){return e().requireUrlFlag},get children(){var t=fe();return m(t,g(pe,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return e().urlFlag},onChange:r=>n({urlFlag:r})})),w(()=>p(t,a().conditionalSetting)),t}}),null),w(()=>p(l,a().settingsGroup)),l})()]}}),g(te,{get children(){return[g(re,{get children(){return[g(ne,{get children(){return g(Tt,{})}}),"Keyboard"]}}),g(ae,{children:"Customize keyboard shortcuts for quick access."}),(()=>{var l=ar(),t=l.firstChild,r=t.nextSibling;return m(t,g(E,{keyed:!0,get when(){return i()},get children(){return[g(oe,{variant:"success",get onclick(){return d("Shift")},get outline(){return!i().includes("Shift")},children:"Shift"}),g(oe,{variant:"success",get onclick(){return d("Alt")},get outline(){return!i().includes("Alt")},children:"Alt"}),g(oe,{variant:"success",get onclick(){return d("Meta")},get outline(){return!i().includes("Meta")},children:"Meta"}),g(oe,{variant:"success",get onclick(){return d("Control")},get outline(){return!i().includes("Control")},children:"Control"})]}})),m(l,g(pe,{label:"Hotkey to open/close devtools",description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return i().filter(o=>!["Shift","Meta","Alt","Ctrl"].includes(o)).join("+")},onChange:o=>{const s=v=>{if(v.length===1)return[Ae(v)];const h=[];for(const y of v){const f=Ae(y);h.includes(f)||h.push(f)}return h},u=o.split("+").flatMap(v=>s(v)).filter(Boolean);return n({openHotkey:[...i().filter(v=>["Shift","Meta","Alt","Ctrl"].includes(v)),...u]})}}),r),m(l,()=>i().join(" + "),null),w(o=>{var s=a().settingsGroup,u=a().settingsModifiers;return s!==o.e&&p(l,o.e=s),u!==o.t&&p(t,o.t=u),o},{e:void 0,t:void 0}),l})()]}}),g(te,{get children(){return[g(re,{get children(){return[g(ne,{get children(){return g(It,{})}}),"Position"]}}),g(ae,{children:"Adjust the position of the trigger button and devtools panel."}),(()=>{var l=ir(),t=l.firstChild;return m(t,g(me,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return e().position},onChange:r=>n({position:r})}),null),m(t,g(me,{label:"Panel Position",get value(){return e().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:r=>n({panelLocation:r})}),null),w(r=>{var o=a().settingsGroup,s=a().settingRow;return o!==r.e&&p(l,r.e=o),s!==r.t&&p(t,r.t=s),r},{e:void 0,t:void 0}),l})()]}})]}})},sr=n=>{if(n.status==="installing")return"Installing...";if(n.status==="success")return"Installed!";if(n.status==="error")return"Error";switch(n.actionType){case"install":return"Install";case"install-devtools":return"Install Devtools";case"add-to-devtools":return"Add to Devtools";case"requires-package":return`Requires ${n.requiredPackageName}`;case"wrong-framework":return"Different Framework";case"already-installed":return"Already Installed";case"bump-version":return"Bump Version";case"version-mismatch":return"Version Mismatch";default:return"Install"}},lr=n=>n.actionType==="requires-package"||n.actionType==="wrong-framework"||n.actionType==="version-mismatch"?"danger":n.actionType==="bump-version"?"warning":n.actionType==="already-installed"?"secondary":"primary",cr=(n,e)=>{const a=e(),i=a.pluginMarketplaceCardBadge;switch(n.actionType){case"install":case"install-devtools":return`${i} ${a.pluginMarketplaceCardBadgeInstall}`;case"add-to-devtools":return`${i} ${a.pluginMarketplaceCardBadgeAdd}`;case"already-installed":return`${i} ${a.pluginMarketplaceCardBadgeAdd}`;case"bump-version":return`${i} ${a.pluginMarketplaceCardBadgeRequires}`;case"version-mismatch":return`${i} ${a.pluginMarketplaceCardBadgeRequires}`;case"requires-package":case"wrong-framework":return`${i} ${a.pluginMarketplaceCardBadgeRequires}`;default:return i}},dr=n=>{switch(n.actionType){case"install":case"install-devtools":return"Available";case"add-to-devtools":return"Installed";case"already-installed":return"Active";case"version-mismatch":return"Incompatible";case"requires-package":return"Unavailable";case"wrong-framework":return"Other Framework";default:return""}},gr=C("<div>New"),ur=C("<img>"),pr=C("<span>✓ v<!> • Min v"),mr=C("<p>"),hr=C('<a target=_blank rel="noopener noreferrer">Documentation '),ve=C("<div>"),fr=C("<div><span></span><div></div><div><h3></h3><p></p><p>"),vr=C("<span>⚠️ v<!> • Requires v<!>+"),Ue=C("<span>"),br=C("<span>Installing..."),yr=C("<span>Installed!"),kr=n=>{const e=N(),{card:a}=n;return(()=>{var i=fr(),c=i.firstChild,d=c.nextSibling,l=d.nextSibling,t=l.firstChild,r=t.nextSibling,o=r.nextSibling;return i.style.setProperty("position","relative"),m(i,g(E,{get when(){return a.metadata?.isNew},get children(){var s=gr();return w(()=>p(s,e().pluginMarketplaceNewBanner)),s}}),c),m(c,()=>dr(a)),m(d,g(E,{get when(){return a.metadata?.logoUrl},get fallback(){return g(Ht,{})},get children(){var s=ur();return w(u=>{var v=a.metadata?.logoUrl,h=a.metadata?.title||a.devtoolsPackage,y=e().pluginMarketplaceCardImage;return v!==u.e&&j(s,"src",u.e=v),h!==u.t&&j(s,"alt",u.t=h),y!==u.a&&p(s,u.a=y),u},{e:void 0,t:void 0,a:void 0}),s}})),m(t,()=>a.metadata?.title||a.devtoolsPackage),m(r,()=>a.devtoolsPackage),m(o,()=>a.actionType==="requires-package"?`Requires ${a.requiredPackageName}`:a.actionType==="wrong-framework"?"For different framework projects":a.actionType==="already-installed"?"Active in your devtools":a.actionType==="version-mismatch"?a.versionInfo?.reason||"Version incompatible":a.metadata?.description||`For ${a.requiredPackageName}`),m(l,g(E,{get when(){return a.versionInfo},get children(){var s=mr();return m(s,g(E,{get when(){return a.versionInfo?.satisfied},get fallback(){return(()=>{var u=vr(),v=u.firstChild,h=v.nextSibling,y=h.nextSibling,f=y.nextSibling;return f.nextSibling,m(u,()=>a.versionInfo?.current,h),m(u,()=>a.versionInfo?.required,f),w(()=>p(u,e().pluginMarketplaceCardVersionUnsatisfied)),u})()},get children(){var u=pr(),v=u.firstChild,h=v.nextSibling;return h.nextSibling,m(u,()=>a.versionInfo?.current,h),m(u,()=>a.versionInfo?.required,null),w(()=>p(u,e().pluginMarketplaceCardVersionSatisfied)),u}})),w(()=>p(s,e().pluginMarketplaceCardVersionInfo)),s}}),null),m(l,g(E,{get when(){return a.metadata?.docsUrl},get children(){var s=hr();return s.firstChild,m(s,g(Ft,{}),null),w(u=>{var v=a.metadata?.docsUrl,h=e().pluginMarketplaceCardDocsLink;return v!==u.e&&j(s,"href",u.e=v),h!==u.t&&p(s,u.t=h),u},{e:void 0,t:void 0}),s}}),null),m(l,g(E,{get when(){return a.metadata?.tags&&a.metadata.tags.length>0},get children(){var s=ve();return m(s,g(V,{get each(){return a.metadata?.tags},children:u=>(()=>{var v=Ue();return m(v,u),w(()=>p(v,e().pluginMarketplaceCardTag)),v})()})),w(()=>p(s,e().pluginMarketplaceCardTags)),s}}),null),m(i,g(E,{get when(){return a.status==="idle"},get fallback(){return(()=>{var s=ve();return m(s,g(E,{get when(){return a.status==="installing"},get children(){return[(()=>{var u=ve();return w(()=>p(u,e().pluginMarketplaceCardSpinner)),u})(),(()=>{var u=br();return w(()=>p(u,e().pluginMarketplaceCardStatusText)),u})()]}}),null),m(s,g(E,{get when(){return a.status==="success"},get children(){return[g(Nt,{}),(()=>{var u=yr();return w(()=>p(u,e().pluginMarketplaceCardStatusText)),u})()]}}),null),m(s,g(E,{get when(){return a.status==="error"},get children(){return[g(Ut,{}),(()=>{var u=Ue();return m(u,()=>a.error||"Failed to install"),w(()=>p(u,e().pluginMarketplaceCardStatusTextError)),u})()]}}),null),w(()=>p(s,e().pluginMarketplaceCardStatus)),s})()},get children(){return g(oe,{get variant(){return lr(a)},onClick:()=>n.onAction(a),get disabled(){return a.status!=="idle"||a.actionType==="requires-package"||a.actionType==="wrong-framework"||a.actionType==="already-installed"||a.actionType==="version-mismatch"},get class(){return K(()=>a.actionType==="already-installed")()?e().pluginMarketplaceButtonInstalled:""},get children(){return sr(a)}})}}),null),w(s=>{var u=e().pluginMarketplaceCard,v={[e().pluginMarketplaceCardDisabled]:!a.isCurrentFramework&&a.actionType!=="already-installed",[e().pluginMarketplaceCardFeatured]:!!a.metadata?.featured&&a.actionType!=="already-installed",[e().pluginMarketplaceCardActive]:a.actionType==="already-installed"},h=cr(a,e),y=e().pluginMarketplaceCardIcon,f=!!a.metadata?.logoUrl,k=e().pluginMarketplaceCardHeader,x=e().pluginMarketplaceCardTitle,P=e().pluginMarketplaceCardPackageBadge,z=e().pluginMarketplaceCardDescriptionText;return u!==s.e&&p(i,s.e=u),s.t=ke(i,v,s.t),h!==s.a&&p(c,s.a=h),y!==s.o&&p(d,s.o=y),f!==s.i&&d.classList.toggle("custom-logo",s.i=f),k!==s.n&&p(l,s.n=k),x!==s.s&&p(t,s.s=x),P!==s.h&&p(r,s.h=P),z!==s.r&&p(o,s.r=z),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),i})()},wr=C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">'),xr=C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect x=2 y=4 width=20 height=16 rx=2></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">'),Cr=C(`<div><div><h4><span></span>Want to be featured here?</h4><p>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"><span></span>Contact Us`),Sr=C("<div>"),Mr=C("<div><div><div><div></div><h3>"),Ar=()=>wr(),Pr=()=>xr(),Er=n=>{const e=N();return(()=>{var a=Mr(),i=a.firstChild,c=i.firstChild,d=c.firstChild,l=d.nextSibling;return ge(i,"click",n.onToggleCollapse,!0),m(d,g(zt,{})),m(l,()=>n.section.displayName),m(a,g(E,{get when(){return!n.isCollapsed()},get children(){return[g(E,{get when(){return n.section.id==="featured"},get children(){var t=Cr(),r=t.firstChild,o=r.firstChild,s=o.firstChild,u=o.nextSibling,v=u.nextSibling,h=v.firstChild;return m(s,g(Ar,{})),m(h,g(Pr,{})),w(y=>{var f=e().pluginMarketplaceFeatureBanner,k=e().pluginMarketplaceFeatureBannerContent,x=e().pluginMarketplaceFeatureBannerTitle,P=e().pluginMarketplaceFeatureBannerIcon,z=e().pluginMarketplaceFeatureBannerText,$=e().pluginMarketplaceFeatureBannerButton,M=e().pluginMarketplaceFeatureBannerButtonIcon;return f!==y.e&&p(t,y.e=f),k!==y.t&&p(r,y.t=k),x!==y.a&&p(o,y.a=x),P!==y.o&&p(s,y.o=P),z!==y.i&&p(u,y.i=z),$!==y.n&&p(v,y.n=$),M!==y.s&&p(h,y.s=M),y},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),t}}),(()=>{var t=Sr();return m(t,g(V,{get each(){return n.section.cards},children:r=>g(kr,{card:r,get onAction(){return n.onCardAction}})})),w(()=>p(t,e().pluginMarketplaceGrid)),t})()]}}),null),w(t=>{var r=e().pluginMarketplaceSection,o=e().pluginMarketplaceSectionHeader,s=e().pluginMarketplaceSectionHeaderLeft,u=e().pluginMarketplaceSectionChevron,v={[e().pluginMarketplaceSectionChevronCollapsed]:n.isCollapsed()},h=e().pluginMarketplaceSectionTitle;return r!==t.e&&p(a,t.e=r),o!==t.t&&p(i,t.t=o),s!==t.a&&p(c,t.a=s),u!==t.o&&p(d,t.o=u),t.i=ke(d,v,t.i),h!==t.n&&p(l,t.n=h),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),a})()};J(["click"]);var Tr=C("<div><div><h3>Marketplace Settings</h3><button></button></div><div>"),Ir=n=>{const e=N();return g(E,{get when(){return n.isOpen()},get children(){var a=Tr(),i=a.firstChild,c=i.firstChild,d=c.nextSibling,l=i.nextSibling;return ge(d,"click",n.onClose,!0),m(d,g(Bt,{})),m(l,g(ie,{label:"Show active plugins",description:"Display installed plugins in a separate section",get checked(){return n.showActivePlugins()},onChange:t=>n.setShowActivePlugins(t)})),w(t=>{var r=e().pluginMarketplaceSettingsPanel,o=e().pluginMarketplaceSettingsPanelHeader,s=e().pluginMarketplaceSettingsPanelTitle,u=e().pluginMarketplaceSettingsPanelClose,v=e().pluginMarketplaceSettingsPanelContent;return r!==t.e&&p(a,t.e=r),o!==t.t&&p(i,t.t=o),s!==t.a&&p(c,t.a=s),u!==t.o&&p(d,t.o=u),v!==t.i&&p(l,t.i=v),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),a}})};J(["click"]);var Br=C("<div>"),Dr=C("<button>"),Lr=n=>{const e=N();return g(E,{get when(){return n.tags().length>0},get children(){var a=Br();return m(a,g(V,{get each(){return n.tags()},children:i=>(()=>{var c=Dr();return c.$$click=()=>n.onToggleTag(i),m(c,i),w(d=>{var l=e().pluginMarketplaceTagButton,t={[e().pluginMarketplaceTagButtonActive]:n.selectedTags().has(i)};return l!==d.e&&p(c,d.e=l),d.t=ke(c,t,d.t),d},{e:void 0,t:void 0}),c})()})),w(()=>p(a,e().pluginMarketplaceTagsContainer)),a}})};J(["click"]);var zr=C('<div><div><h2>Plugin Marketplace</h2><div><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer'),Hr=n=>{const e=N();return(()=>{var a=zr(),i=a.firstChild,c=i.firstChild,d=c.nextSibling,l=d.firstChild,t=l.firstChild,r=l.nextSibling,o=i.nextSibling;return d.style.setProperty("display","flex"),d.style.setProperty("align-items","center"),m(l,g(Dt,{}),t),t.$$input=s=>n.onSearchInput(s.currentTarget.value),ge(r,"click",n.onSettingsClick,!0),m(r,g(Lt,{})),m(a,g(Lr,{get tags(){return n.tags},get selectedTags(){return n.selectedTags},get onToggleTag(){return n.onToggleTag}}),null),w(s=>{var u=e().pluginMarketplaceHeader,v=e().pluginMarketplaceTitleRow,h=e().pluginMarketplaceTitle,y=e().pluginMarketplaceSearchWrapper,f=e().pluginMarketplaceSearch,k=e().pluginMarketplaceSettingsButton,x=e().pluginMarketplaceDescription;return u!==s.e&&p(a,s.e=u),v!==s.t&&p(i,s.t=v),h!==s.a&&p(c,s.a=h),y!==s.o&&p(l,s.o=y),f!==s.i&&p(t,s.i=f),k!==s.n&&p(r,s.n=k),x!==s.s&&p(o,s.s=x),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),w(()=>t.value=n.searchInput()),a})()};J(["input","click"]);var Qe=["react","solid","vue","svelte","angular"],Fr={"@tanstack/react-query-devtools":{packageName:"@tanstack/react-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/react-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/solid-query-devtools":{packageName:"@tanstack/solid-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/solid-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/react-router-devtools":{packageName:"@tanstack/react-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","routing","navigation"]},"@tanstack/solid-router-devtools":{packageName:"@tanstack/solid-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/solid-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","routing","navigation"]},"@tanstack/react-form-devtools":{packageName:"@tanstack/react-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/react-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","forms","validation"]},"@tanstack/solid-form-devtools":{packageName:"@tanstack/solid-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/solid-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",isNew:!0,framework:"solid",tags:["TanStack","forms","validation"]},"@tanstack/react-pacer-devtools":{packageName:"@tanstack/react-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/react-pacer",minVersion:"0.16.4"},author:"TanStack",framework:"react",isNew:!0,tags:["TanStack"]},"@tanstack/solid-pacer-devtools":{packageName:"@tanstack/solid-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/solid-pacer",minVersion:"0.14.4"},author:"TanStack",framework:"solid",isNew:!0,tags:["TanStack"]},"@dimano/ts-devtools-plugin-prefetch-heatmap":{packageName:"@dimano/ts-devtools-plugin-prefetch-heatmap",title:"Prefetch Heatmap",description:"Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginImport:{importName:"registerPrefetchHeatmapPlugin",type:"function"},pluginId:"prefetch-heatmap",logoUrl:"https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png",docsUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin",repoUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap",author:"Dimitris Anoudis (@dimitrianoudi)",framework:"react",isNew:!0,tags:["Router","Prefetch","Analytics","Overlay","TanStack"]}};function Nr(){return Object.values(Fr)}function de(n){if(!n)return null;const e=n.replace(/^[v^~]/,"").split("-")[0]?.split("+")[0];if(!e)return null;const a=e.split(".");if(a.length<2)return null;const i=parseInt(a[0]??"0",10),c=parseInt(a[1]??"0",10),d=parseInt(a[2]??"0",10);return isNaN(i)||isNaN(c)||isNaN(d)?null:{major:i,minor:c,patch:d,raw:n}}function nt(n,e){return n.major!==e.major?n.major-e.major:n.minor!==e.minor?n.minor-e.minor:n.patch-e.patch}function Ur(n,e){const a=de(n),i=de(e);return!a||!i?!0:nt(a,i)>=0}function Qr(n,e){const a=de(n),i=de(e);return!a||!i?!0:nt(a,i)<=0}function qr(n,e,a){return!e&&!a?{satisfied:!0}:e&&!Ur(n,e)?{satisfied:!1,reason:`Requires v${e} or higher (current: v${n})`}:a&&!Qr(n,a)?{satisfied:!1,reason:`Requires v${a} or lower (current: v${n})`}:{satisfied:!0}}var qe=(n,e)=>{const a={...n.dependencies,...n.devDependencies},i={react:["react","react-dom"],vue:["vue","@vue/core"],solid:["solid-js"],svelte:["svelte"],angular:["@angular/core"]};for(const c of e){const d=i[c];if(d&&d.some(l=>a[l]))return c}return"unknown"},Rr=(n,e,a,i,c)=>{if(c)return Array.from(n).some(t=>{const r=t.toLowerCase(),o=c.toLowerCase();return r.startsWith(o)||r.includes(o)});if(n.has(e))return!0;const d=a.toLowerCase().split(/[-_/@]/).filter(t=>t.length>0),l=i.toLowerCase();return Array.from(n).some(t=>{const r=t.toLowerCase();if(r.includes(a.toLowerCase()))return!0;const o=d.filter(s=>r.includes(s));return!!(o.length>=2||r.includes(l)&&o.length>=1)})},Re=(n,e,a,i)=>{const c={...n.dependencies,...n.devDependencies},d=[];return Nr().forEach(t=>{const r=t.packageName,o=t.framework===e||t.framework==="other",s=t.requires?.packageName,u=s?!!c[s]:!1,v=!!c[r];let h;if(u&&t.requires){const x=s?c[s]:void 0;if(x){const P=qr(x,t.requires.minVersion,t.requires.maxVersion);h={current:x,required:t.requires.minVersion,satisfied:P.satisfied,reason:P.reason}}}const y=Rr(a,r,t.packageName,t.framework,t.pluginId);let f;o?t.requires&&!u?f="requires-package":h&&!h.satisfied?f="bump-version":v&&y?f="already-installed":v&&!y?f="add-to-devtools":!v&&t.requires&&u?f="install-devtools":f="install":f="wrong-framework";const k=i.find(x=>x.devtoolsPackage===r);d.push({requiredPackageName:s||"",devtoolsPackage:r,framework:t.framework,hasPackage:u,hasDevtools:v,isRegistered:y,actionType:f,status:k?.status||"idle",error:k?.error,isCurrentFramework:o,metadata:t,versionInfo:h})}),d},Oe=n=>{const e=[],a=n.filter(d=>d.metadata?.featured&&d.actionType!=="already-installed"&&d.isCurrentFramework);e.push({id:"featured",displayName:"⭐ Featured",cards:a});const i=n.filter(d=>d.actionType==="already-installed"&&d.isRegistered);i.length>0&&e.push({id:"active",displayName:"✓ Active Plugins",cards:i});const c=n.filter(d=>d.isCurrentFramework&&d.actionType!=="already-installed"&&!d.metadata?.featured);return c.length>0&&e.push({id:"available",displayName:"Available Plugins",cards:c}),e},Or=C("<div><p>"),$r=C("<div>"),$e=()=>{const n=N(),{plugins:e}=et(),[a,i]=B([]),[c,d]=B(null),[l,t]=B(""),[r,o]=B(""),[s,u]=B(new Set),[v,h]=B(!0),[y,f]=B(new Set),[k,x]=B(!1);let P;const z=b=>{t(b),P&&clearTimeout(P),P=setTimeout(()=>{o(b)},300)},$=b=>{u(A=>{const S=new Set(A);return S.has(b)?S.delete(b):S.add(b),S})},M=(b,A)=>{if(!A)return!0;const S=A.toLowerCase();return b.devtoolsPackage.toLowerCase().includes(S)||b.requiredPackageName.toLowerCase().includes(S)||b.framework.toLowerCase().includes(S)},D=()=>{const b=r(),A=v(),S=y(),T=c();if(!T)return[];const I=qe(T,Qe),H=new Set(e()?.map(F=>F.id||"")||[]),X=Re(T,I,H,a().flatMap(F=>F.cards));let U=Oe(X);return A||(U=U.filter(F=>F.id!=="active")),S.size>0&&(U=U.map(F=>({...F,cards:F.cards.filter(le=>le.metadata?.tags?le.metadata.tags.some(it=>S.has(it)):!1)})).filter(F=>F.cards.length>0)),b?U.map(F=>({...F,cards:F.cards.filter(le=>M(le,b))})).filter(F=>F.cards.length>0):U};We(()=>{const b=G.on("package-json-read",I=>{d(I.payload.packageJson),O(I.payload.packageJson)}),A=G.on("package-json-updated",I=>{d(I.payload.packageJson),O(I.payload.packageJson)}),S=G.on("devtools-installed",I=>{i(H=>H.map(X=>({...X,cards:X.cards.map(U=>U.devtoolsPackage===I.payload.packageName?{...U,status:I.payload.success?"success":"error",error:I.payload.error}:U)})))}),T=G.on("plugin-added",I=>{if(i(H=>H.map(X=>({...X,cards:X.cards.map(U=>U.devtoolsPackage===I.payload.packageName?{...U,status:I.payload.success?"success":"error",error:I.payload.error}:U)}))),I.payload.success){const H=c();H&&O(H)}});W(()=>{b(),A(),S(),T()}),G.emit("mounted",void 0)});const O=b=>{if(!b)return;const A=qe(b,Qe),S=new Set(e()?.map(H=>H.id||"")||[]),T=Re(b,A,S,a().flatMap(H=>H.cards)),I=Oe(T);i(I)},q=b=>{if(!(b.actionType==="requires-package"||b.actionType==="wrong-framework"||b.actionType==="already-installed"||b.actionType==="version-mismatch")){if(i(A=>A.map(S=>({...S,cards:S.cards.map(T=>T.devtoolsPackage===b.devtoolsPackage?{...T,status:"installing"}:T)}))),b.actionType==="bump-version"){G.emit("bump-package-version",{packageName:b.requiredPackageName,devtoolsPackage:b.devtoolsPackage,pluginName:b.metadata?.title||b.devtoolsPackage,minVersion:b.metadata?.requires?.minVersion,pluginImport:b.metadata?.pluginImport});return}if(b.actionType==="add-to-devtools"){G.emit("add-plugin-to-devtools",{packageName:b.devtoolsPackage,pluginName:b.metadata?.title??b.devtoolsPackage,pluginImport:b.metadata?.pluginImport});return}G.emit("install-devtools",{packageName:b.devtoolsPackage,pluginName:b.metadata?.title??b.devtoolsPackage,pluginImport:b.metadata?.pluginImport})}},R=()=>{const b=new Set;return a().forEach(A=>{(A.id==="featured"||A.id==="available")&&A.cards.forEach(S=>{S.metadata?.tags&&S.metadata.tags.forEach(T=>b.add(T))})}),Array.from(b).sort()},Z=b=>{f(A=>{const S=new Set(A);return S.has(b)?S.delete(b):S.add(b),S})};return(()=>{var b=$r();return m(b,g(Ir,{isOpen:k,onClose:()=>x(!1),showActivePlugins:v,setShowActivePlugins:h}),null),m(b,g(Hr,{searchInput:l,onSearchInput:z,onSettingsClick:()=>x(!k()),tags:R,selectedTags:y,onToggleTag:Z}),null),m(b,g(E,{get when(){return D().length>0},get children(){return g(V,{get each(){return D()},children:A=>g(Er,{section:A,isCollapsed:()=>s().has(A.id),onToggleCollapse:()=>$(A.id),onCardAction:q})})}}),null),m(b,g(E,{get when(){return D().length===0},get children(){var A=Or(),S=A.firstChild;return m(S,(()=>{var T=K(()=>!!r());return()=>T()?`No plugins found matching "${r()}"`:"No additional plugins available. You have all compatible devtools installed and registered!"})()),w(T=>{var I=n().pluginMarketplaceEmpty,H=n().pluginMarketplaceEmptyText;return I!==T.e&&p(A,T.e=I),H!==T.t&&p(S,T.t=H),T},{e:void 0,t:void 0}),A}}),null),w(()=>p(b,n().pluginMarketplace)),b})()},Yr=C("<div><div><div><div></div><div><h3>Add More"),jr=C("<div><h3>"),Vr=C("<div>"),Gr=()=>{const{plugins:n,activePlugins:e,toggleActivePlugins:a}=et(),{expanded:i,hoverUtils:c,animationMs:d,setForceExpand:l}=xe(),[t,r]=B(new Map),[o,s]=B(!1),u=N(),{theme:v}=Se(),h=L(()=>n()?.length&&n().length>0);Q(()=>{l(o())}),Q(()=>{n()?.filter(x=>e().includes(x.id))?.forEach(x=>{const P=t().get(x.id);P&&x.render(P,v())})});const y=()=>s(!o()),f=k=>{o()&&s(!1),a(k)};return g(E,{get when(){return h()},get fallback(){return g($e,{})},get children(){var k=Yr(),x=k.firstChild,P=x.firstChild,z=P.firstChild,$=z.nextSibling;return x.addEventListener("mouseleave",()=>{o()||c.leave()}),x.addEventListener("mouseenter",()=>c.enter()),m(z,g(V,{get each(){return n()},children:M=>{let D;Q(()=>{D&&(typeof M.name=="string"?D.textContent=M.name:M.name(D,v()))});const O=L(()=>e().includes(M.id));return(()=>{var q=jr(),R=q.firstChild;q.$$click=()=>f(M.id);var Z=D;return typeof Z=="function"?se(Z,R):D=R,w(b=>{var A=Y(u().pluginName,{active:O()}),S=`${lt}-${M.id}`;return A!==b.e&&p(q,b.e=A),S!==b.t&&j(R,"id",b.t=S),b},{e:void 0,t:void 0}),q})()}})),$.$$click=y,m(k,g(E,{get when(){return o()},get fallback(){return g(V,{get each(){return e()},children:M=>(()=>{var D=Vr();return se(O=>{r(q=>{const R=new Map(q);return R.set(M,O),R})},D),j(D,"id",`${ct}-${M}`),w(()=>p(D,u().pluginsTabContent)),D})()})},get children(){return g($e,{})}}),null),w(M=>{var D=u().pluginsTabPanel,O=Y(u().pluginsTabDraw(i()),{[u().pluginsTabDraw(i())]:i()},u().pluginsTabDrawTransition(d)),q=Y(u().pluginsTabSidebar(i()),u().pluginsTabSidebarTransition(d)),R=u().pluginsList,Z=Y(u().pluginNameAddMore,{active:o()});return D!==M.e&&p(k,M.e=D),O!==M.t&&p(x,M.t=O),q!==M.a&&p(P,M.a=q),R!==M.o&&p(z,M.o=R),Z!==M.i&&p($,M.i=Z),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),k}})};J(["click"]);function Wr(n,e={}){const{attributes:a=!0,childList:i=!0,subtree:c=!0,observeTitle:d=!0}=e;We(()=>{const l=new MutationObserver(r=>{for(const o of r)if(o.type==="childList")o.addedNodes.forEach(s=>n({kind:"added",node:s},o)),o.removedNodes.forEach(s=>n({kind:"removed",node:s},o));else if(o.type==="attributes"){const s=o.target;n({kind:"attr",target:s,name:o.attributeName,oldValue:o.oldValue??null},o)}else o.target.parentNode&&o.target.parentNode.tagName.toLowerCase()==="title"&&n({kind:"title",title:document.title},o)});l.observe(document.head,{childList:i,attributes:a,subtree:c,attributeOldValue:a,characterData:!0,characterDataOldValue:!1});let t;if(d){const r=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));t=new MutationObserver(()=>{n({kind:"title",title:document.title})}),t.observe(r,{childList:!0,characterData:!0,subtree:!0})}W(()=>{l.disconnect(),t?.disconnect()})})}var Kr=C("<div><div> Preview</div><div></div><div></div><div>"),Jr=C("<img alt=Preview>"),Zr=C("<div>No Image"),Ye=C("<div>"),Xr=C("<div><strong>Missing tags for <!>:</strong><ul>"),_r=C("<li>"),je=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function en(n){const e=N();return(()=>{var a=Kr(),i=a.firstChild,c=i.firstChild,d=i.nextSibling,l=d.nextSibling,t=l.nextSibling;return m(i,()=>n.network,c),m(a,(()=>{var r=K(()=>!!n.meta.image);return()=>r()?(()=>{var o=Jr();return w(s=>{var u=n.meta.image,v=e().seoPreviewImage;return u!==s.e&&j(o,"src",s.e=u),v!==s.t&&p(o,s.t=v),s},{e:void 0,t:void 0}),o})():(()=>{var o=Zr();return o.style.setProperty("background","#222"),o.style.setProperty("color","#888"),o.style.setProperty("display","flex"),o.style.setProperty("align-items","center"),o.style.setProperty("justify-content","center"),o.style.setProperty("min-height","80px"),o.style.setProperty("width","100%"),w(()=>p(o,e().seoPreviewImage)),o})()})(),d),m(d,()=>n.meta.title||"No Title"),m(l,()=>n.meta.description||"No Description"),m(t,()=>n.meta.url||window.location.href),w(r=>{var o=e().seoPreviewCard,s=n.color,u=e().seoPreviewHeader,v=n.color,h=e().seoPreviewTitle,y=e().seoPreviewDesc,f=e().seoPreviewUrl;return o!==r.e&&p(a,r.e=o),s!==r.t&&((r.t=s)!=null?a.style.setProperty("border-color",s):a.style.removeProperty("border-color")),u!==r.a&&p(i,r.a=u),v!==r.o&&((r.o=v)!=null?i.style.setProperty("color",v):i.style.removeProperty("color")),h!==r.i&&p(d,r.i=h),y!==r.n&&p(l,r.n=y),f!==r.s&&p(t,r.s=f),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),a})()}var tn=()=>{const[n,e]=B(i()),a=N();function i(){const c=Array.from(document.head.querySelectorAll("meta")),d=[];for(const l of je){const t={},r=[];for(const o of l.tags){const s=c.find(u=>(o.key.includes("twitter:")?!1:u.getAttribute("property")===o.key)||u.getAttribute("name")===o.key);s&&s.getAttribute("content")?t[o.prop]=s.getAttribute("content")||void 0:r.push(o.key)}d.push({network:l.network,found:t,missing:r})}return d}return Wr(()=>{e(i())}),g(Ke,{withPadding:!0,get children(){return g(te,{get children(){return[g(re,{get children(){return[g(ne,{get children(){return g(At,{})}}),"Social previews"]}}),g(ae,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(()=>{var c=Ye();return m(c,g(V,{get each(){return n()},children:(d,l)=>{const t=je[l()];return(()=>{var r=Ye();return m(r,g(en,{get meta(){return d.found},get color(){return t.color},get network(){return t.network}}),null),m(r,(()=>{var o=K(()=>d.missing.length>0);return()=>o()?(()=>{var s=Xr(),u=s.firstChild,v=u.firstChild,h=v.nextSibling;h.nextSibling;var y=u.nextSibling;return m(u,()=>t?.network,h),m(y,g(V,{get each(){return d.missing},children:f=>(()=>{var k=_r();return m(k,f),w(()=>p(k,a().seoMissingTag)),k})()})),w(f=>{var k=a().seoMissingTagsSection,x=a().seoMissingTagsList;return k!==f.e&&p(s,f.e=k),x!==f.t&&p(y,f.t=x),f},{e:void 0,t:void 0}),s})():null})(),null),r})()}})),w(()=>p(c,a().seoPreviewSection)),c})()]}})}})},at=[{name:"Plugins",id:"plugins",component:()=>g(Gr,{}),icon:()=>g(Ct,{})},{name:"SEO",id:"seo",component:()=>g(tn,{}),icon:()=>g(St,{})},{name:"Settings",id:"settings",component:()=>g(or,{}),icon:()=>g(Mt,{})}],rn=C("<div>"),nn=C("<button type=button>"),an=C("<div><button type=button></button><button type=button>"),on=n=>{const e=N(),{state:a,setState:i}=ue(),c=be(),d=()=>{c().requestPipWindow(`width=${window.innerWidth},height=${a().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:l}=xe();return(()=>{var t=rn();return m(t,g(V,{each:at,children:r=>(()=>{var o=nn();return o.addEventListener("mouseleave",()=>{r.id==="plugins"&&l.leave()}),o.addEventListener("mouseenter",()=>{r.id==="plugins"&&l.enter()}),o.$$click=()=>i({activeTab:r.id}),m(o,()=>r.icon()),w(()=>p(o,Y(e().tab,{active:a().activeTab===r.id}))),o})()}),null),m(t,(()=>{var r=K(()=>c().pipWindow!==null);return()=>r()?null:(()=>{var o=an(),s=o.firstChild,u=s.nextSibling;return o.style.setProperty("margin-top","auto"),s.$$click=d,m(s,g(wt,{})),u.$$click=()=>n.toggleOpen(),m(u,g(xt,{})),w(v=>{var h=Y(e().tab,"detach"),y=Y(e().tab,"close");return h!==v.e&&p(s,v.e=h),y!==v.t&&p(u,v.t=y),v},{e:void 0,t:void 0}),o})()})(),null),w(()=>p(t,e().tabContainer)),t})()};J(["click"]);var sn=C("<div>"),ln=()=>{const{state:n}=ue(),e=N(),a=L(()=>at.find(i=>i.id===n().activeTab)?.component||null);return(()=>{var i=sn();return m(i,()=>a()?.()),w(()=>p(i,e().tabContent)),i})()},Ve=C("<div>"),cn=()=>{const n=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:""}),[e,a]=Ee(n()),i=()=>{a(n())},[c,d]=B(null),l=Gt(()=>c()),[t,r]=Ee({x:0,y:0});De(document,"mousemove",h=>{r({x:h.clientX,y:h.clientY})});const o=Ze(),s=L(()=>{const h=o(),y=h.includes("SHIFT"),f=h.includes("CONTROL"),k=h.includes("META");return y&&(f||k)});Q(()=>{if(!s()){i();return}const h=document.elementFromPoint(t.x,t.y);if(!(h instanceof HTMLElement)){i();return}if(h===e.element)return;const y=h.getAttribute("data-tsd-source");if(!y){i();return}const f=h.getBoundingClientRect(),k={width:f.width,height:f.height,left:f.left,top:f.top};a({element:h,bounding:k,dataSource:y})}),De(document,"click",h=>{e.element&&(window.getSelection()?.removeAllRanges(),h.preventDefault(),h.stopPropagation(),fetch(`${location.origin}/__tsd/open-source?source=${encodeURIComponent(e.dataSource)}`).catch(()=>{}))});const u=L(()=>e.element?{display:"block",width:`${e.bounding.width}px`,height:`${e.bounding.height}px`,left:`${e.bounding.left}px`,top:`${e.bounding.top}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.25)",transition:"all 0.05s linear",position:"fixed","z-index":9999}:{display:"none"}),v=L(()=>{if(e.element&&c()){const h=window.innerWidth,y=l.height||26,f=l.width||0;let k=e.bounding.left,x=e.bounding.top-y-4;return x<0&&(x=e.bounding.top+e.bounding.height+4),k+f>h&&(k=h-f-4),k<0&&(k=4),{position:"fixed",left:`${k}px`,top:`${x}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.80)",color:"white",padding:"2px 4px",fontSize:"12px","border-radius":"2px","z-index":1e4,visibility:"visible",transition:"all 0.05s linear"}}return{display:"none"}});return[(()=>{var h=Ve();return se(d,h),m(h,()=>e.dataSource),w(y=>Pe(h,{...v(),"pointer-events":"none"},y)),h})(),(()=>{var h=Ve();return w(y=>Pe(h,{...u(),"pointer-events":"none"},y)),h})()]},dn=C("<div>");function vn(){const{settings:n}=ee(),{setHeight:e}=tt(),{persistOpen:a,setPersistOpen:i}=Jt(),[c,d]=B(),[l,t]=B(n().defaultOpen||a()),r=be();let o;const[s,u]=B(!1),v=()=>{if(r().pipWindow)return;const f=l();t(!f),i(!f)},h=(f,k)=>{if(k.button!==0||!f)return;u(!0);const x={originalHeight:f.getBoundingClientRect().height,pageY:k.pageY},P=$=>{const M=x.pageY-$.pageY,D=n().panelLocation==="bottom"?x.originalHeight+M:x.originalHeight-M;e(D),D<70?t(!1):t(!0)},z=()=>{u(!1),document.removeEventListener("mousemove",P),document.removeEventListener("mouseUp",z)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",z)};Q(()=>{if(l()){const f=c()?.parentElement?.style.paddingBottom,k=()=>{o&&c()?.parentElement&&d(x=>(x?.parentElement,x))};if(k(),typeof window<"u")return(r().pipWindow??window).addEventListener("resize",k),()=>{(r().pipWindow??window).removeEventListener("resize",k),c()?.parentElement&&typeof f=="string"&&d(x=>x)}}else c()?.parentElement&&d(f=>(f?.parentElement&&f.parentElement.removeAttribute("style"),f))}),Q(()=>{window.addEventListener("keydown",f=>{f.key==="Escape"&&l()&&v()})}),Zt(l),Q(()=>{if(c()){const f=c(),k=getComputedStyle(f).fontSize;f?.style.setProperty("--tsrd-font-size",k)}}),Q(()=>{const f=n().openHotkey.filter(P=>Me.includes(P)),k=n().openHotkey.filter(P=>!Me.includes(P)),x=st(f);for(const P of x){const z=[...P,...k];$t(z,()=>{v()})}});const{theme:y}=Se();return g(kt,{get theme(){return y()},get children(){return g(bt,{get mount(){return(r().pipWindow??window).document.body},get children(){var f=dn();return se(d,f),j(f,"data-testid",ye),m(f,g(E,{get when(){return K(()=>r().pipWindow!==null)()?!0:K(()=>!!n().requireUrlFlag)()?window.location.search.includes(n().urlFlag):!0},get children(){return[g(er,{isOpen:l,setIsOpen:v,get image(){return n().triggerImage}}),g(rr,{isResizing:s,isOpen:l,get children(){return g(nr,{ref:k=>o=k,handleDragStart:k=>h(o,k),get children(){return[g(on,{toggleOpen:v}),g(ln,{})]}})}})]}}),null),m(f,g(cn,{}),null),f}})}})}export{vn as default};
