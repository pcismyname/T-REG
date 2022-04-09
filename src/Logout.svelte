<script>
    import { islogin, mode } from './stores.js';
  
    function logout() {
      $islogin = false;
      $mode = '';
    }
  </script>


<button on:click={logout} class="sign_out" >SIGN OUT</button>


<style>
.sign_out {
    background: rgba(255, 255, 255, 0);
    display: flex;
    position: absolute;
    top: 2.5rem;
    right: 3rem;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    border: 4px solid white;  
    color: white;
    cursor: pointer;

}
</style>