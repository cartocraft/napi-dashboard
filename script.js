function updateDateTime() {
  try {
    const now = new Date();

    const time = now.toLocaleTimeString("ne-NP");

    let dateText = "";

    // Try Nepali date
    if (typeof NepaliDate !== "undefined") {
      const bsDate = NepaliDate.fromAD(now);
      dateText = bsDate.format("YYYY MMMM DD");
    } else {
      // fallback AD
      dateText = now.toLocaleDateString("ne-NP");
    }

    document.getElementById("datetime").innerText =
      dateText + " | " + time;

  } catch (e) {
    document.getElementById("datetime").innerText =
      new Date().toLocaleString();
  }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// Queue demo
function loadData() {
  document.getElementById("current").innerText = "A-105";
  document.getElementById("next").innerText = "A-106";
}

setInterval(loadData, 5000);
loadData();
