import {writable} from 'svelte/store';

let data = {'0000':{name :'Chidsanuphong',surename: 'Pengchai',number: '6410742040', pin: '0000',course : []},
            '2222':{name :'Tawan',surename: 'doe',number: '2222', pin: '2222',course : []},
            '1111':{name :'Nichpa',surename: 'Pengchai',number: '1111', pin: '1111',course : []},
            '3':{name :'Sathit',surename: 'Juntanasatan',number: '3', pin: '3',course : []}};


let data_base = {'sf210_1':{code:'sf210',sec:'760001',name:'Weerachai',surename:'Antonsorn',time:'13.00-14.00',day:'Monday'}};


export const course = writable(data_base);
export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('home');
export const account = writable('');
export const store_q = writable({});
export const temp = writable({});


            