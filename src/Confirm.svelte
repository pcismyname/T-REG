<script>
  import { account,accounts,courses,mode, temp } from './stores.js'


  function submit(){
    for(let i = 0; i < $accounts[$account].course.length; i++){
      for(let j = 0; j<$temp.length; j++){
        if($temp[j] != ''){
          if($courses[$temp[j]].code == $accounts[$account].course[i].slice(0,5)){
            alert('You have selected the same subject' +"\nPlease cancle your current quata.");
            return;
          }
        }
      }
    }

    $mode = 'complete';
    $accounts[$account].course = $accounts[$account].course.concat($temp);
    for (let i=0; i<$temp.length ;i++){
      if($temp[i] != ''){      
        $courses[$temp[i]].quata += 1;
      }
    }
    clear();
  }

  function clear(){
    $temp = [];
  }

  function back(){
    $mode = 'regist';
    clear();
  }

</script>
<body>
<h1>ยืนยันการขอโควต้า</h1>

<div class="tableConfig">
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
        <td><p style="text-transform: uppercase;">{$courses[item].code}</p></td>
        <td>{$courses[item].sub}</td>
        <td>{$courses[item].credit}</td>
        <td>{$courses[item].day}</td>
        <td>{$courses[item].time}</td>
      </tr>
    {/if}
    {/each}
</table>
</div>

<button on:click={submit} class ="submit">ยืนยันการขอโควต้า</button>
<button on:click={back} class="back">BACK TO MENU</button>
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

    .submit{
        background: rgba(255, 255, 255, 0);
        width: 15rem;
        height: 4rem;
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: 'K2D', sans-serif;
        font-size: 20px;
        cursor: pointer;
        margin-top: 60px;
        position: absolute;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>