<script>
  import { courses ,mode, temp } from './stores.js'
  import { createToggle } from "./toggle.js"
  import { fade } from 'svelte/transition'
  import Toggle from './Toggle.svelte'

  
  const display1 = createToggle(false);
  const display2 = createToggle(false);
  const display3 = createToggle(false);

	let selectedRadio_1 = '';
  let selectedRadio_2 = '';
  let selectedRadio_3 = '';

 


  function submit(){
    $mode = 'confirm';
    $temp = [...$temp, selectedRadio_1];
    $temp = [...$temp, selectedRadio_2];
    $temp = [...$temp, selectedRadio_3];
    
  }

    

</script>
<!-- svelte-ignore non-top-level-reactive-declaration -->

<h1>ลงทะเบียนเรียน</h1> 
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div class = "tableConfig">
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>โควต้า (ที่นั่งคงเหลือ)</th>
        <th>หน่วยกิต</th>
    </tr>
    
    <tr class="main_row"  on:click={display1.toggle}>
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPEMENT 1 </td>
      <td>{$courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata}</td>
      <td>3.0</td>
    </tr>

    {#if $display1 }
    <td colspan="4" transition:fade>
    <div class="sub_table" >
      <tr>
        <td>Section {$courses['sf210_1'].sec}</td><td>{$courses['sf210_1'].day} {$courses['sf210_1'].time}</td>
        <td>{$courses['sf210_1'].name} {$courses['sf210_1'].surename}
        </td><td >{$courses['sf210_1'].quata}/40</td>
        <td> 
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_1'} let:checked={checked}>
            <button  class="regist" class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
          </Toggle></td>
      </tr>
      <tr>
        <td>Section {$courses['sf210_2'].sec} </td><td>{$courses['sf210_2'].day} {$courses['sf210_2'].time}</td>
        <td>{$courses['sf210_2'].name} {$courses['sf210_2'].surename}</td>
        <td> {$courses['sf210_2'].quata}/40 </td><td>
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_2'} let:checked={checked}>
          <button class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
        </Toggle></td>
      </tr>
      <tr>
        <td>Section {$courses['sf210_3'].sec} </td><td>{$courses['sf210_3'].day} {$courses['sf210_3'].time}</td>
        <td>{$courses['sf210_3'].name} {$courses['sf210_3'].surename}</td>
        <td> {$courses['sf210_3'].quata}/40 </td><td>
          <Toggle type='radio' bind:group={selectedRadio_1} value={'sf210_3'} let:checked={checked}>
          <button  class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
        </Toggle></td>
      </tr>
    </div>
  </td>
  {/if}


    <tr  class="main_row" on:click={display2.toggle}>
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEER</td>
      <td>{$courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata}</td>
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
              <button  class="regist" class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
            </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['sf220_2'].sec} </td><td>{$courses['sf220_2'].day}<br>{$courses['sf220_2'].time}</td>
          <td>{$courses['sf220_2'].name} {$courses['sf220_2'].surename}</td>
          <td>  {$courses['sf220_2'].quata}/50 </td><td>
            <Toggle type='radio' bind:group={selectedRadio_2} value={'sf220_2'} let:checked={checked}>
            <button class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
          </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['sf220_3'].sec} </td><td>{$courses['sf220_3'].day}<br>{$courses['sf220_3'].time}</td>
          <td>{$courses['sf220_3'].name} {$courses['sf220_3'].surename}</td>
          <td>{$courses['sf220_3'].quata}/50</td><td>
            <Toggle type='radio' bind:group={selectedRadio_2} value={'sf220_3'} let:checked={checked}>
            <button  class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
          </Toggle></td>
        </tr>
      </div>
    </td>
    {/if}

    <tr  class="main_row" on:click={display3.toggle}>
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>{$courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata}</td>
      <td>3.0</td>
    </tr>
  {#if $display3}
    <td colspan="4" transition:fade>
      <div class="sub_table" >
        <tr >
          <td>Section<br>{$courses['tu100_1'].sec}</td><td>{$courses['tu100_1'].day}<br>{$courses['tu100_1'].time}</td>
          <td>{$courses['tu100_1'].name} {$courses['tu100_1'].surename}</td><td > {$courses['tu100_1'].quata}/60</td>
          <td> 
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_1'} let:checked={checked}>
              <button  class="regist" class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
            </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['tu100_2'].sec}</td><td>{$courses['tu100_2'].day}<br>{$courses['tu100_2'].time}</td>
          <td>{$courses['tu100_2'].name} {$courses['tu100_2'].surename}</td><td > {$courses['tu100_2'].quata}/60</td>
          <td>
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_2'} let:checked={checked}>
            <button class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
          </Toggle></td>
        </tr>
        <tr>
          <td>Section<br>{$courses['tu100_3'].sec}</td><td>{$courses['tu100_3'].day}<br>{$courses['tu100_3'].time}</td>
          <td>{$courses['tu100_3'].name} {$courses['tu100_3'].surename}</td><td > {$courses['tu100_3'].quata}/60</td>
          <td>
            <Toggle type='radio' bind:group={selectedRadio_3} value={'tu100_3'} let:checked={checked}>
            <button  class="regist"  class:registed={checked}>{checked ? 'ยกเลิก' : 'ลงทะเบียน'}</button>
          </Toggle></td>
        </tr>
      </div>
  </td>
{/if}
</table>

<button on:click={submit} class="complete">ยืนยันการลงทะเบียน</button>
</div >




<style>
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
      padding-left: 29px;
      padding-right: 39px;
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
        top: 28%;
        right: 5%;
        transform: translate(-50%, -70%);
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }

    .complete{
      background: rgba(255, 255, 255, 0);
        width: 15rem;
        height: 4rem;
        border-radius: 20px;
        border: 4px solid white;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        cursor: pointer;
        margin-top:20px;
        margin-left: 412px;
    }
</style>
