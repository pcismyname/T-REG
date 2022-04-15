import {writable} from 'svelte/store';

let data = {'0000':{name :'Chidsanuphong',surename: 'Pengchai',number: '6410742040', pin: '0000',course : []},
            '2222':{name :'Tawan',surename: 'doe',number: '2222', pin: '2222',course : []},
            '1111':{name :'Nichpa',surename: 'Pengchai',number: '1111', pin: '1111',course : []},
            '3':{name :'Sathit',surename: 'Juntanasatan',number: '3', pin: '3',course : []}};


let data_base = {'sf210_1':{quata:40,code:'sf210',sub:'Programmin skill development 1',sec:'760001',name:'Weerachai',surename:'Antonsorn',time:'13.00-14.00',day:'Monday', credit:'3'},
                'sf210_2':{quata:40,code:'sf210',sub:'Programmin skill development 1',sec:'760002',name:'Jordan',surename:'Peterson',time:'09.00-12.00',day:'Tueday', credit:'3'},
                'sf210_3':{quata:40,code:'sf210',sub:'Programmin skill development 1',sec:'760003',name:'Ben',surename:'Shapiro',time:'13.00-14.00',day:'Wednesday', credit:'3'},
            'sf220_1':{quata:100,code:'sf220',sub:'Introduction to software engnieer',sec:'760004',name:'Weerachai',surename:'Antonsorn',time:'13.00-14.00',day:'Thursday',credit:'3'},
            'sf220_2':{quata:100,code:'sf220',sub:'Introduction to software engnieer',sec:'760005',name:'Ben',surename:'Shapiro',time:'13.00-14.00',day:'Friday',credit:'3'},
            'sf220_3':{quata:100,code:'sf220',sub:'Introduction to software engnieer',sec:'760006',name:'Weerachai',surename:'Antonsorn',time:'13.00-14.00',day:'Saturday',credit:'3'},};


export const courses = writable(data_base);
export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('home');
export const account = writable('');
export const store_q = writable([]);
export const temp = writable([]);


            