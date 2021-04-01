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


		
	</pages-layout>
</template>

<script>
	export default {
		name: 'CodeSample',
		data () {
			return {
				uiActiveTabIdx: 0,
        uiIsActiveFilter: false,
			}
		},

    updated () {
      if (this.uiIsActiveFilter === true) {
        document.querySelector('#layer').style.color = 'red';
      }
    },

		methods: {
      layerShow: function () {
        this.uiIsActiveFilter = !this.uiIsActiveFilter;
        // setTimeout(() => {
        //   document.querySelector('#layer').style.color = 'red';
        // }, 0);
        
       
      },

			// --------
      // 진입
      // --------
      beforeEnter: function (el) {
        console.log(el, 'beforeEnter');
        el.style.opacity = 0;
        el.style.height = 0;
      },
      // done 콜백은 CSS와 함께 사용할 때 선택 사항입니다.
      enter: function (el) {
        console.log(el, 'enter');
        el.style.opacity = 1;
        el.style.height = 'auto';
        el.style.transition = 'all .3s';
      },
      afterEnter: function (el) {
        console.log(el, 'afterEnter');
        el.style.opacity = 1;
        el.style.height = 'auto';
      },
      enterCancelled: function (el) {
        console.log(el, 'enterCancelled');
        el.style.opacity = 1;
        el.style.height = 'auto';
      },
      

      // --------
      // 진출
      // --------
      beforeLeave: function (el) {
        console.log(el, 'beforeLeave');
        el.style.opacity = 1;
        el.style.height = 'auto';
      },
      // done 콜백은 CSS와 함께 사용할 때 선택 사항입니다.
      leave: function (el) {
        console.log(el, 'leave');
        el.style.opacity = 0;
        el.style.height = 0;
        el.style.transition = 'all .3s';
      },
      afterLeave: function (el) {
        console.log(el, 'afterLeave');
        el.style.opacity = 0;
        el.style.height = 0;
      },
      leaveCancelled: function (el) {
        console.log(el, 'leaveCancelled');
        el.style.opacity = 0;
        el.style.height = 0;
      }
		},
    created () {
      
    },
		
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