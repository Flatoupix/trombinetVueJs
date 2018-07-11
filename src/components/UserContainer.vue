<template>
 <transition mode="out-in" name="slide-fade">
      <div :key="user.Id" v-show="user.UserHotcom.Group.Name===currentGroup||currentGroup===null" class="userEl" :group=user.UserHotcom.Group.Name >
          <div class="userPhoto" :style="{ backgroundImage: 'url(' + photoExtract() + ')' }"></div>
          <div class="userTitle">{{ user.FirstName }}</div>
      </div>
       </transition>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    currentGroup: null
  },
  methods: {
    photoExtract() {
      let path =
        "https://ww2.eudonet.com/XRM/datas/HOTCOM_EUDOWEBA5C046574753644E565C4C59586B5263535F6857555C046574753644E565C4C59586B5263535F685755/files/";
      let sBackgroundUrl;
      if (this.user.PhotoUrl != null) {
        sBackgroundUrl = this.user.PhotoUrl;
      } else if (this.user.UserHotcom.Avatar != null) {
        sBackgroundUrl = path + this.user.UserHotcom.Avatar;
      } else {
        sBackgroundUrl =
          "https://vignette.wikia.nocookie.net/okami/images/5/53/Unknown_copyright_symbol.png";
      }
      return sBackgroundUrl;
    }
  }
};
</script>

<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.userEl {
  margin: 1.9vw;
  display: inline-block;
  height: 9vw;
  width: 7.4vw;
  text-align: center;
}
.userPhoto {
  height: 70%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid #bb1515;
  border-radius: 100%;
  display: block;
}
.userTitle {
  display: block;
  height: 20%;
  width: 100%;
  font-size: 2vw;
  margin-top: 1vw;
}
</style>
