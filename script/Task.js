class Task {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.id = id;
    this.title = this.elem.childre(".title");
    this.description = this.elem.childre(".description");
    this.endDate = this.elem.childre(".endDate");
    this.userId = this.elem.childre(".userId");
    this.status = this.elem.childre(".status");
    this.adat;
    this.elem.children(".torles").on("click", () => {
      this.TorolTrigger();
    });

    this.elem.children(".modositas").on("click", () => {
      this.ModositTrigger();
    });
  }

  setAdatok(ertekek) {
    this.title.html(ertekek.title);
    this.description.html(ertekek.description);
    this.endDate.html(ertekek.endDate);
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
