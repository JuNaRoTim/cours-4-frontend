// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import {useCounterStore} from "@/stores/counter.js";

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const store = useCounterStore()
    const value = store.count
    store.increment()


    expect(store.count).toBe(value +1)
  })


  it('decrements', () => {
    const store = useCounterStore()
    const value = store.count
    store.decrement()


    expect(store.count).toBe(value -1)
  })
});
