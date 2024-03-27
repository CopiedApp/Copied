// Get the releaseHistoryModal
var releaseHistoryModal = document.getElementById("releaseHistoryModal");
var communityModal = document.getElementById("communityModal");

// Get the link that opens the releaseHistoryModal
var releaseHistoryButton = document.getElementById("releaseHistory");

// When the user clicks the button, open the releaseHistoryModal
releaseHistoryButton.onclick = function () {
  releaseHistoryModal.style.display = "block";
};

var closeReleaseHistoryModal = document.getElementById(
  "closeReleaseHistoryModal"
);
closeReleaseHistoryModal.onclick = function () {
  releaseHistoryModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == releaseHistoryModal) {
    releaseHistoryModal.style.display = "none";
  }
};
