<template>
	<div id="do-home-wrapper">
    <h6>Here is a list of representatives in your area: Pasedena</h6>
    <lottie :options="pumpedDefaultOptions" :height="110" :width="110"/>
    <b-container id="do-choices-wrapper">
        <b-row id="do-left-row">
          <a href="https://a41.asmdc.org/">
          <b-col id="row-text">Assembly Member Chris R. Holden</b-col>
          <hr>
          <b-col id="row-text" >State Assembly (District 41)</b-col>
          </a>
        </b-row>
        <b-row id="do-right-row">
          <a href="https://sd25.senate.ca.gov/">
          <b-col id="row-text">Senator Anthony J. Portantino</b-col>
          <hr>
          <b-col id="row-text">State Senate (District 25)</b-col>
          </a>
        </b-row>
      <b-row id="do-left-row">
        <a href="https://www.gov.ca.gov/">
        <b-col id="row-text">Gavin Newsom</b-col>
        <hr>
        <b-col id="row-text">Governor of California</b-col>
        </a>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Lottie from './lottie'
  import * as pumpedAnimationData from '../assets/2508-pumped-up.json'
  
  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        pumpedDefaultOptions: {animationData: pumpedAnimationData.default},
      }
    },
  }
</script>

<style scoped>

  #do-home-wrapper {
    margin: 10% 0;
  }
  #do-choices-wrapper {
    font-size: 1em;
  }
  h6 {
    text-align: center;
    font-size: 1.3em;
  }

  #do-left-row {
    text-align: center;
    border: 1px solid salmon;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-left: 10%;
  }

  #do-right-row {
    text-align: center;
    border: 1px solid seagreen;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-left: 10%;
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
