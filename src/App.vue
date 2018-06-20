
<template>
  <div id="app">
    <div class="titleTn">Trombi<span>Net</span></div>
  <TeamContainer></TeamContainer>
  <div class="userContainer">
    <UserContainer v-for="user in users"
      :key="user.Id"
			:toto="user"></UserContainer>
    </div>
  
  </div>
</template>

<script>
import TeamContainer from "./components/TeamContainer.vue";
import UserContainer from "./components/UserContainer.vue";

export default {
  name: "app",
 
  components: {
    TeamContainer,
    UserContainer
  },
  data() {
    return {
      users: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    this.$http
      .get('https://ww2.eudonet.com/SPECIF/EUDO_HOTCOM_EUDOWEB/root/hotcom/Trombinoscope')
      .then(response => (this.users = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
  // created() {
  //   let vm = this;
  //   this.$http
  //     .get(
  //       "https://ww2.eudonet.com/SPECIF/EUDO_HOTCOM_EUDOWEB/root/hotcom/Trombinoscope"
  //     )
  //     .then(function(response) {
  //       vm.users = response.data;
  //     });
  // }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");

html {
  font-family: Raleway, sans-serif;
}
ul,
li {
  margin: 0;
  padding: 0;
}

div.titleTn {
  font-weight: 200;
  text-align: center;
  font-size: 3em;
}

h2 {
  text-align: center;
}

div.titleTn > span {
  color: #bb1515;
  font-weight: bold;
}

#userContainer {
  width: 100%;
  margin: auto;
  text-align: center;
}
</style>
