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
     
</script>

<body> 
    
    <div class="center">
        
       <div class="system">
            <h1>Enrollment Login</h1>

            <div>
                <label for="UserId">User ID</label>
                <input bind:value={username}>
            </div>
            <div>
                <label for="Password">Password</label>
                <input type="password" bind:value={pin} >
            </div>
        
            <div>
            <button on:click={isLogin}>Sign in</button>
            </div>
        
        </div> 
        
    <div class = "photo"></div>

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
        border: 4px solid white;
        border-radius: 20px;
        padding: 50px 40px;
        margin-left: auto;
        margin-right: auto;
    }
    .photo{  background-image:url(https://drive.google.com/file/d/1sFbEyW2RVCInV9JDwQAxlBRok8vLvZO6/preview);
        background-size: cover;
        height: 500px;
        border-radius: 25px;
}
    
    
</style>
