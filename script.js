const mesajlar = [
    "Günaydın bebeğim umarım hastalığın biraz daha geçmiştir seni ne kadar çok sevdiğimi bu yaprakların sayısı asla belirleyemez ama olsun",
    "Seni çoookkk seviyorumm",
    "İyi ki hayatımdasınn",
    "Sana çook aşığımm",
    "Uyandığımda yanımda olacağın günü sabırsızlıkla bekliyorumm",
    "Günlerimiz ne kadar zor olursa olsun her şeyi başarma gücümüz var buna eminim",
    "Seni sevmek harika bişi keşke benim gözümden de görebilsen",
    "Hep yanımda ol çünkü sensiz olmuyor",
    "Seninle her şey çok daha güzel",
    "Hayatımın en güzel papatyası sensin",
    "Senin mutluluğun benim mutluluğum",
    "Seni sonsuza kadar seveceğim"
  ];
  
  function mesajGoster(index) {
    const mesajElement = document.getElementById('mesaj');
    mesajElement.innerText = mesajlar[index];
  }
  