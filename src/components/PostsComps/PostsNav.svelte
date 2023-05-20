<script>
    export let next;
    export let prev;
    import "./PostsNav.css"
</script>

<div class="flex mt-32 mb-10">
    {#if prev}
    <a class="post-nav" href={prev.slug}>
        <div >
            <div>
                &larr;
            </div>
            {prev.title}
        </div>
        </a>
    {/if}
    {#if next}
    <a class="ml-auto post-nav text-right" href={next.slug}>
        <div >
            <div>
                &rarr;
            </div>
            {next.title}
        </div>
    </a>
    {/if}
</div>