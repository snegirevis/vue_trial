<template>

<div v-if="posts.length > 0">
  <h3>Список постов:</h3>
  <transition-group name="post-list">
    <posts-item class="posts" v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
  </transition-group>
</div>
  <h3 v-else>
    Список постов пуст 
  </h3>


</template>

<script>
import PostsItem from "@/components/PostsItem.vue";
export default{
  components:{
    PostsItem
  },
    props:{
     posts:{
        type: Array,
        required: true,
     }
    }
}
</script>

<style scoped>
.posts{
  padding:15px;
  border: 2px solid teal;
  margin-top: 15px;
}

h3{
  margin-top: 10px;
}

.post-list-item{
  display:inline-block;
}
.post-list-enter-active {
  transition: all 0.5s ease-in;
}
.post-list-leave-active {
  transition: all 0.5s ease-out;
}

.post-list-from,
.post-list-leave-to{
  opacity:0;
  transform:translateX(130px);
}

.post-list-move{
 transition: transform 0.4s ease; 
}


</style>