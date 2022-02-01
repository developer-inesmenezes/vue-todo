<template>
  <div class="home">
    <button class="button" @click="nav()" >Create</button>
    <create v-if="showCreate" @create="create" />
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src
import Create from '@/components/Create.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TodoList,
    Create,
  },
  data() {
    return {
      showCreate: false,
    }
  },
  methods: {
    create() {
      this.showCreate = false;
    },
    toggleCreate() {
      this.showCreate = !this.showCreate;
    },
    nav() {
      this.$router.push({
        name: 'Fill',
      });
    }
  },
});
</script>

<style lang="scss">
.button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  border: 2px solid #f48154;
  color: #f48154;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-top: 30px;
}

.button:hover {
  background-color: #f48154; /* Sunset */;
  color: white;
}

</style>
