<script setip>
import CustomDirectives from './components/CustomDirectives/CustomDirectives.vue';

// import ComposableCounter from './components/Composable/ComposableCounter.vue';
// import ToggleFriends from './components/Async/ToggleFriends.vue';

// import BasicRef from './components/TemplateRef/BasicRef.vue';
// import FunctionRef from './components/TemplateRef/FunctionRef.vue';
// import RefComponent from './components/TemplateRef/RefComponent.vue';

// import WatcherComponent from './components/Watchers/WatcherComponent.vue';
// import ReactiveObj from './components/Watchers/ReactiveObj.vue';
// import MultipleSources from './components/Watchers/MultipleSources.vue';

// import LifeCycleComponent from './components/LifeCycleHooks/LifeCycleComponent.vue';
// import { ref } from 'vue';
// const showHide = ref(true)

// import { provide } from 'vue';
// import PracticeComponent from './components/Exercises/PracticeComponent.vue';
// // Array
// provide('friends', ['Alex', 'jordan', 'maria', 'john'])
// provide('games', {
//   id: 1,
//   title: 'Game 1',
//   genre: ['Action', 'Adventure', 'RPG'],
//   platform: ['PC']
// })

// import { provide } from 'vue';
// import SchoolComponent from './components/ProvideAndInject/SchoolComponent.vue';
// // const studentName = 'Alex'
// // const studentAge = 20
// provide('studantName', 'alex')
// provide('studentAge', 20)

// import DefaultSlot from './components/Slots/DefaultSlot.vue';
// import FallbackCOntent from './components/Slots/FallbackContent.vue';
// import NamedSlot from './components/Slots/NamedSlot.vue';
// import SlotComponent from './components/Slots/SlotComponent.vue';

// import { ref } from 'vue';
// import Event from './components/Events/Event.vue';
// import EventForm from './components/Events/EventForm.vue';
// let count = ref(0)

// const formHandler = (userName, email, password)=>{
//     console.log('username: ', userName);
//     console.log('email: ', email);
//     console.log('password: ', password);
// }

// import StaticPropsComponent from './components/Props/StaticPropsComponent.vue';
// import DynamicPropsComponent from './components/Props/DynamicPropsComponent.vue';
// import DynamicPropsComponent from './components/Props/DynamicPropsComponent.vue';
// import { ref } from 'vue';
// import ChangindPropsValue from './components/Props/ChangindPropsValue.vue';
// import PropValidation from './components/Props/PropValidation.vue';
// import ComplexProps from './components/Props/ComplexProps.vue';
// import CustomValidation from './components/Props/CustomValidation.vue';
// const firstName = ref('Pati')
// const lastName = ref('Oliveira')
// const number = 10

// import ComputedComponent from './components/Computed/ComputedComponent.vue';
// import ConditionalRendering from './components/ConditionalRender/ConditionalRendering.vue';
// import IterationComponent from './components/ConditionalRender/IterationComponent.vue';
// import MyReactiveComponent from './components/Reactivity/MyReactiveComponent.vue';
// import MyRefComponent from './components/Reactivity/MyRefComponent.vue';


// import HelloWorld from './components/HelloWorld.vue';
// import MyComponent from './components/MyComponent.vue';
// import BindComponent from './components/BindComponent.vue';

// import CombinedStyle from './components/Styles/CombinedStyle.vue';
// import GlobalStyle from './components/Styles/GlobalStyle.vue';
// import LocalStyle from './components/Styles/LocalStyle.vue';
// import ModuleStyle from './components/Styles/ModuleStyle.vue';

// import MyEvent from './components/Events/MyEvent.vue';

</script>

<template>
    <!-- <HelloWorld /> -->
    <!-- <MyComponent /> -->
    <!-- <BindComponent /> -->

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
     <CustomDirectives />
</template>

<style scoped></style>