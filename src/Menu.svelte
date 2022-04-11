<script>
    import { account,accounts,mode } from './stores.js';
  </script>


<body>
 
  <h1>Welcome!</h1>
  <div class="user"> {$accounts[$account].name}</div>
  <span class = 'btn'>
    <button  on:click={()=>$mode='regist'} class = 'btn1'>ลงทะเบียนเรียน</button><br>
    <button  on:click={()=>$mode='complete'} class = 'btn2'>ผลการลงทะเบียน</button><br>
    <button  on:click={()=>$mode='complete'} class = 'btn3'>คู่มือการลงทะเบียน</button><br>
    <button  on:click={()=>$mode='complete'} class = 'btn4'> ตารางเรียน</button><br>
    <button  on:click={()=>$mode='complete'} class = 'btn5'>ถอนรายวิชา</button><br>
  </span>

</body>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      
  }
  body {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 15rem;
  }
  .user {
    color: white;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 15rem;
  }
  button{
    padding: 20px 50px;
    width: 17rem;
    border : 0 px ;
    border-radius: 15px;
    border-color:white;
    background : transparent;
    margin: 5px;
    
    color: white;
    text-align: center;
    font-size: 1.10rem;
  }
  
</style>


