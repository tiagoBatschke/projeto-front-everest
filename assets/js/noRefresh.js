function openPage(id, ids) {
    for (let i = 0; i < ids.length; i++) {
        const element = ids[i];
        console.log(element)
        document.getElementById(element).classList.remove('hidden')
        document.getElementById(element).classList.add('hidden')
    }

    document.getElementById(id).classList.toggle('hidden')
}