// Date display
document.getElementById("date").innerText =
  new Date().toLocaleDateString();

// Simulated API fetch
async function loadData() {
  try {
    // Replace with your backend later
    const data = {
      current: "A-105",
      next: "A-106",
      processed: 52,
      pending: 9
    };

    document.getElementById("current").innerText = data.current;
    document.getElementById("next").innerText = data.next;
    document.getElementById("processed").innerText = data.processed;
    document.getElementById("pending").innerText = data.pending;

  } catch (err) {
    console.error(err);
  }
}

// Refresh every 10 sec
setInterval(loadData, 10000);
loadData();
