<template>
  <div class="item">
    <router-link to="/">Back</router-link>
    <div>
      <label> Title: </label>
      <input v-model="title" />
    </div>
    <div>
      <label> Description: </label>
      <textarea v-model="desc" />
    </div>
    <button v-if="valid" @click="save()">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Store, useStore } from 'vuex';
import { storeKey, StoreState } from '../store';

export default defineComponent({
  name: 'Fill',
  data() {
    return {
      title: '',
      desc: '',
    }
  },
  computed: {
    valid(): boolean {
      return this.title?.length > 2 ?? false;
    }
  },
  methods: {
    save() {
      
      this.$store.commit('add', {title: this.title, desc:''} );
      this.$router.push({
        name: 'Home',
      });
    },
  },
})
</script>