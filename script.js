// look up mdm on forms to add multiple images

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = 'none';
    }
});

if (typeof(Storage) !=="undefined") {
    console.log('storage will work');
}
else {
    console.log('storage will not work');
}




document.addEventListener("DOMContentLoaded", () => {
    const userNameText = document.querySelector(".userName");
    const saveNameButton = document.querySelector(".saveNameBtn");

    saveNameButton.addEventListener("click", () => {
        const userName = document.querySelector(".name").value;
        userNameText.textContent = userName;
        localStorage.setItem("name", userName);
    });

    function displayUserName() {
        const nameFromLocalStorage = localStorage.getItem("name");

        if (nameFromLocalStorage) {
            userNameText.textContent = nameFromLocalStorage;
        } else {
            userNameText.textContent = "No name data in local storage";
        }
    }

    displayUserName();
});



