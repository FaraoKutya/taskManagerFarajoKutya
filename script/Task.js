class Task {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.title = this.elem.children(".title");
    this.description = this.elem.children(".description");
    this.endedate = this.elem.children(".endDate");
    this.userId = this.elem.children(".userId");
    this.status = this.elem.children(".status");
    this.elem.children(".torles").on("click", () => {
      this.TorolTrigger();
    });
    this.elem.children(".modositas").on("click", () => {
      this.ModositTrigger();
    });
    this.setAdatok(adat);
  }

  setAdatok(ertekek) {
    this.title.html(ertekek.title);
    this.description.html(ertekek.description);
    this.endedate.html(ertekek.endedate);
    this.userId.html(ertekek.userId);
    this.status.html(ertekek.status);
  }

  TorolTrigger() {
    let esemeny = new CustomEvent("torles", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }

  ModositTrigger() {
    let esemeny = new CustomEvent("modositas", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }
}
