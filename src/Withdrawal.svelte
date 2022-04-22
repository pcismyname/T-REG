<script>
      import { account,accounts,courses,mode} from './stores.js'

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

function cancel(value){
  if(confirm("Would you like to cancel your quota?")){
    $accounts[$account].course = arrayRemove($accounts[$account].course,value);
    $courses[value].quata -= 1;
  }
  
}


</script>

<body>

<h1>เพิกถอนการขอโควต้า</h1>
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
          <td><p style="text-transform: uppercase;">{$courses[item].code}</p></td>
          <td>{$courses[item].sub}</td>
          <td>{$courses[item].credit}</td>
          <td>{$courses[item].day}</td>
          <td>{$courses[item].time}</td>
          <td><button id="cancle" on:click={cancel(item)} class="cancle">ถอนโควต้า</button></td>
        </tr>
        {/if}
    {/each}
    </table>
    </div>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>
</body>


<style>
  body{font-family: 'K2D', sans-serif;}
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
        top: 7%;
        right: 5% ;
        transform: translate(-50%, -70%);
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: 'K2D', sans-serif;
        cursor: pointer;
    }

  .cancle {
  background-color: rgba(219, 90, 90, 1);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
  border-color: white;

}
</style>





