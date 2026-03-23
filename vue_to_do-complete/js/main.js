import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
           item:[],
           selectedItem : null,
           loading:false,
           error:""
           
        };
    },
    methods: {
       
    }
}).mount('#app');