const c = [
  ["tambaram", "potheri", "12.877277, 80.079177", "12.895173, 80.064466"],
  ["potheri", "tambaram", "12.877277, 80.079177", "12.895173, 80.064466"],
];
var f = 0;
var e = 0;
function newfun() {
  var a = document.getElementById("from").value;
  var b = document.getElementById("to").value;

  for (let i = 0; i < c.length; i++) {
    if (c[i][0] === a && c[i][1] == b) {
      console.log(c[i][2], c[i][3]);
      if (e === 0) {
        const d =
          "https://www.google.com/maps/dir/?api=1&origin=" +
          a +
          "&destination=" +
          b +
          "&travelmode=driving&waypoints=" +
          c[i][2];
        window.location.replace(d);
        var f = 1;
      } else {
        const d =
          "https://www.google.com/maps/dir/?api=1&origin=" +
          a +
          "&destination=" +
          b +
          "&travelmode=driving&waypoints=" +
          c[i][3];
        window.location.replace(d);
      }
    }
  }
  if (f === 0) {
    const d =
      "https://www.google.com/maps/dir/?api=1&origin=" +
      a +
      "&destination=" +
      b +
      "&travelmode=driving";
    window.location.replace(d);
  }
}
function changeE() {
  var e = 1;
}
