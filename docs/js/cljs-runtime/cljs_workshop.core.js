goog.provide('cljs_workshop.core');
goog.require('cljs.core');
var module$node_modules$spectacle$lib$index=shadow.js.require("module$node_modules$spectacle$lib$index", {});
goog.require('reagent.core');
var module$node_modules$spectacle$lib$themes$default$index=shadow.js.require("module$node_modules$spectacle$lib$themes$default$index", {});
goog.require('cljs.core.async');
goog.require('cljs_workshop.theme');
cljs_workshop.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs_workshop.core.theme = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$spectacle$lib$themes$default$index["default"],cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_workshop.theme.colours,cljs_workshop.theme.font_families], null)));
cljs_workshop.core.start_rotation = (function cljs_workshop$core$start_rotation(){
var rotate_loop = (function cljs_workshop$core$start_rotation_$_rotate_loop(time){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_workshop.core.app_state,cljs.core.inc);

var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__){
return (function (state_7677){
var state_val_7678 = (state_7677[(1)]);
if((state_val_7678 === (1))){
var inst_7672 = cljs.core.async.timeout((30));
var state_7677__$1 = state_7677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7677__$1,(2),inst_7672);
} else {
if((state_val_7678 === (2))){
var inst_7674 = (state_7677[(2)]);
var inst_7675 = window.requestAnimationFrame(cljs_workshop$core$start_rotation_$_rotate_loop);
var state_7677__$1 = (function (){var statearr_7679 = state_7677;
(statearr_7679[(7)] = inst_7674);

return statearr_7679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7677__$1,inst_7675);
} else {
return null;
}
}
});})(c__5590__auto__))
;
return ((function (switch__5358__auto__,c__5590__auto__){
return (function() {
var cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__ = null;
var cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____0 = (function (){
var statearr_7680 = [null,null,null,null,null,null,null,null];
(statearr_7680[(0)] = cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__);

(statearr_7680[(1)] = (1));

return statearr_7680;
});
var cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____1 = (function (state_7677){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7677);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7681){if((e7681 instanceof Object)){
var ex__5362__auto__ = e7681;
var statearr_7682_7684 = state_7677;
(statearr_7682_7684[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7685 = state_7677;
state_7677 = G__7685;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__ = function(state_7677){
switch(arguments.length){
case 0:
return cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____0.call(this);
case 1:
return cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____1.call(this,state_7677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____0;
cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto____1;
return cljs_workshop$core$start_rotation_$_rotate_loop_$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_7683 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7683[(6)] = c__5590__auto__);

return statearr_7683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
return window.requestAnimationFrame((function (time){
return rotate_loop(time);
}));
});
cljs_workshop.core.rotatable_logo = (function cljs_workshop$core$rotatable_logo(angle){
var image_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle),"deg)"].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),image_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png",new cljs.core.Keyword(null,"height","height",1025178622),"10%",new cljs.core.Keyword(null,"width","width",-384071477),"10%"], null)], null)], null);
});
cljs_workshop.core.slide_1 = (function cljs_workshop$core$slide_1(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Clojurescript for Beginners"], null),cljs_workshop.core.rotatable_logo(cljs.core.deref(cljs_workshop.core.app_state))], null);
});
cljs_workshop.core.slide_2 = (function cljs_workshop$core$slide_2(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"What is Clojure?"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.List,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"Lisp Dialect"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"General Purpose"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"Dynamically Typed"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"Homoiconic"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"Functional Programming Language"], null)], null)], null)], null);
});
cljs_workshop.core.slide_3 = (function cljs_workshop$core$slide_3(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Huh?"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.List,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"The only syntax involves curly braces"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"It can be used to write any   application"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"No types"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,"Code is data"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.ListItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Wants to be "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Stateless!"], null)], null)], null)], null)], null);
});
cljs_workshop.core.slide_4 = (function cljs_workshop$core$slide_4(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Eval & Apply"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/evalapply.png",new cljs.core.Keyword(null,"width","width",-384071477),"95%"], null)], null)], null)], null);
});
cljs_workshop.core.slide_5 = (function cljs_workshop$core$slide_5(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Eval & Apply"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/evalapplyjs.png",new cljs.core.Keyword(null,"width","width",-384071477),"85%"], null)], null)], null)], null);
});
cljs_workshop.core.slide_6 = (function cljs_workshop$core$slide_6(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Eval & Apply"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/evalapplyjsdeep.png",new cljs.core.Keyword(null,"width","width",-384071477),"120%"], null)], null)], null)], null);
});
cljs_workshop.core.slide_7 = (function cljs_workshop$core$slide_7(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Clojurescript S Expressions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"("], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#a1c75e"], null)], null),"function "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#647fbb"], null)], null),"arg-1 arg-2 arg-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"...)"], null)], null)], null)], null);
});
cljs_workshop.core.slide_8 = (function cljs_workshop$core$slide_8(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Eval & Apply"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/function-def.png",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null);
});
cljs_workshop.core.slide_9 = (function cljs_workshop$core$slide_9(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Eval & Apply Expansion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/function-expansion.png",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null);
});
cljs_workshop.core.slide_10 = (function cljs_workshop$core$slide_10(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Whats The Point?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/compilerengine.gif"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"You can build your own Compiler!"], null)], null)], null);
});
cljs_workshop.core.slide_11 = (function cljs_workshop$core$slide_11(){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"How?...."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white"], null),"Macros!"], null)], null)], null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/simple-unless.gif"], null)], null)], null);
});
cljs_workshop.core.slide_12 = (function cljs_workshop$core$slide_12(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Text","Text",599975125),"Clourescript Macros"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"for-loop-macro.png"], null)], null)], null)], null);
});
cljs_workshop.core.slide_13 = (function cljs_workshop$core$slide_13(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Slide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Text","Text",599975125),"Clourescript Macros"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Appear,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"map-macro.png"], null)], null)], null)], null);
});
cljs_workshop.core.presentation = (function cljs_workshop$core$presentation(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$spectacle$lib$index.Deck,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs_workshop.core.theme,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645),(500)], null),cljs_workshop.core.slide_1(),cljs_workshop.core.slide_2(),cljs_workshop.core.slide_3(),cljs_workshop.core.slide_4(),cljs_workshop.core.slide_5(),cljs_workshop.core.slide_6(),cljs_workshop.core.slide_7(),cljs_workshop.core.slide_8(),cljs_workshop.core.slide_9(),cljs_workshop.core.slide_10(),cljs_workshop.core.slide_11()], null);
});
cljs_workshop.core.app = (function cljs_workshop$core$app(){
return cljs_workshop.core.presentation();
});
cljs_workshop.core.start_rotation();
cljs_workshop.core.start = (function cljs_workshop$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_workshop.core.app], null),document.getElementById("app"));
});
cljs_workshop.core.init = (function cljs_workshop$core$init(){
return cljs_workshop.core.start();
});
goog.exportSymbol('cljs_workshop.core.init', cljs_workshop.core.init);

//# sourceMappingURL=cljs_workshop.core.js.map
