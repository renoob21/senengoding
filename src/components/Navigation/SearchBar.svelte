<script>
    import BsSearch from 'svelte-icons-pack/bs/BsSearch';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsArrowRightCircle from 'svelte-icons-pack/bs/BsArrowRightCircle';
    let serachQuery = "";
    $: query = encodeURI(serachQuery);
</script>

<div class="p-1 flex w-full">            
    <Icon src={BsSearch} size="20" className="m-1 text-gray-800"/>
    <input class="px-1 rounded-md w-full outline-none text-gray-800" bind:value={serachQuery} placeholder="Pencarian ..." type="text"/>
    {#if serachQuery}
    <a href={`/search?query=${query}`} class="font-bold text-lg">
        <Icon src={BsArrowRightCircle} size="20" className="text-gray-800 m-1"/>
    </a>
    {/if}
</div>

