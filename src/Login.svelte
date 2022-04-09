<script>
    import { accounts, account, islogin, mode } from './stores.js';
    let username = '';
    let pin = '';

    function isLogin(){
        if(!(username in $accounts) || $accounts[username].pin != pin){
            alert('Incorrect Username or password');
        }
        else {
            $islogin = true;
            $mode = 'menu';
            $account = username;
            username = '';
            pin = '';  
        }
    }
</script>

<body> 
    <div class="center">
        <h1>MOCK</h1>
        <form method="post">
            <div class="txt_field">
                <input bind:value={username}  type="text" id="username" required>
                <span></span>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >Username</label>
            </div>
            <div class="txt_field">
                <input  bind:value={pin}  type="password" id="password" required>
                <span></span>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >Password</label>
            </div>
            <div>
            <input on:click={isLogin} type="submit" value="Login">
            
        </form>
    </div>
</body>    


<style>
    h1{
        font-size: 100px;
        z-index: 10;
        color: (0,0,0,0.5);
    }
</style>