<script>
import InputTask from './components/InputTask.vue';
import TaskList from './components/TaskList.vue';
import { Task } from './models/Task';
 
// let tasks = []
// let task = new Task()
// task.completed = false
// task.title = 'Tarefa'
// tasks.push(task)
// tasks.push(task)
// tasks.push(task)

  export default {
    name: 'app',
    components: {
      InputTask,
      TaskList,
      FooterTodo
    },
    data () {
      return {
        tasks: []
      }
    },

    methods: {
      addTask (task){
        this.tasks.push(task)
      }
    }
  }
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
      <!-- <InputTask></InputTask> -->
       <input-task @newTask="addTask"></input-task>
       <task-list :todo-list="tasks"></task-list>
       <router-link class="cep" to="/cep">Verificar CEP</router-link>
       <FooterTodo></FooterTodo>
    </header>
  </section>

</template>

<style>
html,
body {
	margin: 0;
	padding: 0;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

:focus {
	outline: 0;
}
.cep{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  border-top: 1px solid #ededed;
  text-align: center;
}
.hidden {
	display: none;
}

.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp h1 {
	position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}
</style>