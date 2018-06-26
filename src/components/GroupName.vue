<template>
  <li><input @change="changeValue" v-model="radioButtonValue" type="radio" :value="group.Id" name="groupFilter" >
  <span >{{ group.Name }}</span>
</li>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      checkedGroup: {
        isChecked: false,
        checkedValue: ""
      }
    };
  },
  methods: {},
  computed: {
    radioButtonValue: {
      get() {
        return this.checkedGroup.checkedValue;
      },
      set() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.group.Name);
      }
    }
  }
};
</script>

<style>
input[type="radio"] {
  height: 2em;
  width: 2em;
  background-image: none;
  -webkit-appearance: none;
  border-radius: 100%;
  cursor: pointer;
  transition: 250ms;
  border: 0.3em solid #bb1515;
  background-color: #bb1515;
  box-shadow: inset 0 0 0 1em #efefef;
}

input[type="radio"]:checked {
  transition: 250ms;
  display: inline-block;
  background-color: #bb1515;
  box-shadow: inset 0 0 0 0.2em #efefef;
  border: 0.3em solid #bb1515;
}

input[type="radio"]:focus {
  outline: none;
}
#filterContainer > li {
  display: inline-block;
  width: 20%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#filterContainer > li > span {
  display: inline-block;
  height: 40px;
  line-height: 25px;
  vertical-align: middle;
  font-weight: 600;
  color: black;
}
#filterContainer {
  height: 0;
  width: 80%;
  margin: 0 auto;
  background-color: #efefef;
  border-radius: 10px;
  margin-bottom: 3%;
  overflow: hidden;
  transition: 250ms;
}
.containerOpened {
  padding: 1% 0% 13% 1%;
}
/* input[type="radio"] {
  height: 2em;
  width: 2em;
  background-image: none;
  -webkit-appearance: none;
  border-radius: 100%;
  cursor: pointer;
  transition: 250ms;
  border: 0.3em solid #bb1515;
  background-color: #bb1515;
  box-shadow: inset 0 0 0 1em #efefef;
} */
</style>
