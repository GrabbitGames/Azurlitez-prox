const textOptions = [
    "best roblox website 2024!",
    "i like skibidi toilet.",
    "always gamble dont be a quiter!",
    "im autistic!"
];

function changeText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    document.getElementById("dynamic-text").innerText = textOptions[randomIndex];
}

window.onload = changeText;

function submitSearch() {
    const searchQuery = document.getElementById("search-bar").value;
    alert("Searching for: " + searchQuery);
    document.getElementById("search-bar").value = '';
}
