<template>
  <div id="kindness-container">
    <h3>For today, your task is:</h3>
    <div id="task-continer">
      <b-form-checkbox v-model="doneItem" size="lg">{{ task }}</b-form-checkbox>
    </div>
    <div v-if="doneItem">
      <lottie :options="defaultOptions" :height="250" :width="250"/>
      <h3>Congratulations!</h3>
      <h5>Keep it up tomorrow</h5>
    </div>
  </div>
</template>

<script>
  import Lottie from './lottie'
  import * as congratsAnimationData from '../assets/7841-flixxo-congrats.json'
  
  export default {

    components: {
      'lottie': Lottie
    },
    data() {
      return {
        doneItem: false,
        defaultOptions: {animationData: congratsAnimationData.default},
      }
    },
    computed: {
      task: () => {
        const taskList = [
          "Clean the dishes",
          "Help classmate with their homework",
          "Buy a friend coffee",
          "Smile when interacting with a stranger",
          "Offer to help someone with a task",
          "Pick up litter when you see it outdoors",
          "Offer to walk someone's dog",
          "Call a friend you haven't seen in a while",
          "Call your grandparents",
          "Buy a coworker lunch",
          "Express your gratitude for someone"
        ]
        const choice = Math.floor(Math.random() * 10)
        return taskList[choice]
      }
    } 
  }
</script>

<style scoped> 
  #kindness-container {
    text-align: center;
    margin-top: 10%;
    padding: 0 10%;
  }

  #task-continer {
    margin-top: 20%;
    text-align: left;
  }

  #do-task {
    font-size: 1.5em;
    margin-top: -10px;
  }
</style>