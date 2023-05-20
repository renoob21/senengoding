<script>
    import Icon from "svelte-icons-pack";
    export let src;
    export let topic;
    export let explain;
</script>

<div class="flex flex-col text-center content-center items-center w-full md:w-1/4 m-5 text-gray-50 p-2 px-3">
    <div class="rounded-3xl p-1 bg-red-400">
        <Icon src={src} size="40" className="p-2" />
    </div>
    <p class="my-2 font-bold text-xl">{topic}</p>
    <p class="text-sm">{explain}</p>
</div>