<template>
  <div id="do-calendar-wrapper">
    <h3>Your Schedule</h3>
    <calendar
        :attributes="attrs"
        is-expanded
        is-double-paned>
        >
    </calendar>
  </div>
</template>
 
<script>
 
  export default {
    data() {
      return {
        attrs: [
          {
            dot: 'red',
            dates: [
              new Date(2020, 2, 28),
              new Date(2020, 2, 5),
              new Date(2020, 2, 15),
            ],
            popover: {
              label: 'Volunteer at Food Drive BC',
            }
          },
          {
            dot: 'green',
            dates: [
              new Date(2020, 2, 5),
              new Date(2020, 2, 8),
              new Date(2020, 2, 10),
            ],
            popover: {
              label: 'Volunteer at aquarium',
            }
          },
        ],
      }
    },
  }
</script>

<style scoped>
  #do-calendar-wrapper {
    margin-top: 10%;
    text-align: center;
  }
</style>