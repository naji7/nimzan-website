export async function checkForBlank() {
  var pname = document.getElementById("pname");
  var pfrom = document.getElementById("pfrom");
  var pprice = document.getElementById("pprice");
  var pcharge = document.getElementById("pcharge");
  var scharge = document.getElementById("scharge");

  if (modalHandle.currentClick.gift_type !== "I have the gift") {
    if (pname.value == "") {
      pname.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (pfrom.value == "") {
      pfrom.style.border = "1px solid red";
      modalHandle.validation = false;
    }

    if (pprice.value == "") {
      pprice.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (pcharge.value == "") {
      pcharge.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (scharge.value == "") {
      scharge.style.border = "1px solid red";
      modalHandle.validation = false;
    } else {
      modalHandle.validation = true;
    }
  } else {
    if (pname.value == "") {
      pname.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (pfrom.value == "") {
      pfrom.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (pcharge.value == "") {
      pcharge.style.border = "1px solid red";
      modalHandle.validation = false;
    }
    if (scharge.value == "") {
      scharge.style.border = "1px solid red";
      modalHandle.validation = false;
    } else {
      modalHandle.validation = true;
    }
  }
}
