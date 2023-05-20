<script>
    import BsX from 'svelte-icons-pack/bs/BsX';
    export let setVisible;
    export let Icon;
    import {fly} from 'svelte/transition'
</script>

<aside class="flex justify-end" >
    <div class="fixed w-10/12 md:w-1/4 top-0 ml-auto bg-gray-700 h-full drop-shadow-xl md:z-10 z-20" 
         transition:fly="{{x:400, delay:150, duration:350, opacity:100}}">
        <div on:click={setVisible} on:keydown={setVisible}>
            <div class="flex justify-center items-center p-4">
                <div class="ml-auto rounded-3xl text-gray-50 hover-btn">
                    <Icon src={BsX} size="24" className="m-1"/>
                </div>
            </div>
        </div>
        <ul class="my-5">
            <a href="/tentang">
                <li class="sidebar-items">Tentang</li>
            </a>
            <a href="/blog">
                <li class="sidebar-items">Blog Posts</li>
            </a>
            <a href="/#courses">
                <li class="sidebar-items">Tutorial</li>
            </a>
        </ul>
    </div>
</aside>