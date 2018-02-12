export class Alert {
    public title:string;
    public body:string;
    public style:string;
    public delay:number;
    public visible:boolean;
    public disapear:boolean;

    constructor(title = "", body = "", style = "info", delay = 5000) {
        this.title = title || "";
        this.body = body || "";
        this.style = style;
        this.delay = delay;
        this.visible = true;
        this.disapear = false;
    }
}
