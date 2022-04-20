<script>
  import { courses ,mode, temp } from './stores.js'
	import { scaleLinear } from 'd3-scale';

	const points = [
		{ subject: 'SF210', rate: ($courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata) },
		{ subject: 'SF220', rate: ($courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata) },
		{ subject: 'TU100', rate: ($courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata) },
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



<center><h1>สถิติการขอโควต้า</h1></center>
<button on:click={()=>$mode='menu_admin'} class="back">BACK TO MENU</button>

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

<br>

<body>
	<center>
	<div class="box"><h2>SF210</h2><br>จำนวนผู้ขอโควต้า {($courses['sf210_1'].quata + $courses['sf210_2'].quata + $courses['sf210_3'].quata)} คน </div>
	<div class="box"><h2>SF220</h2><br>จำนวนผู้ขอโควต้า {($courses['sf220_1'].quata + $courses['sf220_2'].quata + $courses['sf220_3'].quata)} คน </div>
	<div class="box"><h2>TU100</h2><br>จำนวนผู้ขอโควต้า {($courses['tu100_1'].quata + $courses['tu100_2'].quata + $courses['tu100_3'].quata)} คน </div>
	</center>
</body>

<style>
    body{font-family: 'K2D', sans-serif;}

    h1{
      color: rgba(101, 99, 186, 1);
      font-family: 'K2D', sans-serif;
    }

	h2{
		font-size: 35px;
		color: rgba(101, 99, 186, 1);
		margin-bottom: -20px;
	}

	.box{
		width: 330px;
		height: 125px;
		background-color: white;
		border-radius: 20px;
      	color: rgba(0, 148, 255, 1);
		font-size: 23px;
		display: inline-block;
		text-align: left;
		margin-left: 15px;
		margin-right: 15px;
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
        font-family: 'K2D', sans-serif;
        cursor: pointer;
    }
    .chart {
		width: 100%;
		max-width: 700px;
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
		fill: #ffa0df;
		stroke: none;
		opacity: 1;
	}

</style>
