<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import userData from "$lib/userData"
</script>

<div><p>{$userData.characterName} have entered the room!</p></div>
<Login />
<Socket />
