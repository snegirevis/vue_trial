<template>

<div class="app">
  <h1>Страница с котиками</h1>
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

        name: '',
        age: '',
        color:'',
       
 
       
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