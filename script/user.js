class User{
    constructor(elem, adat){
        this.elem = elem;
        this.adat = adat;
        this.id = this.elem.children(".userId");
        this.name = this.elem.children(".userName");
        this.setAdatok(adat);
    }

    setAdatok(ertekek){
        this.id.html(ertekek.id);
        this.name.html(ertekek.name);
    }
}