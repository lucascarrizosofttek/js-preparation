var capitalizarString = (value) => {    
    return value.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
}