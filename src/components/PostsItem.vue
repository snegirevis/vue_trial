<template>

    <div class="posts" >
    <div>
      <div>{{ post.id }}</div>
     <div><strong>Название:</strong>{{ post.title}}</div>
     <div><strong>Описание:</strong>{{ post.body}}</div>
     </div>
     <div class="posts_buttons">
        <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
        <my-button @click="$emit('remove', post)">Удалить</my-button>
     </div>
     
     </div>
   
   </template>
   
   <script>
 
   export default{
       components:{
         
       },
       props:{
        post:{
           type: Object,
           required: true,
        }
       },

      
}
   
   </script>

   <style scoped>
   .posts{
  padding:15px;
  border: 2px solid teal;
  margin-top: 15px;
  display:flex;
  align-items: center;
  justify-content: space-between;


}
.posts_buttons{
   display: flex;

}
   </style>