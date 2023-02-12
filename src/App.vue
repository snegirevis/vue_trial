<template>

<div class="app">
  <form @submit.prevent>
    <h4>Введите данные о Вашем котике</h4>
    <input v-bind:value="name" @input="name= $event.target.value" class="input" type="text" placeholder="Имя котика">
    <input v-bind:value="age" @input="age= $event.target.value" class="input" type="text" placeholder="Возраст котика">
    <button class="btn" @click="createCat">Добавить</button>
  </form>

  <div class="cats" v-for="cat in cats">
  <div><strong>Имя:</strong>{{ cat.name}}</div>
  <div><strong>Возраст:</strong>{{ cat.age}}</div>
  </div>
</div>

</template>

<script>

export default{
    data(){
      return {
        cats:[
          {id:1, name:'Barsik', age: 2},
          {id:2, name:'Murzik', age: 3},
          {id:3, name:'Julia', age: 4},
        ],

        name: '',
        age: '',
       
      }
    },
      methods:{

      createCat(){
       const newCat={
        id:Date.now(),
        name:this.name,
        age:this.age,
       }
        this.cats.push(newCat);
        this.name='';
        this.age='';
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

form{
  display: flex;
  flex-direction: column;
}

.cats{
  padding:15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn{
 margin-top: 15px;
 align-self: center;
 padding: 10px 15px;
 background: none;
 color: teal;
 border-radius: 20px;
 border: 1px solid;

}
</style>