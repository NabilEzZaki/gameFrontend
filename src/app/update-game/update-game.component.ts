import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit{
  game?: Game
  data: any


  constructor(private service: GameService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getGameById(id).subscribe(data => {
      this.game = data
      console.log(this.game)
    })
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    codebar: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateGame(this.game?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }
}
