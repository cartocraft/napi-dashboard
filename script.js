function updateDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("ne-NP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  let dateText = "मिति लोड हुँदैछ...";

  try {
    if (typeof NepaliDate !== "undefined") {
      const bsDate = NepaliDate.fromAD(now);

      // Nepali format (YYYY MMMM DD)
      dateText = bsDate.format("YYYY MMMM DD");
    } else {
      dateText = "BS लोड भएन";
    }
  } catch (e) {
    dateText = "मिति त्रुटि";
  }

  document.getElementById("datetime").innerText =
    dateText + " | " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();
