function capitalize (value) {
    const string = value.toString();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;