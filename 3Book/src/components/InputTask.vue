<template>
    <div>
        <input 
            class="new-todo"
            @keyup.enter="addTask"
            placeholder="O que precisa ser feito?">
    </div>
</template>

<script>
import { Task } from '@/models/Task';

    export default {
        data (){
            return{

            }
        },
        methods: {
          addTask ($event) {
            let value = $event.target.value
            let task = this.createTask(value)
            this.broadcast(task)
            this.clearField($event)
            // let task = new Task()
            // task.completed = false
            // task.title = value
            // this.$emit('newTask', task)
            // $event.target.value = ''
            // console.log(task);   
          },
          createTask (value) {
            let task = new Task()
            task.completed = false
            task.title = value
            return task
          },
          clearField (){
            this.$el.querySelector('input').value = ''
          },
          broadcast (task){
            this.$emit('newTask', task)
          }  
        }
    }

</script>

<style>
.todoapp input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.todoapp input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}
.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>