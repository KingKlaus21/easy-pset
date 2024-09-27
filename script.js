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




// document.addEventListener("DOMContentLoaded", () => {
//     const userNameText = document.querySelector(".userName");
//     const saveNameButton = document.querySelector(".saveNameBtn");
//     const nameInput = document.querySelector(".name");

//     // Check if elements are correctly selected
//     console.log("userNameText:", userNameText);
//     console.log("saveNameButton:", saveNameButton);
//     console.log("nameInput:", nameInput);

//     saveNameButton.addEventListener("click", () => {
//         const userName = nameInput.value;
//         console.log("Entered name:", userName);  // Check the entered name
//         userNameText.textContent = userName;
//         localStorage.setItem("name", userName);
//     });

//     function displayUserName() {
//         const nameFromLocalStorage = localStorage.getItem("name");
//         console.log("Name from localStorage:", nameFromLocalStorage);  // Check local storage value

//         if (nameFromLocalStorage) {
//             userNameText.textContent = nameFromLocalStorage;
//         } else {
//             userNameText.textContent = "No name data in local storage";
//         }
//     }

//     displayUserName();
// });



const believeText = document.querySelector(".believe");

believeText.addEventListener("input", () => {
    localStorage.setItem("believe", believeText.value);
});

function displayBelieveText() {
    const believeStorageValue = localStorage.getItem("believe");

    if (believeStorageValue) {
        console.log('the value is ' + believeStorageValue);
        // believeText.textContent = believeStorageValue;
        believeText.value = believeStorageValue;
    }
    else {
        console.log('believe not working yet');
    }
}

displayBelieveText();






// function updateValue(e) {
//     localStorage.setItem("believe", e.target.value);
//     console.log(e.target.value);
// }

// function displayUpdateValue() {
//     const updatedBelieveValue = localStorage.getItem("believe");

//     if (updatedBelieveValue) {
//         console.log(believeText.value);
//     }
//     else {
//         console.log('believe has no content yet');
//     }
// }

// updateValue(e);