<script> 
    import {mode} from './stores.js';
</script>

<body>
<center><h1>คู่มือการลงทะเบียน</h1></center>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div class='howto1'>
    <h3>วิธีการขอโคต้า</h3>
    <p style="font-size: 30 pt">1. กดปุ่ม sign in เพื่อเข้าสู่ระบบ</p>
    <p>2. กรอก User ID และ Password ให้ถูกต้อง จากนั้นกดปุ่ม sign in</p>
    <p>3. กดปุ่มขอโคต้า</p>
    <p>4. เลือกรายวิชาที่ต้องการจะขอโคต้า</p>
    <p>5. เลือกsec ที่จะต้องการขอโคต้า</p>
    <p>6. หลักจาก กดขอโคต้าครบเรียบร้อยแล้ว กดปุ่มยืนยัน</p>
    <p>7. ระบบจะแสดงผลการขอโคต้า ให้กดปุ่มยืนยันการขอโคต้าอีกครั้ง</p>
    <p>8. ระบบจะแสดงผลว่าขอโคต้าเรียบร้อย</p>
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
    body{font-family:'K2D', sans-serif ;}
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
</style>

