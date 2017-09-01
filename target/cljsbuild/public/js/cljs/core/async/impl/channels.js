// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025 = (function (val,meta14026){
this.val = val;
this.meta14026 = meta14026;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14027,meta14026__$1){
var self__ = this;
var _14027__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025(self__.val,meta14026__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14027){
var self__ = this;
var _14027__$1 = this;
return self__.meta14026;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta14026], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14025";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14025");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels14025 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels14025(val__$1,meta14026){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025(val__$1,meta14026));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14025(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__8397__auto__ = (((this$ == null))?null:this$);
var m__8398__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8398__auto__.call(null,this$));
} else {
var m__8398__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8398__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_14039 = self__.puts.pop();
if((putter_14039 == null)){
} else {
var put_handler_14040 = putter_14039.handler;
var val_14041 = putter_14039.val;
if(put_handler_14040.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_14042 = put_handler_14040.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_14042,put_handler_14040,val_14041,putter_14039,this$__$1){
return (function (){
return (put_cb_14042.cljs$core$IFn$_invoke$arity$1 ? put_cb_14042.cljs$core$IFn$_invoke$arity$1(true) : put_cb_14042.call(null,true));
});})(put_cb_14042,put_handler_14040,val_14041,putter_14039,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__7666__auto__ = self__.buf;
if(cljs.core.truth_(and__7666__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__7666__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__14043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__14043;
continue;
} else {
var G__14044 = takers;
takers = G__14044;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__14028_14045 = cljs.core.seq(take_cbs);
var chunk__14029_14046 = null;
var count__14030_14047 = (0);
var i__14031_14048 = (0);
while(true){
if((i__14031_14048 < count__14030_14047)){
var f_14049 = chunk__14029_14046.cljs$core$IIndexed$_nth$arity$2(null,i__14031_14048);
cljs.core.async.impl.dispatch.run(f_14049);

var G__14050 = seq__14028_14045;
var G__14051 = chunk__14029_14046;
var G__14052 = count__14030_14047;
var G__14053 = (i__14031_14048 + (1));
seq__14028_14045 = G__14050;
chunk__14029_14046 = G__14051;
count__14030_14047 = G__14052;
i__14031_14048 = G__14053;
continue;
} else {
var temp__5278__auto___14054 = cljs.core.seq(seq__14028_14045);
if(temp__5278__auto___14054){
var seq__14028_14055__$1 = temp__5278__auto___14054;
if(cljs.core.chunked_seq_QMARK_(seq__14028_14055__$1)){
var c__8590__auto___14056 = cljs.core.chunk_first(seq__14028_14055__$1);
var G__14057 = cljs.core.chunk_rest(seq__14028_14055__$1);
var G__14058 = c__8590__auto___14056;
var G__14059 = cljs.core.count(c__8590__auto___14056);
var G__14060 = (0);
seq__14028_14045 = G__14057;
chunk__14029_14046 = G__14058;
count__14030_14047 = G__14059;
i__14031_14048 = G__14060;
continue;
} else {
var f_14061 = cljs.core.first(seq__14028_14055__$1);
cljs.core.async.impl.dispatch.run(f_14061);

var G__14062 = cljs.core.next(seq__14028_14055__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__14028_14045 = G__14062;
chunk__14029_14046 = G__14063;
count__14030_14047 = G__14064;
i__14031_14048 = G__14065;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5276__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5276__auto__)){
var take_cb = temp__5276__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__14032 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__7666__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__7666__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7666__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__14066 = cbs__$1;
cbs = G__14066;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__14035_14067 = cljs.core.seq(cbs);
var chunk__14036_14068 = null;
var count__14037_14069 = (0);
var i__14038_14070 = (0);
while(true){
if((i__14038_14070 < count__14037_14069)){
var cb_14071 = chunk__14036_14068.cljs$core$IIndexed$_nth$arity$2(null,i__14038_14070);
cljs.core.async.impl.dispatch.run(((function (seq__14035_14067,chunk__14036_14068,count__14037_14069,i__14038_14070,cb_14071,val,vec__14032,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return (cb_14071.cljs$core$IFn$_invoke$arity$1 ? cb_14071.cljs$core$IFn$_invoke$arity$1(true) : cb_14071.call(null,true));
});})(seq__14035_14067,chunk__14036_14068,count__14037_14069,i__14038_14070,cb_14071,val,vec__14032,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__14072 = seq__14035_14067;
var G__14073 = chunk__14036_14068;
var G__14074 = count__14037_14069;
var G__14075 = (i__14038_14070 + (1));
seq__14035_14067 = G__14072;
chunk__14036_14068 = G__14073;
count__14037_14069 = G__14074;
i__14038_14070 = G__14075;
continue;
} else {
var temp__5278__auto___14076 = cljs.core.seq(seq__14035_14067);
if(temp__5278__auto___14076){
var seq__14035_14077__$1 = temp__5278__auto___14076;
if(cljs.core.chunked_seq_QMARK_(seq__14035_14077__$1)){
var c__8590__auto___14078 = cljs.core.chunk_first(seq__14035_14077__$1);
var G__14079 = cljs.core.chunk_rest(seq__14035_14077__$1);
var G__14080 = c__8590__auto___14078;
var G__14081 = cljs.core.count(c__8590__auto___14078);
var G__14082 = (0);
seq__14035_14067 = G__14079;
chunk__14036_14068 = G__14080;
count__14037_14069 = G__14081;
i__14038_14070 = G__14082;
continue;
} else {
var cb_14083 = cljs.core.first(seq__14035_14077__$1);
cljs.core.async.impl.dispatch.run(((function (seq__14035_14067,chunk__14036_14068,count__14037_14069,i__14038_14070,cb_14083,seq__14035_14077__$1,temp__5278__auto___14076,val,vec__14032,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return (cb_14083.cljs$core$IFn$_invoke$arity$1 ? cb_14083.cljs$core$IFn$_invoke$arity$1(true) : cb_14083.call(null,true));
});})(seq__14035_14067,chunk__14036_14068,count__14037_14069,i__14038_14070,cb_14083,seq__14035_14077__$1,temp__5278__auto___14076,val,vec__14032,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__14084 = cljs.core.next(seq__14035_14077__$1);
var G__14085 = null;
var G__14086 = (0);
var G__14087 = (0);
seq__14035_14067 = G__14084;
chunk__14036_14068 = G__14085;
count__14037_14069 = G__14086;
i__14038_14070 = G__14087;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__7666__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__7666__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7666__auto__;
}
})())){
var has_val = (function (){var and__7666__auto__ = self__.buf;
if(cljs.core.truth_(and__7666__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7666__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__7666__auto__ = self__.buf;
if(cljs.core.truth_(and__7666__auto__)){
return (self__.puts.length === (0));
} else {
return and__7666__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_14088 = self__.takes.pop();
if((taker_14088 == null)){
} else {
if(taker_14088.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_14089 = taker_14088.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_14090 = (cljs.core.truth_((function (){var and__7666__auto__ = self__.buf;
if(cljs.core.truth_(and__7666__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7666__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_14089,val_14090,taker_14088,this$__$1){
return (function (){
return (take_cb_14089.cljs$core$IFn$_invoke$arity$1 ? take_cb_14089.cljs$core$IFn$_invoke$arity$1(val_14090) : take_cb_14089.call(null,val_14090));
});})(take_cb_14089,val_14090,taker_14088,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__14091 = (function (){var or__7678__auto__ = exh;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__14091.cljs$core$IFn$_invoke$arity$1 ? fexpr__14091.cljs$core$IFn$_invoke$arity$1(t) : fexpr__14091.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__14093 = arguments.length;
switch (G__14093) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__14097 = null;
var G__14097__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e14094){var t = e14094;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__14097__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e14095){var t = e14095;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__14097 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__14097__1.call(this,buf__$1);
case 2:
return G__14097__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14097.cljs$core$IFn$_invoke$arity$1 = G__14097__1;
G__14097.cljs$core$IFn$_invoke$arity$2 = G__14097__2;
return G__14097;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

