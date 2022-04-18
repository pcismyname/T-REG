<script>
      import { account,accounts,courses,mode} from './stores.js'

      var keys = Object.keys($courses)

</script>


<body>
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
        <tr>
          <td>{$courses[item].code}</td>
          <td>{$courses[item].sub}</td>
          <td>{$courses[item].credit}</td>
          <td>{$courses[item].day}</td>
          <td>{$courses[item].time}</td>
          <td><button>ถอนรายวิชา</button></td>
        </tr>
        {/if}
    {/each}
    </table>
    </div>

  </body>


  <style>


  </style>





