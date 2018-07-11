
<template>
  <div id="app">
    <div class="titleTn">Trombi<span>Net</span></div>
    <div id="filterButton" @click="openFilters()" :class="[filterContainer.isActive ? 'activeBtn' : '' ]">Filtres de groupes</div>
        <ul id="filterContainer" :class="[filterContainer.isOpened ? 'containerOpened' : '']">
  <GroupName
  @change="changeValue" 
  v-for="group in oGroups.groups"
   :key="group.Id" :group="group" name="groupFilter"/>
  </ul>
   <ul id="userContainer">
      <UserContainer  v-for="user in users"
        :key="user.Id"
        :user="user"
        :currentGroup="oGroups.currentGroup"
        ></UserContainer>
   </ul>
    </div>
</template>

<script>
import GroupName from "./components/GroupName.vue";
import UserContainer from "./components/UserContainer.vue";

export default {
  name: "app",
  components: {
    GroupName,
    UserContainer
  },
  data() {
    return {
      users: null,
      loading: true,
      errored: false,
      oGroups: {
        groups: null,
        currentGroup: null
      },
      filterContainer: {
        isOpened: false,
        isActive: false
      }
    };
  },
  mounted() {
    this.$http
      .get(
        "https://ww2.eudonet.com/SPECIF/EUDO_HOTCOM_EUDOWEB/root/hotcom/Trombinoscope"
      )
      .then(response => {
        this.users = response.data;
        this.oGroups.groups = this.users
          .map(o => o.UserHotcom.Group)
          .filter((obj, idx, arr) => {
            return arr.map(o => o["Id"]).indexOf(obj["Id"]) == idx;
          });
        this.oGroups.groups.push({ Id: 0, Name: "Pas de filtre" });
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    openFilters() {
      this.filterContainer.isOpened = !this.filterContainer.isOpened;
      this.filterContainer.isActive = !this.filterContainer.isActive;
    },
    changeValue(newValue) {
      this.oGroups.currentGroup = newValue;
    }
  }
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
  position: relative;
}

#filterButton {
  font-size: 1.5vw;
  text-align: center;
  width: 14vw;
  padding: 0.4em;
  border-radius: 8px;
  cursor: pointer;
  margin: 3% auto;
  color: white;
  border: 1px solid #bb1515;
  background-color: #bb1515;
  -webkit-transition: 250ms;
  transition: 250ms;
}

#filterButton.activeBtn {
  background-color: white;
  color: #bb1515;
  font-weight: bold;
}
</style>



// WEBPACK FOOTER //
// App.vue


// WEBPACK FOOTER //
// App.vue