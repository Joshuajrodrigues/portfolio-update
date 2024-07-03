<script>
	export let data;
</script>

<h1>Welcome {!!data.visited ? 'back' : ''} to my portfolio</h1>

<button
	on:click={async () => {
		const response = await fetch('/auth', {
			method: 'POST',
			body: JSON.stringify({ name: 'joshua' }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log(response);
	}}
>
	insert</button
>
