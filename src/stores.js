import {writable} from 'svelte/store';

let data = {'0':{name :'Chidsanuphong',surename: 'Pengchai',number: '6410742040', pin: '0',course : []},
            '2222':{name :'Tawan',surename: 'doe',number: '2222', pin: '2222',course : []},
            '1111':{name :'Nichpa',surename: 'Pengchai',number: '1111', pin: '1111',course : []},
            '3':{name :'Sathit',surename: 'Juntanasatan',number: '3', pin: '3',course : []},
            'admin':{name :'admin',surename: 'admin',number: 'admin', pin: 'admin',course : []},};


let data_base = {'sf210_1':{quata:30,max:30,code:'sf210',sub:'Programmin skill development 1',sec:'760001',name:'John',surename:'Lennon',time:'13.00-14.00',day:'Monday', credit:'3'},
                'sf210_2':{quata:49,max:50,code:'sf210',sub:'Programmin skill development 1',sec:'760002',name:'Pual',surename:'Mccany',time:'09.00-12.00',day:'Tuesday', credit:'3'},
                'sf210_3':{quata:1,max:50,code:'sf210',sub:'Programmin skill development 1',sec:'760003',name:'Mikey',surename:'Sinoda',time:'13.00-14.00',day:'Wednesday', credit:'3'},
            'sf220_1':{quata:50,max:50,code:'sf220',sub:'Introduction to software engnieer',sec:'860004',name:'Kurt',surename:'Cobain',time:'13.00-14.00',day:'Thursday',credit:'3'},
            'sf220_2':{quata:49,max:50,code:'sf220',sub:'Introduction to software engnieer',sec:'860005',name:'Fred',surename:'Mercury',time:'13.00-14.00',day:'Friday',credit:'3'},
            'sf220_3':{quata:20,max:50,code:'sf220',sub:'Introduction to software engnieer',sec:'860006',name:'Ringo',surename:'Star',time:'09.00-12.00',day:'Saturday',credit:'3'},
            'tu100_1':{quata:50,max:50,code:'tu100',sub:'Civic Engagment',sec:'460007',name:'Noel',surename:'Gallage',time:'13.00-14.00',day:'Sunday',credit:'3'},
            'tu100_2':{quata:20,max:50,code:'tu100',sub:'Civic Engagment',sec:'460008',name:'Liam',surename:'Galger',time:'13.00-14.00',day:'Monday',credit:'3'},
            'tu100_3':{quata:40,max:50,code:'tu100',sub:'Civic Engagment',sec:'460009',name:'Harry',surename:'Styles',time:'13.00-16.00',day:'Tuesday',credit:'3'},
            'sf230_1':{quata:20,max:50,code:'sf230',sub:'Linear algebra',sec:'930001',name:'Bruno',surename:'Mars',time:'09.00-12.00',day:'Monday',credit:'3'},
            'sf230_2':{quata:35,max:50,code:'sf230',sub:'Linear algebra',sec:'930002',name:'Taylor',surename:'Swift',time:'13.00-16.00',day:'Saturday',credit:'3'},
            'sf230_3':{quata:18,max:50,code:'sf230',sub:'Linear algebra',sec:'930003',name:'Michael',surename:'Jack',time:'07.00-11.00',day:'Tuesday',credit:'3'},
            'ma111_1':{quata:12,max:70,code:'ma111',sub:'Fundamentals of Calculus',sec:'230001',name:'Momed',surename:'Sallah',time:'13.00-15.00',day:'Thursday',credit:'3'},
            'ma111_2':{quata:69,max:70,code:'ma111',sub:'Fundamentals of Calculus',sec:'230002',name:'Jason',surename:'Maraz',time:'13.00-15.00',day:'Wednesday',credit:'3'},
            'ma111_3':{quata:45,max:70,code:'ma111',sub:'Fundamentals of Calculus',sec:'230003',name:'Justin',surename:'Biebe',time:'08.00-10.00',day:'Tuesday',credit:'3'},
            'tu105_1':{quata:10,max:30,code:'tu105',sub:'Communication skills in English',sec:'310004',name:'Jordan',surename:'Hendoo',time:'07.00-11.00',day:'Monday',credit:'3'},
            'tu105_2':{quata:1,max:30,code:'tu105',sub:'Communication skills in English',sec:'310005',name:'Shawn',surename:'Mendes',time:'13.00-17.00',day:'Friday',credit:'3'},
            'tu105_3':{quata:13,max:30,code:'tu105',sub:'Communication skills in English',sec:'310006',name:'Liam',surename:'Galger',time:'08.00-12.00',day:'Wednesday',credit:'3'},};


export const courses = writable(data_base);
export const accounts = writable(data);
export const islogin = writable(false);
export const isadmin = writable(false);
export const mode = writable('home');
export const account = writable('');
export const store_q = writable([]);
export const temp = writable([]);


            