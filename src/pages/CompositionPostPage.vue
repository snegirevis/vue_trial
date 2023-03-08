<template>

    <div>
      <h1>Число 1: {{ num1 }} </h1>
      <h1>Число 2: {{ num2 }}</h1>
      <my-button @click="addNums">Сложить числа</my-button>
      <h1>Итог:{{ num3 }}</h1>
      <!-- <h1 ref="start">Страница с постами</h1>
      <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
        <my-button>Добавить пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
      
      <my-dialog v-model:show="dialogVisible" >
        <posts-form />
      </my-dialog>
      <posts-list v-bind:posts="sortedSearch"  v-if="!stillLoading"/>
      <div v-else class="loading">Идет загрузка...</div>
     -->
       
    </div>
    
    </template>
    
    <script>
    import PostsForm from "@/components/PostsForm.vue";
    import PostsList from "@/components/PostsList.vue";
    import axios from 'axios';
    import {ref} from 'vue';
 
    export default{
        components:{
          PostsList, PostsForm
        },
        data(){
          return {
            dialogVisible: false,
            sortOptions:[
             {value:'title', name:'По названию'},
             {value:'body', name:'По описанию'},
             {value:'id', name:'По дате создания'}
            ]    
          }
        },

         setup(props){
           const num1 = ref(2);
           const num2 = ref(14);
           let num3=  ref(0)

           const addNums=()=>{
             num3.value=num1.value+num2.value;
           }

           return{
            num1, num2, num3, addNums
           }
         }

        }
    
    
    </script>
    
    <style>
    .app_btns{
    margin:15px 0;
     display: flex;
     justify-content:space-between;
    }
    
    .page_wrapper{
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    
    .page{
      padding: 10px;
    }
    .current_page{
      color: gray;
      opacity: 0.5;
    }
    .observer{
      height: 30px;
    }
    
    </style>