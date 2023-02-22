<template>
<form @submit.prevent>
    <h4>Введите данные о Вашем котике</h4>
    <my-input v-model="cat.name"  class="input" type="text" placeholder="Имя котика"></my-input>
    <my-input v-model.number="cat.age" class="input" type="text" placeholder="Возраст котика"></my-input>
    <my-input v-model="cat.color" class="input" type="text" placeholder="Окраска котика" ></my-input>
    <my-button class="btn" @click="createCat">Добавить</my-button>
   
  </form>
</template>

<script>

  export default{
    components:{
      
    },
    data(){
      return{
        cat:{
            name:'',
            age:'',
            color:'',
            
        }
      }
    },
    methods:{
      createCat(){
        this.id=Date.now();
        this.$emit('create', this.cat);
        this.cat={
          name:'',
          age:'',
          color:''
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