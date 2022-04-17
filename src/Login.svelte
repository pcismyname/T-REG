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

    let src = '/img/Group_34.png'; 
    
    function submit(event) {
        if (event.key === 'Enter') {
            isLogin();
        }}
</script>



<body> 
    <div class="center">
        <h2>Enrollment Login</h2>

        <div>
            <div><label for="UserId">User ID</label></div> 
            <input bind:value={username} on:keydown={submit}>
        </div>
        <div>
            <div><label for="Password">Password</label></div>
            <input type="password" bind:value={pin} on:keydown={submit} >
        </div>
        
        <div>
            <button on:click={isLogin}>Sign in</button>
        </div>
          
    <div><img {src}  class = "photo" alt=""></div>

</div>
    
</body>    


<style>
    body{color: white;}

    button{color: #E4BAFF;
        border-radius: 20px;
        padding: 10px 95px;
        margin: 20px 0;}

    input{background: none;
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px 25px;
        margin: 5px 0;}

    .center{ width: 550px;
        height: 400px;
        border: 4px solid white;
        border-radius: 50px;
        padding: 50px 40px;
        margin-left: auto;
        margin-right: auto;
    }
    .photo{ 
        position: relative;
        top: -351px;
        left: 320px;
        background-size: cover;
        height: 400px;
        border-radius: 50px;
        display: inline-block;
}
    
    
</style>
