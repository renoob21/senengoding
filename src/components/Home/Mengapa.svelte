<script>
    import BsLightBulb from "svelte-icons-pack/bs/BsLightbulb";
    import BsPersonBadge from "svelte-icons-pack/bs/BsPersonBadge";
    import BsCoin from "svelte-icons-pack/bs/BsCoin";
    import BsRobot from "svelte-icons-pack/bs/BsRobot";
    import WhyCard from "./WhyCard.svelte";
</script>

<div class="bg-gray-600 text-center py-10">
    <h2 class="text-3xl font-semibold text-gray-200 p-5">Mengapa Harus belajar programming?</h2>
    <div class="flex flex-col md:flex-row content-center items-center">
        <WhyCard src={BsLightBulb} topic="Problem solving" explain="Menyusun algoritma, menangani error, dan memperbaiki bugs akan meningkatkan kemampuan pemecahan masalah kita"/>
        <WhyCard src={BsPersonBadge} topic="Karir Baru" explain="Ingin beralih ke pekerjaan di bidang IT? Sekaranglah saatnya!"/>
        <WhyCard src={BsCoin} topic="Cuan Mengalir" explain="Kerja di big tech company? Atau freelance? Cuan tetep jalan terus!"/>
        <WhyCard src={BsRobot} topic="Otomasi" explain="Pekerjaan kantor monoton dan repetitif? Otomasi pekerjaanmu agar lebih efektif dan efisien!" />
    </div>
</div>