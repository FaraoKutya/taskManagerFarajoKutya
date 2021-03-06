$(function () {
  const myAjax = new MyAjax();
  const taskok = [];
  let apiVegpont = "http://localhost:3000/tasks?_expand=user";

  myAjax.adatbeolvas(apiVegpont, taskok, TaskValasztas);

  /* Rendezés határidő szerint */
  $(document).ready(function () {
    $("#kategoria").on("change", function () {
      let apiVegpont = "http://localhost:3000/task";
      switch ($("#kategoria").val()) {
        case "datumnovekvo":
          let novekvo = "?_sort=endedate&_order=asc";
          apiVegpont += novekvo;
          // ajax hívás
          myAjax.adatbeolvas(apiVegpont, taskok, TaskValasztas);
          break;
        case "datumcsokkeno":
          let csokkeno = "?_sort=endedate&_order=desc";
          apiVegpont += csokkeno;
          // ajax hívás
          myAjax.adatbeolvas(apiVegpont, taskok, TaskValasztas);
          break;
        default:
          console.log("alapértelmezett");
      }
    });
  });

  function TaskValasztas(taskok) {
    // van egy sablonelemünk
    const szuloElem = $(".taskAdatok");
    const sablonElem = $(".sablon .taskok");
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
      id: $("#ide").val(),
      title: $("#cim").val(),
      description: $("#leiras").val(),
      endedate: $("#hatarido").val(),
      userId: $("#feladatotv").val(),
      status: $("#legordulostatusz").val(),
    };
    myAjax.adatkuldes(apiVegpont, ujAdat);
  });

  $(".modosit").on("click", () => {
    let ujAdat = {
      id: $("#ide").val(),
      title: $("#cim").val(),
      description: $("#leiras").val(),
      endedate: $("#hatarido").val(),
      userId: $("#feladatotv").val(),
      status: $("#legordulostatusz").val(),
    };
    let helyiApiVegpont = "http://localhost:3000/task";
    myAjax.adatmodosit(helyiApiVegpont, ujAdat, $("#ide").val());
  });

  /* Törlés */
  $(window).on("torles", (event) => {
    //console.log(event.detail.id);
    myAjax.adattorles(apiVegpont, event.detail.id);
  });

  $(window).on("modositas", function (event) {
    console.log("módosítás");
  });
});
