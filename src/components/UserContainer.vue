<template>
        <div v-if="user.UserHotcom.Group.Name===currentGroup||currentGroup===null" class="userEl" :group=user.UserHotcom.Group.Name >
            <div class="userPhoto" :style="{ backgroundImage: 'url(' + photoExtract() + ')' }"></div>
            <div class="userTitle">{{ user.FirstName }}</div>
        </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    currentGroup: {
      type: String,
      required:true
    }
    
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
.userEl {
    margin: 1.4vw;
    display: inline-block;
    height: 12vw;
    width: 9.4vw;
    -webkit-transition: 250ms;
    transition: 250ms;
    opacity: 1;
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
