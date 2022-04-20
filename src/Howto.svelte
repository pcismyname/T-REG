<script> 
    import {mode} from './stores.js';
</script>

<body>
<center><p class='Head1'>คู่มือการขอโควต้า</p></center>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div>
  <p class="head">วิธีการขอโคต้ารายวิชา</p>
  <img src="img/howto/1.png" alt="">
  <img src="img/howto/2.png" alt="">
  <img src="img/howto/3.png" alt="">
  <img src="img/howto/4.png" alt="">
  <img src="img/howto/5.png" alt="">
  <img src="img/howto/6.png" alt="">

  </div>
  <div>
    <p class="head">วิธีผลการขอโควต้า</p>
    <img src="img/howto/9.png" alt="">
    <img src="img/howto/10.png" alt="">
  </div>  
  <div>
    <p class="head">วิธีถอนการขอโคต้ารายวิชา</p>
    <img src="img/howto/7.png" alt="">
    <img src="img/howto/8.png" alt="">
  </div>

</body>

<style>
    body{font-family:'K2D', sans-serif; 
          margin: 25px;}
    .back {
        background: rgba(255, 255, 255, 0);
        width: 10rem;
        height: 3rem;
        position: absolute;
        top: 5%;
        right: 5% ;
        transform: translate(-50%, -70%);
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        cursor: pointer;
    }
    p.Head1{font-size: 3.3rem;
        color: rgba(101, 99, 186, 1);
        margin: auto;
    }

    p.head{border: 4px solid white;  
        color: white; 
        width: 20rem;
        height: 4rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 5.8px;
        background: rgba(255, 255, 255, 0);
        margin: 50px;
        text-align: center;}
        
    img{margin-bottom: 50px;
      margin-right: auto ;
      margin-left: auto;
      max-width: 60%;
      height: auto;
      position: relative;
      box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2), 0px 6px 20px 0px rgba(0,0,0,0.19);
      display: block;
}
</style>

