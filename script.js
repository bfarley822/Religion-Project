function toggleDropdown() {
    const dropdownItems = document.getElementById("dropdownItems");
    const dropdownButton = document.getElementById("dropdownButton");
    if (dropdownItems.classList.contains('hidden')) {
        dropdownItems.classList.remove('hidden');
        dropdownButton.classList.add('text-gray-300');
    }
    else {
        dropdownItems.classList.add('hidden');
        dropdownButton.classList.remove('text-gray-300');
    }
}