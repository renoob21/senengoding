<script>
 export let title;
 export let shortDesc;
 export let pict;
 export let href;
</script>

<div class="flex content-center items-center md:p-9 mx-3 my-11 py-10 rounded-xl md:bg-white
          border-gray-100 hover:border-gray-200 drop-shadow-xl border-2">
    <div class="p-3">
        <h2 class="text-3xl font-bold">{title}</h2>
        <p>{shortDesc}</p>
        <a href={href}><button class="my-2 bg-blue-900 p-3 text-gray-50 font-bold rounded-sm hover:bg-sky-600">Mulai Sekarang!</button></a>
    </div>
    <div class="p-3 absolute md:relative -z-10 md:z-auto flex content-center items-center text-center mx-auto opacity-40 md:opacity-100 saturate-0 md:saturate-100">
        <img src={pict} alt={title} class="h-60">
    </div>
</div>