// Compiled by ClojureScript 1.9.671 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62897 = arguments.length;
var i__42298__auto___62898 = (0);
while(true){
if((i__42298__auto___62898 < len__42297__auto___62897)){
args__42304__auto__.push((arguments[i__42298__auto___62898]));

var G__62899 = (i__42298__auto___62898 + (1));
i__42298__auto___62898 = G__62899;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq62896){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62896));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62901 = arguments.length;
var i__42298__auto___62902 = (0);
while(true){
if((i__42298__auto___62902 < len__42297__auto___62901)){
args__42304__auto__.push((arguments[i__42298__auto___62902]));

var G__62903 = (i__42298__auto___62902 + (1));
i__42298__auto___62902 = G__62903;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq62900){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62900));
});


//# sourceMappingURL=core.js.map?rel=1504289158537