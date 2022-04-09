import {writable} from  'svelte/store'

let data = {'1111':{num : '1111', pin: '1111'}, '2222':{num : '2222',pin: '2222'}};

export const accounts = writable(data);
export const islogin = writable(false);
