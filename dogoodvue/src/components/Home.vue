<template>
	<div id="do-home-wrapper">
    <h6>So, what impact will you make today?</h6>
    <b-container id="do-choices-wrapper">
      <router-link to="/donate" replace>
        <b-row id="do-left-row">
          <b-col id="row-text" cols="8">Make a donation</b-col>
          <b-col><lottie :options="coinDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
        </b-row>
      </router-link>
      <router-link to="/actsofkindness" replace>
        <b-row id="do-right-row">
          <b-col><lottie :options="irrigatioDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
          <b-col id="row-text" cols="8">Acts of kindness</b-col>
        </b-row>
      </router-link>
      <router-link to="/fightforcause" replace>
      <b-row id="do-left-row">
        <b-col id="row-text" cols="8">Fight for your cause</b-col>
        <b-col><lottie :options="fireDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
      </b-row>
      </router-link>
			<router-link to="/volunteer">
      <b-row id="do-right-row">
        <b-col><lottie :options="cleanDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/></b-col>
        <b-col id="row-text" cols="8">Help local non profits</b-col>
      </b-row>
		</router-link>
    </b-container>
  </div>
</template>

<script>
  import Lottie from './lottie'
  import * as fireAnimationData from '../assets/16773-fire.json'
  import * as irrigationAnimationData from '../assets/16911-raymondesign-irrigation.json'
  import * as cleanAnimationData from '../assets/16893-data-migration.json'
  import * as coinAnimationData from '../assets/588-wallet-coin.json'
  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        fireDefaultOptions: {animationData: fireAnimationData.default},
        irrigatioDefaultOptions: {animationData: irrigationAnimationData.default},
        cleanDefaultOptions: {animationData: cleanAnimationData.default},
        coinDefaultOptions: {animationData: coinAnimationData.default},
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
    margin-top: 20px;
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
