(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{402:function(e,t,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("5b1a3fb3",content,!0,{sourceMap:!1})},416:function(e,t,r){"use strict";r(402)},417:function(e,t,r){var c=r(23)(!1);c.push([e.i,'.card{max-width:700px}.card-swiper-box{background:#fff;width:140px;height:190px;display:flex;flex-direction:column;justify-content:space-evenly}.card-swiper-img{border-radius:30px;width:60px;height:60px;background-repeat:no-repeat;background-size:cover;background-position-x:center;background-position-y:center;margin:0 auto}.card-swiper-city{font-size:14px;line-height:20px;color:#3e4459}.card-swiper-city,.card-swiper-name{font-family:"Noto Sans TC";font-style:normal;font-weight:400;text-align:center}.card-swiper-name{font-size:12px;line-height:17px;color:#36bbd9}.card-swiper-side{display:flex;justify-content:center;align-items:center}.card-swiper-score{font-size:12px}.card-swiper-start{font-size:12px;text-align:center;color:#ffc50d}.card-swiper-price{font-family:"Noto Sans TC";font-style:normal;font-weight:400;font-size:14px;line-height:20px;text-align:center;color:#3e4459}',""]),e.exports=c},423:function(e,t,r){"use strict";r.r(t);var c={components:{},props:{frames:{type:Array}},data:function(){return{swiperOption:{slidesPerView:4,grid:{rows:2},spaceBetween:4}}},computed:{mySwiper:function(){return this.$refs.mySwiper.$swiper}},methods:{},watch:{}},n=(r(416),r(52)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card swiper-contain"},[r("swiper",{ref:"mySwiper",staticClass:"swiper card-swiper",attrs:{options:e.swiperOption}},e._l(e.frames,(function(t,c){return r("swiper-slide",{key:c,staticClass:"card-swiper-slide"},[r("div",{staticClass:"card-swiper-box"},[r("div",{staticClass:"card-swiper-img",style:[{backgroundImage:"url("+t.img+")"}]}),e._v(" "),r("div",{staticClass:"card-swiper-city"},[e._v(e._s(t.city))]),e._v(" "),r("div",{staticClass:"card-swiper-name"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"card-swiper-side"},[r("div",{staticClass:"card-swiper-score"},[e._v(e._s(t.score))]),e._v(" "),r("div",{staticClass:"card-swiper-start"},[e._v(e._s(t.start))])]),e._v(" "),r("div",{staticClass:"card-swiper-price"},[e._v(e._s(t.price))])])])})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);