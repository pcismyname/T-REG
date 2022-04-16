<script>
  import { account,accounts,courses,mode, temp } from './stores.js'


  function submit(){
    $mode = 'complete';
    $accounts[$account].course = [...$temp];
    $temp = [];
    
  }

</script>

<h1>ยืนยันการลงทะเบียน</h1>

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
        {$courses[item].quata -= 1}
      </tr>
    {/if}
    {/each}
</table>

<button on:click={submit} >ยืนยันการลงทะเบียน</button>
<button on:click={()=>$mode='regist'}>BACK TO MENU</button>

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