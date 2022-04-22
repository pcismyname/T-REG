<script>
    import { courses,mode} from './stores.js'
    
    var keys = Object.keys($courses);

    function submit(){
      $mode = 'menu_admin';
      alert('You have successfully modify max quata');
    }
</script>

<body>
<h1>เปลี่ยนแปลงจำนวนโควต้า</h1>
<div class="tableConfig">
  <table class="main_table">
    <tr>
      <th>รหัสวิชา</th>
      <th>ชื่อวิชา</th>
      <th>section</th>
      <th>โควต้าสูงสุด</th>
      <th>เพิ่ม/ลด โควต้า</th>
      <th></th>
  </tr>
    {#each keys as key}
      <tr>
        <td><p style="text-transform: uppercase;">{$courses[key].code}</p></td>
        <td>{$courses[key].sub}</td>
        <td>{$courses[key].sec}</td>
        <td>{$courses[key].max}</td>
        <td><input type=number bind:value={$courses[key].max}></td>
        <td></td>
      </tr>
  {/each}
  </table>
  </div>
<button on:click={()=>$mode='menu_admin'} class="back">BACK TO MENU</button>
<button on:click={submit} class ="submit">ยืนยันการเพิ่ม/ลดโควต้า</button>

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

  input {
    background: none;
    border: 4px solid white;
    border-radius: 20px;
    padding: 10px 25px;
    margin: 5px 0;
    width: 300px;
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
