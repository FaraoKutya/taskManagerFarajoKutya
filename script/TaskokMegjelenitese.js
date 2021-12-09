$(function () {
  const myAjax = new MyAjax();
  const taskok = [];
  let apiVegpont = "http://localhost:3000/task";

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

  $(".ujtask").on("click", () => {
    let ujAdat = {
        "id": $("#ide").val(),
        "title": $("#cim").val(),
        "description": $("#leiras").val(),
        "endedate": $("#hatarido").val(),
        "userId": $("#feladatotv").val(),
        "status": $("#legordulostatusz").val()
    };
    myAjax.adatkuldes(apiVegpont, ujAdat);
  });

  /* Törlés */
  $(window).on("torles", (event) => {
    console.log(event.detail.id);
    myAjax.deleteAdat("adatbazis.json", event.detail.id);
  });

  $(window).on("modositas", function (event) {
    console.log("módosítás");
  });
});
