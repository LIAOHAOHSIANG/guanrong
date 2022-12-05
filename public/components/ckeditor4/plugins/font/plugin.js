!function(){function e(e,a){var i,s=e.config,o=a.lang,l=new CKEDITOR.style(a.styleDefinition),r=new n({entries:a.entries,styleVariable:a.styleVariable,styleDefinition:a.styleDefinition});e.addCommand(a.commandName,{exec:function(e,n){var a=n.newStyle,i=n.oldStyle,s=e.getSelection().getRanges()[0],o=void 0===a;(i||a)&&(i&&s.collapsed&&function(e){var n,a,i,s=e.editor,o=e.range,l=e.style;if(n=s.elementPath(),e=n.contains((function(e){return l.checkElementRemovable(e)}))){if(a=o.checkBoundaryOfElement(e,CKEDITOR.START),i=o.checkBoundaryOfElement(e,CKEDITOR.END),a&&i){for(a=o.createBookmark();n=e.getFirst();)n.insertBefore(e);e.remove(),o.moveToBookmark(a)}else a||i?o.moveToPosition(e,a?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_END):(o.splitElement(e),o.moveToPosition(e,CKEDITOR.POSITION_AFTER_END)),t(o,n.elements.slice(),e);s.getSelection().selectRanges([o])}}({editor:e,range:s,style:i}),o?e.removeStyle(i):((s=i)&&(s=!(s=i instanceof CKEDITOR.style&&a instanceof CKEDITOR.style&&CKEDITOR.style.getStyleText(i.getDefinition())===CKEDITOR.style.getStyleText(a.getDefinition()))),s&&e.removeStyle(i),e.applyStyle(a)))},refresh:function(e,t){l.checkApplicable(t,e,e.activeFilter)||this.setState(CKEDITOR.TRISTATE_DISABLED)}}),i=e.getCommand(a.commandName),e.ui.addRichCombo(a.comboName,{label:o.label,title:o.panelTitle,command:a.commandName,toolbar:"styles,"+a.order,defaultValue:"cke-default",allowedContent:l,requiredContent:l,contentTransformations:"span"===a.styleDefinition.element?[[{element:"font",check:"span",left:function(e){return!!e.attributes.size||!!e.attributes.align||!!e.attributes.face},right:function(e){var t=" x-small small medium large x-large xx-large 48px".split(" ");e.name="span",e.attributes.size&&(e.styles["font-size"]=t[e.attributes.size],delete e.attributes.size),e.attributes.align&&(e.styles["text-align"]=e.attributes.align,delete e.attributes.align),e.attributes.face&&(e.styles["font-family"]=e.attributes.face,delete e.attributes.face)}}]]:null,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(s.contentsCss),multiSelect:!1,attributes:{"aria-label":o.panelTitle}},init:function(){var t="("+e.lang.common.optionDefault+")";this.startGroup(o.panelTitle),this.add(this.defaultValue,t,t),r.addToCombo(this)},onClick:function(t){var n=this.getValue();e.focus(),e.fire("saveSnapshot"),e.execCommand(a.commandName,{newStyle:r.getStyle(t),oldStyle:r.getStyle(n)}),e.fire("saveSnapshot")},onRender:function(){e.on("selectionChange",(function(t){var n=this.getValue();(t=r.getMatchingValue(e,t.data.path))?t!=n&&this.setValue(t):this.setValue("",a.defaultLabel)}),this),i.on("state",(function(){this.setState(i.state)}),this)},refresh:function(){this.setState(i.state)}})}function t(e,n,a){var i=n.pop();if(i){if(a)return t(e,n,i.equals(a)?null:a);a=i.clone(),e.insertNode(a),e.moveToPosition(a,CKEDITOR.POSITION_AFTER_START),t(e,n)}}var n=CKEDITOR.tools.createClass({$:function(e){var t=e.entries.split(";");this._.data={},this._.names=[];for(var n=0;n<t.length;n++){var a,i,s=t[n];s?(a=(s=s.split("/"))[0],s=s[1],(i={})[e.styleVariable]=s||a,this._.data[a]=new CKEDITOR.style(e.styleDefinition,i),this._.data[a]._.definition.name=a,this._.names.push(a)):(t.splice(n,1),n--)}},proto:{getStyle:function(e){return this._.data[e]},addToCombo:function(e){for(var t=0;t<this._.names.length;t++){var n=this._.names[t];e.add(n,this.getStyle(n).buildPreview(),n)}},getMatchingValue:function(e,t){for(var n,a=t.elements,i=0;i<a.length;i++)if(n=a[i],n=this._.findMatchingStyleName(e,n))return n;return null}},_:{findMatchingStyleName:function(e,t){return CKEDITOR.tools.array.find(this._.names,(function(n){return this.getStyle(n).checkElementMatch(t,!0,e)}),this)}}});CKEDITOR.plugins.add("font",{requires:"richcombo",lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",init:function(t){var n=t.config;e(t,{comboName:"Font",commandName:"font",styleVariable:"family",lang:t.lang.font,entries:n.font_names,defaultLabel:n.font_defaultLabel,styleDefinition:n.font_style,order:30}),e(t,{comboName:"FontSize",commandName:"fontSize",styleVariable:"size",lang:t.lang.font.fontSize,entries:n.fontSize_sizes,defaultLabel:n.fontSize_defaultLabel,styleDefinition:n.fontSize_style,order:40})}})}(),CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif",CKEDITOR.config.font_defaultLabel="",CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]},CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px",CKEDITOR.config.fontSize_defaultLabel="",CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};