
function capitalize(string) {
    if (typeof(string) !=="string"){
        throw new Error("Not a string must be a string");
    }
    return string.toUpperCase();
}


