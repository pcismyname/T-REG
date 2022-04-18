<script>
	import { islogin, mode } from './stores.js';
	import Complete from './Complete.svelte'
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
	import Sign from './Sign.svelte';
	import Menu  from './Menu.svelte';
	import Regist from './Regist.svelte';
	import Home from './Home.svelte';
	import Confirm from './Confirm.svelte';
	import Result from './Result.svelte';
	import Statistic from './Statistic.svelte';
	import Withdraw from './Withdrawal.svelte';
	import Detail from './Detail.svelte';
	


</script>	



<body>
	<nav class="top">
		<img class="logo" src="img\logo.png" alt="">
			<div class="nav_lists">		
				<button on:click={()=>$mode='home'} class="nav_item">Home</button>
				<button on:click={()=>$mode='home'} class="nav_item">Contact Us</button>
				<button on:click={()=>$mode='home'} class="nav_item">Help</button>
			</div>
		</nav>
	
	{#if $mode == 'home'}
		<Home/>
		<Sign/>
	{:else if $mode == 'signin'}
		<Login/>
		<Sign/>
	{:else if $islogin}
			{#if $mode == 'menu'}
				<Menu/>
			{:else if $mode == 'regist'}
				<Regist/>
			{:else if $mode == 'complete'}
				<Complete/>
			{:else if $mode == 'confirm'}
				<Confirm/>
			{:else if $mode == 'result'}
				<Result/>
			{:else if $mode == 'statistic'}
				<Statistic/>
			{:else if $mode == 'withdraw'}
				<Withdraw/>
			{:else if $mode == 'detail'}
				<Detail/>
			{/if}
		<Logout/>	
	{/if}
</body>


<style>
:global(body) {
    background: linear-gradient(296.82deg, #E4BAFF 0%, #AEBAF8 100%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
	min-width: 1440px;
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
.top{
    display: flex;
}
.nav_lists {
    list-style: none;
    display: inline-block;
    padding-top: 3rem;
}
.nav_item {
    border: none;
    background: none;
    margin-left: 3rem;
    font-size: 20px;
    font-family: 'K2D', sans-serif;
    color: white;
   
    cursor: pointer;
    
}
.logo {
	display: block;
    max-width:350px;
    max-height:150px;
    width: auto;
    height: auto;
    padding-right: 1rem;
}	
</style>
