<template>
    <div class="navbar">
        <div @click="$router.push('/')" >Сборник постов</div>
        <div class="navbar_buttons">
            <my-button @click="$router.push(`/posts`)">Посты</my-button>
            <my-button @click="$router.push(`/about`)" style="margin-left:10px">О приложении</my-button>
            <my-button @click="$router.push(`/store`)" style="margin-left:10px">store</my-button>
        </div>

    </div>
</template>

<script>;
 import MyButton from "@/components/UI/MyButton.vue"
export default{
name:'navbar',
  components:{
    MyButton
  }
}
</script>

<style>
.navbar{
    display: flex;
    height: 50px;
    background-color: gainsboro;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    padding: 0px 20px;
}
.navbar_buttons{
   margin-left: auto;
   
}
</style>