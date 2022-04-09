<script>
    import {islogin} from './store.js';

    function logout(){
        $islogin = false;
    }
</script>

<button on:click={logout}>Log out</button>