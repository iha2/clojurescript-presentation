goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__5652 = arguments.length;
switch (G__5652) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5654 = (function (f,blockable,meta5655){
this.f = f;
this.blockable = blockable;
this.meta5655 = meta5655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5656,meta5655__$1){
var self__ = this;
var _5656__$1 = this;
return (new cljs.core.async.t_cljs$core$async5654(self__.f,self__.blockable,meta5655__$1));
});

cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5656){
var self__ = this;
var _5656__$1 = this;
return self__.meta5655;
});

cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async5654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async5654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta5655","meta5655",-463128249,null)], null);
});

cljs.core.async.t_cljs$core$async5654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5654";

cljs.core.async.t_cljs$core$async5654.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async5654");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5654.
 */
cljs.core.async.__GT_t_cljs$core$async5654 = (function cljs$core$async$__GT_t_cljs$core$async5654(f__$1,blockable__$1,meta5655){
return (new cljs.core.async.t_cljs$core$async5654(f__$1,blockable__$1,meta5655));
});

}

return (new cljs.core.async.t_cljs$core$async5654(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__5666 = arguments.length;
switch (G__5666) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__5672 = arguments.length;
switch (G__5672) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__5678 = arguments.length;
switch (G__5678) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_5680 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_5680) : fn1.call(null,val_5680));
} else {
cljs.core.async.impl.dispatch.run(((function (val_5680,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_5680) : fn1.call(null,val_5680));
});})(val_5680,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5683 = arguments.length;
switch (G__5683) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___5693 = n;
var x_5694 = (0);
while(true){
if((x_5694 < n__4408__auto___5693)){
(a[x_5694] = (0));

var G__5695 = (x_5694 + (1));
x_5694 = G__5695;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__5696 = (i + (1));
i = G__5696;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5697 = (function (flag,meta5698){
this.flag = flag;
this.meta5698 = meta5698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_5699,meta5698__$1){
var self__ = this;
var _5699__$1 = this;
return (new cljs.core.async.t_cljs$core$async5697(self__.flag,meta5698__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_5699){
var self__ = this;
var _5699__$1 = this;
return self__.meta5698;
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta5698","meta5698",591746827,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async5697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5697";

cljs.core.async.t_cljs$core$async5697.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async5697");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5697.
 */
cljs.core.async.__GT_t_cljs$core$async5697 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5697(flag__$1,meta5698){
return (new cljs.core.async.t_cljs$core$async5697(flag__$1,meta5698));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async5697(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5705 = (function (flag,cb,meta5706){
this.flag = flag;
this.cb = cb;
this.meta5706 = meta5706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5707,meta5706__$1){
var self__ = this;
var _5707__$1 = this;
return (new cljs.core.async.t_cljs$core$async5705(self__.flag,self__.cb,meta5706__$1));
});

cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5707){
var self__ = this;
var _5707__$1 = this;
return self__.meta5706;
});

cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async5705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async5705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta5706","meta5706",1896224861,null)], null);
});

cljs.core.async.t_cljs$core$async5705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5705";

cljs.core.async.t_cljs$core$async5705.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async5705");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5705.
 */
cljs.core.async.__GT_t_cljs$core$async5705 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5705(flag__$1,cb__$1,meta5706){
return (new cljs.core.async.t_cljs$core$async5705(flag__$1,cb__$1,meta5706));
});

}

return (new cljs.core.async.t_cljs$core$async5705(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5716_SHARP_){
var G__5722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5716_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__5722) : fret.call(null,G__5722));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5717_SHARP_){
var G__5723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5717_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__5723) : fret.call(null,G__5723));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__5725 = (i + (1));
i = G__5725;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5731 = arguments.length;
var i__4532__auto___5732 = (0);
while(true){
if((i__4532__auto___5732 < len__4531__auto___5731)){
args__4534__auto__.push((arguments[i__4532__auto___5732]));

var G__5733 = (i__4532__auto___5732 + (1));
i__4532__auto___5732 = G__5733;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5728){
var map__5729 = p__5728;
var map__5729__$1 = ((((!((map__5729 == null)))?(((((map__5729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5729):map__5729);
var opts = map__5729__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5726){
var G__5727 = cljs.core.first(seq5726);
var seq5726__$1 = cljs.core.next(seq5726);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5727,seq5726__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__5736 = arguments.length;
switch (G__5736) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__5590__auto___5819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___5819){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___5819){
return (function (state_5771){
var state_val_5772 = (state_5771[(1)]);
if((state_val_5772 === (7))){
var inst_5763 = (state_5771[(2)]);
var state_5771__$1 = state_5771;
var statearr_5794_5821 = state_5771__$1;
(statearr_5794_5821[(2)] = inst_5763);

(statearr_5794_5821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (1))){
var state_5771__$1 = state_5771;
var statearr_5795_5822 = state_5771__$1;
(statearr_5795_5822[(2)] = null);

(statearr_5795_5822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (4))){
var inst_5745 = (state_5771[(7)]);
var inst_5745__$1 = (state_5771[(2)]);
var inst_5747 = (inst_5745__$1 == null);
var state_5771__$1 = (function (){var statearr_5796 = state_5771;
(statearr_5796[(7)] = inst_5745__$1);

return statearr_5796;
})();
if(cljs.core.truth_(inst_5747)){
var statearr_5797_5826 = state_5771__$1;
(statearr_5797_5826[(1)] = (5));

} else {
var statearr_5798_5827 = state_5771__$1;
(statearr_5798_5827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (13))){
var state_5771__$1 = state_5771;
var statearr_5799_5829 = state_5771__$1;
(statearr_5799_5829[(2)] = null);

(statearr_5799_5829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (6))){
var inst_5745 = (state_5771[(7)]);
var state_5771__$1 = state_5771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5771__$1,(11),to,inst_5745);
} else {
if((state_val_5772 === (3))){
var inst_5765 = (state_5771[(2)]);
var state_5771__$1 = state_5771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5771__$1,inst_5765);
} else {
if((state_val_5772 === (12))){
var state_5771__$1 = state_5771;
var statearr_5800_5830 = state_5771__$1;
(statearr_5800_5830[(2)] = null);

(statearr_5800_5830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (2))){
var state_5771__$1 = state_5771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5771__$1,(4),from);
} else {
if((state_val_5772 === (11))){
var inst_5756 = (state_5771[(2)]);
var state_5771__$1 = state_5771;
if(cljs.core.truth_(inst_5756)){
var statearr_5801_5832 = state_5771__$1;
(statearr_5801_5832[(1)] = (12));

} else {
var statearr_5802_5833 = state_5771__$1;
(statearr_5802_5833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (9))){
var state_5771__$1 = state_5771;
var statearr_5803_5836 = state_5771__$1;
(statearr_5803_5836[(2)] = null);

(statearr_5803_5836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (5))){
var state_5771__$1 = state_5771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5804_5839 = state_5771__$1;
(statearr_5804_5839[(1)] = (8));

} else {
var statearr_5805_5840 = state_5771__$1;
(statearr_5805_5840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (14))){
var inst_5761 = (state_5771[(2)]);
var state_5771__$1 = state_5771;
var statearr_5806_5841 = state_5771__$1;
(statearr_5806_5841[(2)] = inst_5761);

(statearr_5806_5841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (10))){
var inst_5753 = (state_5771[(2)]);
var state_5771__$1 = state_5771;
var statearr_5807_5842 = state_5771__$1;
(statearr_5807_5842[(2)] = inst_5753);

(statearr_5807_5842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5772 === (8))){
var inst_5750 = cljs.core.async.close_BANG_(to);
var state_5771__$1 = state_5771;
var statearr_5808_5843 = state_5771__$1;
(statearr_5808_5843[(2)] = inst_5750);

(statearr_5808_5843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___5819))
;
return ((function (switch__5358__auto__,c__5590__auto___5819){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_5809 = [null,null,null,null,null,null,null,null];
(statearr_5809[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_5809[(1)] = (1));

return statearr_5809;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_5771){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_5771);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e5810){if((e5810 instanceof Object)){
var ex__5362__auto__ = e5810;
var statearr_5811_5850 = state_5771;
(statearr_5811_5850[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5851 = state_5771;
state_5771 = G__5851;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_5771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_5771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___5819))
})();
var state__5592__auto__ = (function (){var statearr_5812 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_5812[(6)] = c__5590__auto___5819);

return statearr_5812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___5819))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__5852){
var vec__5853 = p__5852;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5853,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5853,(1),null);
var job = vec__5853;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5590__auto___6062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results){
return (function (state_5860){
var state_val_5861 = (state_5860[(1)]);
if((state_val_5861 === (1))){
var state_5860__$1 = state_5860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5860__$1,(2),res,v);
} else {
if((state_val_5861 === (2))){
var inst_5857 = (state_5860[(2)]);
var inst_5858 = cljs.core.async.close_BANG_(res);
var state_5860__$1 = (function (){var statearr_5864 = state_5860;
(statearr_5864[(7)] = inst_5857);

return statearr_5864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_5860__$1,inst_5858);
} else {
return null;
}
}
});})(c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results))
;
return ((function (switch__5358__auto__,c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_5867 = [null,null,null,null,null,null,null,null];
(statearr_5867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__);

(statearr_5867[(1)] = (1));

return statearr_5867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1 = (function (state_5860){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_5860);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e5868){if((e5868 instanceof Object)){
var ex__5362__auto__ = e5868;
var statearr_5869_6064 = state_5860;
(statearr_5869_6064[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6065 = state_5860;
state_5860 = G__6065;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = function(state_5860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1.call(this,state_5860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results))
})();
var state__5592__auto__ = (function (){var statearr_5870 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_5870[(6)] = c__5590__auto___6062);

return statearr_5870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6062,res,vec__5853,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__5871){
var vec__5872 = p__5871;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5872,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5872,(1),null);
var job = vec__5872;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___6069 = n;
var __6071 = (0);
while(true){
if((__6071 < n__4408__auto___6069)){
var G__5875_6072 = type;
var G__5875_6073__$1 = (((G__5875_6072 instanceof cljs.core.Keyword))?G__5875_6072.fqn:null);
switch (G__5875_6073__$1) {
case "compute":
var c__5590__auto___6075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__6071,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (__6071,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function (state_5888){
var state_val_5889 = (state_5888[(1)]);
if((state_val_5889 === (1))){
var state_5888__$1 = state_5888;
var statearr_5890_6076 = state_5888__$1;
(statearr_5890_6076[(2)] = null);

(statearr_5890_6076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5889 === (2))){
var state_5888__$1 = state_5888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5888__$1,(4),jobs);
} else {
if((state_val_5889 === (3))){
var inst_5886 = (state_5888[(2)]);
var state_5888__$1 = state_5888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5888__$1,inst_5886);
} else {
if((state_val_5889 === (4))){
var inst_5878 = (state_5888[(2)]);
var inst_5879 = process(inst_5878);
var state_5888__$1 = state_5888;
if(cljs.core.truth_(inst_5879)){
var statearr_5891_6077 = state_5888__$1;
(statearr_5891_6077[(1)] = (5));

} else {
var statearr_5892_6078 = state_5888__$1;
(statearr_5892_6078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5889 === (5))){
var state_5888__$1 = state_5888;
var statearr_5893_6080 = state_5888__$1;
(statearr_5893_6080[(2)] = null);

(statearr_5893_6080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5889 === (6))){
var state_5888__$1 = state_5888;
var statearr_5895_6081 = state_5888__$1;
(statearr_5895_6081[(2)] = null);

(statearr_5895_6081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5889 === (7))){
var inst_5884 = (state_5888[(2)]);
var state_5888__$1 = state_5888;
var statearr_5897_6082 = state_5888__$1;
(statearr_5897_6082[(2)] = inst_5884);

(statearr_5897_6082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__6071,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
;
return ((function (__6071,switch__5358__auto__,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_5898 = [null,null,null,null,null,null,null];
(statearr_5898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__);

(statearr_5898[(1)] = (1));

return statearr_5898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1 = (function (state_5888){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_5888);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e5899){if((e5899 instanceof Object)){
var ex__5362__auto__ = e5899;
var statearr_5901_6087 = state_5888;
(statearr_5901_6087[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6089 = state_5888;
state_5888 = G__6089;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = function(state_5888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1.call(this,state_5888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__;
})()
;})(__6071,switch__5358__auto__,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_5902 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_5902[(6)] = c__5590__auto___6075);

return statearr_5902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(__6071,c__5590__auto___6075,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
);


break;
case "async":
var c__5590__auto___6090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__6071,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (__6071,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function (state_5915){
var state_val_5916 = (state_5915[(1)]);
if((state_val_5916 === (1))){
var state_5915__$1 = state_5915;
var statearr_5917_6091 = state_5915__$1;
(statearr_5917_6091[(2)] = null);

(statearr_5917_6091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5916 === (2))){
var state_5915__$1 = state_5915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5915__$1,(4),jobs);
} else {
if((state_val_5916 === (3))){
var inst_5913 = (state_5915[(2)]);
var state_5915__$1 = state_5915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5915__$1,inst_5913);
} else {
if((state_val_5916 === (4))){
var inst_5905 = (state_5915[(2)]);
var inst_5906 = async(inst_5905);
var state_5915__$1 = state_5915;
if(cljs.core.truth_(inst_5906)){
var statearr_5918_6092 = state_5915__$1;
(statearr_5918_6092[(1)] = (5));

} else {
var statearr_5919_6093 = state_5915__$1;
(statearr_5919_6093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5916 === (5))){
var state_5915__$1 = state_5915;
var statearr_5920_6094 = state_5915__$1;
(statearr_5920_6094[(2)] = null);

(statearr_5920_6094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5916 === (6))){
var state_5915__$1 = state_5915;
var statearr_5921_6095 = state_5915__$1;
(statearr_5921_6095[(2)] = null);

(statearr_5921_6095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5916 === (7))){
var inst_5911 = (state_5915[(2)]);
var state_5915__$1 = state_5915;
var statearr_5922_6096 = state_5915__$1;
(statearr_5922_6096[(2)] = inst_5911);

(statearr_5922_6096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__6071,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
;
return ((function (__6071,switch__5358__auto__,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_5923 = [null,null,null,null,null,null,null];
(statearr_5923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__);

(statearr_5923[(1)] = (1));

return statearr_5923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1 = (function (state_5915){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_5915);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e5924){if((e5924 instanceof Object)){
var ex__5362__auto__ = e5924;
var statearr_5925_6097 = state_5915;
(statearr_5925_6097[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6098 = state_5915;
state_5915 = G__6098;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = function(state_5915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1.call(this,state_5915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__;
})()
;})(__6071,switch__5358__auto__,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_5926 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_5926[(6)] = c__5590__auto___6090);

return statearr_5926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(__6071,c__5590__auto___6090,G__5875_6072,G__5875_6073__$1,n__4408__auto___6069,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5875_6073__$1)].join('')));

}

var G__6099 = (__6071 + (1));
__6071 = G__6099;
continue;
} else {
}
break;
}

var c__5590__auto___6100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6100,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6100,jobs,results,process,async){
return (function (state_5951){
var state_val_5952 = (state_5951[(1)]);
if((state_val_5952 === (1))){
var state_5951__$1 = state_5951;
var statearr_5953_6101 = state_5951__$1;
(statearr_5953_6101[(2)] = null);

(statearr_5953_6101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5952 === (2))){
var state_5951__$1 = state_5951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5951__$1,(4),from);
} else {
if((state_val_5952 === (3))){
var inst_5946 = (state_5951[(2)]);
var state_5951__$1 = state_5951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5951__$1,inst_5946);
} else {
if((state_val_5952 === (4))){
var inst_5929 = (state_5951[(7)]);
var inst_5929__$1 = (state_5951[(2)]);
var inst_5930 = (inst_5929__$1 == null);
var state_5951__$1 = (function (){var statearr_5954 = state_5951;
(statearr_5954[(7)] = inst_5929__$1);

return statearr_5954;
})();
if(cljs.core.truth_(inst_5930)){
var statearr_5955_6102 = state_5951__$1;
(statearr_5955_6102[(1)] = (5));

} else {
var statearr_5956_6103 = state_5951__$1;
(statearr_5956_6103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5952 === (5))){
var inst_5932 = cljs.core.async.close_BANG_(jobs);
var state_5951__$1 = state_5951;
var statearr_5960_6104 = state_5951__$1;
(statearr_5960_6104[(2)] = inst_5932);

(statearr_5960_6104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5952 === (6))){
var inst_5934 = (state_5951[(8)]);
var inst_5929 = (state_5951[(7)]);
var inst_5934__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_5935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5936 = [inst_5929,inst_5934__$1];
var inst_5937 = (new cljs.core.PersistentVector(null,2,(5),inst_5935,inst_5936,null));
var state_5951__$1 = (function (){var statearr_5962 = state_5951;
(statearr_5962[(8)] = inst_5934__$1);

return statearr_5962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5951__$1,(8),jobs,inst_5937);
} else {
if((state_val_5952 === (7))){
var inst_5944 = (state_5951[(2)]);
var state_5951__$1 = state_5951;
var statearr_5963_6105 = state_5951__$1;
(statearr_5963_6105[(2)] = inst_5944);

(statearr_5963_6105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5952 === (8))){
var inst_5934 = (state_5951[(8)]);
var inst_5939 = (state_5951[(2)]);
var state_5951__$1 = (function (){var statearr_5964 = state_5951;
(statearr_5964[(9)] = inst_5939);

return statearr_5964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5951__$1,(9),results,inst_5934);
} else {
if((state_val_5952 === (9))){
var inst_5941 = (state_5951[(2)]);
var state_5951__$1 = (function (){var statearr_5965 = state_5951;
(statearr_5965[(10)] = inst_5941);

return statearr_5965;
})();
var statearr_5967_6106 = state_5951__$1;
(statearr_5967_6106[(2)] = null);

(statearr_5967_6106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___6100,jobs,results,process,async))
;
return ((function (switch__5358__auto__,c__5590__auto___6100,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_5971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__);

(statearr_5971[(1)] = (1));

return statearr_5971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1 = (function (state_5951){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_5951);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e5972){if((e5972 instanceof Object)){
var ex__5362__auto__ = e5972;
var statearr_5973_6107 = state_5951;
(statearr_5973_6107[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6108 = state_5951;
state_5951 = G__6108;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = function(state_5951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1.call(this,state_5951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6100,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_5974 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_5974[(6)] = c__5590__auto___6100);

return statearr_5974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6100,jobs,results,process,async))
);


var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__,jobs,results,process,async){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__,jobs,results,process,async){
return (function (state_6016){
var state_val_6017 = (state_6016[(1)]);
if((state_val_6017 === (7))){
var inst_6010 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
var statearr_6019_6109 = state_6016__$1;
(statearr_6019_6109[(2)] = inst_6010);

(statearr_6019_6109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (20))){
var state_6016__$1 = state_6016;
var statearr_6020_6110 = state_6016__$1;
(statearr_6020_6110[(2)] = null);

(statearr_6020_6110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (1))){
var state_6016__$1 = state_6016;
var statearr_6023_6111 = state_6016__$1;
(statearr_6023_6111[(2)] = null);

(statearr_6023_6111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (4))){
var inst_5979 = (state_6016[(7)]);
var inst_5979__$1 = (state_6016[(2)]);
var inst_5980 = (inst_5979__$1 == null);
var state_6016__$1 = (function (){var statearr_6024 = state_6016;
(statearr_6024[(7)] = inst_5979__$1);

return statearr_6024;
})();
if(cljs.core.truth_(inst_5980)){
var statearr_6025_6112 = state_6016__$1;
(statearr_6025_6112[(1)] = (5));

} else {
var statearr_6026_6113 = state_6016__$1;
(statearr_6026_6113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (15))){
var inst_5992 = (state_6016[(8)]);
var state_6016__$1 = state_6016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6016__$1,(18),to,inst_5992);
} else {
if((state_val_6017 === (21))){
var inst_6005 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
var statearr_6030_6114 = state_6016__$1;
(statearr_6030_6114[(2)] = inst_6005);

(statearr_6030_6114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (13))){
var inst_6007 = (state_6016[(2)]);
var state_6016__$1 = (function (){var statearr_6031 = state_6016;
(statearr_6031[(9)] = inst_6007);

return statearr_6031;
})();
var statearr_6032_6115 = state_6016__$1;
(statearr_6032_6115[(2)] = null);

(statearr_6032_6115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (6))){
var inst_5979 = (state_6016[(7)]);
var state_6016__$1 = state_6016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6016__$1,(11),inst_5979);
} else {
if((state_val_6017 === (17))){
var inst_6000 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
if(cljs.core.truth_(inst_6000)){
var statearr_6033_6116 = state_6016__$1;
(statearr_6033_6116[(1)] = (19));

} else {
var statearr_6034_6117 = state_6016__$1;
(statearr_6034_6117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (3))){
var inst_6012 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6016__$1,inst_6012);
} else {
if((state_val_6017 === (12))){
var inst_5989 = (state_6016[(10)]);
var state_6016__$1 = state_6016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6016__$1,(14),inst_5989);
} else {
if((state_val_6017 === (2))){
var state_6016__$1 = state_6016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6016__$1,(4),results);
} else {
if((state_val_6017 === (19))){
var state_6016__$1 = state_6016;
var statearr_6038_6118 = state_6016__$1;
(statearr_6038_6118[(2)] = null);

(statearr_6038_6118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (11))){
var inst_5989 = (state_6016[(2)]);
var state_6016__$1 = (function (){var statearr_6039 = state_6016;
(statearr_6039[(10)] = inst_5989);

return statearr_6039;
})();
var statearr_6040_6119 = state_6016__$1;
(statearr_6040_6119[(2)] = null);

(statearr_6040_6119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (9))){
var state_6016__$1 = state_6016;
var statearr_6041_6120 = state_6016__$1;
(statearr_6041_6120[(2)] = null);

(statearr_6041_6120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (5))){
var state_6016__$1 = state_6016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6042_6121 = state_6016__$1;
(statearr_6042_6121[(1)] = (8));

} else {
var statearr_6043_6122 = state_6016__$1;
(statearr_6043_6122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (14))){
var inst_5992 = (state_6016[(8)]);
var inst_5994 = (state_6016[(11)]);
var inst_5992__$1 = (state_6016[(2)]);
var inst_5993 = (inst_5992__$1 == null);
var inst_5994__$1 = cljs.core.not(inst_5993);
var state_6016__$1 = (function (){var statearr_6044 = state_6016;
(statearr_6044[(8)] = inst_5992__$1);

(statearr_6044[(11)] = inst_5994__$1);

return statearr_6044;
})();
if(inst_5994__$1){
var statearr_6045_6123 = state_6016__$1;
(statearr_6045_6123[(1)] = (15));

} else {
var statearr_6046_6124 = state_6016__$1;
(statearr_6046_6124[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (16))){
var inst_5994 = (state_6016[(11)]);
var state_6016__$1 = state_6016;
var statearr_6048_6125 = state_6016__$1;
(statearr_6048_6125[(2)] = inst_5994);

(statearr_6048_6125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (10))){
var inst_5986 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
var statearr_6051_6126 = state_6016__$1;
(statearr_6051_6126[(2)] = inst_5986);

(statearr_6051_6126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (18))){
var inst_5997 = (state_6016[(2)]);
var state_6016__$1 = state_6016;
var statearr_6052_6127 = state_6016__$1;
(statearr_6052_6127[(2)] = inst_5997);

(statearr_6052_6127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6017 === (8))){
var inst_5983 = cljs.core.async.close_BANG_(to);
var state_6016__$1 = state_6016;
var statearr_6053_6128 = state_6016__$1;
(statearr_6053_6128[(2)] = inst_5983);

(statearr_6053_6128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto__,jobs,results,process,async))
;
return ((function (switch__5358__auto__,c__5590__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_6054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__);

(statearr_6054[(1)] = (1));

return statearr_6054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1 = (function (state_6016){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6016);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6055){if((e6055 instanceof Object)){
var ex__5362__auto__ = e6055;
var statearr_6056_6129 = state_6016;
(statearr_6056_6129[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6130 = state_6016;
state_6016 = G__6130;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__ = function(state_6016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1.call(this,state_6016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__,jobs,results,process,async))
})();
var state__5592__auto__ = (function (){var statearr_6057 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6057[(6)] = c__5590__auto__);

return statearr_6057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__,jobs,results,process,async))
);

return c__5590__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__6132 = arguments.length;
switch (G__6132) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__6135 = arguments.length;
switch (G__6135) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__6138 = arguments.length;
switch (G__6138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__5590__auto___6187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6187,tc,fc){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6187,tc,fc){
return (function (state_6164){
var state_val_6165 = (state_6164[(1)]);
if((state_val_6165 === (7))){
var inst_6160 = (state_6164[(2)]);
var state_6164__$1 = state_6164;
var statearr_6166_6188 = state_6164__$1;
(statearr_6166_6188[(2)] = inst_6160);

(statearr_6166_6188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (1))){
var state_6164__$1 = state_6164;
var statearr_6167_6189 = state_6164__$1;
(statearr_6167_6189[(2)] = null);

(statearr_6167_6189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (4))){
var inst_6141 = (state_6164[(7)]);
var inst_6141__$1 = (state_6164[(2)]);
var inst_6142 = (inst_6141__$1 == null);
var state_6164__$1 = (function (){var statearr_6168 = state_6164;
(statearr_6168[(7)] = inst_6141__$1);

return statearr_6168;
})();
if(cljs.core.truth_(inst_6142)){
var statearr_6169_6190 = state_6164__$1;
(statearr_6169_6190[(1)] = (5));

} else {
var statearr_6170_6191 = state_6164__$1;
(statearr_6170_6191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (13))){
var state_6164__$1 = state_6164;
var statearr_6171_6192 = state_6164__$1;
(statearr_6171_6192[(2)] = null);

(statearr_6171_6192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (6))){
var inst_6141 = (state_6164[(7)]);
var inst_6147 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_6141) : p.call(null,inst_6141));
var state_6164__$1 = state_6164;
if(cljs.core.truth_(inst_6147)){
var statearr_6172_6193 = state_6164__$1;
(statearr_6172_6193[(1)] = (9));

} else {
var statearr_6173_6194 = state_6164__$1;
(statearr_6173_6194[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (3))){
var inst_6162 = (state_6164[(2)]);
var state_6164__$1 = state_6164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6164__$1,inst_6162);
} else {
if((state_val_6165 === (12))){
var state_6164__$1 = state_6164;
var statearr_6174_6195 = state_6164__$1;
(statearr_6174_6195[(2)] = null);

(statearr_6174_6195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (2))){
var state_6164__$1 = state_6164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6164__$1,(4),ch);
} else {
if((state_val_6165 === (11))){
var inst_6141 = (state_6164[(7)]);
var inst_6151 = (state_6164[(2)]);
var state_6164__$1 = state_6164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6164__$1,(8),inst_6151,inst_6141);
} else {
if((state_val_6165 === (9))){
var state_6164__$1 = state_6164;
var statearr_6175_6196 = state_6164__$1;
(statearr_6175_6196[(2)] = tc);

(statearr_6175_6196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (5))){
var inst_6144 = cljs.core.async.close_BANG_(tc);
var inst_6145 = cljs.core.async.close_BANG_(fc);
var state_6164__$1 = (function (){var statearr_6176 = state_6164;
(statearr_6176[(8)] = inst_6144);

return statearr_6176;
})();
var statearr_6177_6197 = state_6164__$1;
(statearr_6177_6197[(2)] = inst_6145);

(statearr_6177_6197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (14))){
var inst_6158 = (state_6164[(2)]);
var state_6164__$1 = state_6164;
var statearr_6178_6198 = state_6164__$1;
(statearr_6178_6198[(2)] = inst_6158);

(statearr_6178_6198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (10))){
var state_6164__$1 = state_6164;
var statearr_6179_6199 = state_6164__$1;
(statearr_6179_6199[(2)] = fc);

(statearr_6179_6199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6165 === (8))){
var inst_6153 = (state_6164[(2)]);
var state_6164__$1 = state_6164;
if(cljs.core.truth_(inst_6153)){
var statearr_6180_6200 = state_6164__$1;
(statearr_6180_6200[(1)] = (12));

} else {
var statearr_6181_6201 = state_6164__$1;
(statearr_6181_6201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___6187,tc,fc))
;
return ((function (switch__5358__auto__,c__5590__auto___6187,tc,fc){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_6182 = [null,null,null,null,null,null,null,null,null];
(statearr_6182[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_6182[(1)] = (1));

return statearr_6182;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_6164){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6164);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6183){if((e6183 instanceof Object)){
var ex__5362__auto__ = e6183;
var statearr_6184_6202 = state_6164;
(statearr_6184_6202[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6203 = state_6164;
state_6164 = G__6203;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_6164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_6164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6187,tc,fc))
})();
var state__5592__auto__ = (function (){var statearr_6185 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6185[(6)] = c__5590__auto___6187);

return statearr_6185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6187,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__){
return (function (state_6224){
var state_val_6225 = (state_6224[(1)]);
if((state_val_6225 === (7))){
var inst_6220 = (state_6224[(2)]);
var state_6224__$1 = state_6224;
var statearr_6226_6244 = state_6224__$1;
(statearr_6226_6244[(2)] = inst_6220);

(statearr_6226_6244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (1))){
var inst_6204 = init;
var state_6224__$1 = (function (){var statearr_6227 = state_6224;
(statearr_6227[(7)] = inst_6204);

return statearr_6227;
})();
var statearr_6228_6245 = state_6224__$1;
(statearr_6228_6245[(2)] = null);

(statearr_6228_6245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (4))){
var inst_6207 = (state_6224[(8)]);
var inst_6207__$1 = (state_6224[(2)]);
var inst_6208 = (inst_6207__$1 == null);
var state_6224__$1 = (function (){var statearr_6229 = state_6224;
(statearr_6229[(8)] = inst_6207__$1);

return statearr_6229;
})();
if(cljs.core.truth_(inst_6208)){
var statearr_6230_6246 = state_6224__$1;
(statearr_6230_6246[(1)] = (5));

} else {
var statearr_6231_6247 = state_6224__$1;
(statearr_6231_6247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (6))){
var inst_6211 = (state_6224[(9)]);
var inst_6204 = (state_6224[(7)]);
var inst_6207 = (state_6224[(8)]);
var inst_6211__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_6204,inst_6207) : f.call(null,inst_6204,inst_6207));
var inst_6212 = cljs.core.reduced_QMARK_(inst_6211__$1);
var state_6224__$1 = (function (){var statearr_6232 = state_6224;
(statearr_6232[(9)] = inst_6211__$1);

return statearr_6232;
})();
if(inst_6212){
var statearr_6233_6248 = state_6224__$1;
(statearr_6233_6248[(1)] = (8));

} else {
var statearr_6234_6249 = state_6224__$1;
(statearr_6234_6249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (3))){
var inst_6222 = (state_6224[(2)]);
var state_6224__$1 = state_6224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6224__$1,inst_6222);
} else {
if((state_val_6225 === (2))){
var state_6224__$1 = state_6224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6224__$1,(4),ch);
} else {
if((state_val_6225 === (9))){
var inst_6211 = (state_6224[(9)]);
var inst_6204 = inst_6211;
var state_6224__$1 = (function (){var statearr_6235 = state_6224;
(statearr_6235[(7)] = inst_6204);

return statearr_6235;
})();
var statearr_6236_6250 = state_6224__$1;
(statearr_6236_6250[(2)] = null);

(statearr_6236_6250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (5))){
var inst_6204 = (state_6224[(7)]);
var state_6224__$1 = state_6224;
var statearr_6237_6251 = state_6224__$1;
(statearr_6237_6251[(2)] = inst_6204);

(statearr_6237_6251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (10))){
var inst_6218 = (state_6224[(2)]);
var state_6224__$1 = state_6224;
var statearr_6238_6252 = state_6224__$1;
(statearr_6238_6252[(2)] = inst_6218);

(statearr_6238_6252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6225 === (8))){
var inst_6211 = (state_6224[(9)]);
var inst_6214 = cljs.core.deref(inst_6211);
var state_6224__$1 = state_6224;
var statearr_6239_6253 = state_6224__$1;
(statearr_6239_6253[(2)] = inst_6214);

(statearr_6239_6253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto__))
;
return ((function (switch__5358__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__5359__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5359__auto____0 = (function (){
var statearr_6240 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6240[(0)] = cljs$core$async$reduce_$_state_machine__5359__auto__);

(statearr_6240[(1)] = (1));

return statearr_6240;
});
var cljs$core$async$reduce_$_state_machine__5359__auto____1 = (function (state_6224){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6224);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6241){if((e6241 instanceof Object)){
var ex__5362__auto__ = e6241;
var statearr_6242_6254 = state_6224;
(statearr_6242_6254[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6255 = state_6224;
state_6224 = G__6255;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5359__auto__ = function(state_6224){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5359__auto____1.call(this,state_6224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5359__auto____0;
cljs$core$async$reduce_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5359__auto____1;
return cljs$core$async$reduce_$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_6243 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6243[(6)] = c__5590__auto__);

return statearr_6243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__,f__$1){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__,f__$1){
return (function (state_6261){
var state_val_6262 = (state_6261[(1)]);
if((state_val_6262 === (1))){
var inst_6256 = cljs.core.async.reduce(f__$1,init,ch);
var state_6261__$1 = state_6261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6261__$1,(2),inst_6256);
} else {
if((state_val_6262 === (2))){
var inst_6258 = (state_6261[(2)]);
var inst_6259 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_6258) : f__$1.call(null,inst_6258));
var state_6261__$1 = state_6261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6261__$1,inst_6259);
} else {
return null;
}
}
});})(c__5590__auto__,f__$1))
;
return ((function (switch__5358__auto__,c__5590__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__5359__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5359__auto____0 = (function (){
var statearr_6263 = [null,null,null,null,null,null,null];
(statearr_6263[(0)] = cljs$core$async$transduce_$_state_machine__5359__auto__);

(statearr_6263[(1)] = (1));

return statearr_6263;
});
var cljs$core$async$transduce_$_state_machine__5359__auto____1 = (function (state_6261){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6261);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6264){if((e6264 instanceof Object)){
var ex__5362__auto__ = e6264;
var statearr_6265_6267 = state_6261;
(statearr_6265_6267[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6268 = state_6261;
state_6261 = G__6268;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5359__auto__ = function(state_6261){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5359__auto____1.call(this,state_6261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5359__auto____0;
cljs$core$async$transduce_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5359__auto____1;
return cljs$core$async$transduce_$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__,f__$1))
})();
var state__5592__auto__ = (function (){var statearr_6266 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6266[(6)] = c__5590__auto__);

return statearr_6266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__,f__$1))
);

return c__5590__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__6270 = arguments.length;
switch (G__6270) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__){
return (function (state_6295){
var state_val_6296 = (state_6295[(1)]);
if((state_val_6296 === (7))){
var inst_6277 = (state_6295[(2)]);
var state_6295__$1 = state_6295;
var statearr_6297_6318 = state_6295__$1;
(statearr_6297_6318[(2)] = inst_6277);

(statearr_6297_6318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (1))){
var inst_6271 = cljs.core.seq(coll);
var inst_6272 = inst_6271;
var state_6295__$1 = (function (){var statearr_6298 = state_6295;
(statearr_6298[(7)] = inst_6272);

return statearr_6298;
})();
var statearr_6299_6319 = state_6295__$1;
(statearr_6299_6319[(2)] = null);

(statearr_6299_6319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (4))){
var inst_6272 = (state_6295[(7)]);
var inst_6275 = cljs.core.first(inst_6272);
var state_6295__$1 = state_6295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6295__$1,(7),ch,inst_6275);
} else {
if((state_val_6296 === (13))){
var inst_6289 = (state_6295[(2)]);
var state_6295__$1 = state_6295;
var statearr_6300_6320 = state_6295__$1;
(statearr_6300_6320[(2)] = inst_6289);

(statearr_6300_6320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (6))){
var inst_6280 = (state_6295[(2)]);
var state_6295__$1 = state_6295;
if(cljs.core.truth_(inst_6280)){
var statearr_6301_6321 = state_6295__$1;
(statearr_6301_6321[(1)] = (8));

} else {
var statearr_6302_6322 = state_6295__$1;
(statearr_6302_6322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (3))){
var inst_6293 = (state_6295[(2)]);
var state_6295__$1 = state_6295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6295__$1,inst_6293);
} else {
if((state_val_6296 === (12))){
var state_6295__$1 = state_6295;
var statearr_6303_6323 = state_6295__$1;
(statearr_6303_6323[(2)] = null);

(statearr_6303_6323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (2))){
var inst_6272 = (state_6295[(7)]);
var state_6295__$1 = state_6295;
if(cljs.core.truth_(inst_6272)){
var statearr_6304_6324 = state_6295__$1;
(statearr_6304_6324[(1)] = (4));

} else {
var statearr_6305_6325 = state_6295__$1;
(statearr_6305_6325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (11))){
var inst_6286 = cljs.core.async.close_BANG_(ch);
var state_6295__$1 = state_6295;
var statearr_6306_6326 = state_6295__$1;
(statearr_6306_6326[(2)] = inst_6286);

(statearr_6306_6326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (9))){
var state_6295__$1 = state_6295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6307_6327 = state_6295__$1;
(statearr_6307_6327[(1)] = (11));

} else {
var statearr_6308_6328 = state_6295__$1;
(statearr_6308_6328[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (5))){
var inst_6272 = (state_6295[(7)]);
var state_6295__$1 = state_6295;
var statearr_6309_6329 = state_6295__$1;
(statearr_6309_6329[(2)] = inst_6272);

(statearr_6309_6329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (10))){
var inst_6291 = (state_6295[(2)]);
var state_6295__$1 = state_6295;
var statearr_6310_6330 = state_6295__$1;
(statearr_6310_6330[(2)] = inst_6291);

(statearr_6310_6330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6296 === (8))){
var inst_6272 = (state_6295[(7)]);
var inst_6282 = cljs.core.next(inst_6272);
var inst_6272__$1 = inst_6282;
var state_6295__$1 = (function (){var statearr_6311 = state_6295;
(statearr_6311[(7)] = inst_6272__$1);

return statearr_6311;
})();
var statearr_6312_6331 = state_6295__$1;
(statearr_6312_6331[(2)] = null);

(statearr_6312_6331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto__))
;
return ((function (switch__5358__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_6313 = [null,null,null,null,null,null,null,null];
(statearr_6313[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_6313[(1)] = (1));

return statearr_6313;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_6295){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6295);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6314){if((e6314 instanceof Object)){
var ex__5362__auto__ = e6314;
var statearr_6315_6332 = state_6295;
(statearr_6315_6332[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6333 = state_6295;
state_6295 = G__6333;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_6295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_6295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_6316 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6316[(6)] = c__5590__auto__);

return statearr_6316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6334 = (function (ch,cs,meta6335){
this.ch = ch;
this.cs = cs;
this.meta6335 = meta6335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_6336,meta6335__$1){
var self__ = this;
var _6336__$1 = this;
return (new cljs.core.async.t_cljs$core$async6334(self__.ch,self__.cs,meta6335__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_6336){
var self__ = this;
var _6336__$1 = this;
return self__.meta6335;
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta6335","meta6335",1142906624,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async6334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6334";

cljs.core.async.t_cljs$core$async6334.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async6334");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6334.
 */
cljs.core.async.__GT_t_cljs$core$async6334 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async6334(ch__$1,cs__$1,meta6335){
return (new cljs.core.async.t_cljs$core$async6334(ch__$1,cs__$1,meta6335));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async6334(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__5590__auto___6556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6556,cs,m,dchan,dctr,done){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6556,cs,m,dchan,dctr,done){
return (function (state_6471){
var state_val_6472 = (state_6471[(1)]);
if((state_val_6472 === (7))){
var inst_6467 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6473_6557 = state_6471__$1;
(statearr_6473_6557[(2)] = inst_6467);

(statearr_6473_6557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (20))){
var inst_6370 = (state_6471[(7)]);
var inst_6382 = cljs.core.first(inst_6370);
var inst_6383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6382,(0),null);
var inst_6384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6382,(1),null);
var state_6471__$1 = (function (){var statearr_6474 = state_6471;
(statearr_6474[(8)] = inst_6383);

return statearr_6474;
})();
if(cljs.core.truth_(inst_6384)){
var statearr_6475_6558 = state_6471__$1;
(statearr_6475_6558[(1)] = (22));

} else {
var statearr_6476_6559 = state_6471__$1;
(statearr_6476_6559[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (27))){
var inst_6412 = (state_6471[(9)]);
var inst_6419 = (state_6471[(10)]);
var inst_6414 = (state_6471[(11)]);
var inst_6339 = (state_6471[(12)]);
var inst_6419__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6412,inst_6414);
var inst_6420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_6419__$1,inst_6339,done);
var state_6471__$1 = (function (){var statearr_6477 = state_6471;
(statearr_6477[(10)] = inst_6419__$1);

return statearr_6477;
})();
if(cljs.core.truth_(inst_6420)){
var statearr_6478_6560 = state_6471__$1;
(statearr_6478_6560[(1)] = (30));

} else {
var statearr_6479_6561 = state_6471__$1;
(statearr_6479_6561[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (1))){
var state_6471__$1 = state_6471;
var statearr_6480_6562 = state_6471__$1;
(statearr_6480_6562[(2)] = null);

(statearr_6480_6562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (24))){
var inst_6370 = (state_6471[(7)]);
var inst_6389 = (state_6471[(2)]);
var inst_6390 = cljs.core.next(inst_6370);
var inst_6348 = inst_6390;
var inst_6349 = null;
var inst_6350 = (0);
var inst_6351 = (0);
var state_6471__$1 = (function (){var statearr_6481 = state_6471;
(statearr_6481[(13)] = inst_6349);

(statearr_6481[(14)] = inst_6348);

(statearr_6481[(15)] = inst_6389);

(statearr_6481[(16)] = inst_6350);

(statearr_6481[(17)] = inst_6351);

return statearr_6481;
})();
var statearr_6482_6563 = state_6471__$1;
(statearr_6482_6563[(2)] = null);

(statearr_6482_6563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (39))){
var state_6471__$1 = state_6471;
var statearr_6486_6564 = state_6471__$1;
(statearr_6486_6564[(2)] = null);

(statearr_6486_6564[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (4))){
var inst_6339 = (state_6471[(12)]);
var inst_6339__$1 = (state_6471[(2)]);
var inst_6340 = (inst_6339__$1 == null);
var state_6471__$1 = (function (){var statearr_6487 = state_6471;
(statearr_6487[(12)] = inst_6339__$1);

return statearr_6487;
})();
if(cljs.core.truth_(inst_6340)){
var statearr_6488_6565 = state_6471__$1;
(statearr_6488_6565[(1)] = (5));

} else {
var statearr_6489_6566 = state_6471__$1;
(statearr_6489_6566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (15))){
var inst_6349 = (state_6471[(13)]);
var inst_6348 = (state_6471[(14)]);
var inst_6350 = (state_6471[(16)]);
var inst_6351 = (state_6471[(17)]);
var inst_6366 = (state_6471[(2)]);
var inst_6367 = (inst_6351 + (1));
var tmp6483 = inst_6349;
var tmp6484 = inst_6348;
var tmp6485 = inst_6350;
var inst_6348__$1 = tmp6484;
var inst_6349__$1 = tmp6483;
var inst_6350__$1 = tmp6485;
var inst_6351__$1 = inst_6367;
var state_6471__$1 = (function (){var statearr_6490 = state_6471;
(statearr_6490[(13)] = inst_6349__$1);

(statearr_6490[(14)] = inst_6348__$1);

(statearr_6490[(16)] = inst_6350__$1);

(statearr_6490[(18)] = inst_6366);

(statearr_6490[(17)] = inst_6351__$1);

return statearr_6490;
})();
var statearr_6491_6567 = state_6471__$1;
(statearr_6491_6567[(2)] = null);

(statearr_6491_6567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (21))){
var inst_6393 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6495_6568 = state_6471__$1;
(statearr_6495_6568[(2)] = inst_6393);

(statearr_6495_6568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (31))){
var inst_6419 = (state_6471[(10)]);
var inst_6423 = done(null);
var inst_6424 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_6419);
var state_6471__$1 = (function (){var statearr_6496 = state_6471;
(statearr_6496[(19)] = inst_6423);

return statearr_6496;
})();
var statearr_6497_6569 = state_6471__$1;
(statearr_6497_6569[(2)] = inst_6424);

(statearr_6497_6569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (32))){
var inst_6413 = (state_6471[(20)]);
var inst_6412 = (state_6471[(9)]);
var inst_6411 = (state_6471[(21)]);
var inst_6414 = (state_6471[(11)]);
var inst_6426 = (state_6471[(2)]);
var inst_6427 = (inst_6414 + (1));
var tmp6492 = inst_6413;
var tmp6493 = inst_6412;
var tmp6494 = inst_6411;
var inst_6411__$1 = tmp6494;
var inst_6412__$1 = tmp6493;
var inst_6413__$1 = tmp6492;
var inst_6414__$1 = inst_6427;
var state_6471__$1 = (function (){var statearr_6498 = state_6471;
(statearr_6498[(20)] = inst_6413__$1);

(statearr_6498[(9)] = inst_6412__$1);

(statearr_6498[(21)] = inst_6411__$1);

(statearr_6498[(11)] = inst_6414__$1);

(statearr_6498[(22)] = inst_6426);

return statearr_6498;
})();
var statearr_6499_6570 = state_6471__$1;
(statearr_6499_6570[(2)] = null);

(statearr_6499_6570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (40))){
var inst_6439 = (state_6471[(23)]);
var inst_6443 = done(null);
var inst_6444 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_6439);
var state_6471__$1 = (function (){var statearr_6500 = state_6471;
(statearr_6500[(24)] = inst_6443);

return statearr_6500;
})();
var statearr_6501_6571 = state_6471__$1;
(statearr_6501_6571[(2)] = inst_6444);

(statearr_6501_6571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (33))){
var inst_6430 = (state_6471[(25)]);
var inst_6432 = cljs.core.chunked_seq_QMARK_(inst_6430);
var state_6471__$1 = state_6471;
if(inst_6432){
var statearr_6502_6572 = state_6471__$1;
(statearr_6502_6572[(1)] = (36));

} else {
var statearr_6503_6573 = state_6471__$1;
(statearr_6503_6573[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (13))){
var inst_6360 = (state_6471[(26)]);
var inst_6363 = cljs.core.async.close_BANG_(inst_6360);
var state_6471__$1 = state_6471;
var statearr_6504_6574 = state_6471__$1;
(statearr_6504_6574[(2)] = inst_6363);

(statearr_6504_6574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (22))){
var inst_6383 = (state_6471[(8)]);
var inst_6386 = cljs.core.async.close_BANG_(inst_6383);
var state_6471__$1 = state_6471;
var statearr_6505_6575 = state_6471__$1;
(statearr_6505_6575[(2)] = inst_6386);

(statearr_6505_6575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (36))){
var inst_6430 = (state_6471[(25)]);
var inst_6434 = cljs.core.chunk_first(inst_6430);
var inst_6435 = cljs.core.chunk_rest(inst_6430);
var inst_6436 = cljs.core.count(inst_6434);
var inst_6411 = inst_6435;
var inst_6412 = inst_6434;
var inst_6413 = inst_6436;
var inst_6414 = (0);
var state_6471__$1 = (function (){var statearr_6506 = state_6471;
(statearr_6506[(20)] = inst_6413);

(statearr_6506[(9)] = inst_6412);

(statearr_6506[(21)] = inst_6411);

(statearr_6506[(11)] = inst_6414);

return statearr_6506;
})();
var statearr_6507_6576 = state_6471__$1;
(statearr_6507_6576[(2)] = null);

(statearr_6507_6576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (41))){
var inst_6430 = (state_6471[(25)]);
var inst_6446 = (state_6471[(2)]);
var inst_6447 = cljs.core.next(inst_6430);
var inst_6411 = inst_6447;
var inst_6412 = null;
var inst_6413 = (0);
var inst_6414 = (0);
var state_6471__$1 = (function (){var statearr_6508 = state_6471;
(statearr_6508[(20)] = inst_6413);

(statearr_6508[(9)] = inst_6412);

(statearr_6508[(27)] = inst_6446);

(statearr_6508[(21)] = inst_6411);

(statearr_6508[(11)] = inst_6414);

return statearr_6508;
})();
var statearr_6509_6577 = state_6471__$1;
(statearr_6509_6577[(2)] = null);

(statearr_6509_6577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (43))){
var state_6471__$1 = state_6471;
var statearr_6510_6578 = state_6471__$1;
(statearr_6510_6578[(2)] = null);

(statearr_6510_6578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (29))){
var inst_6455 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6511_6579 = state_6471__$1;
(statearr_6511_6579[(2)] = inst_6455);

(statearr_6511_6579[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (44))){
var inst_6464 = (state_6471[(2)]);
var state_6471__$1 = (function (){var statearr_6512 = state_6471;
(statearr_6512[(28)] = inst_6464);

return statearr_6512;
})();
var statearr_6513_6580 = state_6471__$1;
(statearr_6513_6580[(2)] = null);

(statearr_6513_6580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (6))){
var inst_6403 = (state_6471[(29)]);
var inst_6402 = cljs.core.deref(cs);
var inst_6403__$1 = cljs.core.keys(inst_6402);
var inst_6404 = cljs.core.count(inst_6403__$1);
var inst_6405 = cljs.core.reset_BANG_(dctr,inst_6404);
var inst_6410 = cljs.core.seq(inst_6403__$1);
var inst_6411 = inst_6410;
var inst_6412 = null;
var inst_6413 = (0);
var inst_6414 = (0);
var state_6471__$1 = (function (){var statearr_6514 = state_6471;
(statearr_6514[(20)] = inst_6413);

(statearr_6514[(9)] = inst_6412);

(statearr_6514[(29)] = inst_6403__$1);

(statearr_6514[(30)] = inst_6405);

(statearr_6514[(21)] = inst_6411);

(statearr_6514[(11)] = inst_6414);

return statearr_6514;
})();
var statearr_6515_6581 = state_6471__$1;
(statearr_6515_6581[(2)] = null);

(statearr_6515_6581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (28))){
var inst_6430 = (state_6471[(25)]);
var inst_6411 = (state_6471[(21)]);
var inst_6430__$1 = cljs.core.seq(inst_6411);
var state_6471__$1 = (function (){var statearr_6516 = state_6471;
(statearr_6516[(25)] = inst_6430__$1);

return statearr_6516;
})();
if(inst_6430__$1){
var statearr_6517_6582 = state_6471__$1;
(statearr_6517_6582[(1)] = (33));

} else {
var statearr_6518_6583 = state_6471__$1;
(statearr_6518_6583[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (25))){
var inst_6413 = (state_6471[(20)]);
var inst_6414 = (state_6471[(11)]);
var inst_6416 = (inst_6414 < inst_6413);
var inst_6417 = inst_6416;
var state_6471__$1 = state_6471;
if(cljs.core.truth_(inst_6417)){
var statearr_6519_6584 = state_6471__$1;
(statearr_6519_6584[(1)] = (27));

} else {
var statearr_6520_6585 = state_6471__$1;
(statearr_6520_6585[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (34))){
var state_6471__$1 = state_6471;
var statearr_6521_6586 = state_6471__$1;
(statearr_6521_6586[(2)] = null);

(statearr_6521_6586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (17))){
var state_6471__$1 = state_6471;
var statearr_6522_6587 = state_6471__$1;
(statearr_6522_6587[(2)] = null);

(statearr_6522_6587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (3))){
var inst_6469 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6471__$1,inst_6469);
} else {
if((state_val_6472 === (12))){
var inst_6398 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6523_6588 = state_6471__$1;
(statearr_6523_6588[(2)] = inst_6398);

(statearr_6523_6588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (2))){
var state_6471__$1 = state_6471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6471__$1,(4),ch);
} else {
if((state_val_6472 === (23))){
var state_6471__$1 = state_6471;
var statearr_6524_6589 = state_6471__$1;
(statearr_6524_6589[(2)] = null);

(statearr_6524_6589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (35))){
var inst_6453 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6525_6590 = state_6471__$1;
(statearr_6525_6590[(2)] = inst_6453);

(statearr_6525_6590[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (19))){
var inst_6370 = (state_6471[(7)]);
var inst_6374 = cljs.core.chunk_first(inst_6370);
var inst_6375 = cljs.core.chunk_rest(inst_6370);
var inst_6376 = cljs.core.count(inst_6374);
var inst_6348 = inst_6375;
var inst_6349 = inst_6374;
var inst_6350 = inst_6376;
var inst_6351 = (0);
var state_6471__$1 = (function (){var statearr_6526 = state_6471;
(statearr_6526[(13)] = inst_6349);

(statearr_6526[(14)] = inst_6348);

(statearr_6526[(16)] = inst_6350);

(statearr_6526[(17)] = inst_6351);

return statearr_6526;
})();
var statearr_6527_6591 = state_6471__$1;
(statearr_6527_6591[(2)] = null);

(statearr_6527_6591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (11))){
var inst_6370 = (state_6471[(7)]);
var inst_6348 = (state_6471[(14)]);
var inst_6370__$1 = cljs.core.seq(inst_6348);
var state_6471__$1 = (function (){var statearr_6528 = state_6471;
(statearr_6528[(7)] = inst_6370__$1);

return statearr_6528;
})();
if(inst_6370__$1){
var statearr_6529_6592 = state_6471__$1;
(statearr_6529_6592[(1)] = (16));

} else {
var statearr_6530_6593 = state_6471__$1;
(statearr_6530_6593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (9))){
var inst_6400 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6531_6594 = state_6471__$1;
(statearr_6531_6594[(2)] = inst_6400);

(statearr_6531_6594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (5))){
var inst_6346 = cljs.core.deref(cs);
var inst_6347 = cljs.core.seq(inst_6346);
var inst_6348 = inst_6347;
var inst_6349 = null;
var inst_6350 = (0);
var inst_6351 = (0);
var state_6471__$1 = (function (){var statearr_6532 = state_6471;
(statearr_6532[(13)] = inst_6349);

(statearr_6532[(14)] = inst_6348);

(statearr_6532[(16)] = inst_6350);

(statearr_6532[(17)] = inst_6351);

return statearr_6532;
})();
var statearr_6533_6595 = state_6471__$1;
(statearr_6533_6595[(2)] = null);

(statearr_6533_6595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (14))){
var state_6471__$1 = state_6471;
var statearr_6534_6596 = state_6471__$1;
(statearr_6534_6596[(2)] = null);

(statearr_6534_6596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (45))){
var inst_6461 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6535_6597 = state_6471__$1;
(statearr_6535_6597[(2)] = inst_6461);

(statearr_6535_6597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (26))){
var inst_6403 = (state_6471[(29)]);
var inst_6457 = (state_6471[(2)]);
var inst_6458 = cljs.core.seq(inst_6403);
var state_6471__$1 = (function (){var statearr_6536 = state_6471;
(statearr_6536[(31)] = inst_6457);

return statearr_6536;
})();
if(inst_6458){
var statearr_6537_6598 = state_6471__$1;
(statearr_6537_6598[(1)] = (42));

} else {
var statearr_6538_6599 = state_6471__$1;
(statearr_6538_6599[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (16))){
var inst_6370 = (state_6471[(7)]);
var inst_6372 = cljs.core.chunked_seq_QMARK_(inst_6370);
var state_6471__$1 = state_6471;
if(inst_6372){
var statearr_6539_6600 = state_6471__$1;
(statearr_6539_6600[(1)] = (19));

} else {
var statearr_6540_6601 = state_6471__$1;
(statearr_6540_6601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (38))){
var inst_6450 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6541_6602 = state_6471__$1;
(statearr_6541_6602[(2)] = inst_6450);

(statearr_6541_6602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (30))){
var state_6471__$1 = state_6471;
var statearr_6542_6603 = state_6471__$1;
(statearr_6542_6603[(2)] = null);

(statearr_6542_6603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (10))){
var inst_6349 = (state_6471[(13)]);
var inst_6351 = (state_6471[(17)]);
var inst_6359 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6349,inst_6351);
var inst_6360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6359,(0),null);
var inst_6361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6359,(1),null);
var state_6471__$1 = (function (){var statearr_6543 = state_6471;
(statearr_6543[(26)] = inst_6360);

return statearr_6543;
})();
if(cljs.core.truth_(inst_6361)){
var statearr_6544_6604 = state_6471__$1;
(statearr_6544_6604[(1)] = (13));

} else {
var statearr_6545_6605 = state_6471__$1;
(statearr_6545_6605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (18))){
var inst_6396 = (state_6471[(2)]);
var state_6471__$1 = state_6471;
var statearr_6546_6606 = state_6471__$1;
(statearr_6546_6606[(2)] = inst_6396);

(statearr_6546_6606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (42))){
var state_6471__$1 = state_6471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6471__$1,(45),dchan);
} else {
if((state_val_6472 === (37))){
var inst_6430 = (state_6471[(25)]);
var inst_6439 = (state_6471[(23)]);
var inst_6339 = (state_6471[(12)]);
var inst_6439__$1 = cljs.core.first(inst_6430);
var inst_6440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_6439__$1,inst_6339,done);
var state_6471__$1 = (function (){var statearr_6547 = state_6471;
(statearr_6547[(23)] = inst_6439__$1);

return statearr_6547;
})();
if(cljs.core.truth_(inst_6440)){
var statearr_6548_6607 = state_6471__$1;
(statearr_6548_6607[(1)] = (39));

} else {
var statearr_6549_6608 = state_6471__$1;
(statearr_6549_6608[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6472 === (8))){
var inst_6350 = (state_6471[(16)]);
var inst_6351 = (state_6471[(17)]);
var inst_6353 = (inst_6351 < inst_6350);
var inst_6354 = inst_6353;
var state_6471__$1 = state_6471;
if(cljs.core.truth_(inst_6354)){
var statearr_6550_6609 = state_6471__$1;
(statearr_6550_6609[(1)] = (10));

} else {
var statearr_6551_6610 = state_6471__$1;
(statearr_6551_6610[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___6556,cs,m,dchan,dctr,done))
;
return ((function (switch__5358__auto__,c__5590__auto___6556,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__5359__auto__ = null;
var cljs$core$async$mult_$_state_machine__5359__auto____0 = (function (){
var statearr_6552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6552[(0)] = cljs$core$async$mult_$_state_machine__5359__auto__);

(statearr_6552[(1)] = (1));

return statearr_6552;
});
var cljs$core$async$mult_$_state_machine__5359__auto____1 = (function (state_6471){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6471);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6553){if((e6553 instanceof Object)){
var ex__5362__auto__ = e6553;
var statearr_6554_6611 = state_6471;
(statearr_6554_6611[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6612 = state_6471;
state_6471 = G__6612;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5359__auto__ = function(state_6471){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5359__auto____1.call(this,state_6471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5359__auto____0;
cljs$core$async$mult_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5359__auto____1;
return cljs$core$async$mult_$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6556,cs,m,dchan,dctr,done))
})();
var state__5592__auto__ = (function (){var statearr_6555 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6555[(6)] = c__5590__auto___6556);

return statearr_6555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6556,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__6614 = arguments.length;
switch (G__6614) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6626 = arguments.length;
var i__4532__auto___6627 = (0);
while(true){
if((i__4532__auto___6627 < len__4531__auto___6626)){
args__4534__auto__.push((arguments[i__4532__auto___6627]));

var G__6628 = (i__4532__auto___6627 + (1));
i__4532__auto___6627 = G__6628;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__6620){
var map__6621 = p__6620;
var map__6621__$1 = ((((!((map__6621 == null)))?(((((map__6621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6621):map__6621);
var opts = map__6621__$1;
var statearr_6623_6629 = state;
(statearr_6623_6629[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__6621,map__6621__$1,opts){
return (function (val){
var statearr_6624_6630 = state;
(statearr_6624_6630[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__6621,map__6621__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_6625_6631 = state;
(statearr_6625_6631[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq6616){
var G__6617 = cljs.core.first(seq6616);
var seq6616__$1 = cljs.core.next(seq6616);
var G__6618 = cljs.core.first(seq6616__$1);
var seq6616__$2 = cljs.core.next(seq6616__$1);
var G__6619 = cljs.core.first(seq6616__$2);
var seq6616__$3 = cljs.core.next(seq6616__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6617,G__6618,G__6619,seq6616__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6632 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta6633){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta6633 = meta6633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_6634,meta6633__$1){
var self__ = this;
var _6634__$1 = this;
return (new cljs.core.async.t_cljs$core$async6632(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta6633__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_6634){
var self__ = this;
var _6634__$1 = this;
return self__.meta6633;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta6633","meta6633",-1175371590,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async6632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6632";

cljs.core.async.t_cljs$core$async6632.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async6632");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6632.
 */
cljs.core.async.__GT_t_cljs$core$async6632 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async6632(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta6633){
return (new cljs.core.async.t_cljs$core$async6632(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta6633));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async6632(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5590__auto___6796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_6736){
var state_val_6737 = (state_6736[(1)]);
if((state_val_6737 === (7))){
var inst_6651 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6738_6797 = state_6736__$1;
(statearr_6738_6797[(2)] = inst_6651);

(statearr_6738_6797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (20))){
var inst_6663 = (state_6736[(7)]);
var state_6736__$1 = state_6736;
var statearr_6739_6798 = state_6736__$1;
(statearr_6739_6798[(2)] = inst_6663);

(statearr_6739_6798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (27))){
var state_6736__$1 = state_6736;
var statearr_6740_6799 = state_6736__$1;
(statearr_6740_6799[(2)] = null);

(statearr_6740_6799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (1))){
var inst_6638 = (state_6736[(8)]);
var inst_6638__$1 = calc_state();
var inst_6640 = (inst_6638__$1 == null);
var inst_6641 = cljs.core.not(inst_6640);
var state_6736__$1 = (function (){var statearr_6741 = state_6736;
(statearr_6741[(8)] = inst_6638__$1);

return statearr_6741;
})();
if(inst_6641){
var statearr_6742_6800 = state_6736__$1;
(statearr_6742_6800[(1)] = (2));

} else {
var statearr_6743_6801 = state_6736__$1;
(statearr_6743_6801[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (24))){
var inst_6710 = (state_6736[(9)]);
var inst_6687 = (state_6736[(10)]);
var inst_6696 = (state_6736[(11)]);
var inst_6710__$1 = (inst_6687.cljs$core$IFn$_invoke$arity$1 ? inst_6687.cljs$core$IFn$_invoke$arity$1(inst_6696) : inst_6687.call(null,inst_6696));
var state_6736__$1 = (function (){var statearr_6744 = state_6736;
(statearr_6744[(9)] = inst_6710__$1);

return statearr_6744;
})();
if(cljs.core.truth_(inst_6710__$1)){
var statearr_6745_6802 = state_6736__$1;
(statearr_6745_6802[(1)] = (29));

} else {
var statearr_6746_6803 = state_6736__$1;
(statearr_6746_6803[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (4))){
var inst_6654 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6654)){
var statearr_6747_6804 = state_6736__$1;
(statearr_6747_6804[(1)] = (8));

} else {
var statearr_6748_6805 = state_6736__$1;
(statearr_6748_6805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (15))){
var inst_6681 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6681)){
var statearr_6749_6806 = state_6736__$1;
(statearr_6749_6806[(1)] = (19));

} else {
var statearr_6750_6807 = state_6736__$1;
(statearr_6750_6807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (21))){
var inst_6686 = (state_6736[(12)]);
var inst_6686__$1 = (state_6736[(2)]);
var inst_6687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6686__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6686__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6686__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_6736__$1 = (function (){var statearr_6751 = state_6736;
(statearr_6751[(12)] = inst_6686__$1);

(statearr_6751[(10)] = inst_6687);

(statearr_6751[(13)] = inst_6688);

return statearr_6751;
})();
return cljs.core.async.ioc_alts_BANG_(state_6736__$1,(22),inst_6689);
} else {
if((state_val_6737 === (31))){
var inst_6718 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6718)){
var statearr_6752_6808 = state_6736__$1;
(statearr_6752_6808[(1)] = (32));

} else {
var statearr_6753_6809 = state_6736__$1;
(statearr_6753_6809[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (32))){
var inst_6695 = (state_6736[(14)]);
var state_6736__$1 = state_6736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6736__$1,(35),out,inst_6695);
} else {
if((state_val_6737 === (33))){
var inst_6686 = (state_6736[(12)]);
var inst_6663 = inst_6686;
var state_6736__$1 = (function (){var statearr_6754 = state_6736;
(statearr_6754[(7)] = inst_6663);

return statearr_6754;
})();
var statearr_6755_6810 = state_6736__$1;
(statearr_6755_6810[(2)] = null);

(statearr_6755_6810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (13))){
var inst_6663 = (state_6736[(7)]);
var inst_6670 = inst_6663.cljs$lang$protocol_mask$partition0$;
var inst_6671 = (inst_6670 & (64));
var inst_6672 = inst_6663.cljs$core$ISeq$;
var inst_6673 = (cljs.core.PROTOCOL_SENTINEL === inst_6672);
var inst_6674 = ((inst_6671) || (inst_6673));
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6674)){
var statearr_6756_6811 = state_6736__$1;
(statearr_6756_6811[(1)] = (16));

} else {
var statearr_6757_6812 = state_6736__$1;
(statearr_6757_6812[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (22))){
var inst_6695 = (state_6736[(14)]);
var inst_6696 = (state_6736[(11)]);
var inst_6694 = (state_6736[(2)]);
var inst_6695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6694,(0),null);
var inst_6696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6694,(1),null);
var inst_6697 = (inst_6695__$1 == null);
var inst_6698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_6696__$1,change);
var inst_6699 = ((inst_6697) || (inst_6698));
var state_6736__$1 = (function (){var statearr_6758 = state_6736;
(statearr_6758[(14)] = inst_6695__$1);

(statearr_6758[(11)] = inst_6696__$1);

return statearr_6758;
})();
if(cljs.core.truth_(inst_6699)){
var statearr_6759_6813 = state_6736__$1;
(statearr_6759_6813[(1)] = (23));

} else {
var statearr_6760_6814 = state_6736__$1;
(statearr_6760_6814[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (36))){
var inst_6686 = (state_6736[(12)]);
var inst_6663 = inst_6686;
var state_6736__$1 = (function (){var statearr_6761 = state_6736;
(statearr_6761[(7)] = inst_6663);

return statearr_6761;
})();
var statearr_6762_6815 = state_6736__$1;
(statearr_6762_6815[(2)] = null);

(statearr_6762_6815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (29))){
var inst_6710 = (state_6736[(9)]);
var state_6736__$1 = state_6736;
var statearr_6763_6816 = state_6736__$1;
(statearr_6763_6816[(2)] = inst_6710);

(statearr_6763_6816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (6))){
var state_6736__$1 = state_6736;
var statearr_6764_6817 = state_6736__$1;
(statearr_6764_6817[(2)] = false);

(statearr_6764_6817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (28))){
var inst_6706 = (state_6736[(2)]);
var inst_6707 = calc_state();
var inst_6663 = inst_6707;
var state_6736__$1 = (function (){var statearr_6765 = state_6736;
(statearr_6765[(15)] = inst_6706);

(statearr_6765[(7)] = inst_6663);

return statearr_6765;
})();
var statearr_6766_6818 = state_6736__$1;
(statearr_6766_6818[(2)] = null);

(statearr_6766_6818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (25))){
var inst_6732 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6767_6819 = state_6736__$1;
(statearr_6767_6819[(2)] = inst_6732);

(statearr_6767_6819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (34))){
var inst_6730 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6768_6820 = state_6736__$1;
(statearr_6768_6820[(2)] = inst_6730);

(statearr_6768_6820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (17))){
var state_6736__$1 = state_6736;
var statearr_6769_6821 = state_6736__$1;
(statearr_6769_6821[(2)] = false);

(statearr_6769_6821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (3))){
var state_6736__$1 = state_6736;
var statearr_6770_6822 = state_6736__$1;
(statearr_6770_6822[(2)] = false);

(statearr_6770_6822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (12))){
var inst_6734 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6736__$1,inst_6734);
} else {
if((state_val_6737 === (2))){
var inst_6638 = (state_6736[(8)]);
var inst_6643 = inst_6638.cljs$lang$protocol_mask$partition0$;
var inst_6644 = (inst_6643 & (64));
var inst_6645 = inst_6638.cljs$core$ISeq$;
var inst_6646 = (cljs.core.PROTOCOL_SENTINEL === inst_6645);
var inst_6647 = ((inst_6644) || (inst_6646));
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6647)){
var statearr_6771_6823 = state_6736__$1;
(statearr_6771_6823[(1)] = (5));

} else {
var statearr_6772_6824 = state_6736__$1;
(statearr_6772_6824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (23))){
var inst_6695 = (state_6736[(14)]);
var inst_6701 = (inst_6695 == null);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6701)){
var statearr_6773_6825 = state_6736__$1;
(statearr_6773_6825[(1)] = (26));

} else {
var statearr_6774_6826 = state_6736__$1;
(statearr_6774_6826[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (35))){
var inst_6721 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6721)){
var statearr_6775_6827 = state_6736__$1;
(statearr_6775_6827[(1)] = (36));

} else {
var statearr_6776_6828 = state_6736__$1;
(statearr_6776_6828[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (19))){
var inst_6663 = (state_6736[(7)]);
var inst_6683 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_6663);
var state_6736__$1 = state_6736;
var statearr_6777_6829 = state_6736__$1;
(statearr_6777_6829[(2)] = inst_6683);

(statearr_6777_6829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (11))){
var inst_6663 = (state_6736[(7)]);
var inst_6667 = (inst_6663 == null);
var inst_6668 = cljs.core.not(inst_6667);
var state_6736__$1 = state_6736;
if(inst_6668){
var statearr_6778_6830 = state_6736__$1;
(statearr_6778_6830[(1)] = (13));

} else {
var statearr_6779_6831 = state_6736__$1;
(statearr_6779_6831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (9))){
var inst_6638 = (state_6736[(8)]);
var state_6736__$1 = state_6736;
var statearr_6780_6832 = state_6736__$1;
(statearr_6780_6832[(2)] = inst_6638);

(statearr_6780_6832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (5))){
var state_6736__$1 = state_6736;
var statearr_6781_6833 = state_6736__$1;
(statearr_6781_6833[(2)] = true);

(statearr_6781_6833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (14))){
var state_6736__$1 = state_6736;
var statearr_6782_6834 = state_6736__$1;
(statearr_6782_6834[(2)] = false);

(statearr_6782_6834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (26))){
var inst_6696 = (state_6736[(11)]);
var inst_6703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_6696);
var state_6736__$1 = state_6736;
var statearr_6783_6835 = state_6736__$1;
(statearr_6783_6835[(2)] = inst_6703);

(statearr_6783_6835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (16))){
var state_6736__$1 = state_6736;
var statearr_6784_6836 = state_6736__$1;
(statearr_6784_6836[(2)] = true);

(statearr_6784_6836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (38))){
var inst_6726 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6785_6837 = state_6736__$1;
(statearr_6785_6837[(2)] = inst_6726);

(statearr_6785_6837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (30))){
var inst_6687 = (state_6736[(10)]);
var inst_6696 = (state_6736[(11)]);
var inst_6688 = (state_6736[(13)]);
var inst_6713 = cljs.core.empty_QMARK_(inst_6687);
var inst_6714 = (inst_6688.cljs$core$IFn$_invoke$arity$1 ? inst_6688.cljs$core$IFn$_invoke$arity$1(inst_6696) : inst_6688.call(null,inst_6696));
var inst_6715 = cljs.core.not(inst_6714);
var inst_6716 = ((inst_6713) && (inst_6715));
var state_6736__$1 = state_6736;
var statearr_6786_6838 = state_6736__$1;
(statearr_6786_6838[(2)] = inst_6716);

(statearr_6786_6838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (10))){
var inst_6638 = (state_6736[(8)]);
var inst_6659 = (state_6736[(2)]);
var inst_6660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6659,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6659,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6659,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_6663 = inst_6638;
var state_6736__$1 = (function (){var statearr_6787 = state_6736;
(statearr_6787[(16)] = inst_6661);

(statearr_6787[(7)] = inst_6663);

(statearr_6787[(17)] = inst_6662);

(statearr_6787[(18)] = inst_6660);

return statearr_6787;
})();
var statearr_6788_6839 = state_6736__$1;
(statearr_6788_6839[(2)] = null);

(statearr_6788_6839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (18))){
var inst_6678 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6789_6840 = state_6736__$1;
(statearr_6789_6840[(2)] = inst_6678);

(statearr_6789_6840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (37))){
var state_6736__$1 = state_6736;
var statearr_6790_6841 = state_6736__$1;
(statearr_6790_6841[(2)] = null);

(statearr_6790_6841[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (8))){
var inst_6638 = (state_6736[(8)]);
var inst_6656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_6638);
var state_6736__$1 = state_6736;
var statearr_6791_6842 = state_6736__$1;
(statearr_6791_6842[(2)] = inst_6656);

(statearr_6791_6842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5358__auto__,c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__5359__auto__ = null;
var cljs$core$async$mix_$_state_machine__5359__auto____0 = (function (){
var statearr_6792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6792[(0)] = cljs$core$async$mix_$_state_machine__5359__auto__);

(statearr_6792[(1)] = (1));

return statearr_6792;
});
var cljs$core$async$mix_$_state_machine__5359__auto____1 = (function (state_6736){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6736);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6793){if((e6793 instanceof Object)){
var ex__5362__auto__ = e6793;
var statearr_6794_6843 = state_6736;
(statearr_6794_6843[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6844 = state_6736;
state_6736 = G__6844;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5359__auto__ = function(state_6736){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5359__auto____1.call(this,state_6736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5359__auto____0;
cljs$core$async$mix_$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5359__auto____1;
return cljs$core$async$mix_$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5592__auto__ = (function (){var statearr_6795 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6795[(6)] = c__5590__auto___6796);

return statearr_6795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6846 = arguments.length;
switch (G__6846) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__6850 = arguments.length;
switch (G__6850) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__6848_SHARP_){
if(cljs.core.truth_((p1__6848_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__6848_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__6848_SHARP_.call(null,topic)))){
return p1__6848_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6848_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6851 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6852){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6852 = meta6852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_6853,meta6852__$1){
var self__ = this;
var _6853__$1 = this;
return (new cljs.core.async.t_cljs$core$async6851(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6852__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_6853){
var self__ = this;
var _6853__$1 = this;
return self__.meta6852;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6852","meta6852",1526142480,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async6851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6851";

cljs.core.async.t_cljs$core$async6851.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async6851");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6851.
 */
cljs.core.async.__GT_t_cljs$core$async6851 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async6851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6852){
return (new cljs.core.async.t_cljs$core$async6851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6852));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async6851(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5590__auto___6971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___6971,mults,ensure_mult,p){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___6971,mults,ensure_mult,p){
return (function (state_6925){
var state_val_6926 = (state_6925[(1)]);
if((state_val_6926 === (7))){
var inst_6921 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6927_6972 = state_6925__$1;
(statearr_6927_6972[(2)] = inst_6921);

(statearr_6927_6972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (20))){
var state_6925__$1 = state_6925;
var statearr_6928_6973 = state_6925__$1;
(statearr_6928_6973[(2)] = null);

(statearr_6928_6973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (1))){
var state_6925__$1 = state_6925;
var statearr_6929_6974 = state_6925__$1;
(statearr_6929_6974[(2)] = null);

(statearr_6929_6974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (24))){
var inst_6904 = (state_6925[(7)]);
var inst_6913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_6904);
var state_6925__$1 = state_6925;
var statearr_6930_6975 = state_6925__$1;
(statearr_6930_6975[(2)] = inst_6913);

(statearr_6930_6975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (4))){
var inst_6856 = (state_6925[(8)]);
var inst_6856__$1 = (state_6925[(2)]);
var inst_6857 = (inst_6856__$1 == null);
var state_6925__$1 = (function (){var statearr_6931 = state_6925;
(statearr_6931[(8)] = inst_6856__$1);

return statearr_6931;
})();
if(cljs.core.truth_(inst_6857)){
var statearr_6932_6976 = state_6925__$1;
(statearr_6932_6976[(1)] = (5));

} else {
var statearr_6933_6977 = state_6925__$1;
(statearr_6933_6977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (15))){
var inst_6898 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6934_6978 = state_6925__$1;
(statearr_6934_6978[(2)] = inst_6898);

(statearr_6934_6978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (21))){
var inst_6918 = (state_6925[(2)]);
var state_6925__$1 = (function (){var statearr_6935 = state_6925;
(statearr_6935[(9)] = inst_6918);

return statearr_6935;
})();
var statearr_6936_6979 = state_6925__$1;
(statearr_6936_6979[(2)] = null);

(statearr_6936_6979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (13))){
var inst_6880 = (state_6925[(10)]);
var inst_6882 = cljs.core.chunked_seq_QMARK_(inst_6880);
var state_6925__$1 = state_6925;
if(inst_6882){
var statearr_6937_6980 = state_6925__$1;
(statearr_6937_6980[(1)] = (16));

} else {
var statearr_6938_6981 = state_6925__$1;
(statearr_6938_6981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (22))){
var inst_6910 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
if(cljs.core.truth_(inst_6910)){
var statearr_6939_6982 = state_6925__$1;
(statearr_6939_6982[(1)] = (23));

} else {
var statearr_6940_6983 = state_6925__$1;
(statearr_6940_6983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (6))){
var inst_6904 = (state_6925[(7)]);
var inst_6906 = (state_6925[(11)]);
var inst_6856 = (state_6925[(8)]);
var inst_6904__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_6856) : topic_fn.call(null,inst_6856));
var inst_6905 = cljs.core.deref(mults);
var inst_6906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6905,inst_6904__$1);
var state_6925__$1 = (function (){var statearr_6941 = state_6925;
(statearr_6941[(7)] = inst_6904__$1);

(statearr_6941[(11)] = inst_6906__$1);

return statearr_6941;
})();
if(cljs.core.truth_(inst_6906__$1)){
var statearr_6942_6984 = state_6925__$1;
(statearr_6942_6984[(1)] = (19));

} else {
var statearr_6943_6985 = state_6925__$1;
(statearr_6943_6985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (25))){
var inst_6915 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6944_6986 = state_6925__$1;
(statearr_6944_6986[(2)] = inst_6915);

(statearr_6944_6986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (17))){
var inst_6880 = (state_6925[(10)]);
var inst_6889 = cljs.core.first(inst_6880);
var inst_6890 = cljs.core.async.muxch_STAR_(inst_6889);
var inst_6891 = cljs.core.async.close_BANG_(inst_6890);
var inst_6892 = cljs.core.next(inst_6880);
var inst_6866 = inst_6892;
var inst_6867 = null;
var inst_6868 = (0);
var inst_6869 = (0);
var state_6925__$1 = (function (){var statearr_6945 = state_6925;
(statearr_6945[(12)] = inst_6867);

(statearr_6945[(13)] = inst_6868);

(statearr_6945[(14)] = inst_6869);

(statearr_6945[(15)] = inst_6891);

(statearr_6945[(16)] = inst_6866);

return statearr_6945;
})();
var statearr_6946_6987 = state_6925__$1;
(statearr_6946_6987[(2)] = null);

(statearr_6946_6987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (3))){
var inst_6923 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6925__$1,inst_6923);
} else {
if((state_val_6926 === (12))){
var inst_6900 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6947_6988 = state_6925__$1;
(statearr_6947_6988[(2)] = inst_6900);

(statearr_6947_6988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (2))){
var state_6925__$1 = state_6925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6925__$1,(4),ch);
} else {
if((state_val_6926 === (23))){
var state_6925__$1 = state_6925;
var statearr_6948_6989 = state_6925__$1;
(statearr_6948_6989[(2)] = null);

(statearr_6948_6989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (19))){
var inst_6906 = (state_6925[(11)]);
var inst_6856 = (state_6925[(8)]);
var inst_6908 = cljs.core.async.muxch_STAR_(inst_6906);
var state_6925__$1 = state_6925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6925__$1,(22),inst_6908,inst_6856);
} else {
if((state_val_6926 === (11))){
var inst_6880 = (state_6925[(10)]);
var inst_6866 = (state_6925[(16)]);
var inst_6880__$1 = cljs.core.seq(inst_6866);
var state_6925__$1 = (function (){var statearr_6949 = state_6925;
(statearr_6949[(10)] = inst_6880__$1);

return statearr_6949;
})();
if(inst_6880__$1){
var statearr_6950_6990 = state_6925__$1;
(statearr_6950_6990[(1)] = (13));

} else {
var statearr_6951_6991 = state_6925__$1;
(statearr_6951_6991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (9))){
var inst_6902 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6952_6992 = state_6925__$1;
(statearr_6952_6992[(2)] = inst_6902);

(statearr_6952_6992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (5))){
var inst_6863 = cljs.core.deref(mults);
var inst_6864 = cljs.core.vals(inst_6863);
var inst_6865 = cljs.core.seq(inst_6864);
var inst_6866 = inst_6865;
var inst_6867 = null;
var inst_6868 = (0);
var inst_6869 = (0);
var state_6925__$1 = (function (){var statearr_6953 = state_6925;
(statearr_6953[(12)] = inst_6867);

(statearr_6953[(13)] = inst_6868);

(statearr_6953[(14)] = inst_6869);

(statearr_6953[(16)] = inst_6866);

return statearr_6953;
})();
var statearr_6954_6993 = state_6925__$1;
(statearr_6954_6993[(2)] = null);

(statearr_6954_6993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (14))){
var state_6925__$1 = state_6925;
var statearr_6958_6994 = state_6925__$1;
(statearr_6958_6994[(2)] = null);

(statearr_6958_6994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (16))){
var inst_6880 = (state_6925[(10)]);
var inst_6884 = cljs.core.chunk_first(inst_6880);
var inst_6885 = cljs.core.chunk_rest(inst_6880);
var inst_6886 = cljs.core.count(inst_6884);
var inst_6866 = inst_6885;
var inst_6867 = inst_6884;
var inst_6868 = inst_6886;
var inst_6869 = (0);
var state_6925__$1 = (function (){var statearr_6959 = state_6925;
(statearr_6959[(12)] = inst_6867);

(statearr_6959[(13)] = inst_6868);

(statearr_6959[(14)] = inst_6869);

(statearr_6959[(16)] = inst_6866);

return statearr_6959;
})();
var statearr_6960_6995 = state_6925__$1;
(statearr_6960_6995[(2)] = null);

(statearr_6960_6995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (10))){
var inst_6867 = (state_6925[(12)]);
var inst_6868 = (state_6925[(13)]);
var inst_6869 = (state_6925[(14)]);
var inst_6866 = (state_6925[(16)]);
var inst_6874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6867,inst_6869);
var inst_6875 = cljs.core.async.muxch_STAR_(inst_6874);
var inst_6876 = cljs.core.async.close_BANG_(inst_6875);
var inst_6877 = (inst_6869 + (1));
var tmp6955 = inst_6867;
var tmp6956 = inst_6868;
var tmp6957 = inst_6866;
var inst_6866__$1 = tmp6957;
var inst_6867__$1 = tmp6955;
var inst_6868__$1 = tmp6956;
var inst_6869__$1 = inst_6877;
var state_6925__$1 = (function (){var statearr_6961 = state_6925;
(statearr_6961[(12)] = inst_6867__$1);

(statearr_6961[(17)] = inst_6876);

(statearr_6961[(13)] = inst_6868__$1);

(statearr_6961[(14)] = inst_6869__$1);

(statearr_6961[(16)] = inst_6866__$1);

return statearr_6961;
})();
var statearr_6962_6996 = state_6925__$1;
(statearr_6962_6996[(2)] = null);

(statearr_6962_6996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (18))){
var inst_6895 = (state_6925[(2)]);
var state_6925__$1 = state_6925;
var statearr_6963_6997 = state_6925__$1;
(statearr_6963_6997[(2)] = inst_6895);

(statearr_6963_6997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6926 === (8))){
var inst_6868 = (state_6925[(13)]);
var inst_6869 = (state_6925[(14)]);
var inst_6871 = (inst_6869 < inst_6868);
var inst_6872 = inst_6871;
var state_6925__$1 = state_6925;
if(cljs.core.truth_(inst_6872)){
var statearr_6964_6998 = state_6925__$1;
(statearr_6964_6998[(1)] = (10));

} else {
var statearr_6965_6999 = state_6925__$1;
(statearr_6965_6999[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___6971,mults,ensure_mult,p))
;
return ((function (switch__5358__auto__,c__5590__auto___6971,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_6966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6966[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_6966[(1)] = (1));

return statearr_6966;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_6925){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_6925);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e6967){if((e6967 instanceof Object)){
var ex__5362__auto__ = e6967;
var statearr_6968_7000 = state_6925;
(statearr_6968_7000[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7001 = state_6925;
state_6925 = G__7001;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_6925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_6925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___6971,mults,ensure_mult,p))
})();
var state__5592__auto__ = (function (){var statearr_6969 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_6969[(6)] = c__5590__auto___6971);

return statearr_6969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___6971,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__7003 = arguments.length;
switch (G__7003) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__7006 = arguments.length;
switch (G__7006) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__7009 = arguments.length;
switch (G__7009) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__5590__auto___7076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7048){
var state_val_7049 = (state_7048[(1)]);
if((state_val_7049 === (7))){
var state_7048__$1 = state_7048;
var statearr_7050_7077 = state_7048__$1;
(statearr_7050_7077[(2)] = null);

(statearr_7050_7077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (1))){
var state_7048__$1 = state_7048;
var statearr_7051_7078 = state_7048__$1;
(statearr_7051_7078[(2)] = null);

(statearr_7051_7078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (4))){
var inst_7012 = (state_7048[(7)]);
var inst_7014 = (inst_7012 < cnt);
var state_7048__$1 = state_7048;
if(cljs.core.truth_(inst_7014)){
var statearr_7052_7079 = state_7048__$1;
(statearr_7052_7079[(1)] = (6));

} else {
var statearr_7053_7080 = state_7048__$1;
(statearr_7053_7080[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (15))){
var inst_7044 = (state_7048[(2)]);
var state_7048__$1 = state_7048;
var statearr_7054_7081 = state_7048__$1;
(statearr_7054_7081[(2)] = inst_7044);

(statearr_7054_7081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (13))){
var inst_7037 = cljs.core.async.close_BANG_(out);
var state_7048__$1 = state_7048;
var statearr_7055_7082 = state_7048__$1;
(statearr_7055_7082[(2)] = inst_7037);

(statearr_7055_7082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (6))){
var state_7048__$1 = state_7048;
var statearr_7056_7083 = state_7048__$1;
(statearr_7056_7083[(2)] = null);

(statearr_7056_7083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (3))){
var inst_7046 = (state_7048[(2)]);
var state_7048__$1 = state_7048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7048__$1,inst_7046);
} else {
if((state_val_7049 === (12))){
var inst_7034 = (state_7048[(8)]);
var inst_7034__$1 = (state_7048[(2)]);
var inst_7035 = cljs.core.some(cljs.core.nil_QMARK_,inst_7034__$1);
var state_7048__$1 = (function (){var statearr_7057 = state_7048;
(statearr_7057[(8)] = inst_7034__$1);

return statearr_7057;
})();
if(cljs.core.truth_(inst_7035)){
var statearr_7058_7084 = state_7048__$1;
(statearr_7058_7084[(1)] = (13));

} else {
var statearr_7059_7085 = state_7048__$1;
(statearr_7059_7085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (2))){
var inst_7011 = cljs.core.reset_BANG_(dctr,cnt);
var inst_7012 = (0);
var state_7048__$1 = (function (){var statearr_7060 = state_7048;
(statearr_7060[(9)] = inst_7011);

(statearr_7060[(7)] = inst_7012);

return statearr_7060;
})();
var statearr_7061_7086 = state_7048__$1;
(statearr_7061_7086[(2)] = null);

(statearr_7061_7086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (11))){
var inst_7012 = (state_7048[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_7048,(10),Object,null,(9));
var inst_7021 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_7012) : chs__$1.call(null,inst_7012));
var inst_7022 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_7012) : done.call(null,inst_7012));
var inst_7023 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_7021,inst_7022);
var state_7048__$1 = state_7048;
var statearr_7062_7087 = state_7048__$1;
(statearr_7062_7087[(2)] = inst_7023);


cljs.core.async.impl.ioc_helpers.process_exception(state_7048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (9))){
var inst_7012 = (state_7048[(7)]);
var inst_7025 = (state_7048[(2)]);
var inst_7026 = (inst_7012 + (1));
var inst_7012__$1 = inst_7026;
var state_7048__$1 = (function (){var statearr_7063 = state_7048;
(statearr_7063[(10)] = inst_7025);

(statearr_7063[(7)] = inst_7012__$1);

return statearr_7063;
})();
var statearr_7064_7088 = state_7048__$1;
(statearr_7064_7088[(2)] = null);

(statearr_7064_7088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (5))){
var inst_7032 = (state_7048[(2)]);
var state_7048__$1 = (function (){var statearr_7065 = state_7048;
(statearr_7065[(11)] = inst_7032);

return statearr_7065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7048__$1,(12),dchan);
} else {
if((state_val_7049 === (14))){
var inst_7034 = (state_7048[(8)]);
var inst_7039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_7034);
var state_7048__$1 = state_7048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7048__$1,(16),out,inst_7039);
} else {
if((state_val_7049 === (16))){
var inst_7041 = (state_7048[(2)]);
var state_7048__$1 = (function (){var statearr_7066 = state_7048;
(statearr_7066[(12)] = inst_7041);

return statearr_7066;
})();
var statearr_7067_7089 = state_7048__$1;
(statearr_7067_7089[(2)] = null);

(statearr_7067_7089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (10))){
var inst_7016 = (state_7048[(2)]);
var inst_7017 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_7048__$1 = (function (){var statearr_7068 = state_7048;
(statearr_7068[(13)] = inst_7016);

return statearr_7068;
})();
var statearr_7069_7090 = state_7048__$1;
(statearr_7069_7090[(2)] = inst_7017);


cljs.core.async.impl.ioc_helpers.process_exception(state_7048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7049 === (8))){
var inst_7030 = (state_7048[(2)]);
var state_7048__$1 = state_7048;
var statearr_7070_7091 = state_7048__$1;
(statearr_7070_7091[(2)] = inst_7030);

(statearr_7070_7091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5358__auto__,c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7071[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7071[(1)] = (1));

return statearr_7071;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7048){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7048);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7072){if((e7072 instanceof Object)){
var ex__5362__auto__ = e7072;
var statearr_7073_7092 = state_7048;
(statearr_7073_7092[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7093 = state_7048;
state_7048 = G__7093;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5592__auto__ = (function (){var statearr_7074 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7074[(6)] = c__5590__auto___7076);

return statearr_7074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7076,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__7096 = arguments.length;
switch (G__7096) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7150,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7150,out){
return (function (state_7128){
var state_val_7129 = (state_7128[(1)]);
if((state_val_7129 === (7))){
var inst_7108 = (state_7128[(7)]);
var inst_7107 = (state_7128[(8)]);
var inst_7107__$1 = (state_7128[(2)]);
var inst_7108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7107__$1,(0),null);
var inst_7109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7107__$1,(1),null);
var inst_7110 = (inst_7108__$1 == null);
var state_7128__$1 = (function (){var statearr_7130 = state_7128;
(statearr_7130[(9)] = inst_7109);

(statearr_7130[(7)] = inst_7108__$1);

(statearr_7130[(8)] = inst_7107__$1);

return statearr_7130;
})();
if(cljs.core.truth_(inst_7110)){
var statearr_7131_7151 = state_7128__$1;
(statearr_7131_7151[(1)] = (8));

} else {
var statearr_7132_7152 = state_7128__$1;
(statearr_7132_7152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (1))){
var inst_7097 = cljs.core.vec(chs);
var inst_7098 = inst_7097;
var state_7128__$1 = (function (){var statearr_7133 = state_7128;
(statearr_7133[(10)] = inst_7098);

return statearr_7133;
})();
var statearr_7134_7153 = state_7128__$1;
(statearr_7134_7153[(2)] = null);

(statearr_7134_7153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (4))){
var inst_7098 = (state_7128[(10)]);
var state_7128__$1 = state_7128;
return cljs.core.async.ioc_alts_BANG_(state_7128__$1,(7),inst_7098);
} else {
if((state_val_7129 === (6))){
var inst_7124 = (state_7128[(2)]);
var state_7128__$1 = state_7128;
var statearr_7135_7154 = state_7128__$1;
(statearr_7135_7154[(2)] = inst_7124);

(statearr_7135_7154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (3))){
var inst_7126 = (state_7128[(2)]);
var state_7128__$1 = state_7128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7128__$1,inst_7126);
} else {
if((state_val_7129 === (2))){
var inst_7098 = (state_7128[(10)]);
var inst_7100 = cljs.core.count(inst_7098);
var inst_7101 = (inst_7100 > (0));
var state_7128__$1 = state_7128;
if(cljs.core.truth_(inst_7101)){
var statearr_7137_7155 = state_7128__$1;
(statearr_7137_7155[(1)] = (4));

} else {
var statearr_7138_7156 = state_7128__$1;
(statearr_7138_7156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (11))){
var inst_7098 = (state_7128[(10)]);
var inst_7117 = (state_7128[(2)]);
var tmp7136 = inst_7098;
var inst_7098__$1 = tmp7136;
var state_7128__$1 = (function (){var statearr_7139 = state_7128;
(statearr_7139[(11)] = inst_7117);

(statearr_7139[(10)] = inst_7098__$1);

return statearr_7139;
})();
var statearr_7140_7157 = state_7128__$1;
(statearr_7140_7157[(2)] = null);

(statearr_7140_7157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (9))){
var inst_7108 = (state_7128[(7)]);
var state_7128__$1 = state_7128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7128__$1,(11),out,inst_7108);
} else {
if((state_val_7129 === (5))){
var inst_7122 = cljs.core.async.close_BANG_(out);
var state_7128__$1 = state_7128;
var statearr_7141_7158 = state_7128__$1;
(statearr_7141_7158[(2)] = inst_7122);

(statearr_7141_7158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (10))){
var inst_7120 = (state_7128[(2)]);
var state_7128__$1 = state_7128;
var statearr_7142_7159 = state_7128__$1;
(statearr_7142_7159[(2)] = inst_7120);

(statearr_7142_7159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7129 === (8))){
var inst_7109 = (state_7128[(9)]);
var inst_7108 = (state_7128[(7)]);
var inst_7107 = (state_7128[(8)]);
var inst_7098 = (state_7128[(10)]);
var inst_7112 = (function (){var cs = inst_7098;
var vec__7103 = inst_7107;
var v = inst_7108;
var c = inst_7109;
return ((function (cs,vec__7103,v,c,inst_7109,inst_7108,inst_7107,inst_7098,state_val_7129,c__5590__auto___7150,out){
return (function (p1__7094_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__7094_SHARP_);
});
;})(cs,vec__7103,v,c,inst_7109,inst_7108,inst_7107,inst_7098,state_val_7129,c__5590__auto___7150,out))
})();
var inst_7113 = cljs.core.filterv(inst_7112,inst_7098);
var inst_7098__$1 = inst_7113;
var state_7128__$1 = (function (){var statearr_7143 = state_7128;
(statearr_7143[(10)] = inst_7098__$1);

return statearr_7143;
})();
var statearr_7144_7160 = state_7128__$1;
(statearr_7144_7160[(2)] = null);

(statearr_7144_7160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7150,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7150,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7145[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7145[(1)] = (1));

return statearr_7145;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7128){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7128);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7146){if((e7146 instanceof Object)){
var ex__5362__auto__ = e7146;
var statearr_7147_7161 = state_7128;
(statearr_7147_7161[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7162 = state_7128;
state_7128 = G__7162;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7150,out))
})();
var state__5592__auto__ = (function (){var statearr_7148 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7148[(6)] = c__5590__auto___7150);

return statearr_7148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7150,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__7164 = arguments.length;
switch (G__7164) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7209,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7209,out){
return (function (state_7188){
var state_val_7189 = (state_7188[(1)]);
if((state_val_7189 === (7))){
var inst_7170 = (state_7188[(7)]);
var inst_7170__$1 = (state_7188[(2)]);
var inst_7171 = (inst_7170__$1 == null);
var inst_7172 = cljs.core.not(inst_7171);
var state_7188__$1 = (function (){var statearr_7190 = state_7188;
(statearr_7190[(7)] = inst_7170__$1);

return statearr_7190;
})();
if(inst_7172){
var statearr_7191_7210 = state_7188__$1;
(statearr_7191_7210[(1)] = (8));

} else {
var statearr_7192_7211 = state_7188__$1;
(statearr_7192_7211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (1))){
var inst_7165 = (0);
var state_7188__$1 = (function (){var statearr_7193 = state_7188;
(statearr_7193[(8)] = inst_7165);

return statearr_7193;
})();
var statearr_7194_7212 = state_7188__$1;
(statearr_7194_7212[(2)] = null);

(statearr_7194_7212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (4))){
var state_7188__$1 = state_7188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7188__$1,(7),ch);
} else {
if((state_val_7189 === (6))){
var inst_7183 = (state_7188[(2)]);
var state_7188__$1 = state_7188;
var statearr_7195_7213 = state_7188__$1;
(statearr_7195_7213[(2)] = inst_7183);

(statearr_7195_7213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (3))){
var inst_7185 = (state_7188[(2)]);
var inst_7186 = cljs.core.async.close_BANG_(out);
var state_7188__$1 = (function (){var statearr_7196 = state_7188;
(statearr_7196[(9)] = inst_7185);

return statearr_7196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7188__$1,inst_7186);
} else {
if((state_val_7189 === (2))){
var inst_7165 = (state_7188[(8)]);
var inst_7167 = (inst_7165 < n);
var state_7188__$1 = state_7188;
if(cljs.core.truth_(inst_7167)){
var statearr_7197_7214 = state_7188__$1;
(statearr_7197_7214[(1)] = (4));

} else {
var statearr_7198_7215 = state_7188__$1;
(statearr_7198_7215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (11))){
var inst_7165 = (state_7188[(8)]);
var inst_7175 = (state_7188[(2)]);
var inst_7176 = (inst_7165 + (1));
var inst_7165__$1 = inst_7176;
var state_7188__$1 = (function (){var statearr_7199 = state_7188;
(statearr_7199[(8)] = inst_7165__$1);

(statearr_7199[(10)] = inst_7175);

return statearr_7199;
})();
var statearr_7200_7216 = state_7188__$1;
(statearr_7200_7216[(2)] = null);

(statearr_7200_7216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (9))){
var state_7188__$1 = state_7188;
var statearr_7201_7217 = state_7188__$1;
(statearr_7201_7217[(2)] = null);

(statearr_7201_7217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (5))){
var state_7188__$1 = state_7188;
var statearr_7202_7218 = state_7188__$1;
(statearr_7202_7218[(2)] = null);

(statearr_7202_7218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (10))){
var inst_7180 = (state_7188[(2)]);
var state_7188__$1 = state_7188;
var statearr_7203_7219 = state_7188__$1;
(statearr_7203_7219[(2)] = inst_7180);

(statearr_7203_7219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7189 === (8))){
var inst_7170 = (state_7188[(7)]);
var state_7188__$1 = state_7188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7188__$1,(11),out,inst_7170);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7209,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7209,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7204[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7204[(1)] = (1));

return statearr_7204;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7188){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7188);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7205){if((e7205 instanceof Object)){
var ex__5362__auto__ = e7205;
var statearr_7206_7220 = state_7188;
(statearr_7206_7220[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7221 = state_7188;
state_7188 = G__7221;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7209,out))
})();
var state__5592__auto__ = (function (){var statearr_7207 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7207[(6)] = c__5590__auto___7209);

return statearr_7207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7223 = (function (f,ch,meta7224){
this.f = f;
this.ch = ch;
this.meta7224 = meta7224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7225,meta7224__$1){
var self__ = this;
var _7225__$1 = this;
return (new cljs.core.async.t_cljs$core$async7223(self__.f,self__.ch,meta7224__$1));
});

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7225){
var self__ = this;
var _7225__$1 = this;
return self__.meta7224;
});

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7226 = (function (f,ch,meta7224,_,fn1,meta7227){
this.f = f;
this.ch = ch;
this.meta7224 = meta7224;
this._ = _;
this.fn1 = fn1;
this.meta7227 = meta7227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_7228,meta7227__$1){
var self__ = this;
var _7228__$1 = this;
return (new cljs.core.async.t_cljs$core$async7226(self__.f,self__.ch,self__.meta7224,self__._,self__.fn1,meta7227__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_7228){
var self__ = this;
var _7228__$1 = this;
return self__.meta7227;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__7222_SHARP_){
var G__7229 = (((p1__7222_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__7222_SHARP_) : self__.f.call(null,p1__7222_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__7229) : f1.call(null,G__7229));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7224","meta7224",-969514698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async7223","cljs.core.async/t_cljs$core$async7223",430556292,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta7227","meta7227",1463430002,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7226";

cljs.core.async.t_cljs$core$async7226.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7226");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7226.
 */
cljs.core.async.__GT_t_cljs$core$async7226 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7226(f__$1,ch__$1,meta7224__$1,___$2,fn1__$1,meta7227){
return (new cljs.core.async.t_cljs$core$async7226(f__$1,ch__$1,meta7224__$1,___$2,fn1__$1,meta7227));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async7226(self__.f,self__.ch,self__.meta7224,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__7230 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__7230) : self__.f.call(null,G__7230));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async7223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7224","meta7224",-969514698,null)], null);
});

cljs.core.async.t_cljs$core$async7223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7223";

cljs.core.async.t_cljs$core$async7223.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7223");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7223.
 */
cljs.core.async.__GT_t_cljs$core$async7223 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7223(f__$1,ch__$1,meta7224){
return (new cljs.core.async.t_cljs$core$async7223(f__$1,ch__$1,meta7224));
});

}

return (new cljs.core.async.t_cljs$core$async7223(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7231 = (function (f,ch,meta7232){
this.f = f;
this.ch = ch;
this.meta7232 = meta7232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7233,meta7232__$1){
var self__ = this;
var _7233__$1 = this;
return (new cljs.core.async.t_cljs$core$async7231(self__.f,self__.ch,meta7232__$1));
});

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7233){
var self__ = this;
var _7233__$1 = this;
return self__.meta7232;
});

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async7231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7232","meta7232",-1497498065,null)], null);
});

cljs.core.async.t_cljs$core$async7231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7231";

cljs.core.async.t_cljs$core$async7231.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7231");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7231.
 */
cljs.core.async.__GT_t_cljs$core$async7231 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async7231(f__$1,ch__$1,meta7232){
return (new cljs.core.async.t_cljs$core$async7231(f__$1,ch__$1,meta7232));
});

}

return (new cljs.core.async.t_cljs$core$async7231(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7234 = (function (p,ch,meta7235){
this.p = p;
this.ch = ch;
this.meta7235 = meta7235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7236,meta7235__$1){
var self__ = this;
var _7236__$1 = this;
return (new cljs.core.async.t_cljs$core$async7234(self__.p,self__.ch,meta7235__$1));
});

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7236){
var self__ = this;
var _7236__$1 = this;
return self__.meta7235;
});

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async7234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7235","meta7235",1335264389,null)], null);
});

cljs.core.async.t_cljs$core$async7234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7234";

cljs.core.async.t_cljs$core$async7234.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7234");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7234.
 */
cljs.core.async.__GT_t_cljs$core$async7234 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async7234(p__$1,ch__$1,meta7235){
return (new cljs.core.async.t_cljs$core$async7234(p__$1,ch__$1,meta7235));
});

}

return (new cljs.core.async.t_cljs$core$async7234(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__7238 = arguments.length;
switch (G__7238) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7278,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7278,out){
return (function (state_7259){
var state_val_7260 = (state_7259[(1)]);
if((state_val_7260 === (7))){
var inst_7255 = (state_7259[(2)]);
var state_7259__$1 = state_7259;
var statearr_7261_7279 = state_7259__$1;
(statearr_7261_7279[(2)] = inst_7255);

(statearr_7261_7279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (1))){
var state_7259__$1 = state_7259;
var statearr_7262_7280 = state_7259__$1;
(statearr_7262_7280[(2)] = null);

(statearr_7262_7280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (4))){
var inst_7241 = (state_7259[(7)]);
var inst_7241__$1 = (state_7259[(2)]);
var inst_7242 = (inst_7241__$1 == null);
var state_7259__$1 = (function (){var statearr_7263 = state_7259;
(statearr_7263[(7)] = inst_7241__$1);

return statearr_7263;
})();
if(cljs.core.truth_(inst_7242)){
var statearr_7264_7281 = state_7259__$1;
(statearr_7264_7281[(1)] = (5));

} else {
var statearr_7265_7282 = state_7259__$1;
(statearr_7265_7282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (6))){
var inst_7241 = (state_7259[(7)]);
var inst_7246 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7241) : p.call(null,inst_7241));
var state_7259__$1 = state_7259;
if(cljs.core.truth_(inst_7246)){
var statearr_7266_7283 = state_7259__$1;
(statearr_7266_7283[(1)] = (8));

} else {
var statearr_7267_7284 = state_7259__$1;
(statearr_7267_7284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (3))){
var inst_7257 = (state_7259[(2)]);
var state_7259__$1 = state_7259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7259__$1,inst_7257);
} else {
if((state_val_7260 === (2))){
var state_7259__$1 = state_7259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7259__$1,(4),ch);
} else {
if((state_val_7260 === (11))){
var inst_7249 = (state_7259[(2)]);
var state_7259__$1 = state_7259;
var statearr_7268_7285 = state_7259__$1;
(statearr_7268_7285[(2)] = inst_7249);

(statearr_7268_7285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (9))){
var state_7259__$1 = state_7259;
var statearr_7269_7286 = state_7259__$1;
(statearr_7269_7286[(2)] = null);

(statearr_7269_7286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (5))){
var inst_7244 = cljs.core.async.close_BANG_(out);
var state_7259__$1 = state_7259;
var statearr_7270_7287 = state_7259__$1;
(statearr_7270_7287[(2)] = inst_7244);

(statearr_7270_7287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (10))){
var inst_7252 = (state_7259[(2)]);
var state_7259__$1 = (function (){var statearr_7271 = state_7259;
(statearr_7271[(8)] = inst_7252);

return statearr_7271;
})();
var statearr_7272_7288 = state_7259__$1;
(statearr_7272_7288[(2)] = null);

(statearr_7272_7288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7260 === (8))){
var inst_7241 = (state_7259[(7)]);
var state_7259__$1 = state_7259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7259__$1,(11),out,inst_7241);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7278,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7278,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7273 = [null,null,null,null,null,null,null,null,null];
(statearr_7273[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7273[(1)] = (1));

return statearr_7273;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7259){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7259);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7274){if((e7274 instanceof Object)){
var ex__5362__auto__ = e7274;
var statearr_7275_7289 = state_7259;
(statearr_7275_7289[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7290 = state_7259;
state_7259 = G__7290;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7278,out))
})();
var state__5592__auto__ = (function (){var statearr_7276 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7276[(6)] = c__5590__auto___7278);

return statearr_7276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7278,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7292 = arguments.length;
switch (G__7292) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__5590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto__){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto__){
return (function (state_7355){
var state_val_7356 = (state_7355[(1)]);
if((state_val_7356 === (7))){
var inst_7351 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
var statearr_7357_7395 = state_7355__$1;
(statearr_7357_7395[(2)] = inst_7351);

(statearr_7357_7395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (20))){
var inst_7321 = (state_7355[(7)]);
var inst_7332 = (state_7355[(2)]);
var inst_7333 = cljs.core.next(inst_7321);
var inst_7307 = inst_7333;
var inst_7308 = null;
var inst_7309 = (0);
var inst_7310 = (0);
var state_7355__$1 = (function (){var statearr_7358 = state_7355;
(statearr_7358[(8)] = inst_7332);

(statearr_7358[(9)] = inst_7309);

(statearr_7358[(10)] = inst_7307);

(statearr_7358[(11)] = inst_7308);

(statearr_7358[(12)] = inst_7310);

return statearr_7358;
})();
var statearr_7359_7396 = state_7355__$1;
(statearr_7359_7396[(2)] = null);

(statearr_7359_7396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (1))){
var state_7355__$1 = state_7355;
var statearr_7360_7397 = state_7355__$1;
(statearr_7360_7397[(2)] = null);

(statearr_7360_7397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (4))){
var inst_7296 = (state_7355[(13)]);
var inst_7296__$1 = (state_7355[(2)]);
var inst_7297 = (inst_7296__$1 == null);
var state_7355__$1 = (function (){var statearr_7361 = state_7355;
(statearr_7361[(13)] = inst_7296__$1);

return statearr_7361;
})();
if(cljs.core.truth_(inst_7297)){
var statearr_7362_7398 = state_7355__$1;
(statearr_7362_7398[(1)] = (5));

} else {
var statearr_7363_7399 = state_7355__$1;
(statearr_7363_7399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (15))){
var state_7355__$1 = state_7355;
var statearr_7367_7400 = state_7355__$1;
(statearr_7367_7400[(2)] = null);

(statearr_7367_7400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (21))){
var state_7355__$1 = state_7355;
var statearr_7368_7401 = state_7355__$1;
(statearr_7368_7401[(2)] = null);

(statearr_7368_7401[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (13))){
var inst_7309 = (state_7355[(9)]);
var inst_7307 = (state_7355[(10)]);
var inst_7308 = (state_7355[(11)]);
var inst_7310 = (state_7355[(12)]);
var inst_7317 = (state_7355[(2)]);
var inst_7318 = (inst_7310 + (1));
var tmp7364 = inst_7309;
var tmp7365 = inst_7307;
var tmp7366 = inst_7308;
var inst_7307__$1 = tmp7365;
var inst_7308__$1 = tmp7366;
var inst_7309__$1 = tmp7364;
var inst_7310__$1 = inst_7318;
var state_7355__$1 = (function (){var statearr_7369 = state_7355;
(statearr_7369[(9)] = inst_7309__$1);

(statearr_7369[(14)] = inst_7317);

(statearr_7369[(10)] = inst_7307__$1);

(statearr_7369[(11)] = inst_7308__$1);

(statearr_7369[(12)] = inst_7310__$1);

return statearr_7369;
})();
var statearr_7370_7402 = state_7355__$1;
(statearr_7370_7402[(2)] = null);

(statearr_7370_7402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (22))){
var state_7355__$1 = state_7355;
var statearr_7371_7403 = state_7355__$1;
(statearr_7371_7403[(2)] = null);

(statearr_7371_7403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (6))){
var inst_7296 = (state_7355[(13)]);
var inst_7305 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_7296) : f.call(null,inst_7296));
var inst_7306 = cljs.core.seq(inst_7305);
var inst_7307 = inst_7306;
var inst_7308 = null;
var inst_7309 = (0);
var inst_7310 = (0);
var state_7355__$1 = (function (){var statearr_7372 = state_7355;
(statearr_7372[(9)] = inst_7309);

(statearr_7372[(10)] = inst_7307);

(statearr_7372[(11)] = inst_7308);

(statearr_7372[(12)] = inst_7310);

return statearr_7372;
})();
var statearr_7373_7404 = state_7355__$1;
(statearr_7373_7404[(2)] = null);

(statearr_7373_7404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (17))){
var inst_7321 = (state_7355[(7)]);
var inst_7325 = cljs.core.chunk_first(inst_7321);
var inst_7326 = cljs.core.chunk_rest(inst_7321);
var inst_7327 = cljs.core.count(inst_7325);
var inst_7307 = inst_7326;
var inst_7308 = inst_7325;
var inst_7309 = inst_7327;
var inst_7310 = (0);
var state_7355__$1 = (function (){var statearr_7374 = state_7355;
(statearr_7374[(9)] = inst_7309);

(statearr_7374[(10)] = inst_7307);

(statearr_7374[(11)] = inst_7308);

(statearr_7374[(12)] = inst_7310);

return statearr_7374;
})();
var statearr_7375_7405 = state_7355__$1;
(statearr_7375_7405[(2)] = null);

(statearr_7375_7405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (3))){
var inst_7353 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7355__$1,inst_7353);
} else {
if((state_val_7356 === (12))){
var inst_7341 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
var statearr_7376_7406 = state_7355__$1;
(statearr_7376_7406[(2)] = inst_7341);

(statearr_7376_7406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (2))){
var state_7355__$1 = state_7355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7355__$1,(4),in$);
} else {
if((state_val_7356 === (23))){
var inst_7349 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
var statearr_7377_7407 = state_7355__$1;
(statearr_7377_7407[(2)] = inst_7349);

(statearr_7377_7407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (19))){
var inst_7336 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
var statearr_7378_7408 = state_7355__$1;
(statearr_7378_7408[(2)] = inst_7336);

(statearr_7378_7408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (11))){
var inst_7321 = (state_7355[(7)]);
var inst_7307 = (state_7355[(10)]);
var inst_7321__$1 = cljs.core.seq(inst_7307);
var state_7355__$1 = (function (){var statearr_7379 = state_7355;
(statearr_7379[(7)] = inst_7321__$1);

return statearr_7379;
})();
if(inst_7321__$1){
var statearr_7380_7409 = state_7355__$1;
(statearr_7380_7409[(1)] = (14));

} else {
var statearr_7381_7410 = state_7355__$1;
(statearr_7381_7410[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (9))){
var inst_7343 = (state_7355[(2)]);
var inst_7344 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_7355__$1 = (function (){var statearr_7382 = state_7355;
(statearr_7382[(15)] = inst_7343);

return statearr_7382;
})();
if(cljs.core.truth_(inst_7344)){
var statearr_7383_7411 = state_7355__$1;
(statearr_7383_7411[(1)] = (21));

} else {
var statearr_7384_7412 = state_7355__$1;
(statearr_7384_7412[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (5))){
var inst_7299 = cljs.core.async.close_BANG_(out);
var state_7355__$1 = state_7355;
var statearr_7385_7413 = state_7355__$1;
(statearr_7385_7413[(2)] = inst_7299);

(statearr_7385_7413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (14))){
var inst_7321 = (state_7355[(7)]);
var inst_7323 = cljs.core.chunked_seq_QMARK_(inst_7321);
var state_7355__$1 = state_7355;
if(inst_7323){
var statearr_7386_7414 = state_7355__$1;
(statearr_7386_7414[(1)] = (17));

} else {
var statearr_7387_7415 = state_7355__$1;
(statearr_7387_7415[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (16))){
var inst_7339 = (state_7355[(2)]);
var state_7355__$1 = state_7355;
var statearr_7388_7416 = state_7355__$1;
(statearr_7388_7416[(2)] = inst_7339);

(statearr_7388_7416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7356 === (10))){
var inst_7308 = (state_7355[(11)]);
var inst_7310 = (state_7355[(12)]);
var inst_7315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7308,inst_7310);
var state_7355__$1 = state_7355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7355__$1,(13),out,inst_7315);
} else {
if((state_val_7356 === (18))){
var inst_7321 = (state_7355[(7)]);
var inst_7330 = cljs.core.first(inst_7321);
var state_7355__$1 = state_7355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7355__$1,(20),out,inst_7330);
} else {
if((state_val_7356 === (8))){
var inst_7309 = (state_7355[(9)]);
var inst_7310 = (state_7355[(12)]);
var inst_7312 = (inst_7310 < inst_7309);
var inst_7313 = inst_7312;
var state_7355__$1 = state_7355;
if(cljs.core.truth_(inst_7313)){
var statearr_7389_7417 = state_7355__$1;
(statearr_7389_7417[(1)] = (10));

} else {
var statearr_7390_7418 = state_7355__$1;
(statearr_7390_7418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto__))
;
return ((function (switch__5358__auto__,c__5590__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____0 = (function (){
var statearr_7391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7391[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__);

(statearr_7391[(1)] = (1));

return statearr_7391;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____1 = (function (state_7355){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7355);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7392){if((e7392 instanceof Object)){
var ex__5362__auto__ = e7392;
var statearr_7393_7419 = state_7355;
(statearr_7393_7419[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7420 = state_7355;
state_7355 = G__7420;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__ = function(state_7355){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____1.call(this,state_7355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5359__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto__))
})();
var state__5592__auto__ = (function (){var statearr_7394 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7394[(6)] = c__5590__auto__);

return statearr_7394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto__))
);

return c__5590__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__7422 = arguments.length;
switch (G__7422) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__7425 = arguments.length;
switch (G__7425) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__7428 = arguments.length;
switch (G__7428) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7475,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7475,out){
return (function (state_7452){
var state_val_7453 = (state_7452[(1)]);
if((state_val_7453 === (7))){
var inst_7447 = (state_7452[(2)]);
var state_7452__$1 = state_7452;
var statearr_7454_7476 = state_7452__$1;
(statearr_7454_7476[(2)] = inst_7447);

(statearr_7454_7476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (1))){
var inst_7429 = null;
var state_7452__$1 = (function (){var statearr_7455 = state_7452;
(statearr_7455[(7)] = inst_7429);

return statearr_7455;
})();
var statearr_7456_7477 = state_7452__$1;
(statearr_7456_7477[(2)] = null);

(statearr_7456_7477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (4))){
var inst_7432 = (state_7452[(8)]);
var inst_7432__$1 = (state_7452[(2)]);
var inst_7433 = (inst_7432__$1 == null);
var inst_7434 = cljs.core.not(inst_7433);
var state_7452__$1 = (function (){var statearr_7457 = state_7452;
(statearr_7457[(8)] = inst_7432__$1);

return statearr_7457;
})();
if(inst_7434){
var statearr_7458_7478 = state_7452__$1;
(statearr_7458_7478[(1)] = (5));

} else {
var statearr_7459_7479 = state_7452__$1;
(statearr_7459_7479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (6))){
var state_7452__$1 = state_7452;
var statearr_7460_7480 = state_7452__$1;
(statearr_7460_7480[(2)] = null);

(statearr_7460_7480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (3))){
var inst_7449 = (state_7452[(2)]);
var inst_7450 = cljs.core.async.close_BANG_(out);
var state_7452__$1 = (function (){var statearr_7461 = state_7452;
(statearr_7461[(9)] = inst_7449);

return statearr_7461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7452__$1,inst_7450);
} else {
if((state_val_7453 === (2))){
var state_7452__$1 = state_7452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7452__$1,(4),ch);
} else {
if((state_val_7453 === (11))){
var inst_7432 = (state_7452[(8)]);
var inst_7441 = (state_7452[(2)]);
var inst_7429 = inst_7432;
var state_7452__$1 = (function (){var statearr_7462 = state_7452;
(statearr_7462[(7)] = inst_7429);

(statearr_7462[(10)] = inst_7441);

return statearr_7462;
})();
var statearr_7463_7481 = state_7452__$1;
(statearr_7463_7481[(2)] = null);

(statearr_7463_7481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (9))){
var inst_7432 = (state_7452[(8)]);
var state_7452__$1 = state_7452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7452__$1,(11),out,inst_7432);
} else {
if((state_val_7453 === (5))){
var inst_7429 = (state_7452[(7)]);
var inst_7432 = (state_7452[(8)]);
var inst_7436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_7432,inst_7429);
var state_7452__$1 = state_7452;
if(inst_7436){
var statearr_7465_7482 = state_7452__$1;
(statearr_7465_7482[(1)] = (8));

} else {
var statearr_7466_7483 = state_7452__$1;
(statearr_7466_7483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (10))){
var inst_7444 = (state_7452[(2)]);
var state_7452__$1 = state_7452;
var statearr_7467_7484 = state_7452__$1;
(statearr_7467_7484[(2)] = inst_7444);

(statearr_7467_7484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7453 === (8))){
var inst_7429 = (state_7452[(7)]);
var tmp7464 = inst_7429;
var inst_7429__$1 = tmp7464;
var state_7452__$1 = (function (){var statearr_7468 = state_7452;
(statearr_7468[(7)] = inst_7429__$1);

return statearr_7468;
})();
var statearr_7469_7485 = state_7452__$1;
(statearr_7469_7485[(2)] = null);

(statearr_7469_7485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7475,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7475,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7470[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7470[(1)] = (1));

return statearr_7470;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7452){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7452);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7471){if((e7471 instanceof Object)){
var ex__5362__auto__ = e7471;
var statearr_7472_7486 = state_7452;
(statearr_7472_7486[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7487 = state_7452;
state_7452 = G__7487;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7475,out))
})();
var state__5592__auto__ = (function (){var statearr_7473 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7473[(6)] = c__5590__auto___7475);

return statearr_7473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7475,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__7489 = arguments.length;
switch (G__7489) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7555,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7555,out){
return (function (state_7527){
var state_val_7528 = (state_7527[(1)]);
if((state_val_7528 === (7))){
var inst_7523 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
var statearr_7529_7556 = state_7527__$1;
(statearr_7529_7556[(2)] = inst_7523);

(statearr_7529_7556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (1))){
var inst_7490 = (new Array(n));
var inst_7491 = inst_7490;
var inst_7492 = (0);
var state_7527__$1 = (function (){var statearr_7530 = state_7527;
(statearr_7530[(7)] = inst_7492);

(statearr_7530[(8)] = inst_7491);

return statearr_7530;
})();
var statearr_7531_7557 = state_7527__$1;
(statearr_7531_7557[(2)] = null);

(statearr_7531_7557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (4))){
var inst_7495 = (state_7527[(9)]);
var inst_7495__$1 = (state_7527[(2)]);
var inst_7496 = (inst_7495__$1 == null);
var inst_7497 = cljs.core.not(inst_7496);
var state_7527__$1 = (function (){var statearr_7532 = state_7527;
(statearr_7532[(9)] = inst_7495__$1);

return statearr_7532;
})();
if(inst_7497){
var statearr_7533_7558 = state_7527__$1;
(statearr_7533_7558[(1)] = (5));

} else {
var statearr_7534_7559 = state_7527__$1;
(statearr_7534_7559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (15))){
var inst_7517 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
var statearr_7535_7560 = state_7527__$1;
(statearr_7535_7560[(2)] = inst_7517);

(statearr_7535_7560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (13))){
var state_7527__$1 = state_7527;
var statearr_7536_7561 = state_7527__$1;
(statearr_7536_7561[(2)] = null);

(statearr_7536_7561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (6))){
var inst_7492 = (state_7527[(7)]);
var inst_7513 = (inst_7492 > (0));
var state_7527__$1 = state_7527;
if(cljs.core.truth_(inst_7513)){
var statearr_7537_7562 = state_7527__$1;
(statearr_7537_7562[(1)] = (12));

} else {
var statearr_7538_7563 = state_7527__$1;
(statearr_7538_7563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (3))){
var inst_7525 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7527__$1,inst_7525);
} else {
if((state_val_7528 === (12))){
var inst_7491 = (state_7527[(8)]);
var inst_7515 = cljs.core.vec(inst_7491);
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7527__$1,(15),out,inst_7515);
} else {
if((state_val_7528 === (2))){
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7527__$1,(4),ch);
} else {
if((state_val_7528 === (11))){
var inst_7507 = (state_7527[(2)]);
var inst_7508 = (new Array(n));
var inst_7491 = inst_7508;
var inst_7492 = (0);
var state_7527__$1 = (function (){var statearr_7539 = state_7527;
(statearr_7539[(7)] = inst_7492);

(statearr_7539[(10)] = inst_7507);

(statearr_7539[(8)] = inst_7491);

return statearr_7539;
})();
var statearr_7540_7564 = state_7527__$1;
(statearr_7540_7564[(2)] = null);

(statearr_7540_7564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (9))){
var inst_7491 = (state_7527[(8)]);
var inst_7505 = cljs.core.vec(inst_7491);
var state_7527__$1 = state_7527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7527__$1,(11),out,inst_7505);
} else {
if((state_val_7528 === (5))){
var inst_7500 = (state_7527[(11)]);
var inst_7492 = (state_7527[(7)]);
var inst_7495 = (state_7527[(9)]);
var inst_7491 = (state_7527[(8)]);
var inst_7499 = (inst_7491[inst_7492] = inst_7495);
var inst_7500__$1 = (inst_7492 + (1));
var inst_7501 = (inst_7500__$1 < n);
var state_7527__$1 = (function (){var statearr_7541 = state_7527;
(statearr_7541[(11)] = inst_7500__$1);

(statearr_7541[(12)] = inst_7499);

return statearr_7541;
})();
if(cljs.core.truth_(inst_7501)){
var statearr_7542_7565 = state_7527__$1;
(statearr_7542_7565[(1)] = (8));

} else {
var statearr_7543_7566 = state_7527__$1;
(statearr_7543_7566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (14))){
var inst_7520 = (state_7527[(2)]);
var inst_7521 = cljs.core.async.close_BANG_(out);
var state_7527__$1 = (function (){var statearr_7545 = state_7527;
(statearr_7545[(13)] = inst_7520);

return statearr_7545;
})();
var statearr_7546_7567 = state_7527__$1;
(statearr_7546_7567[(2)] = inst_7521);

(statearr_7546_7567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (10))){
var inst_7511 = (state_7527[(2)]);
var state_7527__$1 = state_7527;
var statearr_7547_7568 = state_7527__$1;
(statearr_7547_7568[(2)] = inst_7511);

(statearr_7547_7568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7528 === (8))){
var inst_7500 = (state_7527[(11)]);
var inst_7491 = (state_7527[(8)]);
var tmp7544 = inst_7491;
var inst_7491__$1 = tmp7544;
var inst_7492 = inst_7500;
var state_7527__$1 = (function (){var statearr_7548 = state_7527;
(statearr_7548[(7)] = inst_7492);

(statearr_7548[(8)] = inst_7491__$1);

return statearr_7548;
})();
var statearr_7549_7569 = state_7527__$1;
(statearr_7549_7569[(2)] = null);

(statearr_7549_7569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7555,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7555,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7550[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7550[(1)] = (1));

return statearr_7550;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7527){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7527);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7551){if((e7551 instanceof Object)){
var ex__5362__auto__ = e7551;
var statearr_7552_7570 = state_7527;
(statearr_7552_7570[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7571 = state_7527;
state_7527 = G__7571;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7555,out))
})();
var state__5592__auto__ = (function (){var statearr_7553 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7553[(6)] = c__5590__auto___7555);

return statearr_7553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7555,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7573 = arguments.length;
switch (G__7573) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5590__auto___7643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5590__auto___7643,out){
return (function (){
var f__5591__auto__ = (function (){var switch__5358__auto__ = ((function (c__5590__auto___7643,out){
return (function (state_7615){
var state_val_7616 = (state_7615[(1)]);
if((state_val_7616 === (7))){
var inst_7611 = (state_7615[(2)]);
var state_7615__$1 = state_7615;
var statearr_7617_7644 = state_7615__$1;
(statearr_7617_7644[(2)] = inst_7611);

(statearr_7617_7644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (1))){
var inst_7574 = [];
var inst_7575 = inst_7574;
var inst_7576 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7615__$1 = (function (){var statearr_7618 = state_7615;
(statearr_7618[(7)] = inst_7575);

(statearr_7618[(8)] = inst_7576);

return statearr_7618;
})();
var statearr_7619_7645 = state_7615__$1;
(statearr_7619_7645[(2)] = null);

(statearr_7619_7645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (4))){
var inst_7579 = (state_7615[(9)]);
var inst_7579__$1 = (state_7615[(2)]);
var inst_7580 = (inst_7579__$1 == null);
var inst_7581 = cljs.core.not(inst_7580);
var state_7615__$1 = (function (){var statearr_7620 = state_7615;
(statearr_7620[(9)] = inst_7579__$1);

return statearr_7620;
})();
if(inst_7581){
var statearr_7621_7646 = state_7615__$1;
(statearr_7621_7646[(1)] = (5));

} else {
var statearr_7622_7647 = state_7615__$1;
(statearr_7622_7647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (15))){
var inst_7605 = (state_7615[(2)]);
var state_7615__$1 = state_7615;
var statearr_7623_7648 = state_7615__$1;
(statearr_7623_7648[(2)] = inst_7605);

(statearr_7623_7648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (13))){
var state_7615__$1 = state_7615;
var statearr_7624_7649 = state_7615__$1;
(statearr_7624_7649[(2)] = null);

(statearr_7624_7649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (6))){
var inst_7575 = (state_7615[(7)]);
var inst_7600 = inst_7575.length;
var inst_7601 = (inst_7600 > (0));
var state_7615__$1 = state_7615;
if(cljs.core.truth_(inst_7601)){
var statearr_7625_7650 = state_7615__$1;
(statearr_7625_7650[(1)] = (12));

} else {
var statearr_7626_7651 = state_7615__$1;
(statearr_7626_7651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (3))){
var inst_7613 = (state_7615[(2)]);
var state_7615__$1 = state_7615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7615__$1,inst_7613);
} else {
if((state_val_7616 === (12))){
var inst_7575 = (state_7615[(7)]);
var inst_7603 = cljs.core.vec(inst_7575);
var state_7615__$1 = state_7615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7615__$1,(15),out,inst_7603);
} else {
if((state_val_7616 === (2))){
var state_7615__$1 = state_7615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7615__$1,(4),ch);
} else {
if((state_val_7616 === (11))){
var inst_7579 = (state_7615[(9)]);
var inst_7583 = (state_7615[(10)]);
var inst_7593 = (state_7615[(2)]);
var inst_7594 = [];
var inst_7595 = inst_7594.push(inst_7579);
var inst_7575 = inst_7594;
var inst_7576 = inst_7583;
var state_7615__$1 = (function (){var statearr_7627 = state_7615;
(statearr_7627[(7)] = inst_7575);

(statearr_7627[(11)] = inst_7595);

(statearr_7627[(12)] = inst_7593);

(statearr_7627[(8)] = inst_7576);

return statearr_7627;
})();
var statearr_7628_7652 = state_7615__$1;
(statearr_7628_7652[(2)] = null);

(statearr_7628_7652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (9))){
var inst_7575 = (state_7615[(7)]);
var inst_7591 = cljs.core.vec(inst_7575);
var state_7615__$1 = state_7615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7615__$1,(11),out,inst_7591);
} else {
if((state_val_7616 === (5))){
var inst_7579 = (state_7615[(9)]);
var inst_7583 = (state_7615[(10)]);
var inst_7576 = (state_7615[(8)]);
var inst_7583__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_7579) : f.call(null,inst_7579));
var inst_7584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_7583__$1,inst_7576);
var inst_7585 = cljs.core.keyword_identical_QMARK_(inst_7576,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_7586 = ((inst_7584) || (inst_7585));
var state_7615__$1 = (function (){var statearr_7629 = state_7615;
(statearr_7629[(10)] = inst_7583__$1);

return statearr_7629;
})();
if(cljs.core.truth_(inst_7586)){
var statearr_7630_7653 = state_7615__$1;
(statearr_7630_7653[(1)] = (8));

} else {
var statearr_7631_7654 = state_7615__$1;
(statearr_7631_7654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (14))){
var inst_7608 = (state_7615[(2)]);
var inst_7609 = cljs.core.async.close_BANG_(out);
var state_7615__$1 = (function (){var statearr_7633 = state_7615;
(statearr_7633[(13)] = inst_7608);

return statearr_7633;
})();
var statearr_7634_7655 = state_7615__$1;
(statearr_7634_7655[(2)] = inst_7609);

(statearr_7634_7655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (10))){
var inst_7598 = (state_7615[(2)]);
var state_7615__$1 = state_7615;
var statearr_7635_7656 = state_7615__$1;
(statearr_7635_7656[(2)] = inst_7598);

(statearr_7635_7656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7616 === (8))){
var inst_7579 = (state_7615[(9)]);
var inst_7583 = (state_7615[(10)]);
var inst_7575 = (state_7615[(7)]);
var inst_7588 = inst_7575.push(inst_7579);
var tmp7632 = inst_7575;
var inst_7575__$1 = tmp7632;
var inst_7576 = inst_7583;
var state_7615__$1 = (function (){var statearr_7636 = state_7615;
(statearr_7636[(7)] = inst_7575__$1);

(statearr_7636[(14)] = inst_7588);

(statearr_7636[(8)] = inst_7576);

return statearr_7636;
})();
var statearr_7637_7657 = state_7615__$1;
(statearr_7637_7657[(2)] = null);

(statearr_7637_7657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5590__auto___7643,out))
;
return ((function (switch__5358__auto__,c__5590__auto___7643,out){
return (function() {
var cljs$core$async$state_machine__5359__auto__ = null;
var cljs$core$async$state_machine__5359__auto____0 = (function (){
var statearr_7638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7638[(0)] = cljs$core$async$state_machine__5359__auto__);

(statearr_7638[(1)] = (1));

return statearr_7638;
});
var cljs$core$async$state_machine__5359__auto____1 = (function (state_7615){
while(true){
var ret_value__5360__auto__ = (function (){try{while(true){
var result__5361__auto__ = switch__5358__auto__(state_7615);
if(cljs.core.keyword_identical_QMARK_(result__5361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5361__auto__;
}
break;
}
}catch (e7639){if((e7639 instanceof Object)){
var ex__5362__auto__ = e7639;
var statearr_7640_7658 = state_7615;
(statearr_7640_7658[(5)] = ex__5362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7659 = state_7615;
state_7615 = G__7659;
continue;
} else {
return ret_value__5360__auto__;
}
break;
}
});
cljs$core$async$state_machine__5359__auto__ = function(state_7615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5359__auto____1.call(this,state_7615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5359__auto____0;
cljs$core$async$state_machine__5359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5359__auto____1;
return cljs$core$async$state_machine__5359__auto__;
})()
;})(switch__5358__auto__,c__5590__auto___7643,out))
})();
var state__5592__auto__ = (function (){var statearr_7641 = (f__5591__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5591__auto__.cljs$core$IFn$_invoke$arity$0() : f__5591__auto__.call(null));
(statearr_7641[(6)] = c__5590__auto___7643);

return statearr_7641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5592__auto__);
});})(c__5590__auto___7643,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
