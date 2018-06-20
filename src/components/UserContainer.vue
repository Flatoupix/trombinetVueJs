<template>
        <div class="userEl" :group=toto.UserHotcom.Group.Id >
            <div class="userPhoto"></div>
            <div class="userTitle">{{ user.UserHotcom.Name }}</div>
        </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
