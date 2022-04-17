<script>
    import { account,accounts,courses,mode, temp } from './stores.js'

    var keys = Object.keys($courses)

</script>

<h1>ผลการลงทะเบียน</h1>

<div class="tableConfig">
<table class="main_table">
    <tr>
      <th>รหัสวิชา</th>
      <th>ชื่อวิชา</th>
      <th>หน่วยกิต</th>
      <th>วัน</th>
      <th>เวลา</th>

  </tr>
    {#each $accounts[$account].course as item}
        {#if item != ''}
            {#each keys as sub}
                {#if sub == item}
                    <tr>
                        <td>{$courses[item].code}</td>
                        <td>{$courses[item].sub}</td>
                        <td>{$courses[item].credit}</td>
                        <td>{$courses[item].day}</td>
                        <td>{$courses[item].time}</td>
                    </tr>
                {/if}
            {/each}
        {/if}
    {/each}
  </table>
</div>
  <button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>


<style>

    h1{
      margin-left: 100px;
      color: white;
      padding: 20px;
    }

    .main_table{
      border-collapse: collapse; 
      border-spacing: 20px 10px;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
      color: white;
      width: 100%;
    }

    .tableConfig{
      padding: 20px;
      border: 5px solid white;
      border-radius: 50px;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
      
    }

    th{
      color: rgba(101, 99, 186, 1);
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
    }

    td{
      text-align: center;
      padding-left: 29px;
      padding-right: 39px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .back {
        background: rgba(255, 255, 255, 0);
        width: 10rem;
        height: 3rem;
        position: absolute;
        top: 28%;
        right: 5%;
        transform: translate(-50%, -70%);
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
</style>