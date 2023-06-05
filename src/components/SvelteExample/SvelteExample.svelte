<script>
    let name = "world";

    function handleClick() {
        name = "john doe";
    }
</script>

<div class="caja">
    <h1 class="text-3xl">Hello {name}</h1>

    <button class="btn btn-primary" on:click={handleClick}>Hola</button>
</div>

<style>
    .caja {
        @apply rounded bg-base-200 p-4 inline-block border border-gray-800;
    }
</style>
