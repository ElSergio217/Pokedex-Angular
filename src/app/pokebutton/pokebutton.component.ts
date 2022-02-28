import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokebutton',
  templateUrl: './pokebutton.component.html',
  styleUrls: ['./pokebutton.component.css']
})
export class PokebuttonComponent implements OnInit {

  pokemons: any[] = [];
  closeResult = '';
  selectedPokemon: any = 0;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  

  ngOnInit(): void {
      this.dataService.getPokemons().subscribe((data:any) => {
        data.pokemon_species.forEach((pokemon:any) => {
          this.dataService.getPokemonInfo(pokemon.name).subscribe((pokemonInfo:any)=>{
            this.pokemons.push(pokemonInfo);
            this.pokemons.sort(function(a, b) { 
              return a.id - b.id;
            });
          });
        });
      })
  }

  open(content:any, pokemonID: Number) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.selectedPokemon = pokemonID;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
