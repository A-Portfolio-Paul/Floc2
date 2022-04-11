import { writable } from 'svelte/store'

export const users = writable({
    1:{
    'userId':1,
    'name':'Paul',
    'documentViews':[1]  //from documentViews.js
    },
    2:{
    'userId':2,
    'name':'karoline',
    'documentViews':[2]
    },
    })

