import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit{
  constructor(private service: GameService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    codebar: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addGame(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
