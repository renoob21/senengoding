<script>
    const date = new Date()
    import Icon from "svelte-icons-pack";
    import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
    import BsGithub from "svelte-icons-pack/bs/BsGithub"
    import BsTwitter from "svelte-icons-pack/bs/BsTwitter"
    import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
</script>

<footer class="flex flex-col justify-center items-center gap-3 p-4 bg-gray-600 drop-shadow-xl bottom-0">
    <div><p class="text-gray-50">&copy; {date.getFullYear()} Seneng Ngoding by RENOOB21</p></div>
    <div class="flex">
        <a href="https://www.linkedin.com/in/reno-iqbalsah-990749175/" target="_blank" rel="noreferrer">
            <Icon className="p-2 text-gray-50" src={BsLinkedin} size="40"/>
        </a>
        <a href="https://github.com/renoob21" target="_blank" rel="noreferrer">
            <Icon className="p-2 text-gray-50" src={BsGithub} size="40"/>
        </a>
        <a href="https://twitter.com/renoiqbalsah" target="_blank" rel="noreferrer">
            <Icon className="p-2 text-gray-50" src={BsTwitter} size="40"/>
        </a>
        <a href="https://instagram.com/renoiqbalsah" target="_blank" rel="noreferrer">
            <Icon className="p-2 text-gray-50" src={BsInstagram} size="40"/>
        </a>
    </div>
</footer>