<script>
        import { account,accounts, mode } from './stores.js';
</script>
    <div class="complete">
    <img src="img/correct.png" alt="">
    <h1>ขอโควต้ารายวิชาสำเร็จ</h1>
    <button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>
    </div>
<style>

    .complete{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

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
        font-family: 'K2D', sans-serif;
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
        border-radius: 20px;
        border: 4px solid white; 
        color: white;
        font-family: 'K2D', sans-serif;
        cursor: pointer;
    }
  
</style>