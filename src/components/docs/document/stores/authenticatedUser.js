import { writable } from 'svelte/store'

export const authenticatedUser = writable({
    'userId':1
})
