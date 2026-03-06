$(document).ready(function() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("service-worker.js").catch(function(err) {
        console.error("Gagal daftar service worker:", err);
      });
    });
  }

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby4w2GYtoSmL1-aWZ4QU3cfy4yps_g707AARWWYQyKquMtpR9UgkhrCrWAsjbw2y6mH/exec";
  const SHEET_ID = "1qg1D0lhokOzR3sfecmQK83tdsxJq6HAPwYtP8K6DpH4";
  const SHEET_NAME = "log_imbas";
  const MANUAL_DIRECTORY_TSV = `
ADIB QAYYUM BIN ALIAS	5 HORMAT	https://VJT5ys.short.gy/ygOqnn
AHMAD HARITH BIN AZMI	5 HORMAT	https://VJT5ys.short.gy/8J2FAY
AHMAD RIDZWAN SHAH BIN AHMAD RAFNAN	5 HORMAT	https://VJT5ys.short.gy/Q5KaXp
ASNIDA BINTI ABDUL HALIM	5 HORMAT	https://VJT5ys.short.gy/0az5bJ
HARRIZ AFIQ BIN ZAMRI ARIFIN	5 HORMAT	https://VJT5ys.short.gy/A8G272
HAZIM BIN MOHAMED HASAN	5 HORMAT	https://VJT5ys.short.gy/DgiQrf
JAZFARREL IQRAM BIN JAZZMAN FAIZZAL	5 HORMAT	https://VJT5ys.short.gy/SNO4gh
MASTER MUHAMMADFIRDAUS SOHATEH	5 HORMAT	https://VJT5ys.short.gy/8uac2E
MOHAMMAD AQIL HAQIMI BIN MOHD FAIZAL	5 HORMAT	https://VJT5ys.short.gy/AI6jLJ
MUHAMAD AFIQ RAHIMI BIN ABDULLAH	5 HORMAT	https://VJT5ys.short.gy/pHSJfC
MUHAMMAD ABDUL HAFIDZ BIN ABDUL RAHMAN	5 HORMAT	https://VJT5ys.short.gy/OXXF9k
MUHAMMAD ABDUL RAZAK BIN NORHISHAM	5 HORMAT	https://VJT5ys.short.gy/kX4AFe
MUHAMMAD AMIR ASYRAAF BIN ABDUL HAFIZ HAKAM	5 HORMAT	https://VJT5ys.short.gy/Oa5Gdj
MUHAMMAD AQIL DANIAL BIN MOHD FARHAM	5 HORMAT	https://VJT5ys.short.gy/3xzlBy
MUHAMMAD AWAL RAMADHAN BIN MAZUARI	5 HORMAT	https://VJT5ys.short.gy/b9qPrn
MUHAMMAD DANIAL ZAKWAN BIN MOHD ZAKI	5 HORMAT	https://VJT5ys.short.gy/R6naus
MUHAMMAD FAISAL HIQBAL BIN MOHD ASRI	5 HORMAT	https://VJT5ys.short.gy/LiJZak
MUHAMMAD HAFIZ SHAZWAN BIN HEROL NORHIZAM	5 HORMAT	https://VJT5ys.short.gy/O5rnVK
MUHAMMAD HARRAZ ZULHAKIM BIN ANDRYOS	5 HORMAT	https://VJT5ys.short.gy/K48EqT
MUHAMMAD HAYKAL BIN MUSAHIMI	5 HORMAT	https://VJT5ys.short.gy/sm2HhV
MUHAMMAD HAZIM BIN SUWARI	5 HORMAT	https://VJT5ys.short.gy/wkeCCS
MUHAMMAD IQBAL BIN MOHD AZHAR	5 HORMAT	https://VJT5ys.short.gy/TpqJ6e
MUHAMMAD IQRAM DANISH BIN JAMALUDIN	5 HORMAT	https://VJT5ys.short.gy/ip8SW2
MUHAMMAD KASYFI MU'IZ BIN MOHAMAD KHAIRUL AZUAN	5 HORMAT	https://VJT5ys.short.gy/j3SlZk
MUHAMMAD NUR RIDHWAN HAFIZ BIN SAZALI	5 HORMAT	https://VJT5ys.short.gy/eUworx
MUHAMMAD SYAFIQ BIN FARIZAL	5 HORMAT	https://VJT5ys.short.gy/NUPMA4
MUHAMMAD UMMAR DANISH BIN MOHD IZZUDIN	5 HORMAT	https://VJT5ys.short.gy/Urvczm
MUHAMMAD ZAFYR BIN MOHD ZAMZURI	5 HORMAT	https://VJT5ys.short.gy/4vZ8lj
NORKHAIRUNNISA BINTI AZIZUL ANUAR	5 HORMAT	https://VJT5ys.short.gy/rMf9Bm
NUR ALEESYA BINTI HISHAMUDIN	5 HORMAT	https://VJT5ys.short.gy/w1nnE6
NUR FARAH ALESYA BINTI MUHAMAD BADRORIZAL	5 HORMAT	https://VJT5ys.short.gy/wg0o8O
NUR FATIN MARDHIAH BINTIMOHD.SABRI	5 HORMAT	https://VJT5ys.short.gy/F0Wx74
NUR HAFRIZUL SHAH BIN ABDULLAH	5 HORMAT	https://VJT5ys.short.gy/J5YUbe
NUR HUSNINA IRDINA BINTI MUHAMAD FAIZAL	5 HORMAT	https://VJT5ys.short.gy/c5N9VH
NUR SYAKILA IZZATY BINTI SUHAIMI	5 HORMAT	https://VJT5ys.short.gy/QRa6B8
NURUL SHUHADA BINTI MD AZHAR	5 HORMAT	https://VJT5ys.short.gy/kqZQwd
PUTRA HARRIS DANISH BIN ZAINUL AKMAL	5 HORMAT	https://VJT5ys.short.gy/WHdUVM
PUTRI ALYA ADRIANA BINTI MUHAMMAD FAIZAL	5 HORMAT	https://VJT5ys.short.gy/FECitv
AISYA HUMAIRA BINTI SHAHRUL NORKAMAL AZWA	5 IKHLAS	https://VJT5ys.short.gy/Jcy8Ma
AMIN QHUSAIRY BIN IBRAHIM	5 IKHLAS	https://VJT5ys.short.gy/rIpwaO
ASMAANISA BINTI MOHD BASIRUDDIN	5 IKHLAS	https://VJT5ys.short.gy/7zDdy8
MITHANA KUMAR A/L RATHNA KUMAR	5 IKHLAS	https://VJT5ys.short.gy/NX1hT1
MOHD ARIEF HAIKAL BIN MOHD NADZRI	5 IKHLAS	https://VJT5ys.short.gy/1KiQyF
MONALISA ROSANA BINTI ABDULLAH	5 IKHLAS	https://VJT5ys.short.gy/XM4WqR
MUHAMMAD ADAM HAZIQ BIN MOHD EZAINI	5 IKHLAS	https://VJT5ys.short.gy/lZXpmU
MUHAMMAD AIDIL BIN ABDUL HAMID	5 IKHLAS	https://VJT5ys.short.gy/TdAU5x
MUHAMMAD AKIF IZWAN BIN MOHAMMAD AZAHAR	5 IKHLAS	https://VJT5ys.short.gy/peMBa2
MUHAMMAD DANIEL HAIKAL BIN MOHD JOHARI	5 IKHLAS	https://VJT5ys.short.gy/2KNBHX
MUHAMMAD DZULFAQAR DZAKWAN BIN MOHAMAD SHAHRIL	5 IKHLAS	https://VJT5ys.short.gy/ryEFSG
MUHAMMAD HAZIQ IRFAN BIN MOHD BUKHARI	5 IKHLAS	https://VJT5ys.short.gy/pRthX0
MUHAMMAD ISMA DANIAL BIN ISMANIZAM LUBIS	5 IKHLAS	https://VJT5ys.short.gy/ULn4XZ
MUHAMMAD NUR HAIQAL BIN SUHAIRIN	5 IKHLAS	https://VJT5ys.short.gy/VTYnlj
MUHAMMAD RAIMI SYAZWAN BIN ABDUL MAJID	5 IKHLAS	https://VJT5ys.short.gy/C6jkZs
NADIATUL HUSNA BINTI ZULL	5 IKHLAS	https://VJT5ys.short.gy/eROWAq
NOR AIN FARISYA BINTI MOHD.FAIZAL	5 IKHLAS	https://VJT5ys.short.gy/4QDDTK
NUR ALIYA BINTI MUSTAFA	5 IKHLAS	https://VJT5ys.short.gy/6QgV0M
NUR BATRISYIA BINTI MUAHMAD HIRDIR	5 IKHLAS	https://VJT5ys.short.gy/jDXQAa
NUR DINI DALILI BINTI NASRI	5 IKHLAS	https://VJT5ys.short.gy/9vs30S
NUR ELIYANA ANISA BINTI SAFLI RIZUAN	5 IKHLAS	https://VJT5ys.short.gy/Hoa2L5
NUR HAFRIZAL BIN ABDULLAH	5 IKHLAS	https://VJT5ys.short.gy/fPVmbl
NUR HUMAIRA DANIA BINTI SHUHAIRI	5 IKHLAS	https://VJT5ys.short.gy/Qws54Q
PUTERI NABILA LIYANA BINTI MOHAMED KARIT	5 IKHLAS	https://VJT5ys.short.gy/zUM4dz
RAJA KHAIRULNAIM BIN RAJA KAMALRULAZMAN	5 IKHLAS	https://VJT5ys.short.gy/j82k3X
ZETY SAIDATUL ASMIDA BINTI ROZALI	5 IKHLAS	https://VJT5ys.short.gy/vxdWBk
AMRISH DANISH BIN ROHAIZAD	5 JUJUR	https://VJT5ys.short.gy/ofLcpn
AQIL QAYYUM BIN MOHD YAZID	5 JUJUR	https://VJT5ys.short.gy/HdDMqX
BHARHTH RAJ A/L ARUMUGAM	5 JUJUR	https://VJT5ys.short.gy/9GlMVp
DANISH HAIKAL BIN MUHAMMAD RIDZWAN	5 JUJUR	https://VJT5ys.short.gy/xA97oO
KHARIL AZIZI A/L ASKARALI	5 JUJUR	https://VJT5ys.short.gy/8MsMl8
MOHAMAD NABIL BIN MOHD ASRI	5 JUJUR	https://VJT5ys.short.gy/ajKHuh
MUHAMMAD ADAM RIZKIN BIN ABDUL MUQADDIM	5 JUJUR	https://VJT5ys.short.gy/ZASwsE
MUHAMMAD ADIEB THAQIEFF BIN ABDUL MALIK	5 JUJUR	https://VJT5ys.short.gy/J6TEms
MUHAMMAD AFIQ HAKIMI BIN MOHD AZRAIKA BASTHOMI	5 JUJUR	https://VJT5ys.short.gy/5N7tTd
MUHAMMAD ALIEF SHAH BIN ZULKIFLI	5 JUJUR	https://VJT5ys.short.gy/FtvJiS
MUHAMMAD ALIF AIMAN BIN RAHSIDI	5 JUJUR	https://VJT5ys.short.gy/r90rN7
MUHAMMAD AQIL BIN ABDUL GHANI	5 JUJUR	https://VJT5ys.short.gy/zuUuWQ
MUHAMMAD AZIM BIN ABDULLAH	5 JUJUR	https://VJT5ys.short.gy/2ZkwNm
MUHAMMAD HAIKAL BIN HAFIZAL AZMI	5 JUJUR	https://VJT5ys.short.gy/lFnFCF
MUHAMMAD HAIKAL NAJMI BIN MD ISA	5 JUJUR	https://VJT5ys.short.gy/TZPIV6
MUHAMMAD NAJMI DANIAL BIN MOHAMAD NASIR	5 JUJUR	https://VJT5ys.short.gy/lFaSpe
MUHAMMAD NUH AQIL BIN SHAIFUL ADNAN	5 JUJUR	https://VJT5ys.short.gy/rKythx
MUHAMMAD SHAH HAIKAL BIN MOHD FAUZI	5 JUJUR	https://VJT5ys.short.gy/JXmSBv
MUHAMMAD ZARILSHAWARUL FITRI BIN KAMARUZAMAN	5 JUJUR	https://VJT5ys.short.gy/6gwYNQ
NAUFAL FAJAR MAULANA BIN ABDULLAH	5 JUJUR	https://VJT5ys.short.gy/yS6D36
NIL WAFIY DARWISY BIN MOHD SHARIZAL	5 JUJUR	https://VJT5ys.short.gy/WdDEZ5
NUR ALISYA BINTI HARIZAN	5 JUJUR	https://VJT5ys.short.gy/uJDjDa
NUR BHAITIE ALEESYA BINTI KHAIRUDI	5 JUJUR	https://VJT5ys.short.gy/IZCxZ0
NUR EZANI NAJWA BINTI ABDULLAH	5 JUJUR	https://VJT5ys.short.gy/H2wyPo
NUR IMAN AZ-ZAHRA BINTI ABDULLAH	5 JUJUR	https://VJT5ys.short.gy/ZUx4Qa
NUR SHAZLIYANA BATRISYIA BINTI ABDULLAH	5 JUJUR	https://VJT5ys.short.gy/jlv73H
NURUL FARZANAH BINTI ZULKAFLI	5 JUJUR	https://VJT5ys.short.gy/M8wtEw
NURUL QISTINA MYSARA BINTI KU MOHD ZULIZY	5 JUJUR	https://VJT5ys.short.gy/G0qE2h
NURUL SHAHIRAH BINTI MOHD MAZLAN	5 JUJUR	https://VJT5ys.short.gy/dwXzLI
PUNITHA A/P LETCHUMANAN	5 JUJUR	https://VJT5ys.short.gy/xLqeAj
SAMITHRA A/P RAJANDERAN	5 JUJUR	https://VJT5ys.short.gy/i6oICQ
AKIF MUKHRIZ BIN KHAIRI	5 GIGIH	https://VJT5ys.short.gy/104vtN
ALEESYA HUMAIRAH BINTU MOHD SYAWAL	5 GIGIH	https://VJT5ys.short.gy/95qFne
ALIF QUSYAIRI BIN MOHD ASRI	5 GIGIH	https://VJT5ys.short.gy/IFJYgz
AMMAR RIZQI BIN SUHAIDI	5 GIGIH	https://VJT5ys.short.gy/atSdqv
ARISSA MAISARAH BINTI HAZMAN	5 GIGIH	https://VJT5ys.short.gy/4stSG4
HAMIZAH MAISARAH BINTI HAIRI	5 GIGIH	https://VJT5ys.short.gy/mDRn5t
I'QAL AQIMI BIN IZAHAM	5 GIGIH	https://VJT5ys.short.gy/zysPmk
ISKANDAR ZULKARNAIN BIN BUDY DHARMAWAN	5 GIGIH	https://VJT5ys.short.gy/v5CyWj
LUQMAN NUR HAQIM BIN HAZLAN	5 GIGIH	https://VJT5ys.short.gy/M5Z96j
MAS ADIE ZAFUAN BIN MAS SAZMY	5 GIGIH	https://VJT5ys.short.gy/UQXI5i
MOHAMAD ZULKIFLI BIN IBRAHIM	5 GIGIH	https://VJT5ys.short.gy/hn7q00
MUHAMAD ARIFFIN BIN RAHIMI	5 GIGIH	https://VJT5ys.short.gy/h5M6c7
MUHAMAD HAFIZUDDIN BIN RAMLY	5 GIGIH	https://VJT5ys.short.gy/spN8ww
MUHAMMAD ADAM ALIF BIN ABDULLAH	5 GIGIH	https://VJT5ys.short.gy/u1W3pF
MUHAMMAD ALIF HAKIMI BIN AZIZI	5 GIGIH	https://VJT5ys.short.gy/71yM8N
MUHAMMAD ASYRAAF BIN ROSLI	5 GIGIH	https://VJT5ys.short.gy/5Ex7O6
MUHAMMAD FARIS BIN ROSLEY	5 GIGIH	https://VJT5ys.short.gy/eIWS5H
MUHAMMAD FITRI MUHSININ BIN AZIZAN	5 GIGIH	https://VJT5ys.short.gy/qGBytw
MUHAMMAD HAQIMI BIN RAZIS	5 GIGIH	https://VJT5ys.short.gy/TVlg6x
MUHAMMAD HAZIQ BIN RAZALI	5 GIGIH	https://VJT5ys.short.gy/NBRWdr
MUHAMMAD IQBAL HAKIMI BIN HISYAM	5 GIGIH	https://VJT5ys.short.gy/t4ckBK
MUHAMMAD IRFAAN BIN ASOOR	5 GIGIH	https://VJT5ys.short.gy/8RSUkM
MUHAMMAD QAYYUM RAYYAN BIN IDRIS	5 GIGIH	https://VJT5ys.short.gy/Bu7tZu
MUHAMMAD RAYYAN DANIES BIN ROZMAN	5 GIGIH	https://VJT5ys.short.gy/5mjYIR
MUHAMMAD SYAWAL HAIKAL BIN MOHD ADNAN	5 GIGIH	https://VJT5ys.short.gy/FmEJU4
MUHAMMAD ZAHIRUL ZAFRAN BIN ABDUL RAHIM	5 GIGIH	https://VJT5ys.short.gy/HyisDL
NUL DANNY NATASHA BINTI IZHAR	5 GIGIH	https://VJT5ys.short.gy/n5kAjr
NUR FAIZATUL HUSNA BINTI ABDUL RAHMAN	5 GIGIH	https://VJT5ys.short.gy/WbNEIj
NUR FASZRINATASYA BINTI JUHARMAN	5 GIGIH	https://VJT5ys.short.gy/oi4u8J
NUR HASYA DALILA BINTI ROSLAN	5 GIGIH	https://VJT5ys.short.gy/8RdHOh
NURAINA NAJWA BINTI ABDULLAH	5 GIGIH	https://VJT5ys.short.gy/QggPav
NURUL EMAN ALEYA BINTI ABDUL KUDUS	5 GIGIH	https://VJT5ys.short.gy/oPcK5x
PUTRI NUR'BALQIS BINTI ZAINAL	5 GIGIH	https://VJT5ys.short.gy/2yEPO5
RAFIQ BIN RAZIF	5 GIGIH	https://VJT5ys.short.gy/UGVad8
WAN ADAM HARIS BIN WAN MOHD FADZLI	5 GIGIH	https://VJT5ys.short.gy/iNNdHC
WAN NUR QISTINA BINTI WAN MOHAMED	5 GIGIH	https://VJT5ys.short.gy/0XUIBN
NURUL EMAN ALEYA BINTI ABDUL KUDUS	5 GIGIH	https://VJT5ys.short.gy/HxEoy6
KHAIRUL HAZIEQ BIN FAIZAL KHAIRUL	5 BAKTI	https://VJT5ys.short.gy/t2UqPu
MUHAMMAD ZIYAD RIZKY BIN MOHD RAIHAN	5 BAKTI	https://VJT5ys.short.gy/XB2PeW
HAIKAL BIN ARSYAD	5 CEKAL	https://VJT5ys.short.gy/hHqnfd
MAS SYAZWINA BINTI MAS SAZNY	5 CEKAL	https://VJT5ys.short.gy/XMG1z8
NURUL ATHIQAH BINTI AHMAD	5 DAMAI	https://VJT5ys.short.gy/0NBAlo
  `;
  const statusLine = document.getElementById("statusLine");
  const recordCount = document.getElementById("recordCount");
  const filterTarikh = document.getElementById("filterTarikh");
  const widgetTotal = document.getElementById("widgetTotal");
  const widgetSimpan = document.getElementById("widgetSimpan");
  const widgetAmbil = document.getElementById("widgetAmbil");
  const widgetPercent = document.getElementById("widgetPercent");
  const widgetPercentBar = document.getElementById("widgetPercentBar");
  const refreshInfo = document.getElementById("refreshInfo");
  const debugLine = document.getElementById("debugLine");
  const todayPill = document.getElementById("todayPill");
  const chartEmptyState = document.getElementById("chartEmptyState");
  const statusDonutEmptyState = document.getElementById("statusDonutEmptyState");
  const trendHarianEmptyState = document.getElementById("trendHarianEmptyState");
  const toggleManualPanel = document.getElementById("toggleManualPanel");
  const manualPanelBody = document.getElementById("manualPanelBody");
  const manualPassword = document.getElementById("manualPassword");
  const btnUnlockManual = document.getElementById("btnUnlockManual");
  const manualLockedMessage = document.getElementById("manualLockedMessage");
  const manualUnlockedContent = document.getElementById("manualUnlockedContent");
  const manualKelasSelect = document.getElementById("manualKelasSelect");
  const manualMuridSelect = document.getElementById("manualMuridSelect");
  const manualOpenUrl = document.getElementById("manualOpenUrl");
  const manualStatus = document.getElementById("manualStatus");
  const GURU_PASSWORD = "myFon1234";
  const AUTO_REFRESH_MS = 60000;
  let kelasSimpanChart = null;
  let statusDonutChart = null;
  let trendHarianChart = null;
  let hasLoadedDataOnce = false;
  let manualAccessGranted = false;
  let muridDirectory = [];

  var table = $("#jadualStatistik").DataTable({
    dom: "Bfrtip",
    autoWidth: false,
    columnDefs: [
      { targets: 0, width: "38%" }
    ],
    buttons: [
      { extend: "pdf", text: "📄 Muat Turun (PDF)", className: "btn btn-sm" },
      { extend: "print", text: "🖨️ Cetak", className: "btn btn-sm" }
    ],
    language: {
      search: "Carian pantas:",
      lengthMenu: "Papar _MENU_ rekod",
      info: "Memaparkan _START_ hingga _END_ daripada _TOTAL_ rekod",
      infoEmpty: "Tiada rekod",
      emptyTable: "Tiada data untuk dipaparkan"
    }
  });

  function isSimpanRecord(row) {
    const status = String(row[5] || "").toUpperCase().trim();
    const masaAmbil = String(row[4] || "").trim();
    const isSimpanText = status.includes("DISIMPAN") || status.includes("SIMPAN");
    const isAmbilText = status.includes("DIAMBIL") || status.includes("AMBIL");
    const isBelumAmbil = masaAmbil === "" || masaAmbil === "-";
    return isSimpanText || (!isAmbilText && isBelumAmbil);
  }

  function isAmbilRecord(row) {
    const status = String(row[5] || "").toUpperCase().trim();
    const masaAmbil = String(row[4] || "").trim();
    return status.includes("DIAMBIL") || status.includes("AMBIL") || (masaAmbil !== "" && masaAmbil !== "-");
  }

  function setLoadingState(isLoading) {
    return;
  }

  function renderKelasSimpanChart(rows) {
    if (typeof Chart === "undefined") {
      if (chartEmptyState) chartEmptyState.textContent = "Carta tidak tersedia.";
      return;
    }

    const simpanRows = rows.filter(isSimpanRecord);
    const countByKelas = {};

    simpanRows.forEach(function(row) {
      const kelas = String(row[1] || "-").trim() || "-";
      countByKelas[kelas] = (countByKelas[kelas] || 0) + 1;
    });

    const labels = Object.keys(countByKelas).sort(function(a, b) {
      return a.localeCompare(b, "ms");
    });
    const values = labels.map(function(k) { return countByKelas[k]; });

    if (kelasSimpanChart) {
      kelasSimpanChart.destroy();
      kelasSimpanChart = null;
    }

    if (!labels.length) {
      if (chartEmptyState) chartEmptyState.textContent = "Tiada data simpan untuk carta.";
      return;
    }

    if (chartEmptyState) chartEmptyState.textContent = "";
    const ctx = document.getElementById("kelasSimpanChart");
    kelasSimpanChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Bil Murid Simpan Telefon",
          data: values,
          borderWidth: 1,
          borderRadius: 10,
          maxBarThickness: 56,
          categoryPercentage: 0.72,
          barPercentage: 0.9,
          backgroundColor: "rgba(171, 122, 255, 0.75)",
          borderColor: "rgba(224, 199, 255, 0.95)"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#e7ddff" }
          }
        },
        scales: {
          x: {
            ticks: { color: "#d5c6fb" },
            grid: { color: "rgba(174, 145, 240, 0.15)" }
          },
          y: {
            beginAtZero: true,
            ticks: { precision: 0, color: "#d5c6fb" },
            grid: { color: "rgba(174, 145, 240, 0.15)" }
          }
        }
      }
    });
  }

  function updateWidgets(rows) {
    recordCount.textContent = `${rows.length} rekod`;
    widgetTotal.textContent = String(rows.length);

    const simpanCount = rows.filter(isSimpanRecord).length;
    const ambilCount = rows.filter(isAmbilRecord).length;
    const percent = rows.length ? Math.round((ambilCount / rows.length) * 100) : 0;

    widgetSimpan.textContent = String(simpanCount);
    widgetAmbil.textContent = String(ambilCount);
    widgetPercent.textContent = `${percent}%`;
    widgetPercentBar.style.width = `${percent}%`;
  }

  function resetWidgets() {
    recordCount.textContent = "0 rekod";
    widgetTotal.textContent = "0";
    widgetSimpan.textContent = "0";
    widgetAmbil.textContent = "0";
    widgetPercent.textContent = "0%";
    widgetPercentBar.style.width = "0%";
    if (kelasSimpanChart) {
      kelasSimpanChart.destroy();
      kelasSimpanChart = null;
    }
    if (statusDonutChart) {
      statusDonutChart.destroy();
      statusDonutChart = null;
    }
    if (trendHarianChart) {
      trendHarianChart.destroy();
      trendHarianChart = null;
    }
    if (chartEmptyState) chartEmptyState.textContent = "Tiada data simpan untuk carta.";
    if (statusDonutEmptyState) statusDonutEmptyState.textContent = "Tiada data untuk carta donut.";
    if (trendHarianEmptyState) trendHarianEmptyState.textContent = "Tiada data trend untuk 7 hari terakhir.";
  }

  function nowText() {
    return new Date().toLocaleTimeString("ms-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  function getKualaLumpurParts(dateObj) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kuala_Lumpur",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(dateObj);

    const map = {};
    parts.forEach(function(p) {
      if (p.type === "year" || p.type === "month" || p.type === "day") {
        map[p.type] = p.value;
      }
    });
    return map;
  }

  function getTodayFilterValue() {
    const p = getKualaLumpurParts(new Date());
    return `${p.year}-${p.month}-${p.day}`;
  }

  function ensureTarikhFilterDefault() {
    return;
  }

  function updateTodayPill() {
    const dateStr = getTodayFilterValue();
    if (!todayPill) return;
    const now = new Date();
    const dateText = now.toLocaleDateString("ms-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    const timeText = now.toLocaleTimeString("ms-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    const valueEl = todayPill.querySelector(".today-value");
    if (valueEl) {
      valueEl.textContent = `${dateText} | ${timeText}`;
    }
  }

  function normalizeDateToInputFormat(value) {
    if (!value) return "";
    const text = String(value).trim();
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(text)) {
      const parts = text.split("/");
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(text)) {
      const parts = text.split("/");
      const day = String(parts[0]).padStart(2, "0");
      const month = String(parts[1]).padStart(2, "0");
      return `${parts[2]}-${month}-${day}`;
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      return text;
    }
    if (/^\d{4}-\d{2}-\d{2}T/.test(text)) {
      return text.slice(0, 10);
    }
    return "";
  }

  function to12HourFormat(value) {
    if (!value) return "-";
    const text = String(value).trim();
    if (/(AM|PM)/i.test(text)) return text.toUpperCase();
    const m = text.match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return text;
    let hour = parseInt(m[1], 10);
    const minute = m[2];
    const suffix = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${String(hour).padStart(2, "0")}:${minute} ${suffix}`;
  }

  function applyFilters(rows, tarikh, kelas) {
    return rows.filter(function(row) {
      const rowKelas = String(row[1] || "").trim();
      const rowTarikh = normalizeDateToInputFormat(row[2]);
      const passKelas = !kelas || rowKelas === kelas;
      const passTarikh = !tarikh || rowTarikh === tarikh;
      return passKelas && passTarikh;
    });
  }

  function populateKelasOptions(rows, selectedKelas) {
    const select = document.getElementById("filterKelas");
    const kelasSet = new Set();

    rows.forEach(function(row) {
      const value = String(row[1] || "").trim();
      if (value) kelasSet.add(value);
    });

    const kelasList = Array.from(kelasSet).sort(function(a, b) {
      return a.localeCompare(b, "ms");
    });

    select.innerHTML = '<option value="">Semua Kelas</option>';
    if (!kelasList.length) {
      const emptyOpt = document.createElement("option");
      emptyOpt.value = "";
      emptyOpt.textContent = "Tiada kelas ditemui";
      emptyOpt.disabled = true;
      select.appendChild(emptyOpt);
      select.value = "";
      return;
    }

    kelasList.forEach(function(k) {
      const opt = document.createElement("option");
      opt.value = k;
      opt.textContent = k;
      select.appendChild(opt);
    });

    if (selectedKelas && kelasSet.has(selectedKelas)) {
      select.value = selectedKelas;
    } else {
      select.value = "";
    }
  }

  function getObjectValueByAliases(item, aliases) {
    if (!item || typeof item !== "object") return "";
    const keys = Object.keys(item);
    for (let i = 0; i < aliases.length; i += 1) {
      const alias = aliases[i];
      if (Object.prototype.hasOwnProperty.call(item, alias)) return item[alias];
      const normalizedAlias = alias.toLowerCase().replace(/[\s_]/g, "");
      const foundKey = keys.find(function(k) {
        return k.toLowerCase().replace(/[\s_]/g, "") === normalizedAlias;
      });
      if (foundKey) return item[foundKey];
    }
    return "";
  }

  function normalizeKelasLabel(value) {
    return String(value || "").toUpperCase().replace(/\s+/g, " ").trim();
  }

  function parseManualDirectoryTsv(tsvText) {
    return String(tsvText || "")
      .split(/\r?\n/)
      .map(function(line) { return line.trim(); })
      .filter(Boolean)
      .map(function(line, index) {
        const parts = line.split("\t").map(function(part) { return String(part || "").trim(); });
        const nama = parts[0] || "";
        const kelas = normalizeKelasLabel(parts[1] || "");
        const url = parts[2] || "";
        return {
          id: `${kelas}__${nama}__${index}`,
          nama: nama,
          kelas: kelas,
          url: url
        };
      })
      .filter(function(item) {
        return item.nama && item.kelas && item.url;
      });
  }

  function resetManualRecordButton() {
    if (manualOpenUrl) {
      manualOpenUrl.classList.add("disabled");
      manualOpenUrl.setAttribute("aria-disabled", "true");
      manualOpenUrl.setAttribute("href", "#");
    }
  }

  function renderManualKelasOptions() {
    if (!manualKelasSelect) return;
    const kelasList = Array.from(new Set(
      muridDirectory
        .map(function(item) { return item.kelas; })
        .filter(Boolean)
    )).sort(function(a, b) {
      return a.localeCompare(b, "ms");
    });

    manualKelasSelect.innerHTML = '<option value="">Pilih kelas</option>';
    kelasList.forEach(function(kelas) {
      const opt = document.createElement("option");
      opt.value = kelas;
      opt.textContent = kelas;
      manualKelasSelect.appendChild(opt);
    });
  }

  function renderManualMuridOptions(kelas) {
    if (!manualMuridSelect) return;
    const selectedKelas = normalizeKelasLabel(kelas);
    const muridList = muridDirectory
      .filter(function(item) {
        return normalizeKelasLabel(item.kelas) === selectedKelas;
      })
      .sort(function(a, b) {
        return a.nama.localeCompare(b.nama, "ms");
      });

    manualMuridSelect.innerHTML = '<option value="">Pilih murid</option>';
    muridList.forEach(function(item) {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.nama;
      manualMuridSelect.appendChild(opt);
    });
    manualMuridSelect.disabled = !muridList.length;
    manualMuridSelect.value = "";
    resetManualRecordButton();
  }

  function renderSelectedMuridUrl(muridId) {
    const selected = muridDirectory.find(function(item) { return item.id === muridId; });
    if (!selected || !selected.url) {
      resetManualRecordButton();
      return;
    }

    if (manualOpenUrl) {
      manualOpenUrl.classList.remove("disabled");
      manualOpenUrl.setAttribute("aria-disabled", "false");
      manualOpenUrl.href = selected.url;
    }
  }

  async function muatDirektoriMurid(options) {
    muridDirectory = parseManualDirectoryTsv(MANUAL_DIRECTORY_TSV);
    renderManualKelasOptions();
    resetManualRecordButton();
  }

  function setManualAccessState(isUnlocked, message) {
    manualAccessGranted = isUnlocked;
    if (manualLockedMessage) {
      manualLockedMessage.classList.toggle("d-none", isUnlocked);
    }
    if (manualUnlockedContent) {
      manualUnlockedContent.classList.toggle("d-none", !isUnlocked);
    }
    if (manualStatus) {
      manualStatus.textContent = message || "";
    }
  }

  function unlockManualMenu() {
    if (!manualPassword || !manualStatus) return;
    const password = manualPassword.value;

    if (!password) {
      setManualAccessState(false, "Sila masukkan password guru.");
      return;
    }
    if (password !== GURU_PASSWORD) {
      setManualAccessState(false, "Password guru tidak tepat.");
      return;
    }

    setManualAccessState(true, "");
    muatDirektoriMurid();
  }

  window.muatData = async function(options) {
    const opts = options || {};
    const silent = !!opts.silent;

    const tarikh = filterTarikh ? filterTarikh.value : "";
    const kelas = $("#filterKelas").val();

    const params = new URLSearchParams();
    params.append("action", "readData");
    params.append("sheetId", SHEET_ID);
    params.append("sheetName", SHEET_NAME);

    const url = params.toString() ? `${SCRIPT_URL}?${params.toString()}` : SCRIPT_URL;

    setLoadingState(true);

    try {
      const response = await fetch(url, {
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const textBody = await response.text();
        const hint = textBody.includes("<html") ? "URL memulangkan HTML, bukan JSON API." : "Respons bukan JSON.";
        throw new Error(hint);
      }

      const payload = await response.json();
      if (payload && payload.error) {
        throw new Error(payload.error);
      }

      const data = Array.isArray(payload) ? payload : (Array.isArray(payload.data) ? payload.data : []);
      const allRows = data.map(function(item) {
        const objNama = getObjectValueByAliases(item, ["nama", "namaMurid", "nama murid", "Nama Murid", "studentName"]);
        const objKelas = getObjectValueByAliases(item, ["kelas", "Kelas", "class"]);
        const objTarikh = getObjectValueByAliases(item, ["tarikh", "Tarikh", "date"]);
        const objMasaSimpan = getObjectValueByAliases(item, ["masaSimpan", "masa_simpan", "masa simpan", "Masa Simpan"]);
        const objMasaAmbil = getObjectValueByAliases(item, ["masaAmbil", "masa_ambil", "masa ambil", "Masa Ambil"]);
        const objStatus = getObjectValueByAliases(item, ["status", "Status"]);
        return [
          String(Array.isArray(item) ? (item[0] || "-") : (objNama || "-")).trim() || "-",
          String(Array.isArray(item) ? (item[1] || "-") : (objKelas || "-")).trim() || "-",
          String(Array.isArray(item) ? (item[2] || "-") : (objTarikh || "-")).trim() || "-",
          to12HourFormat(String(Array.isArray(item) ? (item[3] || "-") : (objMasaSimpan || "-")).trim() || "-"),
          to12HourFormat(String(Array.isArray(item) ? (item[4] || "-") : (objMasaAmbil || "-")).trim() || "-"),
          String(Array.isArray(item) ? (item[5] || "-") : (objStatus || "-")).trim() || "-"
        ];
      }).filter(function(r) {
        return r.some(function(cell) {
          const v = String(cell || "").trim();
          return v !== "" && v !== "-";
        });
      });
      populateKelasOptions(allRows, kelas);
      const effectiveTarikh = tarikh || "";
      const filteredRows = applyFilters(allRows, effectiveTarikh, kelas);
      const uniqueKelasCount = new Set(allRows.map(function(r) { return String(r[1] || "").trim(); }).filter(Boolean)).size;

      table.clear().rows.add(filteredRows).draw();
      updateWidgets(filteredRows);
      renderKelasSimpanChart(filteredRows);
      renderStatusDonutChart(filteredRows);
      renderTrendHarianChart(allRows, kelas);
      const tarikhText = effectiveTarikh ? ` untuk tarikh ${effectiveTarikh}` : "";
      statusLine.textContent = `Data berjaya dimuat${tarikhText}: ${filteredRows.length}/${allRows.length} rekod.`;
      refreshInfo.textContent = `Auto-refresh: setiap 60 saat. Kemaskini terakhir: ${nowText()}.`;
      debugLine.textContent = "";
      hasLoadedDataOnce = true;
    } catch (error) {
      statusLine.textContent = `Ralat: ${error.message}`;
      debugLine.textContent = "";
      if (!hasLoadedDataOnce) {
        resetWidgets();
      }
      if (!silent) {
        alert(`Gagal memuat data: ${error.message}`);
      }
      console.error("Ralat muatData:", error);
    } finally {
      setLoadingState(false);
    }
  };

  setInterval(function() {
    window.muatData({ silent: true });
  }, AUTO_REFRESH_MS);

  document.getElementById("filterKelas").addEventListener("change", function() {
    window.muatData({ silent: true });
  });

  if (filterTarikh) {
    filterTarikh.addEventListener("change", function() {
      window.muatData({ silent: true });
    });
  }

  function renderStatusDonutChart(rows) {
    if (typeof Chart === "undefined") {
      if (statusDonutEmptyState) statusDonutEmptyState.textContent = "Carta tidak tersedia.";
      return;
    }

    if (statusDonutChart) {
      statusDonutChart.destroy();
      statusDonutChart = null;
    }

    if (!rows.length) {
      if (statusDonutEmptyState) statusDonutEmptyState.textContent = "Tiada data untuk carta donut.";
      return;
    }

    const simpanCount = rows.filter(isSimpanRecord).length;
    const ambilCount = rows.filter(isAmbilRecord).length;
    const ctx = document.getElementById("statusDonutChart");
    if (statusDonutEmptyState) statusDonutEmptyState.textContent = "";
    statusDonutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Disimpan", "Diambil"],
        datasets: [{
          data: [simpanCount, ambilCount],
          backgroundColor: [
            "rgba(171, 122, 255, 0.82)",
            "rgba(109, 224, 178, 0.85)"
          ],
          borderColor: "rgba(16, 10, 32, 0.7)",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#e7ddff" }
          }
        }
      }
    });
  }

  function shiftDateString(dateStr, delta) {
    const m = String(dateStr || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return "";
    const base = new Date(Date.UTC(parseInt(m[1], 10), parseInt(m[2], 10) - 1, parseInt(m[3], 10)));
    base.setUTCDate(base.getUTCDate() + delta);
    return base.toISOString().slice(0, 10);
  }

  function shortMsDateLabel(dateStr) {
    const m = String(dateStr || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return dateStr || "-";
    return `${m[3]}/${m[2]}`;
  }

  function renderTrendHarianChart(allRows, kelas) {
    if (typeof Chart === "undefined") {
      if (trendHarianEmptyState) trendHarianEmptyState.textContent = "Carta tidak tersedia.";
      return;
    }

    if (trendHarianChart) {
      trendHarianChart.destroy();
      trendHarianChart = null;
    }

    const rowsByKelas = (kelas || "")
      ? allRows.filter(function(row) { return String(row[1] || "").trim() === kelas; })
      : allRows;

    const countByDate = {};
    rowsByKelas.forEach(function(row) {
      const d = normalizeDateToInputFormat(row[2]);
      if (!d) return;
      countByDate[d] = (countByDate[d] || 0) + 1;
    });

    const today = getTodayFilterValue();
    const dates = [];
    for (let i = 6; i >= 0; i -= 1) {
      dates.push(shiftDateString(today, -i));
    }
    const labels = dates.map(shortMsDateLabel);
    const values = dates.map(function(d) { return countByDate[d] || 0; });

    if (!values.some(function(v) { return v > 0; })) {
      if (trendHarianEmptyState) trendHarianEmptyState.textContent = "Tiada data trend untuk 7 hari terakhir.";
      return;
    }

    const ctx = document.getElementById("trendHarianChart");
    if (trendHarianEmptyState) trendHarianEmptyState.textContent = "";
    trendHarianChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Bil Rekod",
          data: values,
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 3,
          borderColor: "rgba(196, 161, 255, 1)",
          backgroundColor: "rgba(155, 107, 255, 0.22)",
          pointBackgroundColor: "rgba(255, 238, 175, 0.95)"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#e7ddff" }
          }
        },
        scales: {
          x: {
            ticks: { color: "#d5c6fb" },
            grid: { color: "rgba(174, 145, 240, 0.15)" }
          },
          y: {
            beginAtZero: true,
            ticks: { precision: 0, color: "#d5c6fb" },
            grid: { color: "rgba(174, 145, 240, 0.15)" }
          }
        }
      }
    });
  }

  if (btnUnlockManual) {
    btnUnlockManual.addEventListener("click", unlockManualMenu);
  }

  if (manualKelasSelect) {
    manualKelasSelect.addEventListener("change", function() {
      renderManualMuridOptions(manualKelasSelect.value);
    });
  }

  if (manualMuridSelect) {
    manualMuridSelect.addEventListener("change", function() {
      renderSelectedMuridUrl(manualMuridSelect.value);
    });
  }

  if (toggleManualPanel && manualPanelBody) {
    toggleManualPanel.addEventListener("click", function() {
      const isHidden = manualPanelBody.classList.contains("d-none");
      if (isHidden) {
        manualPanelBody.classList.remove("d-none");
        toggleManualPanel.textContent = "Sembunyikan Menu Manual";
        if (manualAccessGranted) {
          setManualAccessState(true, "");
        } else {
          setManualAccessState(false, "");
        }
      } else {
        manualPanelBody.classList.add("d-none");
        toggleManualPanel.textContent = "Buka Menu Manual";
      }
    });
  }

  updateTodayPill();
  setInterval(updateTodayPill, 1000);
  window.muatData({ silent: true });
});
