<template>
	<div>
    <b-container class="do-footer">
      <b-row>
        <b-nav>
        <b-col><b-nav-item to='/home'><font-awesome-icon :icon="['fas', 'home']" /><br>Home</b-nav-item></b-col>
        <b-col><b-nav-item to='/calendar'><font-awesome-icon :icon="['fas', 'calendar']" /><br>Calendar</b-nav-item></b-col>
        <b-col><b-nav-item><font-awesome-icon :icon="['fas', 'portrait']" /><br>Profile</b-nav-item></b-col>
        </b-nav>
      </b-row>
    </b-container>
	</div>
</template>

<script>

	export default {
		
	}
</script>

<style scoped>
  .do-footer {
    position: fixed;
    left: 8%;
    bottom: 6%;
    width: 100%;
    text-align: center;
  }
</style>
