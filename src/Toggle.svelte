<script>
	import { temp,courses } from './stores.js';
	export let type = 'checkbox'
	export let checked = false
	export let group = ''
	export let value = void 0


	$: type === 'radio' && updateRadio(group, value)

	
	function updateRadio(group, value) {
		checked = group === value
	}	

	function no_quata(){
			alert('no seat left!')
	}

	
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
	{#if type === 'radio'}
		{#if $courses[value].quata == $courses[value].max}
			<input
			type="radio"
			class="collapsed"
			on:click = {no_quata}
			value={value}
		/>
		{:else}
			<input
				type="radio"
				class="collapsed"
				on:clicks
				bind:group={group}
				value={value}
			/>
		{/if}

		
	{/if}
  <slot checked={checked}></slot>
</label>

<style>
	label {
		display: flex;
		align-items: center;
		cursor: pointer;	
	}
	label > :global(*) {
		pointer-events: none;
	}
	input {
		display: none;
	}

</style>