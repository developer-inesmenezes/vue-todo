<template>
  <ul class="item-list">
    <li v-for="item in items" :key="item.id">
      <span class="item-state" @click="toggle(item)" >{{ item.done ? '✅': '🟦' }}</span>
      <span class="item-name" @click="nav(item)">
        {{ item.title }}
      </span>
      <button class="item-delete" @click="remove(item)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoItem } from '../models/items';
import { Store, useStore } from 'vuex';
import { storeKey, StoreState } from '../store';

export default defineComponent({
  name: 'TodoList',
  methods: {
    toggle(item: TodoItem) {
    this.$store.commit('toggle', item.id);
      
      //todoManager.toggle(item.id);
    },
    remove(item: TodoItem) {
      this.$store.commit('remove', item.id);
      //todoManager.remove(item.id);
    },
    nav(item: TodoItem) {
      this.$router.push({
        name: 'Item',
        params: { id: item.id },
        query: { a: item.id }
      });
    },
  },
  computed: {
    items(){
      return this.$store.getters.sorted
    }
  }
});
</script>

<style lang="scss" scoped>

ul {
  list-style-type: circle;
  background: #d1d1d1;
  padding: 20px 197px 20px 197px;
  display: block;
} 

ul li {
  background: #e4e6e8;
  margin: 5px;
  height: 25px;
}

.item-name {
  cursor: pointer;
  margin-top: 3px;
  user-select: none;
  padding: 1 3px;
  font-weight: bold;
  float: left;
}

.item-state {
  float: left;
  padding: 3 3px;
  cursor: pointer;
  user-select: none;
  &:hover {
    font-size: 1.1rem;
  }
}

.item-delete {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 2.5px;
  margin-right: 2px;
  border: 1px solid #d1d1d1;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  float: none;
}
</style>