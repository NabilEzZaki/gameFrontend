import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit{
  games: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: GameService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getGames().subscribe(data => {
      this.games = data;
    })
  }

  deleteUser(id: number){
    this.service.deleteGame(id).subscribe(data => {
      this.games = this.games?.filter(game => game.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

}
