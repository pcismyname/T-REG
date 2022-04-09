<script>
    import {islogin} from './store.js'
    import Login from './Login.svelte';
    import Logout from './Logout.svelte';
</script>

<body>
	<div class="top">
    <img class="logo" src="img\logo.png" alt="">
        <div class="nav_lists">		
            <button class="nav_item">Home</button>
            <button class="nav_item">Contact Us</button>
            <button class="nav_item" >Help</button>
        </div>
</div>

{#if !$islogin}
	<Login/>
{:else}
    <Logout/>
{/if}


</body>

<style>
    :global(body) {
    background: linear-gradient(296.82deg, #E4BAFF 0%, #AEBAF8 100%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
}
.top{
    display: flex;
    width: fit-content;
   
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
    font-family: Arial, Helvetica, sans-serif;
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
