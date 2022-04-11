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
    function submit(event) {
        if (event.key === 'Enter') {
            isLogin();
        }
    }

</script>

<body> 
    <div class="center">
        <h1>Enrollment Login</h1>

        <div>
            <label for="UserId">User ID</label>
            <input bind:value={username} on:keydown={submit}>
        </div>
        <div>
            <label for="Password">Password</label>
            <input type="password" bind:value={pin} on:keydown={submit} >
        </div>
    
        <div>
        <button on:click={isLogin}>Sign in</button>
        </div>
    
</body>    


<style>
    body{color: white;}

    button{color: #E4BAFF;
        border-radius: 10px;
        padding: 10px 100px;
        margin: 20px 0;}

    input{background: none;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px 25px;
        margin: 5px 0;} 
    .center{ width: 600px;
        height: 325px;
        border: 2px solid white;
        border-radius: 10px;
        padding: 50px 40px;
        margin-left: auto;
        margin-right: auto;
}
</style>