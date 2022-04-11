<script>
    import { account,accounts,mode } from './stores.js';
    import { createToggle } from "./toggle.js"
  let current = '';
  let q_sf210 = 100;
  const display1 = createToggle(false)
  const display2 = createToggle(false)
  const display3 = createToggle(false)



  </script>

<h1>ลงทะเบียนเรียน</h1>
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>โควต้า (ที่นั่งคงเหลือ)</th>
        <th>หน่วยกิต</th>
    </tr>

    <tr  on:click={display1.toggle}>
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPEMENT 1 </td>
      <td>{q_sf210}</td>
      <td>3.0</td>
    </tr>

    {#if $display1}
    <td colspan="4">
    <div class="sub_table" class:selected="{current === 'sf210'}">
      <tr class="sub_row" >
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai&nbsp&nbsp&nbsp&nbsp</td>
        <td > 35/100 &nbsp&nbsp&nbsp</td><td><button on:click="{() => current = 'check'}"  class="regist"> ลงทะเบียน </button></td>
      </tr>
      <tr class="sub_row">
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
        <td> 35/100 </td><td><button on:click="{() => current = 'check'}" class="regist">ลงทะเบียน</button></td>
      </tr>
      <tr class="sub_row">
        <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai</td>
        <td> 35/100 </td><td><button on:click="{() => current = 'check'}" class="regist">ลงทะเบียน</button></td>
      </tr>
    </div>
  </td>
  {/if}


    <tr on:click={display2.toggle}>
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEER</td>
      <td>100</td>
      <td>3.0</td>
    </tr>

    {#if $display2}
    <td colspan="4">
      <div class="sub_table" class:selected="{current === 'sf220'}">
        <tr class="sub_row" >
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai&nbsp&nbsp&nbsp&nbsp</td>
          <td > 35/100 &nbsp&nbsp&nbsp</td><td><button  class="regist"> ลงทะเบียน </button></td>
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

    <tr on:click={display3.toggle}>
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>100</td>
      <td>3.0</td>
    </tr>
  {#if $display3}
    <td colspan="4">
      <div class="sub_table" >
        <tr class="sub_row">
          <td> Section 760001 </td><td>Mon 9.30-12.30</td><td>Prof.Weerachai&nbsp&nbsp&nbsp&nbsp</td>
          <td > 35/100 &nbsp&nbsp&nbsp</td><td><button  class="regist"> ลงทะเบียน </button></td>
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


<style>
    .main_table { 
        border-collapse: collapse; 

    }
    .main_table:nth-child(2){ border: solid thin; }
    .main_table:nth-child(4) { border: solid thin; }
    .main_table:nth-child(3){ border: solid thin; }


    .sub_table{
      position: relative;
      background: white;
      border-radius: 15px;
    }

    .regist{
      background: rgb(106, 106, 188);
      border: none;
      border-radius: 15px;
      color: white;
    }
   
</style>
