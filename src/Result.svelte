<script>
    import { account,accounts,courses,mode, temp } from './stores.js'

    var keys = Object.keys($courses)

</script>

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

  <button on:click={()=>$mode='menu'}>BACK TO MENU</button>


