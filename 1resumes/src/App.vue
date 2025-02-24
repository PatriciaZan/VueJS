<script setip>
import { ref } from 'vue';
import Event from './components/Events/Event.vue';
import EventForm from './components/Events/EventForm.vue';
let count = ref(0)

const formHandler = (userName, email, password)=>{
    console.log('username: ', userName);
    console.log('email: ', email);
    console.log('password: ', password);
}

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
      <h1>Count {{ count }}</h1>
      <Event @incrementCounter="count++" />
      <hr>
      <EventForm @userInfo="formHandler"/>
</template>

<style scoped></style>