// BS Date + Time
function updateDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("ne-NP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const bsDate = NepaliDate.fromAD(now);
  const bsFormatted = bsDate.format("YYYY MMMM DD");

  document.getElementById("datetime").innerText =
    bsFormatted + " | " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();


// Queue (later connect API)
async function loadData() {
  const data = {
    current: "A-105",
    next: "A-106"
  };

  document.getElementById("current").innerText = data.current;
  document.getElementById("next").innerText = data.next;
}

setInterval(loadData, 5000);
loadData();
