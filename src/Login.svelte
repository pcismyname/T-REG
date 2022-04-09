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

    <div>
        <button>Don't have an account?</button>
    </div>
    
</body>

