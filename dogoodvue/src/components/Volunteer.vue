<template>
	<div id="do-volunteer-wrapper">

    <h6>So, where would you give your time?</h6>

    <b-container>
      <lottie :options="starDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/>
    </b-container>


    <b-dropdown id="volunteer-choice" text="Pick an event to volunteer for.">

      <b-dropdown-item href="#" v-for="item in eventList" :key="item.location"
       @click="details(item)">
        {{ item.description }}
       </b-dropdown-item>

    </b-dropdown>

    <div v-if="itemChosen"> {{ dataPoint.link }} </div>

  </div>
</template>



<script>
  import Lottie from './lottie'
  import * as starAnimationData from '../assets/16730-star.json'
  import eventData from '../assets/events-data.json'
  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        starDefaultOptions: {animationData: starAnimationData.default},
        itemChosen: false,
        dataPoint: null,
      }
    },
		methods: {
      handleAnimation: function (anim) {
        anim.setSpeed(0.8);
      },

      details: function(item){
        this.dataPoint = item;
        this.itemChosen = !this.itemChosen;
      }

    },
    computed: {
      eventList() {
        return eventData.events.map((item) => {
          console.log(item.description);
          return item;

        })

      }
    }
	};
</script>

<style scoped>

  #do-home-wrapper {
    margin: 10% 0;
  }

  #volunteer-choice {
    padding-left: 15%;
  }

</style>
