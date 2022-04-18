<script>
  import { courses ,mode, temp } from './stores.js'
	import { scaleLinear } from 'd3-scale';

	const points = [
		{ subject: 'SF210', rate: 120 - ($courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata) },
		{ subject: 'SF220', rate: 150 - ($courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata) },
		{ subject: 'TU100', rate: 180 - ($courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata) },
	];

	const xTicks = ['SF210','SF220','TU100'];
	const yTicks = [0, 50, 100, 150, 200];
	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 1000;
	let height = 400;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;

</script>
<!-- svelte-ignore non-top-level-reactive-declaration -->



<h1>สถิติการขอโควต้า</h1> 
<button on:click={()=>$mode='menu'} class="back">BACK TO MENU</button>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%"></line>
					<text y="-4">{tick} </text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each points as point, i}
				<g class="tick" transform="translate({xScale(i)},{height})">
					<text x="{barWidth/2}" y="-4">{width > 760 ? point.subject : formatMobile(point.subject)}</text>
				</g>
			{/each}
		</g>

		<g class='bars'>
			{#each points as point, i}
				<rect
					x="{xScale(i) + 2}"
					y="{yScale(point.rate)}"
					width="{barWidth - 4}"
					height="{yScale(0) - yScale(point.rate)}"
				></rect>
			{/each}
		</g>
	</svg>
</div>

<br><br><br>

<div class = "tableConfig">
<table class="main_table">
    <tr>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
        <th>จำนวนผู้ขอโควต้า</th>
    </tr>
    
    <tr class="main_row">
      <td>SF210</td>
      <td>PROGRAMMING SKILL DEVELOPEMENT 1 </td>
      <td>{120 - ($courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata)}</td>
    </tr>

    <tr  class="main_row">
      <td>SF220</td>
      <td>INTRODUCTION TO SOFTWARE ENGINEER</td>
      <td>{150 - ($courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata)}</td>
    </tr>

    <tr  class="main_row">
      <td>TU100</td>
      <td>CIVIC ENGAGEMENT</td>
      <td>{180 - ($courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata)}</td>
    </tr>

</table>
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
    .chart {
		    width: 100%;
		    max-width: 1000px;
		    margin: 0 auto;

	  }

	  svg {
		    position: relative;
		    width: 100%;
		    height: 400px;
	  }

	  .tick {
		    font-size: 1.1em;
		    font-weight: 200;
        color: white;
        background-color: white;
        
	  }

	  .tick line {
		    stroke: white;
		    stroke-dasharray: 2;
	  }

	  .tick text {
		    fill: white;
		    text-anchor: start;
	  }

	  .tick.tick-0 line {
		    stroke-dasharray: 0;
	  }

	  .x-axis .tick text {
		    text-anchor: middle;
        color: white;
	  }

	  .bars rect {
		    fill: #a11;
		    stroke: none;
		    opacity: 1;
	  }

</style>
