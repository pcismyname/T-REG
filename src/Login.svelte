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
        <h1>Enrollment Login</h1>

        <div>
            <div class="word"><label for="UserId">User ID</label></div> 
            <input bind:value={username} on:keydown={submit}>
        </div>
        <div>
            <div class="word"><label for="Password">Password</label></div>
            <input type="password" bind:value={pin} on:keydown={submit} >
        </div>
        
        <div>
            <button on:click={isLogin}>Sign in</button>
        </div>
          
    <div><img {src}  class = "photo" alt=""></div>

</div>
    
</body>    


<style>
    body{color: white;
        font-family: 'Itim', cursive;}

    h1{
        font-size: 45px;
    }

    button{color: #E4BAFF;
        border-radius: 20px;
        padding: 10px 95px;
        margin: 20px 0;
        font-size: 20px;
        width: 300px;}

    input{background: none;
        border: 4px solid white;
        border-radius: 20px;
        padding: 10px 25px;
        margin: 10px 0;
        width: 300px;}

    .center{ width: 750px;
        height: 500px;
        border: 4px solid white;
        border-radius: 50px;
        padding: 50px 40px;
        margin-left: auto;
        margin-right: auto;
    }
    .photo{ 
        position: relative;
        top: -412px;
        left: 469px;
        background-size: cover;
        height: 500px;
        border-radius: 50px;
        display: inline-block;
}

    .word{
        font-size: 20px;
    }
    
    
</style>
