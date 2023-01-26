<template>
    <div class="options-container">
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
          {{ pokemon.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true
      },
      methods: {
        hola(){
          // this.$emit('click')
        }
      }
    }
  
  }
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    }
  li {
    align-items: center;
    background-color: white;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 5px 10px;
    position: relative;
    width: 250px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
  </style>