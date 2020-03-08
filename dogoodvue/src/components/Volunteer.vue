<template>
	<div id="do-volunteer-wrapper">

    <h4>So, where would you give your time?</h4>

    <b-container>
      <lottie :options="starDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/>
    </b-container>


    <b-dropdown id="volunteer-choice" text="Pick an event to volunteer for.">

      <b-dropdown-item variant="info" href="#" v-for="item in eventList" :key="item.location"
       @click="details(item)">
        {{ item.location }}
       </b-dropdown-item>

    </b-dropdown>

    <div v-if="itemChosen" id="volunteer-card">
      <b-card :title=dataPoint.location>
        <b-card-text>{{ dataPoint.description }}</b-card-text>
        <b-button href="/calendar" variant="success" replace>Volunteer</b-button>
      </b-card>
    </div>

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
        this.itemChosen = true;
      }

    },
    computed: {
      eventList() {
        return eventData.events.map((item) => {
          console.log(item.location);
          return item;

        })

      }
    }
	};
</script>

<style scoped>

  #do-volunteer-wrapper {
    margin: 10% 10%;
  }

  #volunteer-choice {
    padding-left: 7%;
  }

  #volunteer-card{
    margin-top: 15%;
  }

</style>
