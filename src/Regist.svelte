<script>
  import { account,accounts,mode } from './stores.js';
  import { createToggle } from "./toggle.js"
  import { fade } from 'svelte/transition';

  let current = '';
  let q_sf210 = 100;
  let q_sf220 = 100;
  const display1 = createToggle(false)
  const display2 = createToggle(false)
  const display3 = createToggle(false)
  </script>
  

<h1>ลงทะเบียนเรียน</h1> 
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div class = "tableConfig">
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>โควต้า (ที่นั่งคงเหลือ)</th>
        <th>หน่วยกิต</th>
    </tr>

    <tr class="main_row"  on:click={display1.toggle}>
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPEMENT 1 </td>
      <td>{q_sf210}</td>
      <td>3.0</td>
    </tr>

    {#if $display1 }
    <td colspan="4" transition:fade>
    <div class="sub_table" class:selected="{current === 'sf210'}">
      
      <tr >
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
        <td > 35/100</td><td><button   class="regist"> ลงทะเบียน </button></td>
      </tr>
      <tr>
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
        <td> 35/100 </td><td><button on:click="{() => current = 'check'}" class="regist">ลงทะเบียน</button></td>
      </tr>
      <tr>
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
        <td> 35/100 </td><td><button on:click="{() => current = 'check'}" class="regist">ลงทะเบียน</button></td>
      </tr>
    </div>
    
  </td>
  {/if}


    <tr  class="main_row" on:click={display2.toggle}>
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEER</td>
      <td>100</td>
      <td>3.0</td>
    </tr>

    {#if $display2}
    <td colspan="4" transition:fade>
      <div class="sub_table" class:selected="{current === 'sf220'}">
        <tr class="sub_row" >
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
          <td > 35/100</td><td><button  class="regist"> ลงทะเบียน </button></td>
        </tr>
        <tr class="sub_row">
          <td> Section 740001 </td><td>Tue 13.30-16.30</td><td>Prof.Phonsapsin</td>
          <td> 35/100 </td><td><button class="regist">ลงทะเบียน</button></td>
        </tr>
        <tr class="sub_row">
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Tawan</td>
          <td> 21/100 </td><td><button class="regist">ลงทะเบียน</button></td>
        </tr>
      </div>
    </td>
    {/if}

    <tr  class="main_row" on:click={display3.toggle}>
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>100</td>
      <td>3.0</td>
    </tr>
  {#if $display3}
    <td colspan="4" transition:fade>
      <div class="sub_table" >
        <tr class="sub_row">
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
          <td > 35/100</td><td><button  class="regist"> ลงทะเบียน </button></td>
        </tr>
        <tr class="sub_row">
          <td> Section 740001 </td><td>Tue 13.30-16.30</td><td>Prof.Phonsapsin</td>
          <td> 35/100 </td><td><button class="regist">ลงทะเบียน</button></td>
        </tr>
        <tr class="sub_row">
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Tawan</td>
          <td> 21/100 </td><td><button class="regist">ลงทะเบียน</button></td>
        </tr>
      </div>
  </td>
{/if}

</table>
<button on:click={()=>$mode='menu'}  class="complete">ยืนยันการลงทะเบียน</button>
</div >





<style>
    .tableConfig{
      padding: 20px;
      border: 4px solid white;
      border-radius: 20px;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }

    .main_table { 
        border-collapse: collapse; 
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        color: white;
        width: 100%;
        
    }

    .main_table:nth-child(2){ border: solid thin; }
    .main_table:nth-child(4) { border: solid thin; }
    .main_table:nth-child(3){ border: solid thin; }

    .sub_table{
      position: relative;
      background: white;
      border-radius: 10px;
      color: darkblue;
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
    }

    th{
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
    }
    
    td{
      text-align: center;
      padding-left: 22px;
      padding-right: 22px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  

    .regist{
      background: #E4BAFF;
      border: none;
      border-radius: 15px;
      color: white;
      width: 160px;
    }
    
    h1{
      margin-left: 100px;
      color: white;
      padding: 20px;
    }
   
    .back {
        background: rgba(255, 255, 255, 0);
        width: 10rem;
        height: 3rem;
        position: absolute;
        top: 28%;
        right: 5%;
        transform: translate(-50%, -70%);
        border-radius: 10px;
        border: 4px solid white;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }

    .complete{
      background: rgba(255, 255, 255, 0);
        width: 15rem;
        height: 4rem;
        border-radius: 10px;
        border: 4px solid white;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        cursor: pointer;
        margin-top:30px;
        margin-left: 412px;
        
        
        
    }

    
    
   
</style>
