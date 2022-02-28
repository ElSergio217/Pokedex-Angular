import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService{
    constructor (private http: HttpClient){}

    getPokemons(){
        return this.http.get('https://pokeapi.co/api/v2/generation/1');
    }

    getPokemonInfo(name: string){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
}