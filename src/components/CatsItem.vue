<template>

    <div class="cats" >
    <div>
     <div><strong>Имя:</strong>{{ cat.name}}</div>
     <div><strong>Возраст:</strong>{{ cat.age}}</div>
     <div><strong>Окраска:</strong>{{ cat.color }}</div>
     </div>
     <div class="cats_buttons">
        <my-button @click="$emit('remove', cat)">Удалить</my-button>
     </div>
     
     </div>
   
   </template>
   
   <script>
 
   export default{
       components:{
         
       },
       props:{
        cat:{
           type: Object,
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
  display:flex;
  align-items: center;
  justify-content: space-between;


}
   </style>