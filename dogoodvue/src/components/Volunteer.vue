<template>
	<div id="do-volunteer-wrapper">

    <h6>So, where would you give your time?</h6>

    <b-container>
      <lottie :options="starDefaultOptions" :height="70" :width="70" v-on:animCreated="handleAnimation"/>
    </b-container>


    <b-dropdown id="volunteer-choice" text="Pick an event to volunteer for.">
      <template v-slot:button-content>
        Pick an event to <strong> volunteer </strong> for.
      </template>
      <b-dropdown-item href="#" v-for="item in eventList" :key="item.location">
        {{ item.description }}
       </b-dropdown-item>
    </b-dropdown>

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
      }
    },
		methods: {
      handleAnimation: function (anim) {
        anim.setSpeed(0.8);
      },

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
