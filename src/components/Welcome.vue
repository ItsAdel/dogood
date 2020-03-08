<template>
  <div id="do-welcome-wrapper">
    <lottie :options="defaultOptions" :height="250" :width="250" v-on:animCreated="handleAnimation"/>
    <h5>Create a difference today</h5>
    <p id="do-quotes">"It is not enough to be compassionate. You must act!"</p>
    <b-button pill variant="success" to="/home">Make an impact</b-button>
  </div>
</template>
 
<script>
  import Lottie from './lottie.vue';
  import * as animationData from '../assets/3956-earth.json';
 
  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData.default},
      }
    },
    mounted () {
      document.querySelector('.do-footer').style.display = 'none'
    },
    beforeDestroy() {
      document.querySelector('.do-footer').style.display = 'block'
  },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
        this.anim.setSpeed(0.3);
      },
    }
  }
</script>

<style scoped>
  #do-welcome-wrapper {
    margin-right: 3%;
    text-align: center
  }

  h5 {
    margin-top: 20%;
  }

  #do-quotes {
    padding: 7% 10% 5% 10%;
  }

  button {
    margin-top: 15%;
  }
</style>