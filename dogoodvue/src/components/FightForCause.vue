<template>
	<div id="do-home-wrapper">
    <h6>Get your voice heard</h6>
    <b-container id="do-choices-wrapper">
      <router-link to="/donate" replace>
        <b-row id="do-left-row">
          <b-col id="row-text" cols="8">Contact a local representative</b-col>
          <b-col><lottie :options="tailDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
        </b-row>
      </router-link>
      <router-link to="/actsofkindness" replace>
        <b-row id="do-right-row">
          <b-col><lottie :options="contactDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
          <b-col id="row-text" cols="8">Raise awareness</b-col>
        </b-row>
      </router-link>
    </b-container>
  </div>
</template>

<script>
  /*
    Access token :946148323429191681-rVbg512FKLTZtwM2Y8JxYabCtdbeZZ8
    Access token secret :lzGLlCzTSudjcSL8F5OePeVRae5JKACMHvPogdx1Q6gDU
  */
  import Lottie from './lottie'
  import * as tailAnimationData from '../assets/1074-tail-wag.json'
  import * as contactAnimationData from '../assets/13092-contact-us.json'
  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        tailDefaultOptions: {animationData: tailAnimationData.default},
        contactDefaultOptions: {animationData: contactAnimationData.default},
      }
    },
    methods: {
      handleAnimation: function (anim) {
        anim.setSpeed(0.7);
      },
    }
	}
</script>

<style scoped>

  #do-home-wrapper {
    margin: 10% 0;
  }
  #do-choices-wrapper {
    padding-top: 10%;
    font-size: 1.2em;
  }
  h6 {
    text-align: center;
    font-size: 1.3em;
  }

  b-row {
    margin-bottom: 10px;
  }

  #do-left-row {
    text-align: left;
    padding: 3%;
    border: 1px solid salmon;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  #do-right-row {
    text-align: right;
    padding: 3%;
    border: 1px solid seagreen;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  #row-text {
    margin-top: 18px;
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
    color: black;
    text-decoration: none;
  }

  #do-left-row:hover {
    background-color: salmon;
  }

  #do-right-row:hover {
    background-color: seagreen;
  }
</style>