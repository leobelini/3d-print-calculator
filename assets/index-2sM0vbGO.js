import{Z as $e,g as P,f as ae,o as re,d as Se,b as ke,c as X,e as oe,a2 as O,a3 as Me,a4 as N,a5 as De,a6 as h,a7 as ye,a8 as U,h as ce,a9 as be,aa as pe}from"./index-CCtJbuFu.js";import{c as Ce}from"./store-CcMuWB6z.js";import{f as te}from"./EventClient-DmkzSA6S.js";import{u as _e,M as Ge}from"./main-panel-DQJH4gdo.js";import{J as ie,H as Fe,a as ze}from"./header-CzK68Slk.js";import{u as He}from"./goober.modern-D2HZIzZw.js";var le={exports:{}},Te=le.exports,fe;function Pe(){return fe||(fe=1,(function(u,e){(function(m,r){u.exports=r()})(Te,(function(){var m=1e3,r=6e4,$=36e5,d="millisecond",y="second",f="minute",i="hour",t="day",p="week",b="month",k="quarter",x="year",M="date",G="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var o=["th","st","nd","rd"],n=c%100;return"["+c+(o[(n-20)%10]||o[n]||o[0])+"]"}},I=function(c,o,n){var l=String(c);return!l||l.length>=o?c:""+Array(o+1-l.length).join(n)+c},L={s:I,z:function(c){var o=-c.utcOffset(),n=Math.abs(o),l=Math.floor(n/60),a=n%60;return(o<=0?"+":"-")+I(l,2,"0")+":"+I(a,2,"0")},m:function c(o,n){if(o.date()<n.date())return-c(n,o);var l=12*(n.year()-o.year())+(n.month()-o.month()),a=o.clone().add(l,b),g=n-a<0,v=o.clone().add(l+(g?-1:1),b);return+(-(l+(n-a)/(g?a-v:v-a))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:b,y:x,w:p,d:t,D:M,h:i,m:f,s:y,ms:d,Q:k}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},C="en",H={};H[C]=E;var Y="$isDayjsObject",R=function(c){return c instanceof V||!(!c||!c[Y])},Q=function c(o,n,l){var a;if(!o)return C;if(typeof o=="string"){var g=o.toLowerCase();H[g]&&(a=g),n&&(H[g]=n,a=g);var v=o.split("-");if(!a&&v.length>1)return c(v[0])}else{var S=o.name;H[S]=o,a=S}return!l&&a&&(C=a),a||!l&&C},F=function(c,o){if(R(c))return c.clone();var n=typeof o=="object"?o:{};return n.date=c,n.args=arguments,new V(n)},s=L;s.l=Q,s.i=R,s.w=function(c,o){return F(c,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var V=(function(){function c(n){this.$L=Q(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[Y]=!0}var o=c.prototype;return o.parse=function(n){this.$d=(function(l){var a=l.date,g=l.utc;if(a===null)return new Date(NaN);if(s.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var v=a.match(w);if(v){var S=v[2]-1||0,_=(v[7]||"0").substring(0,3);return g?new Date(Date.UTC(v[1],S,v[3]||1,v[4]||0,v[5]||0,v[6]||0,_)):new Date(v[1],S,v[3]||1,v[4]||0,v[5]||0,v[6]||0,_)}}return new Date(a)})(n),this.init()},o.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},o.$utils=function(){return s},o.isValid=function(){return this.$d.toString()!==G},o.isSame=function(n,l){var a=F(n);return this.startOf(l)<=a&&a<=this.endOf(l)},o.isAfter=function(n,l){return F(n)<this.startOf(l)},o.isBefore=function(n,l){return this.endOf(l)<F(n)},o.$g=function(n,l,a){return s.u(n)?this[l]:this.set(a,n)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(n,l){var a=this,g=!!s.u(l)||l,v=s.p(n),S=function(ee,A){var Z=s.w(a.$u?Date.UTC(a.$y,A,ee):new Date(a.$y,A,ee),a);return g?Z:Z.endOf(t)},_=function(ee,A){return s.w(a.toDate()[ee].apply(a.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(A)),a)},z=this.$W,T=this.$M,j=this.$D,q="set"+(this.$u?"UTC":"");switch(v){case x:return g?S(1,0):S(31,11);case b:return g?S(1,T):S(0,T+1);case p:var W=this.$locale().weekStart||0,J=(z<W?z+7:z)-W;return S(g?j-J:j+(6-J),T);case t:case M:return _(q+"Hours",0);case i:return _(q+"Minutes",1);case f:return _(q+"Seconds",2);case y:return _(q+"Milliseconds",3);default:return this.clone()}},o.endOf=function(n){return this.startOf(n,!1)},o.$set=function(n,l){var a,g=s.p(n),v="set"+(this.$u?"UTC":""),S=(a={},a[t]=v+"Date",a[M]=v+"Date",a[b]=v+"Month",a[x]=v+"FullYear",a[i]=v+"Hours",a[f]=v+"Minutes",a[y]=v+"Seconds",a[d]=v+"Milliseconds",a)[g],_=g===t?this.$D+(l-this.$W):l;if(g===b||g===x){var z=this.clone().set(M,1);z.$d[S](_),z.init(),this.$d=z.set(M,Math.min(this.$D,z.daysInMonth())).$d}else S&&this.$d[S](_);return this.init(),this},o.set=function(n,l){return this.clone().$set(n,l)},o.get=function(n){return this[s.p(n)]()},o.add=function(n,l){var a,g=this;n=Number(n);var v=s.p(l),S=function(T){var j=F(g);return s.w(j.date(j.date()+Math.round(T*n)),g)};if(v===b)return this.set(b,this.$M+n);if(v===x)return this.set(x,this.$y+n);if(v===t)return S(1);if(v===p)return S(7);var _=(a={},a[f]=r,a[i]=$,a[y]=m,a)[v]||1,z=this.$d.getTime()+n*_;return s.w(z,this)},o.subtract=function(n,l){return this.add(-1*n,l)},o.format=function(n){var l=this,a=this.$locale();if(!this.isValid())return a.invalidDate||G;var g=n||"YYYY-MM-DDTHH:mm:ssZ",v=s.z(this),S=this.$H,_=this.$m,z=this.$M,T=a.weekdays,j=a.months,q=a.meridiem,W=function(A,Z,ne,de){return A&&(A[Z]||A(l,g))||ne[Z].slice(0,de)},J=function(A){return s.s(S%12||12,A,"0")},ee=q||function(A,Z,ne){var de=A<12?"AM":"PM";return ne?de.toLowerCase():de};return g.replace(D,(function(A,Z){return Z||(function(ne){switch(ne){case"YY":return String(l.$y).slice(-2);case"YYYY":return s.s(l.$y,4,"0");case"M":return z+1;case"MM":return s.s(z+1,2,"0");case"MMM":return W(a.monthsShort,z,j,3);case"MMMM":return W(j,z);case"D":return l.$D;case"DD":return s.s(l.$D,2,"0");case"d":return String(l.$W);case"dd":return W(a.weekdaysMin,l.$W,T,2);case"ddd":return W(a.weekdaysShort,l.$W,T,3);case"dddd":return T[l.$W];case"H":return String(S);case"HH":return s.s(S,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return ee(S,_,!0);case"A":return ee(S,_,!1);case"m":return String(_);case"mm":return s.s(_,2,"0");case"s":return String(l.$s);case"ss":return s.s(l.$s,2,"0");case"SSS":return s.s(l.$ms,3,"0");case"Z":return v}return null})(A)||v.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(n,l,a){var g,v=this,S=s.p(l),_=F(n),z=(_.utcOffset()-this.utcOffset())*r,T=this-_,j=function(){return s.m(v,_)};switch(S){case x:g=j()/12;break;case b:g=j();break;case k:g=j()/3;break;case p:g=(T-z)/6048e5;break;case t:g=(T-z)/864e5;break;case i:g=T/$;break;case f:g=T/r;break;case y:g=T/m;break;default:g=T}return a?g:s.a(g)},o.daysInMonth=function(){return this.endOf(b).$D},o.$locale=function(){return H[this.$L]},o.locale=function(n,l){if(!n)return this.$L;var a=this.clone(),g=Q(n,l,!0);return g&&(a.$L=g),a},o.clone=function(){return s.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},c})(),B=V.prototype;return F.prototype=B,[["$ms",d],["$s",y],["$m",f],["$H",i],["$W",t],["$M",b],["$y",x],["$D",M]].forEach((function(c){B[c[1]]=function(o){return this.$g(o,c[0],c[1])}})),F.extend=function(c,o){return c.$i||(c(o,V,F),c.$i=!0),F},F.locale=Q,F.isDayjs=R,F.unix=function(c){return F(1e3*c)},F.en=H[C],F.Ls=H,F.p={},F}))})(le)),le.exports}var Oe=Pe();const K=$e(Oe);function Le(){const[u,e]=Ce([]);return ae(()=>{const m=te.on("form-api",r=>{const $=r.payload.id,d=u.findIndex(y=>y.id===$);d>-1?e(d,{state:r.payload.state,options:r.payload.options,date:K()}):e(y=>[...y,{id:$,state:r.payload.state,options:r.payload.options,date:K(),history:[]}])});re(m)}),ae(()=>{const m=te.on("form-state",r=>{const $=r.payload.id,d=u.findIndex(y=>y.id===$);d>-1?e(d,{state:r.payload.state,date:K()}):e(y=>[...y,{id:$,state:r.payload.state,options:{},date:K(),history:[]}])});re(m)}),ae(()=>{const m=te.on("form-submission",r=>{const $=r.payload.id,d=u.findIndex(y=>y.id===$);if(d>-1&&u[d]){const{id:y,...f}=r.payload,i=[f,...u[d].history].slice(0,5);e(d,"history",i)}});re(m)}),ae(()=>{const m=te.on("form-unmounted",r=>{e($=>$.filter(d=>d.id!==r.payload.id))});re(m)}),{store:u}}const xe=Se(void 0),Ee=u=>{const e=Le();return P(xe.Provider,{value:e,get children(){return u.children}})};function we(){const u=ke(xe);if(u===void 0)throw new Error("useFormEventClient must be used within a FormEventClientContext");return{store:X(()=>u.store)}}const ge={colors:{black:"#000000",white:"#ffffff",darkGray:{400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318"},gray:{100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",800:"#1d2939",900:"#101828"},blue:{100:"#D1E9FF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",900:"#194185"},green:{400:"#32D583"},red:{400:"#f87171"},yellow:{400:"#FDB022"},purple:{400:"#9B8AFB"},pink:{400:"#ec4899"}},alpha:{80:"cc",30:"4d",20:"33"},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)"},weight:{semibold:"600",bold:"700"},fontFamily:{mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)"}},size:{1:"calc(var(--tsrd-font-size) * 0.25)",2:"calc(var(--tsrd-font-size) * 0.5)",3:"calc(var(--tsrd-font-size) * 0.75)",4:"calc(var(--tsrd-font-size) * 1)"},shadow:{xs:(u="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(u="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${u}, 0 1px 2px -1px ${u}`,md:(u="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${u}, 0 2px 4px -2px ${u}`,lg:(u="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${u}, 0 4px 6px -4px ${u}`,xl:(u="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${u}, 0 8px 10px -6px ${u}`,"2xl":(u="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${u}`,inner:(u="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${u}`,none:()=>"none"}},ve=u=>{const{colors:e,font:m,size:r,alpha:$,border:d}=ge,{fontFamily:y,size:f}=m,i=He,t=(p,b)=>u==="light"?p:b;return{mainContainer:i`
      display: flex;
      flex: 1;
      min-height: 80%;
      overflow: hidden;
      padding: ${r[2]};
    `,dragHandle:i`
      width: 8px;
      background: ${t(e.gray[300],e.darkGray[600])};
      cursor: col-resize;
      position: relative;
      transition: all 0.2s ease;
      user-select: none;
      pointer-events: all;
      margin: 0 ${r[1]};
      border-radius: 2px;

      &:hover {
        background: ${t(e.blue[600],e.blue[500])};
        margin: 0 ${r[1]};
      }

      &.dragging {
        background: ${t(e.blue[700],e.blue[600])};
        margin: 0 ${r[1]};
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 20px;
        background: ${t(e.gray[400],e.darkGray[400])};
        border-radius: 1px;
        pointer-events: none;
      }

      &:hover::after,
      &.dragging::after {
        background: ${t(e.blue[500],e.blue[300])};
      }
    `,leftPanel:i`
      background: ${t(e.gray[100],e.darkGray[800])};
      border-radius: ${d.radius.lg};
      border: 1px solid ${t(e.gray[200],e.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex-shrink: 0;
    `,rightPanel:i`
      background: ${t(e.gray[100],e.darkGray[800])};
      border-radius: ${d.radius.lg};
      border: 1px solid ${t(e.gray[200],e.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex: 1;
    `,panelHeader:i`
      font-size: ${f.md};
      font-weight: ${m.weight.bold};
      color: ${t(e.blue[700],e.blue[400])};
      padding: ${r[2]};
      border-bottom: 1px solid ${t(e.gray[200],e.darkGray[700])};
      background: ${t(e.gray[100],e.darkGray[800])};
      flex-shrink: 0;
    `,utilList:i`
      flex: 1;
      overflow-y: auto;
      padding: ${r[1]};
      min-height: 0;
    `,utilGroup:i`
      margin-bottom: ${r[2]};
    `,utilGroupHeader:i`
      font-size: ${f.xs};
      font-weight: ${m.weight.semibold};
      color: ${t(e.gray[600],e.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: ${r[1]};
      padding: ${r[1]} ${r[2]};
      background: ${t(e.gray[200],e.darkGray[700])};
      border-radius: ${d.radius.md};
    `,utilRow:i`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${r[2]};
      margin-bottom: ${r[1]};
      background: ${t(e.gray[200],e.darkGray[700])};
      border-radius: ${d.radius.md};
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;

      &:hover {
        background: ${t(e.gray[300],e.darkGray[600])};
        border-color: ${t(e.gray[400],e.darkGray[500])};
      }
    `,utilRowSelected:i`
      background: ${t(e.blue[100],e.blue[900]+$[20])};
      border-color: ${t(e.blue[600],e.blue[500])};
      box-shadow: 0 0 0 1px
        ${t(e.blue[600]+$[30],e.blue[500]+$[30])};
    `,utilKey:i`
      font-family: ${y.mono};
      font-size: ${f.xs};
      color: ${t(e.gray[900],e.gray[100])};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,utilStatus:i`
      font-size: ${f.xs};
      color: ${t(e.gray[600],e.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: ${r[1]} ${r[1]};
      background: ${t(e.gray[300],e.darkGray[600])};
      border-radius: ${d.radius.sm};
      margin-left: ${r[1]};
    `,stateDetails:i`
      flex: 1;
      overflow-y: auto;
      padding: ${r[2]};
      min-height: 0;
    `,stateHeader:i`
      margin-bottom: ${r[2]};
      padding-bottom: ${r[2]};
      border-bottom: 1px solid ${t(e.gray[200],e.darkGray[700])};
    `,stateTitle:i`
      font-size: ${f.md};
      font-weight: ${m.weight.bold};
      color: ${t(e.blue[700],e.blue[400])};
      margin-bottom: ${r[1]};
    `,stateKey:i`
      font-family: ${y.mono};
      font-size: ${f.xs};
      color: ${t(e.gray[600],e.gray[400])};
      word-break: break-all;
    `,stateContent:i`
      background: ${t(e.gray[100],e.darkGray[700])};
      border-radius: ${d.radius.md};
      padding: ${r[2]};
      border: 1px solid ${t(e.gray[300],e.darkGray[600])};
    `,detailsGrid:i`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${r[2]};
      align-items: start;
    `,detailSection:i`
      background: ${t(e.white,e.darkGray[700])};
      border: 1px solid ${t(e.gray[300],e.darkGray[600])};
      border-radius: ${d.radius.md};
      padding: ${r[2]};
    `,detailSectionHeader:i`
      font-size: ${f.sm};
      font-weight: ${m.weight.bold};
      color: ${t(e.gray[800],e.gray[200])};
      margin-bottom: ${r[1]};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    `,actionsRow:i`
      display: flex;
      flex-wrap: wrap;
      gap: ${r[2]};
    `,actionButton:i`
      display: inline-flex;
      align-items: center;
      gap: ${r[1]};
      padding: ${r[1]} ${r[2]};
      border-radius: ${d.radius.md};
      border: 1px solid ${t(e.gray[300],e.darkGray[500])};
      background: ${t(e.gray[200],e.darkGray[600])};
      color: ${t(e.gray[900],e.gray[100])};
      font-size: ${f.xs};
      cursor: pointer;
      user-select: none;
      transition:
        background 0.15s,
        border-color 0.15s;
      &:hover {
        background: ${t(e.gray[300],e.darkGray[500])};
        border-color: ${t(e.gray[400],e.darkGray[400])};
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: ${t(e.gray[200],e.darkGray[600])};
          border-color: ${t(e.gray[300],e.darkGray[500])};
        }
      }
    `,actionDotBlue:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.blue[400]};
    `,actionDotGreen:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.green[400]};
    `,actionDotRed:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.red[400]};
    `,actionDotYellow:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.yellow[400]};
    `,actionDotOrange:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.pink[400]};
    `,actionDotPurple:i`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.purple[400]};
    `,infoGrid:i`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r[1]};
      row-gap: ${r[1]};
      align-items: center;
    `,infoLabel:i`
      color: ${t(e.gray[600],e.gray[400])};
      font-size: ${f.xs};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,infoValueMono:i`
      font-family: ${y.mono};
      font-size: ${f.xs};
      color: ${t(e.gray[900],e.gray[100])};
      word-break: break-all;
    `,noSelection:i`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${t(e.gray[500],e.gray[500])};
      font-style: italic;
      text-align: center;
      padding: ${r[4]};
    `,sectionContainer:i`
      display: flex;
      flex-wrap: wrap;
      gap: ${r[4]};
    `,section:i`
      background: ${t(e.gray[100],e.darkGray[800])};
      border-radius: ${d.radius.lg};
      box-shadow: ${ge.shadow.md(t(e.gray[400]+$[80],e.black+$[80]))};
      padding: ${r[4]};
      margin-bottom: ${r[4]};
      border: 1px solid ${t(e.gray[200],e.darkGray[700])};
      min-width: 0;
      max-width: 33%;
      max-height: fit-content;
    `,sectionHeader:i`
      font-size: ${f.lg};
      font-weight: ${m.weight.bold};
      margin-bottom: ${r[2]};
      color: ${t(e.blue[600],e.blue[400])};
      letter-spacing: 0.01em;
      display: flex;
      align-items: center;
      gap: ${r[2]};
    `,sectionEmpty:i`
      color: ${t(e.gray[500],e.gray[500])};
      font-size: ${f.sm};
      font-style: italic;
      margin: ${r[2]} 0;
    `,instanceList:i`
      display: flex;
      flex-direction: column;
      gap: ${r[2]};
      background: ${t(e.gray[200],e.darkGray[700])};
      border: 1px solid ${t(e.gray[300],e.darkGray[600])};
    `,instanceCard:i`
      background: ${t(e.gray[200],e.darkGray[700])};
      border-radius: ${d.radius.md};
      padding: ${r[3]};
      border: 1px solid ${t(e.gray[300],e.darkGray[600])};
      font-size: ${f.sm};
      color: ${t(e.gray[900],e.gray[100])};
      font-family: ${y.mono};
      overflow-x: auto;
      transition:
        box-shadow 0.3s,
        background 0.3s;
    `}};function se(){const{theme:u}=_e(),[e,m]=oe(ve(u()));return ae(()=>{m(ve(u()))}),e}var me=U("<div>"),Ie=U("<div><div>");function je(u){const e=se(),{store:m}=we();return(()=>{var r=me();return O(r,(()=>{var $=Me(()=>m().length>0);return()=>$()&&(()=>{var d=me();return O(d,P(ye,{get each(){return m()},children:y=>(()=>{var f=Ie(),i=f.firstChild;return f.$$click=()=>u.setSelectedKey(y.id),O(i,()=>y.id),N(t=>{var p=De(e().utilRow,u.selectedKey()===y.id&&e().utilRowSelected),b=e().utilKey;return p!==t.e&&h(f,t.e=p),b!==t.t&&h(i,t.t=b),t},{e:void 0,t:void 0}),f})()})),N(()=>h(d,e().utilGroup)),d})()})()),N(()=>h(r,e().utilList)),r})()}ce(["click"]);var Ae=U("<div><button><span></span>Flush</button><button><span></span>Reset</button><button><span></span>Submit (-f)");function Re(u){const e=se();return(()=>{var m=Ae(),r=m.firstChild,$=r.firstChild,d=r.nextSibling,y=d.firstChild,f=d.nextSibling,i=f.firstChild;return r.$$mousedown=()=>{te.emit("request-form-state",{id:u.selectedInstance()?.id})},d.$$mousedown=()=>{te.emit("request-form-reset",{id:u.selectedInstance()?.id})},f.$$mousedown=()=>{te.emit("request-form-force-submit",{id:u.selectedInstance()?.id})},N(t=>{var p=e().actionsRow,b=e().actionButton,k=e().actionDotGreen,x=e().actionButton,M=e().actionDotRed,G=e().actionButton,w=e().actionDotYellow;return p!==t.e&&h(m,t.e=p),b!==t.t&&h(r,t.t=b),k!==t.a&&h($,t.a=k),x!==t.o&&h(d,t.o=x),M!==t.i&&h(y,t.i=M),G!==t.n&&h(f,t.n=G),w!==t.s&&h(i,t.s=w),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),m})()}ce(["mousedown"]);var ue={exports:{}},Ye=ue.exports,he;function Be(){return he||(he=1,(function(u,e){(function(m,r){u.exports=r()})(Ye,(function(){return function(m,r,$){m=m||{};var d=r.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function f(t,p,b,k){return d.fromToBase(t,p,b,k)}$.en.relativeTime=y,d.fromToBase=function(t,p,b,k,x){for(var M,G,w,D=b.$locale().relativeTime||y,E=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],I=E.length,L=0;L<I;L+=1){var C=E[L];C.d&&(M=k?$(t).diff(b,C.d,!0):b.diff(t,C.d,!0));var H=(m.rounding||Math.round)(Math.abs(M));if(w=M>0,H<=C.r||!C.r){H<=1&&L>0&&(C=E[L-1]);var Y=D[C.l];x&&(H=x(""+H)),G=typeof Y=="string"?Y.replace("%d",H):Y(H,p,C.l,w);break}}if(p)return G;var R=w?D.future:D.past;return typeof R=="function"?R(G):R.replace("%s",G)},d.to=function(t,p){return f(t,p,this,!0)},d.from=function(t,p){return f(t,p,this)};var i=function(t){return t.$u?$.utc():$()};d.toNow=function(t){return this.to(i(this),t)},d.fromNow=function(t){return this.from(i(this),t)}}}))})(ue)),ue.exports}var We=Be();const Ne=$e(We);var Ve=U("<div><div>Form state</div><div><div><div>Key</div><div></div><div>Last Updated</div><div> (<!>)");K.extend(Ne);function qe(u){const e=se(),[m,r]=oe(K().unix());be(()=>{const f=setInterval(()=>r(K().unix()),1e3);re(()=>clearInterval(f))});const $=u.selectedInstance,d=X(()=>$()?.date.unix()??K().unix()),y=X(()=>{const f=Math.max(m()-d(),0);return f<60?`${f} second${f!==1?"s":""} ago`:K.unix(d()).fromNow()});return $()?(()=>{var f=Ve(),i=f.firstChild,t=i.nextSibling,p=t.firstChild,b=p.firstChild,k=b.nextSibling,x=k.nextSibling,M=x.nextSibling,G=M.firstChild,w=G.nextSibling;return w.nextSibling,t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("gap","16px"),O(k,()=>$().id),O(M,()=>new Date(d()*1e3).toLocaleTimeString(),G),O(M,y,w),N(D=>{var E=e().stateHeader,I=e().stateTitle,L=e().infoGrid,C=e().infoLabel,H=e().infoValueMono,Y=e().infoLabel,R=e().infoValueMono;return E!==D.e&&h(f,D.e=E),I!==D.t&&h(i,D.t=I),L!==D.a&&h(p,D.a=L),C!==D.o&&h(b,D.o=C),H!==D.i&&h(k,D.i=H),Y!==D.n&&h(x,D.n=Y),R!==D.s&&h(M,D.s=R),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),f})():null}var Ke=U("<div><div><div>Actions</div></div><div><div>Individual Fields</div><div></div></div><div><div>Form values</div><div></div></div><div><div>Form status</div><div></div></div><div><div>Form options</div><div></div></div><div><div>Submission history</div><div>"),Ue=U("<div>"),Je=U("<div><div>");function Ze({selectedKey:u}){const e=se(),{store:m}=we(),r=X(()=>m().findIndex(i=>i.id===u())),$=X(()=>r()>-1?m()[r()]:null),d=X(()=>$()?.state),y=X(()=>({canSubmit:d()?.canSubmit,isFormValid:d()?.isFormValid,isFormValidating:d()?.isFormValidating,isSubmitted:d()?.isSubmitted,isSubmitting:d()?.isSubmitting,isSubmitSuccessful:d()?.isSubmitSuccessful,submissionAttempts:d()?.submissionAttempts,errors:d()?.errors,errorMap:d()?.errorMap})),f=X(()=>{const i={},t=d()?.values||{},p=d()?.fieldMeta||{};return Object.keys(t).forEach(b=>{i[b]={value:t[b],meta:p[b]}}),i});return(()=>{var i=Ue();return O(i,P(pe,{get when(){return $()},get children(){return[P(qe,{selectedInstance:$}),(()=>{var t=Ke(),p=t.firstChild,b=p.firstChild,k=p.nextSibling,x=k.firstChild,M=x.nextSibling,G=k.nextSibling,w=G.firstChild,D=w.nextSibling,E=G.nextSibling,I=E.firstChild,L=I.nextSibling,C=E.nextSibling,H=C.firstChild,Y=H.nextSibling,R=C.nextSibling,Q=R.firstChild,F=Q.nextSibling;return O(p,P(Re,{selectedInstance:$}),null),M.style.setProperty("display","flex"),M.style.setProperty("gap","8px"),O(M,P(ye,{get each(){return Object.entries(f())},children:([s,V])=>(()=>{var B=Je(),c=B.firstChild;return B.style.setProperty("margin-bottom","16px"),c.style.setProperty("font-weight","bold"),c.style.setProperty("margin-bottom","4px"),O(c,s),O(B,P(ie,{copyable:!0,value:V}),null),N(()=>h(B,e().stateContent)),B})()})),O(D,P(ie,{copyable:!0,get value(){return m()[r()].state.values}})),O(L,P(ie,{copyable:!0,get value(){return y()}})),O(Y,P(ie,{copyable:!0,get value(){return m()[r()]?.options},collapsePaths:["validators"]})),O(F,P(ie,{copyable:!0,get value(){return m()[r()]?.history}})),N(s=>{var V=e().detailsGrid,B=e().detailSection,c=e().detailSectionHeader,o=e().detailSection,n=e().detailSectionHeader,l=e().detailSection,a=e().detailSectionHeader,g=e().stateContent,v=e().detailSection,S=e().detailSectionHeader,_=e().stateContent,z=e().detailSection,T=e().detailSectionHeader,j=e().stateContent,q=e().detailSection,W=e().detailSectionHeader,J=e().stateContent;return V!==s.e&&h(t,s.e=V),B!==s.t&&h(p,s.t=B),c!==s.a&&h(b,s.a=c),o!==s.o&&h(k,s.o=o),n!==s.i&&h(x,s.i=n),l!==s.n&&h(G,s.n=l),a!==s.s&&h(w,s.s=a),g!==s.h&&h(D,s.h=g),v!==s.r&&h(E,s.r=v),S!==s.d&&h(I,s.d=S),_!==s.l&&h(L,s.l=_),z!==s.u&&h(C,s.u=z),T!==s.c&&h(H,s.c=T),j!==s.w&&h(Y,s.w=j),q!==s.m&&h(R,s.m=q),W!==s.f&&h(Q,s.f=W),J!==s.y&&h(F,s.y=J),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),t})()]}})),N(()=>h(i,e().stateDetails)),i})()}var Xe=U("<div>Details"),Qe=U("<div><div></div><div></div><div>");function et(){const u=se(),[e,m]=oe(300),[r,$]=oe(!1),[d,y]=oe(null);let f=0,i=0;const t=k=>{k.preventDefault(),k.stopPropagation(),$(!0),document.body.style.cursor="col-resize",document.body.style.userSelect="none",f=k.clientX,i=e()},p=k=>{if(!r())return;k.preventDefault();const x=k.clientX-f,M=Math.max(150,Math.min(800,i+x));m(M)},b=()=>{$(!1),document.body.style.cursor="",document.body.style.userSelect=""};return be(()=>{document.addEventListener("mousemove",p),document.addEventListener("mouseup",b)}),re(()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",b)}),P(Ge,{get children(){return[P(Fe,{get children(){return P(ze,{flavor:{light:"#eeaf00",dark:"#eeaf00"},onClick:()=>{window.open("https://tanstack.com/form/latest/docs/overview","_blank")},children:"TanStack Form"})}}),(()=>{var k=Qe(),x=k.firstChild,M=x.nextSibling,G=M.nextSibling;return x.style.setProperty("min-width","150px"),x.style.setProperty("max-width","800px"),O(x,P(je,{selectedKey:d,setSelectedKey:y})),M.$$mousedown=t,G.style.setProperty("flex","1"),O(G,P(pe,{get when(){return d()!=null},get children(){return[(()=>{var w=Xe();return N(()=>h(w,u().panelHeader)),w})(),P(Ze,{selectedKey:d})]}})),N(w=>{var D=u().mainContainer,E=u().leftPanel,I=`${e()}px`,L=`${u().dragHandle} ${r()?"dragging":""}`,C=u().rightPanel;return D!==w.e&&h(k,w.e=D),E!==w.t&&h(x,w.t=E),I!==w.a&&((w.a=I)!=null?x.style.setProperty("width",I):x.style.removeProperty("width")),L!==w.o&&h(M,w.o=L),C!==w.i&&h(G,w.i=C),w},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),k})()]}})}ce(["mousedown"]);function st(){return P(Ee,{get children(){return P(et,{})}})}export{st as default};
