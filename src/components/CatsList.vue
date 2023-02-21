<template>

<div v-if="cats.length > 0">
  <h3>Список котов:</h3>
  <cats-item class="cats" v-for="cat in cats" :cat="cat" :key="cat.id" @remove="$emit('remove', cat)"/>
</div>
  <h3 v-else>
    Список котиков пуст :(
  </h3>


</template>

<script>
import CatsItem from "@/components/CatsItem.vue";
export default{
  components:{
    CatsItem
  },
    props:{
     cats:{
        type: Array,
        required: true,
     }
    }
}
</script>

<style scoped>
.cats{
  padding:15px;
  border: 2px solid teal;
  margin-top: 15px;
}


</style>