$(function(){
    const myAjax = new MyAjax();
    const felhasznalok = [];
    let apiVegpont = "http://localhost:3000/user";
    myAjax.adatbeolvas(apiVegpont, felhasznalok, UserValasztas);
});


  function UserValasztas(felhasznalok) {
    // van egy sablonelemünk
    const szuloElem = $(".felhasznalok");
    const sablonElem = $(".felhasznalo");
    szuloElem.empty();
    sablonElem.show();
    felhasznalok.forEach(function (elem, index) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new User(ujElem, elem);
    });
    sablonElem.hide();
  }