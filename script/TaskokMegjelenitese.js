$(function () {
  const myAjax = new MyAjax();
  const taskok = [];
  let apiVegpont = "http://localhost:3000/task";
  let apiUserNev = "_expand=user.name";

  myAjax.adatbeolvas(apiVegpont, taskok, TaskValasztas);

  function TaskValasztas(taskok) {
    // van egy sablonelemünk
    const szuloElem = $(".taskAdatok");
    const sablonElem = $(".taskok");
    szuloElem.empty();
    sablonElem.show();
    taskok.forEach(function (elem, index) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new Task(ujElem, elem);
    });
    sablonElem.hide();
  }

  /* Törlés */
  $(window).on("torles", (event) => {
    //console.log(event.detail.id);
    myAjax.adattorles(apiVegpont, event.detail.id);
  });

  $(window).on("modositas", function (event) {
    console.log("módosítás");
  });
});
