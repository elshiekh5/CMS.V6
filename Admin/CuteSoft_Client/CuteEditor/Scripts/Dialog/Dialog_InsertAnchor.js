var OxO9d89=["nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","|H1|H2|H3|H4|H5|H6|P|PRE|LI|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|","|","body","document","allanchors","anchor_name","editor","window","name","value","[[ValidName]]","options","length","anchors","OPTION","text","#","images","className","cetempAnchor","anchorname"];function Element_IsBlockControl(element){var name=element[OxO9d89[0]];if(name==OxO9d89[1]){return true;} ;if(name==OxO9d89[2]){return true;} ;if(name==OxO9d89[3]){return true;} ;if(name==OxO9d89[4]){return true;} ;if(name==OxO9d89[5]){return true;} ;if(name==OxO9d89[6]){return true;} ;var Ox11f=element[OxO9d89[8]][OxO9d89[7]];if(Ox11f==OxO9d89[9]||Ox11f==OxO9d89[10]){return true;} ;return false;} ;function Element_CUtil_IsBlock(Ox366){var Ox367=OxO9d89[11];return (Ox366!=null)&&(Ox367.indexOf(OxO9d89[12]+Ox366[OxO9d89[0]]+OxO9d89[12])!=-1);} ;function Window_SelectElement(Ox1a1,element){if(Browser_UseIESelection()){if(Element_IsBlockControl(element)){var Ox2f=Ox1a1[OxO9d89[14]][OxO9d89[13]].createControlRange();Ox2f.add(element);Ox2f.select();} else {var Ox21f=Ox1a1[OxO9d89[14]][OxO9d89[13]].createTextRange();Ox21f.moveToElementText(element);Ox21f.select();} ;} else {var Ox21f=Ox1a1[OxO9d89[14]].createRange();try{Ox21f.selectNode(element);} catch(x){Ox21f.selectNodeContents(element);} ;var Ox12f=Ox1a1.getSelection();Ox12f.removeAllRanges();Ox12f.addRange(Ox21f);} ;} ;var allanchors=Window_GetElement(window,OxO9d89[15],true);var anchor_name=Window_GetElement(window,OxO9d89[16],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxO9d89[17]];var editwin=obj[OxO9d89[18]];var editdoc=obj[OxO9d89[14]];var name=obj[OxO9d89[19]];function insert_link(){var Ox36c=anchor_name[OxO9d89[20]];var Ox36d=/[^a-z\d]/i;if(Ox36d.test(Ox36c)){alert(OxO9d89[21]);} else {Window_SetDialogReturnValue(window,Ox36c);Window_CloseDialog(window);} ;} ;function updateList(){while(allanchors[OxO9d89[22]][OxO9d89[23]]!=0){allanchors[OxO9d89[22]].remove(allanchors.options(0));} ;if(Browser_IsWinIE()){for(var i=0;i<editdoc[OxO9d89[24]][OxO9d89[23]];i++){var Ox36f=document.createElement(OxO9d89[25]);Ox36f[OxO9d89[26]]=OxO9d89[27]+editdoc[OxO9d89[24]][i][OxO9d89[19]];Ox36f[OxO9d89[20]]=editdoc[OxO9d89[24]][i][OxO9d89[19]];allanchors[OxO9d89[22]].add(Ox36f);} ;} else {var Ox370=editdoc[OxO9d89[28]];if(Ox370){for(var j=0;j<Ox370[OxO9d89[23]];j++){var img=Ox370[j];if(img[OxO9d89[29]]==OxO9d89[30]){var Ox36f=document.createElement(OxO9d89[25]);Ox36f[OxO9d89[26]]=OxO9d89[27]+img.getAttribute(OxO9d89[31]);Ox36f[OxO9d89[20]]=img.getAttribute(OxO9d89[31]);allanchors[OxO9d89[22]].add(Ox36f);} ;} ;} ;} ;} ;function selectAnchor(Ox372){editor.FocusDocument();for(var i=0;i<editdoc[OxO9d89[24]][OxO9d89[23]];i++){if(editdoc[OxO9d89[24]][i][OxO9d89[19]]==Ox372){anchor_name[OxO9d89[20]]=Ox372;Window_SelectElement(editwin,editdoc[OxO9d89[24]][i]);} ;} ;} ;if(name){anchor_name[OxO9d89[20]]=name;} ;updateList();