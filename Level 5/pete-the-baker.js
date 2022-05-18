function cakes(recipe, available) {
    let limiting = []
    for (let ingr in recipe) {
        if (!available.hasOwnProperty(ingr)) return 0;
        limiting[limiting.length] = Math.floor(available[ingr] / recipe[ingr])
    }
    return Math.min(...limiting)
}