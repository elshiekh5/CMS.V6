var OxO6171=["SetStyle","length","","GetStyle","GetText",":",";","cssText","tblBorderStyle","sel_style","sel_border","sel_part","bordercolor","bordercolor_Preview","inp_color","inp_color_Preview","inp_shade","inp_shade_Preview","inp_MarginLeft","inp_MarginRight","inp_MarginTop","inp_MarginBottom","inp_PaddingLeft","inp_PaddingRight","inp_PaddingTop","inp_PaddingBottom","inp_width","sel_width_unit","inp_height","sel_height_unit","inp_id","inp_class","sel_align","sel_textalign","sel_float","inp_tooltip","value","borderColor","style"," ","backgroundColor","color","id","className","width","height","inp_","sel_","_unit","selectedIndex","options","align","styleFloat","cssFloat","textAlign","title","borderWidth","borderLeftWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftStyle","borderTopStyle","borderRightStyle","borderBottomStyle","none","border","-","red","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","[[ValidID]]","class","onclick"];function pause(Ox49b){var Oxa1= new Date();var Ox49c=Oxa1.getTime()+Ox49b;while(true){Oxa1= new Date();if(Oxa1.getTime()>Ox49c){return ;} ;} ;} ;function StyleClass(Ox1fa){var Ox49e=[];var Ox49f={};if(Ox1fa){Ox4a4();} ;this[OxO6171[0]]=function SetStyle(name,Ox4e,Ox4a1){name=name.toLowerCase();for(var i=0;i<Ox49e[OxO6171[1]];i++){if(Ox49e[i]==name){break ;} ;} ;Ox49e[i]=name;Ox49f[name]=Ox4e?(Ox4e+(Ox4a1||OxO6171[2])):OxO6171[2];} ;this[OxO6171[3]]=function GetStyle(name){name=name.toLowerCase();return Ox49f[name]||OxO6171[2];} ;this[OxO6171[4]]=function Ox4a3(){var Ox1fa=OxO6171[2];for(var i=0;i<Ox49e[OxO6171[1]];i++){var n=Ox49e[i];var p=Ox49f[n];if(p){Ox1fa+=n+OxO6171[5]+p+OxO6171[6];} ;} ;return Ox1fa;} ;function Ox4a4(){var arr=Ox1fa.split(OxO6171[6]);for(var i=0;i<arr[OxO6171[1]];i++){var p=arr[i].split(OxO6171[5]);var n=p[0].replace(/^\s+/g,OxO6171[2]).replace(/\s+$/g,OxO6171[2]).toLowerCase();Ox49e[Ox49e[OxO6171[1]]]=n;Ox49f[n]=p[1];} ;} ;} ;function GetStyle(Ox130,name){return  new StyleClass(Ox130.cssText).GetStyle(name);} ;function SetStyle(Ox130,name,Ox4e,Ox4a5){var Ox4a6= new StyleClass(Ox130.cssText);Ox4a6.SetStyle(name,Ox4e,Ox4a5);Ox130[OxO6171[7]]=Ox4a6.GetText();} ;function ParseFloatToString(Ox24){if(!Ox24){return OxO6171[2];} ;var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxO6171[2];} ;return Ox8+OxO6171[2];} ;var tblBorderStyle=Window_GetElement(window,OxO6171[8],true);var sel_style=Window_GetElement(window,OxO6171[9],true);var sel_border=Window_GetElement(window,OxO6171[10],true);var sel_part=Window_GetElement(window,OxO6171[11],true);var bordercolor=Window_GetElement(window,OxO6171[12],true);var bordercolor_Preview=Window_GetElement(window,OxO6171[13],true);var inp_color=Window_GetElement(window,OxO6171[14],true);var inp_color_Preview=Window_GetElement(window,OxO6171[15],true);var inp_shade=Window_GetElement(window,OxO6171[16],true);var inp_shade_Preview=Window_GetElement(window,OxO6171[17],true);var inp_MarginLeft=Window_GetElement(window,OxO6171[18],true);var inp_MarginRight=Window_GetElement(window,OxO6171[19],true);var inp_MarginTop=Window_GetElement(window,OxO6171[20],true);var inp_MarginBottom=Window_GetElement(window,OxO6171[21],true);var inp_PaddingLeft=Window_GetElement(window,OxO6171[22],true);var inp_PaddingRight=Window_GetElement(window,OxO6171[23],true);var inp_PaddingTop=Window_GetElement(window,OxO6171[24],true);var inp_PaddingBottom=Window_GetElement(window,OxO6171[25],true);var inp_width=Window_GetElement(window,OxO6171[26],true);var sel_width_unit=Window_GetElement(window,OxO6171[27],true);var inp_height=Window_GetElement(window,OxO6171[28],true);var sel_height_unit=Window_GetElement(window,OxO6171[29],true);var inp_id=Window_GetElement(window,OxO6171[30],true);var inp_class=Window_GetElement(window,OxO6171[31],true);var sel_align=Window_GetElement(window,OxO6171[32],true);var sel_textalign=Window_GetElement(window,OxO6171[33],true);var sel_float=Window_GetElement(window,OxO6171[34],true);var inp_tooltip=Window_GetElement(window,OxO6171[35],true);UpdateState=function UpdateState_Div(){} ;function doBorderStyle(Ox119){sel_style[OxO6171[36]]=Ox119;} ;function doPart(Ox119){sel_part[OxO6171[36]]=Ox119;} ;function doWidth(Ox119){sel_border[OxO6171[36]]=Ox119;} ;SyncToView=function SyncToView_Div(){if(Browser_IsWinIE()){bordercolor[OxO6171[36]]=element[OxO6171[38]][OxO6171[37]];} else {var arr=revertColor(element[OxO6171[38]].borderColor).split(OxO6171[39]);bordercolor[OxO6171[36]]=arr[0];} ;bordercolor[OxO6171[38]][OxO6171[40]]=bordercolor[OxO6171[36]];bordercolor_Preview[OxO6171[38]][OxO6171[40]]=bordercolor[OxO6171[36]];inp_color[OxO6171[36]]=revertColor(element[OxO6171[38]].color);inp_color[OxO6171[38]][OxO6171[40]]=element[OxO6171[38]][OxO6171[41]];inp_color_Preview[OxO6171[38]][OxO6171[40]]=element[OxO6171[38]][OxO6171[41]];inp_shade[OxO6171[36]]=revertColor(element[OxO6171[38]].backgroundColor);inp_shade[OxO6171[38]][OxO6171[40]]=element[OxO6171[38]][OxO6171[40]];inp_shade_Preview[OxO6171[38]][OxO6171[40]]=element[OxO6171[38]][OxO6171[40]];inp_id[OxO6171[36]]=element[OxO6171[42]];if(ParseFloatToString(element[OxO6171[38]].marginLeft)){inp_MarginLeft[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].marginLeft);} ;if(ParseFloatToString(element[OxO6171[38]].marginRight)){inp_MarginRight[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].marginRight);} ;if(ParseFloatToString(element[OxO6171[38]].marginTop)){inp_MarginTop[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].marginTop);} ;if(ParseFloatToString(element[OxO6171[38]].marginBottom)){inp_MarginBottom[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].marginBottom);} ;if(ParseFloatToString(element[OxO6171[38]].paddingLeft)){inp_PaddingLeft[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].paddingLeft);} ;if(ParseFloatToString(element[OxO6171[38]].paddingRight)){inp_PaddingRight[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].paddingRight);} ;if(ParseFloatToString(element[OxO6171[38]].paddingTop)){inp_PaddingTop[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].paddingTop);} ;if(ParseFloatToString(element[OxO6171[38]].paddingBottom)){inp_PaddingBottom[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]].paddingBottom);} ;inp_class[OxO6171[36]]=element[OxO6171[43]];var arr=[OxO6171[44],OxO6171[45]];for(var Ox1f5=0;Ox1f5<arr[OxO6171[1]];Ox1f5++){var n=arr[Ox1f5];var Ox42=Window_GetElement(window,OxO6171[46]+n,true);var Ox119=Window_GetElement(window,OxO6171[47]+n+OxO6171[48],true);Ox119[OxO6171[49]]=0;if(ParseFloatToString(element[OxO6171[38]][n])){Ox42[OxO6171[36]]=ParseFloatToString(element[OxO6171[38]][n]);for(var i=0;i<Ox119[OxO6171[50]][OxO6171[1]];i++){var Ox13b=Ox119[OxO6171[50]][i][OxO6171[36]];if(Ox13b&&element[OxO6171[38]][n].indexOf(Ox13b)!=-1){Ox119[OxO6171[49]]=i;break ;} ;} ;} ;} ;sel_align[OxO6171[36]]=element[OxO6171[51]];if(Browser_IsWinIE()){sel_float[OxO6171[36]]=element[OxO6171[38]][OxO6171[52]];} else {sel_float[OxO6171[36]]=element[OxO6171[38]][OxO6171[53]];} ;sel_textalign[OxO6171[36]]=element[OxO6171[38]][OxO6171[54]];inp_tooltip[OxO6171[36]]=element[OxO6171[55]];try{sel_border[OxO6171[36]]=element[OxO6171[38]][OxO6171[56]];if(element[OxO6171[38]][OxO6171[57]]==element[OxO6171[38]][OxO6171[58]]&&element[OxO6171[38]][OxO6171[57]]==element[OxO6171[38]][OxO6171[59]]&&element[OxO6171[38]][OxO6171[57]]==element[OxO6171[38]][OxO6171[60]]){sel_border[OxO6171[36]]=element[OxO6171[38]][OxO6171[57]];} ;if(element[OxO6171[38]][OxO6171[61]]==element[OxO6171[38]][OxO6171[62]]&&element[OxO6171[38]][OxO6171[61]]==element[OxO6171[38]][OxO6171[63]]&&element[OxO6171[38]][OxO6171[61]]==element[OxO6171[38]][OxO6171[64]]){sel_style[OxO6171[36]]=element[OxO6171[38]][OxO6171[61]];} ;} catch(x){} ;} ;SyncTo=function SyncTo_Div(element){var Ox4be=sel_part[OxO6171[36]];if(Ox4be==OxO6171[65]){element[OxO6171[38]][OxO6171[66]]=OxO6171[65];} else {var Ox4bf=Ox4be?OxO6171[67]+Ox4be:Ox4be;var Oxd5=OxO6171[68];var Ox130=sel_style[OxO6171[36]]||OxO6171[2];var Ox4c0=sel_border[OxO6171[36]];element[OxO6171[38]][OxO6171[66]]=OxO6171[65];if(Ox4c0||Ox130){SetStyle(element.style,OxO6171[66]+Ox4bf,Ox4c0+OxO6171[39]+Ox130+OxO6171[39]+Oxd5);} else {SetStyle(element.style,OxO6171[66]+Ox4bf,OxO6171[2]);} ;SetStyle(element.style,OxO6171[66]+Ox4bf,Ox4c0+OxO6171[39]+Ox130+OxO6171[39]+Oxd5);} ;try{element[OxO6171[38]][OxO6171[41]]=inp_color[OxO6171[36]]||OxO6171[2];} catch(x){element[OxO6171[38]][OxO6171[41]]=OxO6171[2];} ;try{element[OxO6171[38]][OxO6171[40]]=inp_shade[OxO6171[36]]||OxO6171[2];} catch(x){element[OxO6171[38]][OxO6171[40]]=OxO6171[2];} ;try{element[OxO6171[38]][OxO6171[37]]=bordercolor[OxO6171[36]]||OxO6171[2];} catch(x){element[OxO6171[38]][OxO6171[37]]=OxO6171[2];} ;element[OxO6171[38]][OxO6171[69]]=inp_PaddingLeft[OxO6171[36]];element[OxO6171[38]][OxO6171[70]]=inp_PaddingRight[OxO6171[36]];element[OxO6171[38]][OxO6171[71]]=inp_PaddingTop[OxO6171[36]];element[OxO6171[38]][OxO6171[72]]=inp_PaddingBottom[OxO6171[36]];element[OxO6171[38]][OxO6171[73]]=inp_MarginLeft[OxO6171[36]];element[OxO6171[38]][OxO6171[74]]=inp_MarginRight[OxO6171[36]];element[OxO6171[38]][OxO6171[75]]=inp_MarginTop[OxO6171[36]];element[OxO6171[38]][OxO6171[76]]=inp_MarginBottom[OxO6171[36]];element[OxO6171[43]]=inp_class[OxO6171[36]];var arr=[OxO6171[44],OxO6171[45]];for(var Ox1f5=0;Ox1f5<arr[OxO6171[1]];Ox1f5++){var n=arr[Ox1f5];var Ox42=Window_GetElement(window,OxO6171[46]+n,true);var Ox4c1=Window_GetElement(window,OxO6171[47]+n+OxO6171[48],true);if(ParseFloatToString(Ox42.value)){element[OxO6171[38]][n]=ParseFloatToString(Ox42.value)+Ox4c1[OxO6171[36]];} else {element[OxO6171[38]][n]=OxO6171[2];} ;} ;var Ox36d=/[^a-z\d]/i;if(Ox36d.test(inp_id.value)){alert(OxO6171[77]);return ;} ;element[OxO6171[51]]=sel_align[OxO6171[36]];element[OxO6171[42]]=inp_id[OxO6171[36]];if(Browser_IsWinIE()){element[OxO6171[38]][OxO6171[52]]=sel_float[OxO6171[36]];} else {element[OxO6171[38]][OxO6171[53]]=sel_float[OxO6171[36]];} ;element[OxO6171[38]][OxO6171[54]]=sel_textalign[OxO6171[36]];element[OxO6171[55]]=inp_tooltip[OxO6171[36]];if(element[OxO6171[55]]==OxO6171[2]){element.removeAttribute(OxO6171[55]);} ;if(element[OxO6171[43]]==OxO6171[2]){element.removeAttribute(OxO6171[43]);} ;if(element[OxO6171[43]]==OxO6171[2]){element.removeAttribute(OxO6171[78]);} ;if(element[OxO6171[51]]==OxO6171[2]){element.removeAttribute(OxO6171[51]);} ;if(element[OxO6171[42]]==OxO6171[2]){element.removeAttribute(OxO6171[42]);} ;} ;bordercolor[OxO6171[79]]=bordercolor_Preview[OxO6171[79]]=function bordercolor_onclick(){SelectColor(bordercolor,bordercolor_Preview);} ;inp_color[OxO6171[79]]=inp_color_Preview[OxO6171[79]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;inp_shade[OxO6171[79]]=inp_shade_Preview[OxO6171[79]]=function inp_shade_onclick(){SelectColor(inp_shade,inp_shade_Preview);} ;