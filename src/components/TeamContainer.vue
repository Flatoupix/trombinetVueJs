<template>
    <ul id="teamcontainer">
      <div id="filterButton">Filtres de groupes</div>
    </ul>
</template>

<script>
export default {}
</script>

<style>
#teamContainer > li {
  display: inline-block;
  width: 20%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#teamContainer > li > span {
  display: inline-block;
  height: 40px;
  line-height: 25px;
  vertical-align: middle;
  font-weight: 600;
  color: black;
}

#filterButton {
  margin: 0 auto;
  font-size: 1.5vw;
  text-align: center;
  width: 14vw;
  padding: 0.4em;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1%;
  color: white;
  border: 1px solid #bb1515;
  background-color: #bb1515;
  transition: 250ms;
}

#filterButton.activeBtn {
  background-color: white;
  color: #bb1515;
  font-weight: bold;
}
</style>
