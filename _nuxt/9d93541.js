(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{402:function(e,r,t){var content=t(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(24).default)("5b1a3fb3",content,!0,{sourceMap:!1})},417:function(e,r,t){"use strict";t(402)},418:function(e,r,t){var n=t(23)(!1);n.push([e.i,'.card{max-width:700px}.card-swiper-box{background:#fff;width:140px;height:190px;display:flex;flex-direction:column;justify-content:space-evenly;margin-bottom:12px}.card-swiper-img{border-radius:30px;width:60px;height:60px;background-repeat:no-repeat;background-size:cover;background-position-x:center;background-position-y:center;margin:0 auto}.card-swiper-city{font-size:14px;line-height:20px;color:#3e4459}.card-swiper-city,.card-swiper-name{font-family:"Noto Sans TC";font-style:normal;font-weight:400;text-align:center}.card-swiper-name{font-size:12px;line-height:17px;color:#36bbd9}.card-swiper-side{display:flex;justify-content:center;align-items:center}.card-swiper-score{font-size:12px}.card-swiper-start{font-size:12px;text-align:center;color:#ffc50d}.card-swiper-price{font-family:"Noto Sans TC";font-style:normal;font-weight:400;font-size:14px;line-height:20px;text-align:center;color:#3e4459}@media(max-width:500px){.card-swiper-box{margin-top:12px}.swiper-slide{flex-shrink:1}}',""]),e.exports=n},424:function(e,r,t){"use strict";t.r(r);var n={components:{},props:{frames:{type:Array}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerColumn:2,slidesPerColumnFill:"row",spaceBetween:4,observer:!0,observeParents:!0,breakpoints:{1023:{slidesPerView:4,slidesPerColumn:2,slidesPerColumnFill:"row",spaceBetween:4},300:{slidesPerView:2,slidesPerColumn:1,slidesPerColumnFill:"row",spaceBetween:4}}}}},computed:{mySwiper:function(){return this.$refs.mySwiper.$swiper}},methods:{},watch:{}},o=(t(417),t(52)),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card swiper-contain"},[t("swiper",{ref:"mySwiper",staticClass:"swiper card-swiper",attrs:{options:e.swiperOption}},e._l(e.frames,(function(r,n){return t("swiper-slide",{key:n,staticClass:"card-swiper-slide"},[t("div",{staticClass:"card-swiper-box"},[t("div",{staticClass:"card-swiper-img",style:[{backgroundImage:"url("+r.img+")"}]}),e._v(" "),t("div",{staticClass:"card-swiper-city"},[e._v(e._s(r.city))]),e._v(" "),t("div",{staticClass:"card-swiper-name"},[e._v(e._s(r.name))]),e._v(" "),t("div",{staticClass:"card-swiper-side"},[t("div",{staticClass:"card-swiper-score"},[e._v(e._s(r.score))]),e._v(" "),t("div",{staticClass:"card-swiper-start"},[e._v(e._s(r.start))])]),e._v(" "),t("div",{staticClass:"card-swiper-price"},[e._v(e._s(r.price))])])])})),1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);