console.log("Program Start")
console.log("ver 1")
// Start

if (window.navigator.onLine) {
    console.log("online");

  } else {
    console.log("offline");
    alert('インターネットに接続されていません。');
    let internet = 1;
    console.log(internet)
  }

document.getElementById("sample").addEventListener("click", function () {
  const textbox = document.getElementById("message");
  const value = textbox.value;
  console.log(value);
  let serach = "https://kids.yahoo.co.jp/yomigana?p=" + value + "&ykvrank1=&ykvdesturl=https%3A%2F%2Fkids.yahoo.co.jp%2Fsearch";
  console.log(serach)

  window.location.href = serach;
}, false);

document.getElementById("version").addEventListener("click", function () {
  alert("Version:Alha 1,0,2")

}, false);

