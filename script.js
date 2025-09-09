const lineContainer = document.getElementById('lineContainer');
const audio = document.getElementById('audio');

// Şarkı sözleri
const lyrics = [
  "Bu ilk defa değil ki",
  "Kimselere inanmadım",
  "Yalanlar söylemeye",
  "Başladığım günden beri",
  "Bu ilk defa",
  "Cesaretimi topladım",
  "Gururumu ezdim geçtim",
  "Bir zeybek gibi dimdik",
  "Dikildim tam karşında",
  "Son bir defa",
  "Bugün fal bakmayı öğrendim",
  "Elini tutabilmek için",
  "Son bir defa boynuna sarılıp gitsem",
  "Huzuru koklasam Ege'de",
  "Aşk ner'den nereye? (Nereye?)",
  "Soldan sağa dört harf ölüm",
  "Yazılmamış beş harf hayat",
  "Aşk ner'den nereye? (Nereye?)",
  "Son bir defa boynuna sarılıp gitsem",
  "Huzuru koklasam Ege'de",
  "(Nereye, nereye?)",
  "Son bir defa boynuna sarılıp gitsem",
  "Huzuru koklasam Ege'de",
  "Aşk ner'den nereye? (Nereye?)",
  "Soldan sağa dört harf ölüm",
  "Yazılmamış beş harf hayat",
  "(Nereye, nereye, nereye, nereye?)"
];

let currentIndex = 0;

async function showLyrics() {
  while (currentIndex < lyrics.length) {
    const text = lyrics[currentIndex];
    const line = document.createElement('div');
    line.className = 'line';
    line.textContent = text;
    lineContainer.innerHTML = "";
    lineContainer.appendChild(line);

    // Göster
    requestAnimationFrame(() => line.classList.add('visible'));

    // Bir süre ekranda kalsın
    await sleep(3000);

    // Sil
    line.classList.remove('visible');
    line.classList.add('hide');

    await sleep(1000);

    currentIndex++;
  }
}

// Helper
function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

// Sayfa yüklenince otomatik başlat
document.addEventListener('DOMContentLoaded', () => {
  // bazı tarayıcılar autoplay engelleyebilir, kullanıcı etkileşimi gerekebilir
  audio.play().catch(() => {
    console.log("Otomatik çalma engellendi, kullanıcı tıklaması lazım.");
  });
  showLyrics();
});
