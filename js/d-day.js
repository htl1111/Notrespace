const clockTitle = document.querySelector("#d-day");

function getClock() {
  const today = new Date();
  const thisYear = today.getFullYear();
  let specialYear;

  if (today.getMonth() < 6 || today.getDate() < 13) {
    specialYear = thisYear;
  } else {
    specialYear = thisYear + 1;
  }

  const christmas = new Date(`${specialYear}-07-13T00:00:00`);
  const left = christmas - today;

  const daysLeft = String(Math.floor(left / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hoursLeft = String(
    Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutesLeft = String(
    Math.floor((left % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  clockTitle.innerText = `Until my birthday: ${daysLeft}d ${hoursLeft}h ${minutesLeft}m Left`;
}

getClock();
setInterval(getClock, 1000);
