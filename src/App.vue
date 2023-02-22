<template>

<div class="app">
  <h1>Страница с котиками</h1>
  <my-button @click="fetchUsers">Get posts</my-button>
  <div v-for="massiv in massivs">
    <p>{{ massiv.title }}</p>
  </div>

  <my-button @click="showDialog">Добавить котика
  </my-button>
  <my-dialog v-model:show="dialogVisible" >
    <cats-form @create="createCat"/>
  </my-dialog>
  <cats-list v-bind:cats="cats" @remove="removeCat"/>
</div>
</template>

<script>
import CatsForm from "@/components/CatsForm.vue";
import CatsList from "@/components/CatsList.vue";
import axios from 'axios';

export default{
    components:{
      CatsList, CatsForm
    },
    data(){
      return {
        cats:[
          {id:1, name:'Barsik', age: 2, color: "Ginger"},
          {id:2, name:'Murzik', age: 3, color:"Black"},
          {id:3, name:'Julia', age: 4, color:"White"},
        ],
        dialogVisible: false,
        massivs:[],
        massId:[],
        massName:[],
        massColor:[],
       
      }
    },
      methods:{
       createCat(cat){
        this.cats.push(cat);
        this.dialogVisible= false;
       },
       removeCat(cat){
         this.cats=this.cats.filter(c=> c.id != cat.id)
       },
       showDialog(){
        this.dialogVisible=true;
       },
       async fetchUsers(){
        try{
         const response= await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
         this.massivs=response.data;
         this.massId.push(this.massivs.forEach(function(){
          return this.massiv.id;
         }));
         
         //крч можно осздать отдельную переменную массив под каждое поле и запушить 
         
        }
        catch(e){
          alert('Error')
        }
       }

      }
    }

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
padding: 20px;
}



</style>