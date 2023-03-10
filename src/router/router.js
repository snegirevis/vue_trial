import Main from '@/pages/Main.vue';
import PostPage from "@/pages/PostPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import About from "@/pages/About.vue";
import NewPostPage from "@/pages/NewPostPage.vue";
import CompositionPostPage from "@/pages/CompositionPostPage.vue";
import { createRouter,createWebHistory} from 'vue-router';

const routes=[
    {path:'/',
     component: Main},
     {path:'/posts',
     component: PostPage},
     {path:'/about',
     component: About}, 
     {path:'/posts/:id',
     component: PostIdPage}, 
     {path:'/store',
     component: NewPostPage}, 

]

const router= createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
});

export default router;