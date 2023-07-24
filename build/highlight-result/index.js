(()=>{"use strict";var e,t={554:()=>{const e=window.wp.blocks,t=window.wp.element,s=window.wp.i18n,a=window.wp.components,l=window.wp.blockEditor;window.React;const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMwIiBoZWlnaHQ9IjMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZWxsaXBzZSByeT0iMTA5LjUiIHJ4PSIxMDkuNSIgaWQ9InN2Z18xIiBjeT0iMTY1IiBjeD0iMTY1IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmYiLz4KICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iTm90byBTYW5zIEpQIiBmb250LXNpemU9IjQ4IiBzdHJva2Utd2lkdGg9IjAiIGlkPSJzdmdfMyIgeT0iMTgwLjUiIHg9IjExNC4zMzU5NCIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDA3ZjNmIj5Mb2dvPC90ZXh0PgogPC9nPgo8L3N2Zz4K",o=JSON.parse('{"u2":"rmse-vat-results/highlight-result"}');(0,e.registerBlockType)(o.u2,{edit:function({attributes:e,setAttributes:o}){const i=rmse_vat_team_selection.map((e=>({label:e.name,value:e.id})));return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(l.InspectorControls,{key:"settings"},(0,t.createElement)("h5",null,(0,s.__)("Next Games / Last Results of the club","rmse-vat-results")),(0,t.createElement)("div",{className:"instructions"},(0,s.__)("Choose how many elements (last results and next games) should be displayed. 0 or less means it will not be shown at all. Will add a preview in a future version.","rmse-vat-results")),(0,t.createElement)(a.SelectControl,{label:(0,s.__)("Team","rmse-vat-results"),value:e.team,options:i,onChange:e=>o({team:e})}),(0,t.createElement)(a.TextControl,{label:(0,s.__)("Date Format","rmse-vat-results"),value:e.dateformat,onChange:e=>o({dateformat:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Venue?","rmse-vat-results"),checked:e.venue,onChange:e=>o({venue:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Logos?","rmse-vat-results"),checked:e.logos,onChange:e=>o({logos:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Team Names?","rmse-vat-results"),checked:e.names,onChange:e=>o({names:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Halftime Result?","rmse-vat-results"),checked:e.halftime,onChange:e=>o({halftime:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Spectators?","rmse-vat-results"),checked:e.spectators,onChange:e=>o({spectators:e})}),(0,t.createElement)(a.TextControl,{label:(0,s.__)("Logo Size","rmse-vat-results"),value:e.logosize,onChange:e=>o({logosize:e})})),(0,t.createElement)("div",{className:"rmse-vat-results-highlight-result"},(0,t.createElement)("div",{className:"rmse-vat-results-highlight-home"},e.logos&&(0,t.createElement)("div",{title:"Team A",className:"rmse-vat-results-highlight-logo"},(0,t.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Team A"})),e.names&&(0,t.createElement)("div",{className:"rmse-vat-results-highlight-name"},"Team A")),(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info"},(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info-result"},"33:31"),e.halftime&&(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info-halftime"},"18:17"),(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info-date"},"21.10.23"),e.venue&&(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info-venue"},"Halle X"),e.spectators&&(0,t.createElement)("div",{className:"rmse-vat-results-highlight-info-spectators"},(0,s.__)("Spectators","rmse-vat-results"),": 200")),(0,t.createElement)("div",{className:"rmse-vat-results-highlight-guest"},e.logos&&(0,t.createElement)("div",{title:"Team B",className:"rmse-vat-results-highlight-logo"},(0,t.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Team B"})),e.names&&(0,t.createElement)("div",{className:"rmse-vat-results-highlight-name"},"Team B"))))}})}},s={};function a(e){var l=s[e];if(void 0!==l)return l.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,s,l,r)=>{if(!s){var o=1/0;for(h=0;h<e.length;h++){s=e[h][0],l=e[h][1],r=e[h][2];for(var i=!0,n=0;n<s.length;n++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](s[n])))?s.splice(n--,1):(i=!1,r<o&&(o=r));if(i){e.splice(h--,1);var m=l();void 0!==m&&(t=m)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[s,l,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={433:0,775:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var l,r,o=s[0],i=s[1],n=s[2],m=0;if(o.some((t=>0!==e[t]))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(n)var h=n(a)}for(t&&t(s);m<o.length;m++)r=o[m],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(h)},s=self.webpackChunkrmse_vat_results=self.webpackChunkrmse_vat_results||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var l=a.O(void 0,[775],(()=>a(554)));l=a.O(l)})();