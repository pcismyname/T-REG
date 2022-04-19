<script> 
        import {mode} from './stores.js';
</script>

<body>
<center><h1>รายละเอียดรายวิชา</h1></center>

<div class="box1">
    <button on:click={()=>$mode='detail'}><h2>SF210</h2><br>Programming skill development 1</button>
    <button on:click={()=>$mode='detail'}><h2>SF220</h2><br>Introduction to software engineering</button>
    <button on:click={()=>$mode='detail'}><h2>SF230</h2><br>Linear Algebra</button>
</div>
<div class="box2">
    <button on:click={()=>$mode='detail'}><h2>MA111</h2><br>Fundamentals of Calculus</button>
    <button on:click={()=>$mode='detail'}><h2>TU105</h2><br>Communication skills in English</button>
    <button on:click={()=>$mode='detail'}><h2>TU100</h2><br>Civic Engagement</button>
</div>

<center>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>
</center>

</body>

<style>
    body{font-family: 'K2D', sans-serif;}

    button{
        width: 400px;
        height: 150px;
        border-radius: 20px;
        padding: 40px;
        font-size: 18px;
        color: rgba(101, 99, 186, 1);
        text-align: left;
        margin-top: 15px;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 15px;
    }

    h1{
        color: rgba(101, 99, 186, 1);
        padding-bottom: 40px;
    }

    h2{
        padding-left: 0px;
        margin-top: -10px;
        margin-bottom: -15px;
        font-size: 40px;
    }

    .box1{
        margin-left: 7.5%;
    }

    .box2{
        margin-left: 7.5%;
    }

    .back {
        background: rgba(255, 255, 255, 0);
        font-family: 'K2D', sans-serif;
        text-align: center;
        width: 300px;
        height: 50px;
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        cursor: pointer;
        padding: 0px;
        margin-top: 40px;
    }
</style>