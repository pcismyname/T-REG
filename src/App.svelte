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


