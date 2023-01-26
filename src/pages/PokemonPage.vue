<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" v-if="!selected"/>
    <div v-if="showAnswer">
        <h2 class="fade-in">{{message}}</h2>
        <button @click="newGame">Nuevo juego</button>
    </div>  
  </div> 
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokemonPage',
  components: {
    PokemonPicture, PokemonOptions},
    data(){
        return {
          pokemonArr: [],
          pokemon: null,
          showPokemon: false,
          showAnswer: false,
          message: '',
          selected: false
        }
    },
    methods: {
      async mixPokemonArray(){
        this.pokemonArr = await getPokemonOptions()
        const rndInt = Math.floor(Math.random()*4)
        this.pokemon = this.pokemonArr[rndInt]
      },
      checkAnswer(selectedId){
        this.showPokemon = true
        this.showAnswer = true
        this.selected = true
        if(selectedId===this.pokemon.id){
          this.message = `Correcto, ${this.pokemon.name}`
        }else{
          this.message = `Oops, era ${this.pokemon.name}`
        }
      },
      newGame(){
        this.pokemonArr = []
        this.pokemon = null
        this.showPokemon = false
        this.showAnswer = false
        this.selected = false
        this.mixPokemonArray()
      }
    },
    mounted(){
      this.mixPokemonArray()
    }
}
</script>

<style>
button {
  min-width: 130px;
  height: 40px;
  width: 250px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #495057;
  background: #495057;
}
button:hover {
  background: #fff;
  color: #495057
}
</style>