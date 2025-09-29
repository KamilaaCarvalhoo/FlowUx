 function openModal(page) {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("modalFrame").src = page;
    }
    function closeModal() {
      document.getElementById("modal").style.display = "none";
      document.getElementById("modalFrame").src = "";

    }