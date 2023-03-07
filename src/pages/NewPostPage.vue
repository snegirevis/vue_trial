<template>

    <div>
      <h1 ref="start">Страница с постами</h1>
      <my-input v-focus :model-value="searchQuery" @update:model-value="setsearchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
        <my-button @click="showDialog">Добавить пост</my-button>
        <my-select :model-value="selectedSort" @update:model-value="setselectedSort" :options="sortOptions" />
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
    
    <script  >
    import PostsForm from "@/components/PostsForm.vue";
    import PostsList from "@/components/PostsList.vue";
    import axios from 'axios';
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
    
    export default{
        components:{
          PostsList, PostsForm
        },
        data(){
          return {
            dialogVisible: false
          }
        },
          methods:{
            ...mapMutations({
               setpage:'post/setPage',
               setsearchQuery:'post/setsearchQuery',
               setselectedSort:'post/setselectedSort'
            }),
            ...mapActions({
              infinitePosts:'post/infinitePosts',
              fetchPosts: 'post/fetchPosts',

            }),
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


          },
    
          mounted(){
            this.fetchPosts();
          },
    
          computed:{
            ...mapState({
        posts: state=> state.post.posts,
        stillLoading: state=> state.post.stillLoading,
        selectedSort:state=> state.post.selectedSort,
        searchQuery:state=> state.post.searchQuery,
        page: state=> state.post.page,
        limit:state=> state.post.limit,
        totalPages: state=> state.post.totalPages,
        sortOptions: state=> state.post.sortOptions,
       
    }),
            ...mapGetters({
              sortedPosts:'post/sortedPosts',
              sortedSearch:'post/sortedSearch',
            })
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