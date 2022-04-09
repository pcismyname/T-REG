<script>
    import {accounts, islogin} from './store.js';

    let accountNo ='';
    let pin ='';

    function checklogin() {
        if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {
            alert('incorrect ID or Pin');
        } else {
            $islogin = true;
            accountNo ='';
            pin='';
            {
            alert('welcome');}
        }
    }
</script>



<body>
    <h1>Enrollment Login</h1>

    <div>
        <label for="UserId">User ID</label>
        <input bind:value={accountNo}>
    </div>
    <div>
        <label for="Password">Password</label>
        <input type="password" bind:value={pin} >
    </div>
    
    <div>
    <button on:click={checklogin}>Sign in</button>
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
</style>