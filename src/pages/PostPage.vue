<template>

    <div>
      <h1 ref="start">Страница с постами</h1>
      <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
        <my-button @click="showDialog">Добавить пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
      
      <my-dialog v-model:show="dialogVisible" >
        <posts-form @create="createPost"/>
      </my-dialog>
      <posts-list v-bind:posts="sortedSearch"  @remove="removePost" v-if="!stillLoading"/>
      <div v-else class="loading">Идет загрузка...</div>
      <div v-intersection="infinitePosts" class="observer"></div>
      
      <!-- <div class="page_wrapper">
      <div class="page" :key="pageNumber" v-for="pageNumber in totalPages" :class="{'current_page': pageNumber===page}" @click="changePage(pageNumber)">{{ pageNumber }}</div>
       </div> -->
       
    </div>
    
    </template>
    
    <script>
    import PostsForm from "@/components/PostsForm.vue";
    import PostsList from "@/components/PostsList.vue";
    import axios from 'axios';
    
    export default{
        components:{
          PostsList, PostsForm
        },
        data(){
          return {
            posts:[],
            dialogVisible: false,
            stillLoading:false,
            selectedSort:'',
            searchQuery:'',
            page:1,
            limit:10,
            totalPages:0,
            sortOptions:[
             {value:'title', name:'По названию'},
             {value:'body', name:'По описанию'},
             {value:'id', name:'По дате создания'}
            ]    
          }
        },
          methods:{
           createPost(post){
            post.id=(this.posts.length+1);
            this.posts.push(post);
            this.dialogVisible= false;
           },
           removePost(post){
             this.posts=this.posts.filter(p=> p.id != post.id);
           },
           showDialog(){
            this.dialogVisible=true;
           },
          //  changePage(pageNumber){ 
            // this.fetchPosts();
          // }, 
           async fetchPosts(){
            try{
                this.stillLoading=true;
                const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{
                  params:{
                    _page: this.page,
                    _limit:this.limit
                  }
                });
                this.totalPages=Math.ceil(response.headers['x-total-count']/ this.limit);
                this.posts=response.data;  
        
            }
            catch(e){
              alert('Error')
            }
            finally{
              this.stillLoading=false;
            }
           },
    
           async infinitePosts(){
            try{
                this.page+=1;
                const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{
                  params:{
                    _page: this.page,
                    _limit:this.limit
                  }
                });
                this.totalPages=Math.ceil(response.headers['x-total-count']/ this.limit);
                this.posts=[...this.posts,...response.data];  
        
            }
            catch(e){
              alert('Error')
            }
        
           },
    
    
          },
    
          mounted(){
            this.fetchPosts();
          },
    
          computed:{
            sortedPosts(){
              if(this.selectedSort=='id'){
                return [...this.posts].sort((post1,post2)=>
                 post2[this.selectedSort]-post1[this.selectedSort]
                )
              }
              else{
              return [...this.posts].sort((post1,post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            }
          },
           sortedSearch(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase())); 
           }
          },
    
         
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