<script setip>
import TodoList from './components/Projects/TodoList/TodoList.vue';

// import LifeCycleComponent
// import { ref } from 'vue';
// const showHide = ref(true)


// import PracticeComponent
// // Array
// provide('friends', ['Alex', 'jordan', 'maria', 'john'])
// provide('games', {
//   id: 1,
//   title: 'Game 1',
//   genre: ['Action', 'Adventure', 'RPG'],
//   platform: ['PC']
// })


// import SchoolComponent
// // const studentName = 'Alex'
// // const studentAge = 20
// provide('studantName', 'alex')
// provide('studentAge', 20)


// import EventForm 
// let count = ref(0)

// const formHandler = (userName, email, password)=>{
//     console.log('username: ', userName);
//     console.log('email: ', email);
//     console.log('password: ', password);
// }

// import CustomValidation 
// const firstName = ref('Pati')
// const lastName = ref('Oliveira')
// const number = 10

</script>

<template>
    <!-- <HelloWorld />
     <MyComponent /> 
     <BindComponent /> -->

    <!-- STYLES -->
    <!-- <GlobalStyle />
    <LocalStyle />
    <CombinedStyle />
    <ModuleStyle /> -->

    <!-- EVENTS -->
    <!-- <MyEvent /> -->

    <!-- REACTIVITY -->
    <!-- <MyReactiveComponent /> -->
    <!-- <MyRefComponent /> -->

    <!-- COMPUTED PROPS -->
    <!-- <ComputedComponent /> -->

    <!-- CONDITIONAL REDERING V- -->
    <!-- <ConditionalRendering /> -->

    <!-- v-for -->
    <!-- <IterationComponent /> -->

    <!-- StaticComponent 'Two-way-Bind' -->
    <!-- <StaticPropsComponent name="'Pati'"/>
     <hr>
     <DynamicPropsComponent :firstName="firstName" :lastName="lastName"/>
     <hr>
     <ChangindPropsValue :number="number"/>
     <hr>
     <PropValidation :fullName="Patricia" :age="23"/>
     <hr>
     <ComplexProps 
        :friends="['alex', 'john', 'ana', 'Karina']"
        :userInfo="{
            name: 'alex',
            age:20,
            location: ['Eartth', 'IDK']}"
     />
     <hr>
     <CustomValidation name="Patricia" age="23" password="12345" /> -->

    <!-- EVENTS -->
    <!-- <h1>Count {{ count }}</h1>
      <Event @incrementCounter="count++" />
      <hr>
      <EventForm @userInfo="formHandler"/> -->

    <!-- SLOT -->
      <!-- <SlotComponent>
        <h1>Content 1</h1>
      </SlotComponent>

      <hr>

      <FallbackContent>
        <p>Fallback will not work bc I'm providing content inside the component</p>
      </FallbackContent>

      <hr>

      <NamedSlot> -->
        <!-- v-slot:one -->
         <!-- <template v-slot:one>
          <h1>This conten will go to slot one</h1>
         </template> -->
        <!-- #two -->
         <!-- <template #two>
          <h1>This content will go to slot two</h1>
         </template>
      </NamedSlot>

      <hr>

      <DefaultSlot>
        <template #default>
          <h1>Deafault Slot</h1>
        </template>
      </DefaultSlot> -->
      <!-- <SchoolComponent :studentName="studentName" :studentAge="studentAge" /> -->

    <!-- Exercise I -->
    <!-- <PracticeComponent />  -->

    <!-- LifeCycleComponents -->
    <!-- <LifeCycleComponent v-show="showHide"/>
     <button @click="showHide = !showHide">Show / Hide</button> -->

    <!-- Watchers -->
    <!-- <WatcherComponent /> -->
    <!-- <ReactiveObj /> -->
    <!-- <MultipleSources /> -->

    <!-- Template ref -->
    <!-- <BasicRef />
     <FunctionRef />
     <RefComponent /> -->

    <!-- Async -->
    <!-- <ToggleFriends /> -->
    
    <!-- Composable -->
    <!-- <ComposableCounter /> -->

    <!-- CustomDirectives -->
    <!-- <CustomDirectives /> -->

    <!-- <MainComponent /> -->

    <!-- <FetchingData /> -->


    <!-- PROJECTS -->
   <TodoList />

</template>

<style scoped></style>