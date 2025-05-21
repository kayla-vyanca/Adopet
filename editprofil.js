// Mendapatkan tombol "Edit" dan modal
var editButton = document.getElementById("editButton");
var modal = document.getElementById("myModal");

// Mendapatkan tombol "Cancel" dan "Save" dalam modal
var cancelButton = document.getElementById("cancelButton");
var saveButton = document.getElementById("saveButton");

// Mendapatkan tombol close di modal
var closeButton = document.getElementById("closeButton");

// Menambahkan event listener untuk tombol "Edit"
editButton.addEventListener("click", function () {
  modal.style.display = "block";
});

// Menambahkan event listener untuk tombol "Cancel"
cancelButton.addEventListener("click", function () {
  modal.style.display = "none";
});

// Menambahkan event listener untuk tombol "Save"
saveButton.addEventListener("click", function () {
  alert("Perubahan telah disimpan");
  modal.style.display = "none";
});

// Menambahkan event listener untuk tombol close
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
