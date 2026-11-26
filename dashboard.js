
const jam = document.querySelector(".clock h2");
const tanggal = document.querySelector(".clock p");

function updateClock() {
  const sekarang = new Date();

  const jamSekarang = sekarang.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const tanggalSekarang = sekarang.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  jam.textContent = jamSekarang;
  tanggal.textContent = tanggalSekarang;
}

updateClock();

setInterval(updateClock, 1000);

navigator.geolocation.getCurrentPosition(
  function(posisi) {
    console.log(posisi);
  },
  function(error) {
    console.log(error .masage);
  }
);