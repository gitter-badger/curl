var n=null;
(function(l,y,r){function h(a,d){return L.call(a).indexOf("[object "+d)==0}function M(a,d){h(a,"String")&&(a={path:o(a),main:C.a,lib:C.f});a.path=a.path||(isNaN(d)?d:a.name);a.f="lib"in a&&o(a.lib.replace(p,a.path+"/"));a.a="main"in a&&o(a.main.replace(p,a.path+"/"));return a}function D(a){var d,c,b,e=[];i=a.baseUrl||"";var f=a.paths;for(d in f)c=o(d),b=s[c]={path:o(f[d])},b.h=(b.path.match(/\//)||[]).length,e.push(c);f=a.packages;for(d in f)c=o(f[d].name||d),b=s[c]=M(f[d],c),b.h=(b.path.match(/\//)||[]).length,
e.push(c);E=RegExp("^("+e.sort(function(a,b){return s[a].h<s[b].h}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");q=a.pluginPath||q}function N(){}function z(a){function d(a){return u(a.replace(p,c+"/"),i).url}var c=a.substr(0,a.lastIndexOf("/")),b={baseName:c,g:{},k:{id:a.replace(p,c+"/"),uri:d(a)}};b.c=function(a,c){return F(a,c||N,b)};b.c.toUrl=d;b.c.ready=function(a){j(["curl/domReady"],a)};b.c.nameToUrl=function(a,b){return d(a)+(b||"")};return b}function A(){function a(a,b){e.push([a,b])}function d(a){b(!0,
a)}function c(a){b(!1,a)}function b(b,g){a=b?function(a){a&&a(g)}:function(a,b){b&&b(g)};d=c=function(){throw Error("Promise already completed.");};for(var m,O=0;m=e[O++];)(m=m[b?0:1])&&m(g)}var e=[];return{d:function(b,c){a(b,c);return this},e:function(a){d(a)},b:function(a){c(a)}}}function v(a){var d=A();d.name=a;return d}function w(a){return a.charAt(a.length-1)=="/"}function o(a){return w(a)?a.substr(0,a.length-1):a}function u(a,d){var c,b,e;e=a.replace(E,function(d){c=s[d];return c.a&&d==a?c.a:
c.f?(b=c.a,c.f):c.path});return{path:e,url:d&&!P.test(e)?(!d||w(d)?d:d+"/")+e:e,a:b}}function Q(a,d,c){var b=y.createElement("script");b.type="text/javascript";b.onload=b.onreadystatechange=function(c){c=c||l.event;if(c.type==="load"||R[this.readyState])delete x[a.name],this.onload=this.onreadystatechange=this.onerror=n,d(b)};b.onerror=function(){c(Error("Syntax error or http error: "+a.url))};b.charset=a.charset||"utf-8";b.async=!0;b.src=a.url;x[a.name]=b;G.insertBefore(b,G.firstChild)}function S(a){var d,
c,b,e,f=a.length;b=a[f-1];e=h(b,"Function");f==2?h(a[0],"Array")?c=a[0]:d=a[0]:f==3&&(d=a[0],c=a[1]);!c&&e&&b.length>0&&(c=["require","exports","module"]);return{name:d,j:c||[],l:e?b:function(){return b}}}function H(a,d){var c=z(a.name);I(a,d.j,c,function(b){(b=d.l.apply(c.g,b)||c.g)&&b.amd&&h(b.then,"Function")?b.then(a.e,a.b):a.e(b)},a.b)}function J(a){Q(a,function(){var d=t;t=B;a.m!==!1&&(d?d.i?a.b(Error(d.i.replace("${url}",a.url))):H(a,d):a.b(Error("define() not found: "+a.url)))},a.b)}function T(a,
d){var c,b,e,f;b=a.indexOf("!");if(b>=0){e=a.substr(0,b);f=a.substr(b+1).replace(p,d.baseName+"/");c=e+"!"+f;b=u(e,i);if(b.path.indexOf("/")<0)b.path=(!q||w(q)?q:q+"/")+b.path,b.url=(!i||w(i)?i:i+"/")+b.path;var g=k[c];if(!g){g=k[c]=new v(f);c=u(f,i);c=k[e];if(!c)c=k[e]=new v(e),c.url=b.url+".js",c.a=b.a,J(c);c.d(function(a){var b=g.e;b.resolve=b;b.reject=g.b;a.load(g.name,d.c,b,r)},g.b)}}else if(f=c=a.replace(p,d.baseName+"/"),g=k[f],!g)g=k[f]=new v(f),c=u(f,i),g.url=c.url+".js",g.a=c.a,J(g);return g}
function I(a,d,c,b,e){var f=[],g=d.length,m=g,i=!1,k=a&&a.a;k&&d.push(a.a);for(var h=0;h<m&&!i;h++)(function(j,l){k&&l==a.a&&h<m&&(k=!1,d.pop());l=="require"?(f[j]=c.c,g--):l=="exports"?(f[j]=c.g,g--):l=="module"?(f[j]=c.k,g--):T(l,c).d(function(a){f[j]=a;--g==0&&(i=!0,b(f))},function(a){i=!0;e(a)})})(h,d[h]);g==0&&!i&&b(f)}function F(a,d,c){if(h(a,"String")){var c=k[a],b;c&&c.d(function(a){b=a});if(b===B)throw Error("Module is not already resolved: "+a);return b}I(n,a,c,function(a){d.e?d.e(a):d.apply(n,
a)},function(a){if(d.b)d.b(a);else throw a;})}function j(){var a=U.call(arguments),d,c;h(a[0],"Object")&&D(a.shift());d=a[0];a=a[1];c=z("");var b=new A,e={};e.then=function(a,c){b.d(function(b){a&&a.apply(n,b)},function(a){if(c)c(a);else throw a;});return e};e.next=function(a,d){var h=b;b=new A;h.d(function(){c.c(a,b)});d&&b.d(d);return e};a&&e.then(a);c.c(d,b);return e}function K(){var a=S(arguments),d=a.name;if(d==n)if(t!==B)t={i:"Multiple anonymous defines found in ${url}."};else{var c;if(!h(l.opera,
"Opera"))for(var b in x)if(x[b].readyState=="interactive"){c=b;break}if(!(d=c))t=a}if(d!=n)(c=k[d])||(c=k[d]=new v(d)),c.m=!1,H(c,a,z(d))}var G=y.head||y.getElementsByTagName("head")[0],i,q="curl/plugin",s={},k={},t,x={},L={}.toString,B,U=[].slice,P=/^\/|^[^:]*:\/\//,p=/^\.(\/|$)/,E,R={loaded:1,interactive:1,complete:1},C={a:"./lib/main",f:"./lib"};h(r,"Function")||D(r);r.apiName?l[r.apiName]=j:l.require=l.curl=j;j.require=j;l.define=j.define=K;j.version="0.4.1";j._require=F;K.amd={plugins:!0}})(this,
document,this.curl||this.require||{});