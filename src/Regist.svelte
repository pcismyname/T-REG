<script>
  import { courses ,mode, temp } from './stores.js'
  import { createToggle } from "./toggle.js"
  import { fade } from 'svelte/transition'
  import Toggle from './Toggle.svelte'

  
  const display1 = createToggle(false);
  const display2 = createToggle(false);
  const display3 = createToggle(false);
  const display4 = createToggle(false);
  const display5 = createToggle(false);
  const display6 = createToggle(false);

	let selectedRadio_1 = '';
  let selectedRadio_2 = '';
  let selectedRadio_3 = '';
  let selectedRadio_4 = '';
  let selectedRadio_5 = '';
  let selectedRadio_6 = '';

 


  function submit(){
    $mode = 'confirm';
    $temp = [...$temp, selectedRadio_1];
    $temp = [...$temp, selectedRadio_2];
    $temp = [...$temp, selectedRadio_3];
    $temp = [...$temp, selectedRadio_4];
    $temp = [...$temp, selectedRadio_5];
    $temp = [...$temp, selectedRadio_6];
  }

    

</script>
<!-- svelte-ignore non-top-level-reactive-declaration -->
<body>
<h1>ขอโควต้ารายวิชา</h1>
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div class = "tableConfig">
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>โควต้า</th>
        <th>หน่วยกิต</th>
    </tr>
    
    <tr class="main_row"  on:click={display1.toggle}>
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPMENT 1 </td>
      <td>{$courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata}/{$courses['sf210_1'].max + $courses['sf210_2'].max + $courses['sf210_3'].max}</td>
      <td>3.0</td>
    </tr>

    {#if $display1 }
    <td colspan="4" transition:fade>
    <div class="sub_table" >
      <tr>
        <td>Section<br>{$courses['sf210_1'].sec}</td><td>{$courses['sf210_1'].day}<br>{$courses['sf210_1'].time}</td>
        <td>{$courses['sf210_1'].name} {$courses['sf210_1'].surename}
        </td><td >{$courses['sf210_1'].quata}/{$courses['sf210_1'].max}</td>
        <td> 
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_1'} let:checked={checked}>
            <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
          </Toggle></td>
      </tr>
      <tr>
        <td>Section<br>{$courses['sf210_2'].sec} </td><td>{$courses['sf210_2'].day}<br>{$courses['sf210_2'].time}</td>
        <td>{$courses['sf210_2'].name} {$courses['sf210_2'].surename}</td>
        <td> {$courses['sf210_2'].quata}/{$courses['sf210_2'].max} </td><td>
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_2'} let:checked={checked}>
          <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
        </Toggle></td>
      </tr>
      <tr>
        <td>Section<br>{$courses['sf210_3'].sec} </td><td>{$courses['sf210_3'].day}<br>{$courses['sf210_3'].time}</td>
        <td>{$courses['sf210_3'].name} {$courses['sf210_3'].surename}</td>
        <td> {$courses['sf210_3'].quata}/{$courses['sf210_2'].max}  </td><td>
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_3'} let:checked={checked}>
          <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
        </Toggle></td>
      </tr>
    </div>
  </td>
  {/if}


    <tr  class="main_row" on:click={display2.toggle}>
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEERING</td>
      <td>{$courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata}/{$courses['sf220_1'].max + $courses['sf220_2'].max + $courses['sf220_3'].max}</td>
      <td>3.0</td>
    </tr>

    {#if $display2}
    <td colspan="4" transition:fade>
      <div class="sub_table" >
        <tr >
          <td>Section<br>{$courses['sf220_1'].sec} </td><td>{$courses['sf220_1'].day}<br>{$courses['sf220_1'].time}</td>
          <td>{$courses['sf220_1'].name} {$courses['sf220_1'].surename}</td><td > {$courses['sf220_1'].quata}/50</td>
          <td> 
            <Toggle type='radio' bind:group={selectedRadio_2} value={'sf220_1'} let:checked={checked}>
              <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
            </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['sf220_2'].sec} </td><td>{$courses['sf220_2'].day}<br>{$courses['sf220_2'].time}</td>
          <td>{$courses['sf220_2'].name} {$courses['sf220_2'].surename}</td>
          <td>  {$courses['sf220_2'].quata}/50 </td><td>
            <Toggle type='radio' bind:group={selectedRadio_2} value={'sf220_2'} let:checked={checked}>
            <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
          </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['sf220_3'].sec} </td><td>{$courses['sf220_3'].day}<br>{$courses['sf220_3'].time}</td>
          <td>{$courses['sf220_3'].name} {$courses['sf220_3'].surename}</td>
          <td>{$courses['sf220_3'].quata}/50</td><td>
            <Toggle type='radio' bind:group={selectedRadio_2} value={'sf220_3'} let:checked={checked}>
            <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
          </Toggle></td>
        </tr>
      </div>
    </td>
    {/if}

    <tr  class="main_row" on:click={display3.toggle}>
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>{$courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata}/{$courses['tu100_1'].max + $courses['tu100_2'].max + $courses['tu100_3'].max}</td>
      <td>3.0</td>
    </tr>
  {#if $display3}
    <td colspan="4" transition:fade>
      <div class="sub_table" >
        <tr >
          <td>Section<br>{$courses['tu100_1'].sec}</td><td>{$courses['tu100_1'].day}<br>{$courses['tu100_1'].time}</td>
          <td>{$courses['tu100_1'].name} {$courses['tu100_1'].surename}</td><td > {$courses['tu100_1'].quata}/{$courses['tu100_1'].max}</td>
          <td> 
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_1'} let:checked={checked}>
              <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
            </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['tu100_2'].sec}</td><td>{$courses['tu100_2'].day}<br>{$courses['tu100_2'].time}</td>
          <td>{$courses['tu100_2'].name} {$courses['tu100_2'].surename}</td><td > {$courses['tu100_2'].quata}/{$courses['tu100_2'].max}</td>
          <td>
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_2'} let:checked={checked}>
            <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
          </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['tu100_3'].sec}</td><td>{$courses['tu100_3'].day}<br>{$courses['tu100_3'].time}</td>
          <td>{$courses['tu100_3'].name} {$courses['tu100_3'].surename}</td><td > {$courses['tu100_3'].quata}/{$courses['tu100_3'].max}</td>
          <td>
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_3'} let:checked={checked}>
            <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
          </Toggle></td>
        </tr>
      </div>
  </td>
{/if}
<tr class="main_row" on:click={display4.toggle}>
  <td>TU105</td>
  <td>COMMUNICATION SKILLS IN ENGLISH</td>
  <td>{$courses['tu105_1'].quata + $courses['tu105_2'].quata + $courses['tu105_3'].quata}/{$courses['tu100_1'].max + $courses['tu100_2'].max + $courses['tu100_3'].max}</td>
  <td>3.0</td>
</tr>

{#if $display4}
<td colspan="4" transition:fade>
  <div class="sub_table" >
    <tr >
      <td>Section<br>{$courses['tu105_1'].sec}</td><td>{$courses['tu105_1'].day}<br>{$courses['tu105_1'].time}</td>
      <td>{$courses['tu105_1'].name} {$courses['tu105_1'].surename}</td><td > {$courses['tu105_1'].quata}/{$courses['tu100_1'].max}</td>
      <td> 
        <Toggle type='radio' bind:group={selectedRadio_4} value={'tu105_1'} let:checked={checked}>
          <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
        </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['tu105_2'].sec}</td><td>{$courses['tu105_2'].day}<br>{$courses['tu105_2'].time}</td>
      <td>{$courses['tu105_2'].name} {$courses['tu105_2'].surename}</td><td > {$courses['tu105_2'].quata}/{$courses['tu105_2'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_4} value={'tu105_2'} let:checked={checked}>
        <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['tu105_3'].sec}</td><td>{$courses['tu105_3'].day}<br>{$courses['tu105_3'].time}</td>
      <td>{$courses['tu105_3'].name} {$courses['tu105_3'].surename}</td><td > {$courses['tu105_3'].quata}/{$courses['sf230_3'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_4} value={'tu105_3'} let:checked={checked}>
        <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
  </div>
</td>
{/if}

<tr class="main_row" on:click={display5.toggle}>
  <td>SF230</td>
  <td>LINEAR ALGEBRA</td>
  <td>{$courses['sf230_1'].quata + $courses['sf230_2'].quata + $courses['sf230_3'].quata}/{$courses['sf230_1'].max + $courses['sf230_2'].max + $courses['sf230_3'].max}</td>
  <td>3.0</td>
</tr>
{#if $display5}
<td colspan="4" transition:fade>
  <div class="sub_table" >
    <tr >
      <td>Section<br>{$courses['sf230_1'].sec}</td><td>{$courses['sf230_1'].day}<br>{$courses['sf230_1'].time}</td>
      <td>{$courses['sf230_1'].name} {$courses['sf230_1'].surename}</td><td > {$courses['sf230_1'].quata}/{$courses['tu100_1'].max}</td>
      <td> 
        <Toggle type='radio' bind:group={selectedRadio_5} value={'sf230_1'} let:checked={checked}>
          <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
        </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['sf230_2'].sec}</td><td>{$courses['sf230_2'].day}<br>{$courses['sf230_2'].time}</td>
      <td>{$courses['sf230_2'].name} {$courses['sf230_2'].surename}</td><td > {$courses['sf230_2'].quata}/{$courses['tu100_2'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_5} value={'sf230_2'} let:checked={checked}>
        <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['sf230_3'].sec}</td><td>{$courses['sf230_3'].day}<br>{$courses['sf230_3'].time}</td>
      <td>{$courses['sf230_3'].name} {$courses['sf230_3'].surename}</td><td > {$courses['sf230_3'].quata}/{$courses['sf230_3'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_5} value={'sf230_3'} let:checked={checked}>
        <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
  </div>
</td>
{/if}

<tr class="main_row" on:click={display6.toggle}>
  <td>MA111</td>
  <td>FUNDAMENTALS OF CALCULUS</td>
  <td>{$courses['ma111_1'].quata + $courses['ma111_2'].quata + $courses['ma111_3'].quata}/{$courses['ma111_1'].max + $courses['ma111_2'].max + $courses['ma111_3'].max}</td>
  <td>3.0</td>
</tr>
{#if $display6}
<td colspan="4" transition:fade>
  <div class="sub_table" >
    <tr >
      <td>Section<br>{$courses['ma111_1'].sec}</td><td>{$courses['ma111_1'].day}<br>{$courses['ma111_1'].time}</td>
      <td>{$courses['ma111_1'].name} {$courses['ma111_1'].surename}</td><td > {$courses['ma111_1'].quata}/{$courses['ma111_1'].max}</td>
      <td> 
        <Toggle type='radio' bind:group={selectedRadio_6} value={'ma111_1'} let:checked={checked}>
          <button  class="regist" class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
        </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['ma111_2'].sec}</td><td>{$courses['ma111_2'].day}<br>{$courses['ma111_2'].time}</td>
      <td>{$courses['ma111_2'].name} {$courses['ma111_2'].surename}</td><td > {$courses['ma111_2'].quata}/{$courses['ma111_2'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_6} value={'ma111_2'} let:checked={checked}>
        <button class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
    <tr>
      <td>Section<br>{$courses['ma111_3'].sec}</td><td>{$courses['ma111_3'].day}<br>{$courses['ma111_3'].time}</td>
      <td>{$courses['ma111_3'].name} {$courses['ma111_3'].surename}</td><td > {$courses['ma111_3'].quata}/{$courses['ma111_3'].max}</td>
      <td>
        <Toggle type='radio' bind:group={selectedRadio_6} value={'ma111_3'} let:checked={checked}>
        <button  class="regist"  class:registed={checked}>{checked ? 'จองแล้ว' : 'ขอโควต้า'}</button>
      </Toggle></td>
    </tr>
  </div>
</td>
{/if}
</table>

<button on:click={submit} class="complete">ยืนยันการขอโควต้า</button>
</div >
</body>





<style>
  body{font-family: 'K2D', sans-serif;}
    .tableConfig{
      padding: 20px;
      border: 5px solid white;
      border-radius: 50px;
      width: 75%;
      margin-left: auto;
      margin-right: auto; 
    }

    .main_table { 
      border-collapse: collapse; 
      border-spacing: 20px 10px;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
      color: white;
      width: 100%;  
    }

    .main_row {
      cursor: pointer;
    }

    .sub_table{
      position: relative;
      background: white;
      border-radius: 50px;
      color: rgba(0, 148, 255, 1);
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
    }

    th{
      color: rgba(101, 99, 186, 1);
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;  
    }
    
    td{
      text-align: center;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  

    .regist{
      background: #E4BAFF;
      border: none;
      border-radius: 15px;
      color: white;
      width: 160px;
      cursor: pointer;
    }

    .registed{
      background: #0094FF;
      border: none;
      border-radius: 15px;
      color: white;
      width: 160px;
      cursor: pointer;
    }
    
    h1{
      margin-left: 100px;
      color: white;
      padding: 20px;
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

    .complete{
      background: rgba(255, 255, 255, 0);
        width: 15rem;
        height: 4rem;
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: 'K2D', sans-serif;
        font-size: 20px;
        cursor: pointer;
        margin-top:20px;
        margin-left: 412px;
    }
</style>
