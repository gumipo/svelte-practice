<script lang="ts">
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";

	//tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	const tabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<p>poll list component goes here</p>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm />
	{/if}
</main>
<Footer />
