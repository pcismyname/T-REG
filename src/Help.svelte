<script> 
    import { account,accounts,mode } from './stores.js';
    let src = '/img/pic.png';
</script>

<body>
    <div class="box">Do you neeed any help?<br>click here!<br>We will help you.</div>
    <div><img {src}  class = "photo" alt=""></div>
    <button  on:click={()=>$mode='Contact'}>Contact Us</button>
</body>

<style>
    body{font-family: 'K2D', sans-serif;}

    .box{
        margin-left: 25%;
        font-size: 45px;
        color: white;
        text-align: left ;
    }

    button{
        margin-left: 25%;
        margin-top: 20px;
        color: rgba(101, 99, 186, 1);
        width: 500px;
        padding: 10px 25px;
        border-radius: 20px;
        font-size: 20px;
    }
    
    .photo{
        height: 500px;
        position: absolute;
        top: -8%;
        left: 40% ;
        background-size: cover;
        display: inline-block;
    }
    
</style>