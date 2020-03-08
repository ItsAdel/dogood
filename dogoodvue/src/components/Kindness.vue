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
          "Clean the dishes. Do a chore that improves the quality of your own life,",
          "Help peer with their homework. Provide personal assistance to a person who matters to you",
          "Buy a friend coffee. Make their day!",
          "Smile when interacting with a stranger. ",
          "Offer to help someone with a task. This doesn't have to be someone you're close to.",
          "Clean up a local park, or a place in your community you know to be dirty.",
          "Offer to walk someone's dog.",
          "Call a friend you haven't seen in a while. Catch up on eveything you've missed",
          "Call your grandparents, siblings, or any family you haven't talked to in a while.",
          "Buy a coworker lunch. Make their day!",
          "Express your gratitude for someone. It can really make a difference!"
        ];
        const choice = Math.floor(Math.random() * 10);
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