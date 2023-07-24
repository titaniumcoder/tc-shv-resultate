(()=>{"use strict";var e,t={946:()=>{const e=window.wp.blocks,t=window.wp.element,s=window.wp.i18n,a=window.wp.components,l=window.wp.blockEditor,r=JSON.parse('{"u2":"rmse-vat-results/games"}');(0,e.registerBlockType)(r.u2,{edit:function({attributes:e,setAttributes:r}){return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(l.InspectorControls,{key:"settings"},(0,t.createElement)("h5",null,(0,s.__)("Next Games / Last Results of the club","rmse-vat-results")),(0,t.createElement)("div",{className:"instructions"},(0,s.__)("Choose how many elements (last results and next games) should be displayed. 0 or less means it will not be shown at all. Will add a preview in a future version.","rmse-vat-results")),(0,t.createElement)(a.Flex,null,(0,t.createElement)(a.FlexBlock,null,(0,t.createElement)(a.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Last Results","rmse-vat-results"),shiftStep:5,value:e.results,onChange:e=>r({results:e})})),(0,t.createElement)(a.FlexBlock,null,(0,t.createElement)(a.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Scheduled Games","rmse-vat-results"),shiftStep:5,value:e.scheduled,onChange:e=>r({scheduled:e})}))),(0,t.createElement)(a.TextControl,{label:(0,s.__)("Date Format","rmse-vat-results"),value:e.dateformat,onChange:e=>r({dateformat:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Header?","rmse-vat-results"),checked:e.header,onChange:e=>r({header:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show game type?","rmse-vat-results"),checked:e.type,onChange:e=>r({type:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Venue?","rmse-vat-results"),checked:e.venue,onChange:e=>r({venue:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Results?","rmse-vat-results"),checked:e.with_result,onChange:e=>r({with_result:e})})),(0,t.createElement)("table",{className:"rmse-vat-results-table"},e.header&&(0,t.createElement)("thead",null,(0,t.createElement)("tr",null,(0,t.createElement)("th",{className:"rmse-vat-results-date"},(0,s.__)("Date / Time","rmse-vat-results")),e.type&&(0,t.createElement)("th",{className:"rmse-vat-results-type"},(0,s.__)("Type","rmse-vat-results")),(0,t.createElement)("th",{className:"rmse-vat-results-hometeam"},(0,s.__)("Home","rmse-vat-results")),(0,t.createElement)("th",{className:"rmse-vat-results-guestteam"},(0,s.__)("Guest","rmse-vat-results")),e.venue&&(0,t.createElement)("th",{className:"rmse-vat-results-venue"},(0,s.__)("Venue","rmse-vat-results")),e.with_result&&(0,t.createElement)("th",{className:"rmse-vat-results-result"},(0,s.__)("Result","rmse-vat-results")))),(0,t.createElement)("tbody",null,(0,t.createElement)("tr",{className:"rmse-vat-results-game-played rmse-vat-results-game-club-internal"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Club Internal"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-win"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Sieg"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-draw"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Unentschieden"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:33 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-loss"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Niederlage"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team B"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team A"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"30:33 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-home"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Heimspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-away"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Auswärtsspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-type-cup"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Cupspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-type-ms"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"rmse-vat-results-type"},"Meisterschaftsspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})))))}})}},s={};function a(e){var l=s[e];if(void 0!==l)return l.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,s,l,r)=>{if(!s){var m=1/0;for(v=0;v<e.length;v++){s=e[v][0],l=e[v][1],r=e[v][2];for(var n=!0,u=0;u<s.length;u++)(!1&r||m>=r)&&Object.keys(a.O).every((e=>a.O[e](s[u])))?s.splice(u--,1):(n=!1,r<m&&(m=r));if(n){e.splice(v--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var v=e.length;v>0&&e[v-1][2]>r;v--)e[v]=e[v-1];e[v]=[s,l,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={413:0,23:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var l,r,m=s[0],n=s[1],u=s[2],c=0;if(m.some((t=>0!==e[t]))){for(l in n)a.o(n,l)&&(a.m[l]=n[l]);if(u)var v=u(a)}for(t&&t(s);c<m.length;c++)r=m[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(v)},s=self.webpackChunkrmse_vat_results=self.webpackChunkrmse_vat_results||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var l=a.O(void 0,[23],(()=>a(946)));l=a.O(l)})();