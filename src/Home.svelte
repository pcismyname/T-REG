<script>
    import { account,accounts,mode } from './stores.js';
    
  </script>


<body>
 
  <h1>Welcome to </h1>
  <img class="logo" src="img\logo.png" alt="">
  <h2>Online quota request system <br> for University</h2>
  <img class="mascothome" src="img\mascothome.png" alt="">
  <span class = 'btn'>
    <button  on:click={()=>$mode='signin'} class = 'btn1'>Sign In</button><br>
  </span>

</body>

<style>
  :root {
    font-family: 'Itim', cursive;      
  }
  body {
    font-family: 'K2D', sans-serif;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  h1 {text-align: left;
    font-weight: 600;
    font-size: 4rem;
    line-height: 1.1;
    color: #FFFFFF;
    padding-left: 20rem;

  }
  h2 {text-align: left;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.1;
    color: #FFFFFF;
    padding-left: 20rem;

  }

  button{
    padding: 20px 50px;
    border : 0 px ;
    border-radius: 15px;
    border-color:black;
    background-color : black;
    margin: 5px;
    color: white;
    text-align: left;
    font-family: 'K2D', sans-serif;
    font-size: 1.30rem;
    position: absolute;
    left: 20.7rem;
    top: 350px;
  }

  .logo{
    position: relative;
    top: -30px;
    left: 19.5rem;
  }
  .mascothome{
    position: absolute;
    width: 450px;
    height: 450px;
    left: 800px;
    top: 0px;

  }
  
</style>


