<script lang="ts">
    import type { Airport } from "$lib";
    export let data;

    export let form;

    const airports: Airport[] = data.airports;

    // create an array of days for display
    // include the name starting with Monday and a value of 1
    // end with Sunday as 7
    const days = Array.from({length: 7}, (_, i) => {
        return {
            name: new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date(0, 0, i + 1)),
            value: i + 1
        }
    });

    if(form && form.result) {
        console.log(form.result);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form method="POST" action="?/getDelay">

    <!-- create dropdown list of airports with id as key -->
    <select name="airport">
        {#each airports as airport (airport.id)}
            <option value={airport.id}>{airport.name}</option>
        {/each}
    </select>

    <!-- create dropdown list of days with value as key -->
    <select name="day">
        {#each days as day (day.value)}
            <option value={day.value}>{day.name}</option>
        {/each}
    </select>
    <br>

    <button type="submit">Find delay</button>
</form>

<br />

{#if form && form.result}
    <div>There is a {Math.round(form.result.delay * 100)}% chance of a delay. We are {Math.round(form.result.certainty * 100)}% sure.</div>
{/if}