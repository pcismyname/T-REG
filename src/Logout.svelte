<script>
    import { account,accounts,islogin, mode } from './stores.js';
  
    function logout() {
      $islogin = false;
      $mode = 'home';
    }
  </script>


<div class="user"> {$accounts[$account].name}</div>
<button on:click={logout} class="sign_out" >SIGN OUT</button>

<style>
.sign_out {
    background: rgba(255, 255, 255, 0);
    display: flex;
    position: absolute;
    top: 2.5rem;
    right: 3rem;
    border-radius: 10px;
    border: 2px solid white;  
    color: white;
    cursor: pointer;

}

.user{
    color: white;
    display: flex;
    position: absolute;
    top: 3rem;
    right: 11rem;
    font-size: 25px;

}
</style>
