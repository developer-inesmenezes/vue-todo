import { TodoItem } from '@/models/items'
import { createStore } from 'vuex'

declare const crypto: Crypto & { randomUUID(): string };

export const storeKey = Symbol();

export interface StoreState {
  todos: TodoItem[];
}

export const store = createStore<StoreState>({
  state: {
    todos: [],
  },

  mutations: {
    add({ todos }, todo: { title: string, desc?: string  }) {
      todos.push({
        description : todo.desc?? "",
        createdAt : new Date(),
        done : false,
        id : crypto.randomUUID(),
        title : todo.title,
      });
    },
    remove: (state, id: string) => 
      state.todos.splice(state.todos.findIndex(todo => todo.id === id), 1),
    toggle: (state, id: string) => {
      const todo = getById(state.todos, id)
      if (todo) { todo.done = !todo.done; }
    },
    update:({ todos }, todo: {id: string, title: string, desc?: string }) => {
      const item = getById(todos, todo.id)
      if (item) {
        item.title = todo.title;
        item.description = todo.desc ?? '';
      }
    },
  },
  actions: {
  },
  getters: {
    findById: (state) => (id: string) => getById(state.todos, id),
    sorted: (state) => {
      return state.todos
      .sort((a,b)=>a.createdAt.getTime() - b.createdAt.getTime())
      .sort((a, b) => {
        const aValue = a.done ? 1 : 0;
        const bValue = b.done ? 1 : 0;
        return aValue - bValue;
      })
    }
    
  }
})

function getById(list: TodoItem[], id: string) {
  return list.find(todo => todo.id === id);
}
