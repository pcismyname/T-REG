<script>
    import { account,accounts,mode } from './stores.js';
  </script>


<body>
 
  <h1>Welcome!</h1>
  <div class="user"> {$accounts[$account].name}</div>
  <span class = 'btn'>
    <button  on:click={()=>$mode='regist'} class = 'btn'>ขอโควต้ารายวิชา</button><br>
    <button  on:click={()=>$mode='result'} class = 'btn'>ผลการขอโควต้า</button><br>
    <button  on:click={()=>$mode='complete'} class = 'btn'>คู่มือการขอโควต้า</button><br>
    <button  on:click={()=>$mode='statistic'} class = 'btn'> สถิติการขอโควต้า</button><br>
    <button  on:click={()=>$mode='detail'} class = 'btn'>รายละเอียดรายวิชา</button><br>
    <button  on:click={()=>$mode='withdraw'} class = 'btn5'>เพิกถอนการขอโควต้า</button><br>
  </span>

</body>

<style>
  :root {
    font-family: 'K2D', sans-serif;
      
  }
  body {
    font-family: 'K2D', sans-serif;
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
    margin-left: auto;
    margin-right: auto;
    
  }
  .user {
    color: white;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin-left: auto;
    margin-right: auto;
    
  }
  button{
    padding: 10px 20px;
    width: 17rem;
    border : 0 px ;
    border-radius: 20px;
    border-color:white;
    background : white;
    margin: 5px;
    color:rgba(174, 186, 248, 1);
    text-align: center;
    font-size: 20px;
  }

  .btn5{
    color:#DEBAFE;
    background: #9197D6;
    border-color:#9197D6;
  }
  
  .btn5{
    padding: 10px 20px;
    width: 17rem;
    border : 0 px ;
    border-radius: 20px;
    border-color:rgba(145, 151, 214, 1);
    background : rgba(145, 151, 214, 1);
    margin: 5px;
    color:rgba(222, 186, 254, 1);
    text-align: center;
    font-size: 20px;
  }
</style>


