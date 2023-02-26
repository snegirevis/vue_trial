<template>
<form @submit.prevent>
    <h4>Введите данные о Вашем посте:</h4>
    <my-input v-model="post.title"  class="input" type="text" placeholder="Название поста"></my-input>
    <my-input v-model.number="post.body" class="input" type="text" placeholder="Описание поста"></my-input>
    <my-button class="btn" @click="createPost">Добавить</my-button>
   
  </form>
</template>

<script>

  export default{
    components:{
      
    },
    data(){
      return{
        post:{
            title:'',
            body:'',
            id:''
        }
      }
    },
    methods:{
      createPost(){
        this.id=Date.now();
        this.$emit('create', this.post);
        this.post={
          title:'',
          body:'',
        }
      }
  }
 
  }
</script>

<style scoped>

.btn{
 margin-top: 15px;
 align-self: center;
 padding: 10px 15px;
 background: none;
 color: teal;
 border-radius: 20px;
 border: 1px solid;

}

form{
  display: flex;
  flex-direction: column;
}

</style>