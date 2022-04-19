<script> 
    import {mode} from './stores.js';
</script>

<body>
<center><h1>คู่มือการลงทะเบียน</h1></center>
<div>
    <h3>วิธีการขอโคต้า</h3>
    <p>1. กดปุ่ม sign in เพื่อเข้าสู่ระบบ/p><br>
    <p>2. กรอก User ID และ Password ให้ถูกต้อง จากนั้นกดปุ่ม sign in</p><br>
    <p>3. กดปุ่มขอโคต้า</p><br>
    <p>4. เลือกรายวิชาที่ต้องการจะขอโคต้า</p><br>
    <p>5. เลือกsec ที่จะต้องการขอโคต้า</p><br>
    <p>6. หลักจาก กดขอโคต้าครบเรียบร้อยแล้ว กดปุ่มยืนยัน</p><br>
    <p>7. ระบบจะแสดงผลการขอโคต้า ให้กดปุ่มยืนยันการขอโคต้าอีกครั้ง</p><br>
    <p>8. ระบบจะแสดงผลว่าขอโคต้าเรียบร้อย</p><br>
</div>
<div>
    <h3>วิธีถอนการขอโคต้า</h3>
    <p>1. กดปุ่ม ถอนรายวิชา</p> <br>
    <p>2. เลือกรายวิชาที่ต้องการจะถอน</p><br>
    <p>3. กดปุ่มยืนยัน</p><br>
</div>
<div>
    <h3>ตรวจสอบโคต้า</h3>
    <p>1. กดปุ่ม ผลการขอโคต้า</p> <br>
    <p>2. เลือกรายวิชาที่ต้องการจะถอน</p><br>
    <p>3. กดปุ่มยืนยัน</p><br>
</div>



<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>
</body>

<style>
    body{font-family: 'K2D', sans-serif;}
    h1{border-color: white;
        border: 4px solid white;
        border-radius: 20px;
        text-align: center;
        width: 650px;
        height: 60px;
        border-radius: 2}
    div{
        color: white;
        border: transform;
    }
    p{
        font-size: 20 px;
    }
    .back {
        background: rgba(255, 255, 255, 0);
        font-family: 'K2D', sans-serif;
        text-align: center;
        width: 300px;
        height: 50px;
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        cursor: pointer;
        padding: 0px;
        margin-top: 40px;
    }
</style>