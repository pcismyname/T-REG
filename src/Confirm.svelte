<script>
  import { account,accounts,courses,mode, temp } from './stores.js'

  let data = JSON.stringify($temp)

  function submit(){
    $accounts[account].course = $temp
    $mode = 'menu'
  }

</script>




<h1>ยืนยันการลงทะเบียน</h1>
<button on:click={()=>$mode='home'} class="back">BACK TO MENU</button>


<table class="main_table">
  <tr>
    <th>รหัสวิชา</th>
    <th>ชื่อวิชา</th>
    <th>หน่วยกิต</th>
    <th>วัน</th>
    <th>เวลา</th>
</tr>
  {#each $temp as item}
    {#if item != ''}
      <tr>
        <td>{$courses[item].code}</td>
        <td>{$courses[item].sub}</td>
        <td>{$courses[item].credit}</td>
        <td>{$courses[item].day}</td>
        <td>{$courses[item].time}</td>
      </tr>
    {/if}
    {/each}
</table>







<style>
 
    .main_table { 
        border-collapse: collapse; 
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        color: white;
        width: 100%;
        
    }

</style>