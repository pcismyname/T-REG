<script>
  let current = '';
  
</script>

<h1>ลงทะเบียนเรียน</h1>
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>โควต้า (ที่นั่งคงเหลือ)</th>
        <th>หน่วยกิต</th>
    </tr>

    <tr  on:click="{() => current = 'sf210'}">
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPEMENT 1 </td>
      <td>100</td>
      <td>3.0</td>
    </tr>
    <ul class="sub_table" class:selected="{current === 'sf210'}">
      <li >
          Section 760001 Mon 9.30-12.30 Prof.Weerachai 35/100
      </li>
      <li>
        Section 740001 Tue 13.30-16.30 Prof.Phonsapsin เต็ม
      </li> <li>
      Section 760001 Mon 9.30-12.30 Prof.Tawan 21/100

      </li >
</ul>
    <tr on:click="{() => current = 'sf220'}">
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEER</td>
      <td>100</td>
      <td>3.0</td>
    </tr>

    <ul class="sub_table" class:selected="{current === 'sf220'}">
      <li> Section 760001 Mon 9.30-12.30 Prof.Weerachai 35/100</li>  
      <li>Section 740001 Tue 13.30-16.30 Prof.Phonsapsin เต็ม </li> 
      <li>Section 760001 Mon 9.30-12.30 Prof.Tawan 21/100</li>
    </ul>

    <tr on:click="{() => current = 'tu100'}">
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>100</td>
      <td>3.0</td>
    </tr>
    <ul class="sub_table" class:selected="{current === 'tu100'}">
      <li>
          Section 760001 Mon 9.30-12.30 Prof.Weerachai 35/100
      </li>
      <li>
        Section 740001 Tue 13.30-16.30 Prof.Phonsapsin เต็ม
      </li> <li>
      Section 760001 Mon 9.30-12.30 Prof.Tawan 21/100
      </li>
</ul>
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
      display: none;
    }
    .selected {
      display: inline;
      list-style: none;

    }

</style>
