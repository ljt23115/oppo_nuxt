import { defineStore } from "pinia"

export interface IState {
  counter: number;
}

export const useHomeStore = defineStore('home', {
  state: (): IState => {
    return {
      counter: 0
    }
  },
  actions: {
    increment() {
      this.counter ++
    },
    
  },
})