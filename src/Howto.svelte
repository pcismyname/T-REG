<script> 
    import {mode} from './stores.js';
</script>

<body>
<center><h1>คู่มือการขอโควต้า</h1></center>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div>
  <p class="head">วิธีถอนการขอโคต้า</p>
  <img src="img/howto/1.png" alt="">
  <img src="img/howto/2.png" alt="">
  <img src="img/howto/3.png" alt="">
  <img src="img/howto/4.png" alt="">
  <img src="img/howto/5.png" alt="">
  <img src="img/howto/6.png" alt="">

  </div>
  <div>
    <h3>วิธีถอนการขอโคต้า</h3><br>
    <p>1. กดปุ่ม ถอนรายวิชา</p> <br>
    <p>2. เลือกรายวิชาที่ต้องการจะถอน</p><br>
    <p>3. กดปุ่มยืนยัน</p><br>
  </div>
  <div>
    <h3>ตรวจสอบโคต้า</h3><br>
    <p>1. กดปุ่ม ผลการขอโคต้า</p> <br>
    <p>2. เลือกรายวิชาที่ต้องการจะถอน</p><br>
    <p>3. กดปุ่มยืนยัน</p><br>
  
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
    h1{ 
        font-size: 10 em;
        color: white;
    }

    p.head{border: 4px solid white;  
        color: white; 
        width: 14rem;
        height: 4rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 5.4px;
        background: rgba(255, 255, 255, 0)}
    img{margin: auto;
      max-width: 60%;
      height: auto;
      position: relative;
      box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2), 0px 6px 20px 0px rgba(0,0,0,0.19);
      margin: 50px;

      display: block;
}
</style>

