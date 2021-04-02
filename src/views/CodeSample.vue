<template>
	<pages-layout class="main"><!-- div#wrap 에 클래스 필요할 경우 class="클래스네임" 추가 -->
		<h1 class="page-tit">Code Sample</h1>

    <div class="tab">
      <button type="button" @click="uiActiveTabIdx=0" :class="{active: uiActiveTabIdx===0}">탭1</button>
      <button type="button" @click="uiActiveTabIdx=1" :class="{active: uiActiveTabIdx===1}">탭2</button>
      <button type="button" @click="uiActiveTabIdx=2" :class="{active: uiActiveTabIdx===2}">탭3</button>
    </div>
    <transition name="fade" mode="out-in">
      <div class="tabpanel" v-if="uiActiveTabIdx===0" key="tab0">
        탭1 내용
      </div>
      <div class="tabpanel" v-if="uiActiveTabIdx===1" key="tab1">
        탭2 내용
      </div>
      <div class="tabpanel" v-if="uiActiveTabIdx===2" key="tab2">
        탭3 내용
      </div>
    </transition>

    <br><br><br><br><br>

    <button type="button" @click="layerShow" :style="{fontSize:'13px'}">[layer open]</button>
    <div v-if="uiIsActiveFilter">
      <div id="layer">layer</div>
    </div>




      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      

		
	</pages-layout>
</template>

<script>
  // swiper
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

	export default {
		name: 'CodeSample',
    //title: '타이틀',
    components: {
      Swiper,
      SwiperSlide,
    },
		data () {
			return {
				uiActiveTabIdx: 0,
        uiIsActiveFilter: false,
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          speed: 500,
          loop: true,
          loopFillGroupWithBlank: true,
          slidesPerView: 3,
          slidesPerGroup: 3,
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false
          // }
        }
			}
		},


		methods: {
      layerShow: function () {
        this.uiIsActiveFilter = !this.uiIsActiveFilter;
        // setTimeout(() => {
        //   document.querySelector('#layer').style.color = 'red';
        // }, 0);
        
       
      },

		},
    created () {
      
    },
    updated () {
      if (this.uiIsActiveFilter === true) {
        document.querySelector('#layer').style.color = 'red';
      }
    },
    mounted() {
      //console.log('Swiper instances:', this.$refs.mySwiper)

      if (this.uiIsActiveFilter === true) {
        document.querySelector('#layer').style.color = 'red';
      }
    }
		
	};
</script>
<style scoped>
	.tab button {margin-right:10px;}
	.tab button.active {color:red;}

  /* fade */
  .fade-enter-active {transition:all .3s;}
  .fade-leave-active {transition:all .15s;}
  .fade-enter, .fade-leave-to {opacity:0;}
  .fade-enter {transform:translateY(-10px);}

</style>