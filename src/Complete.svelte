<script>
        import { account,accounts, mode } from './stores.js';
</script>

 <img src="img/correct.png" alt="">
    <h1>ลงทะเบียนสำเร็จ</h1>
    <button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<style>
    img {
        max-width:350px;
        max-height:200px;
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    h1{
        font-family: 'Itim', cursive;
        margin-top: 20rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }
  
    .back {
        background: rgba(255, 255, 255, 0);
        width: 10rem;
        height: 3rem;
        position: absolute;
        top: 80%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -70%);
        border-radius: 10px;
        border: 4px solid white;  
        color: white;
        font-family: 'Itim', cursive;
        cursor: pointer;
    }
  
</style>