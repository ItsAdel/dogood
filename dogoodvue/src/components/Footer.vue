<template>
	<div>
    <b-container class="do-footer">
      <b-row>
        <b-nav>
        <b-col><b-nav-item to='/'>Home</b-nav-item></b-col>
        <b-col><b-nav-item to='/cats'>Calendar</b-nav-item></b-col>
        <b-col><b-nav-item>Profile</b-nav-item></b-col>
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
    left: 5%;
    bottom: 6%;
    width: 100%;
    text-align: center;
  }
</style>
