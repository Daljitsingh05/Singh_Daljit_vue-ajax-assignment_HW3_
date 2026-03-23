import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
           item:[]
           selectedItem : null,
           loading:false,
           error:""
           
        };
    },
    methods: {
        addTask: function() {
            let task = this.newTask.trim();
            if (task) {
              this.taskList.push({
                text: task,
                checked: false
              });
              this.newTask = "";
            }
          },  
          clearList: function() {
              this.taskList = [];
          },
          removeTask: function(task) {
            let index = this.taskList.indexOf(task);
            console.log(index);
            this.taskList.splice(index, 1)
          }
    }
}).mount('#app');