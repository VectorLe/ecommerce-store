(this.webpackJsonpecommerce_store=this.webpackJsonpecommerce_store||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),m=a.n(r),i=(a(25),a(6)),l=a(1),o=a(19),u=a(11),s=Object(n.createContext)(null);function p(e){var t=e.children,a=Object(n.useState)([]),r=Object(u.a)(a,2),m=r[0],i=r[1];return c.a.createElement(s.Provider,{value:{items:function(e){return e.reduce((function(e,t){var a=e.find((function(e){return e.sku===t.sku}));return a?a.quantity+=1:e.push({quantity:1,sku:t.sku,price:t.price,img:t.img,name:t.name}),e}),[])}(m),itemsCount:m.length,formatPrice:function(e){return"$".concat((.01*e).toFixed(2))},addToCart:function(e){i((function(t){return[].concat(Object(o.a)(t),[e])}))}}},t)}function d(){var e=Object(n.useContext)(s).itemsCount;return c.a.createElement("div",{id:"navbar"},c.a.createElement("nav",null,c.a.createElement("img",{src:"/ecommerce-store/img/logo.png",alt:"logo"}),c.a.createElement("ul",null,c.a.createElement(i.b,{to:"/ecommerce-store/",className:"nav-link"},"Shop"),c.a.createElement(i.b,{to:"/ecommerce-store/",className:"nav-link"},"About"),c.a.createElement(i.b,{to:"/ecommerce-store/",className:"nav-link"},"Contact"),c.a.createElement(i.b,{to:"/ecommerce-store/view-cart/",className:"nav-link"},"View Cart (",e,")"))))}function E(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(d,null),t)}var v=[{sku:"price_HKKTtIgrAA89Vd",price:1799,img:"portable_charger",name:"Portable Charger"},{sku:"price_HKKS8gNAg3H6XC",price:999,img:"phone_ring",name:"Phone Ring"},{sku:"price_HKKSujR3pK5vVg",price:1199,img:"phone_stand",name:"Phone Stand"}];function f(e){var t=Object(n.useContext)(s);return c.a.createElement("div",{className:"product-card"},c.a.createElement("img",{src:"/ecommerce-store/img/".concat(e.product.img,".jpg"),alt:e.product.name}),c.a.createElement("div",{className:"info"},c.a.createElement("h1",null,e.product.name),c.a.createElement("div",{className:"price"},t.formatPrice(e.product.price)),c.a.createElement("div",null,c.a.createElement("button",{className:"addToCart",onClick:function(){return t.addToCart(e.product)}},"Add to Cart"))))}function g(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("header",null,c.a.createElement("h1",null,"Products")),c.a.createElement("div",{className:"card-wrapper"},v.map((function(e){return c.a.createElement(f,{product:e})}))))}function h(e){return"$".concat((.01*e).toFixed(2))}function b(e){var t=e.stripeToken,a=Object(n.useState)(null),r=Object(u.a)(a,2),m=r[0],i=r[1],l=Object(n.useContext)(s);return Object(n.useEffect)((function(){window.Stripe&&i(window.Stripe(t))}),[t]),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"cart-wrapper"},c.a.createElement("h1",{className:"cart-title"},"Shopping Cart"),l.items.map((function(e){return c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"cart-item-img"},c.a.createElement("img",{src:"/ecommerce-store/img/".concat(e.img,".jpg"),alt:e.name,width:150})),c.a.createElement("div",{className:"cart-item-name"},e.name),c.a.createElement("div",{className:"cart-item-quantity"},e.quantity),c.a.createElement("div",{className:"cart-item-price"}," ",h(e.price*e.quantity)))})),c.a.createElement("div",{className:"cart-end"},c.a.createElement("div",{class:"checkout-total"},"Total: ",h(l.items.reduce((function(e,t){return e+t.quantity*t.price}),0))),c.a.createElement("button",{id:"checkout",onClick:function(){m.redirectToCheckout({lineItems:l.items.map((function(e){return{price:e.sku,quantity:e.quantity}})),mode:"payment",successUrl:"https://your-website.com/success",cancelUrl:"https://your-website.com/canceled"})}},"Checkout"))))}m.a.render(c.a.createElement(i.a,null,c.a.createElement(p,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/ecommerce-store/",component:function(){return c.a.createElement(E,null,c.a.createElement(g,null))}}),c.a.createElement(l.a,{exact:!0,path:"/ecommerce-store/view-cart/",component:function(){return c.a.createElement(E,null,c.a.createElement(b,{stripeToken:"pk_test_lGdDk3ZKTN2Q7HJwCylNaR5600YANLK3fY"}))}})))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bf61ce71.chunk.js.map