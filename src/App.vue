<template>
  <nav-component />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
  components: {
    "nav-component": NavComponent
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "MyCustomFont";
  src: url("../public/fonts/JetBrainsMono-Bold.ttf") format("truetype");
  src: url("../public/fonts/JetBrainsMono-Regular.ttf") format("truetype");
  src: url("../public/fonts/JetBrainsMono-Light.ttf") format("truetype");
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "MyCustomFont", sans-serif;
  color: #333;
}


.container {
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 600px) {
    margin: 0 10px;
    width: calc(100% - 20px);
  }
}

a {
  text-decoration: none;

  color: #333;
}

.title {
  display: block;
  padding-top: 20px;
  font-size: 1.5rem;
}

.a-sec {
  color: rgb(66, 126, 255);
}

.a-prim {
  position: relative;
  font-weight: bold;
  font-size: 0.8rem;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 0%;
    transition: all 0.2s ease-in-out;
    background-color: rgb(66, 126, 255);
    outline: 2px solid rgba(66, 126, 255, 0);
    border-radius: 10px;
  }
  &:hover {
    &::after {
      width: 100%;
      outline: 2px solid rgba(66, 126, 255, 0.342);
    }
  }
}

h1 {
  display: inline;
  margin-right: 8px;
}

button {
  all: unset;
  cursor: pointer;
}

input,
textarea {
  all: unset;
}

.input,
.textarea {
  width: calc(100% - 30px);
  display: block;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1.5px solid #9dbcff;
  outline: 5px solid #9dbcff00;
  transition: 0.2s ease-in-out;
  &::placeholder {
    color: #9dbcff;
  }
  &:focus {
    outline: 5px solid #9dbcff20;
  }
}

.textarea {
  overflow-wrap: break-word;
  word-wrap: break-word;
  resize: vertical;
  overflow: hidden;
}

.logo {
  display: flex;
  align-items: center;
  & span {
    max-width: 50px;
    font-size: 0.7rem;
    padding: 7px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #c9daff77;
  }
}

label {
  padding-bottom: 10px;
  font-size: 0.8em;
}

.button {
  all: unset;
  color: white;
  background-color: rgb(66, 126, 255);
  padding: 10px 15px;
  width: calc(100% - 30px);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(31, 100, 248);
  }
}

.error {
  color: #df4040;
}

</style>
