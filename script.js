// Simple BS conversion (approx but stable)
function getBSDate() {
  const months = [
    "बैशाख","जेठ","असार","श्रावण","भदौ","असोज",
    "कार्तिक","मंसिर","पौष","माघ","फागुन","चैत"
  ];

  const now = new Date();

  // rough BS conversion (offset method)
  const bsYear = now.getFullYear() + 57;
  const bsMonth = now.getMonth();
  const bsDay = now.getDate();

  return `${bsYear} ${months[bsMonth]} ${bsDay}`;
}

function updateDateTime() {
  const time = new Date().toLocaleTimeString("ne-NP");

  const date = getBSDate();

  document.getElementById("datetime").innerText =
    date + " | " + time;
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
