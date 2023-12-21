import { Piscina } from "./Piscina";

export class PiscinaDTO implements Piscina{

    Tamano: string = "";
    Color: string = "";
    Piso: string = "";
    Solarium: string = "";
    Luces: string = "";
    Escaleras: string = "";

	constructor() {
	}


    //mensajes armados ¿?
    getMsjTamaño(): string {
        if (this.Tamano) {
            return ' de tamaño: ' + this.Tamano;
        }
        return '';
        
    }
    getMsjColor(): string {
        if (this.Color) {
             return ', de color: ' + this.Color;
        }
        return '';
       
    }
    getMsjPiso(): string {
        if (this.Piso) {
            return ', con el piso: ' + this.Piso;
        }
        return '';
    }
    getMsjSolarium(): string {
        if (this.Solarium) {
            return ', con solarium';
        }
        return '';
    }
    getMsjLuces(): string {
        if (this.Luces) {
            return ', luces de color: ' + this.Luces;
        }
        return '';
    }
    getMsjEscaleras(): string {
        if (this.Escaleras) {
            return ', con escaleras';
        }
        return '';
    }
    
    getDataStatus(): boolean{
        if (this.Tamano || this.Color || this.Piso || this.Solarium || this.Luces || this.Escaleras) {
         return true;
        }
        return false
    }

    // getters
    getTamaño(): string{
        return this.Tamano;
    }
    getColor(): string{
        return this.Color;
    }
    getPiso(): string{
        return this.Piso;
    }
    getSolarium(): string{
        return this.Solarium;
    }
    getLuces(): string{
        return this.Luces;
    }
    getEscaleras(): string{
        return this.Escaleras;
    }

    // setters
    setTamaño(Tamaño:string):void{
        this.Tamano = Tamaño;
    }
    setColor(Color:string):void{
        this.Color = Color;
    }
    setPiso(Piso:string):void{
        this.Piso = Piso;
    }
    setSolarium(Solarium:string):void{
        this.Solarium = Solarium;
    }
    setLuces(Luces:string):void{
        this.Luces = Luces;
    }
    setEscaleras(Escaleras:string):void{
        this.Escaleras = Escaleras;
    }

}