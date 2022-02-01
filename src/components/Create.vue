<template>
  <div class="create-item">
    <input class="create-input" type="text" v-model="name" placeholder="What needs to be done?">
    <button class="create-button" v-if="active" @click="create()">Create</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
import { storeKey, StoreState } from '../store'
//import { todoManager } from '../models/items';

export default defineComponent({
  name: 'TodoList',
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    this.name = '';
  },
  computed: {
    active(): boolean {
      return this.name?.length > 2 ?? false;
    }
  },
  methods: {
    create() {
      //todoManager.create(this.name);
      this.$store.commit('add', {title: this.name, desc:''})
      this.name = '';
      this.$emit('create');
    },
    
  },
});
</script>


<style lang="scss">
.create-input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    margin-top: 20px;
  background-color: white;
  border: 1px solid #000000;
  padding: 10px 76px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.create-input[type=text]:focus {
  border: 3px solid #555;
}

.create-button{

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    
  background-color: white;
  border: 1.7px solid #f48154e0;
  color: #f48154;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 0px;
  margin-top: 30px;
  margin-left: 0px;
}

.create-button:hover {
  background-color: #f48154; /* Sunset */;
  color: white;
}

</style>