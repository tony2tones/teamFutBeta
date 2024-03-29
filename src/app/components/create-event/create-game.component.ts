import { Component, ViewChild, OnInit } from "@angular/core";
import { GameService } from "../../services/games.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastMessageService } from "../../services/toast-message.service";

import { MatStepper } from "@angular/material";
import { Game } from "../../model/game.model";
import { Player } from "../../model/game.model";

export interface User {
  name: string;
}
@Component({
  selector: "create-game",
  templateUrl: "./create-game.component.html",
  styleUrls: ["./create-game.component.css"],
})
export class CreateGameComponent implements OnInit {
  eventForm: FormGroup;
  detailsForm: FormGroup;

  event: Game;
  isLinear = true;
  @ViewChild("step1", { static: false }) stepper: MatStepper;

  attendingState: Array<string> = ["Confirmed", "Maybe"];
  gameDetails: Game[] = [];
  details: any;
  players: Player[] = [];
  player: Player;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
    private toastr: ToastMessageService
  ) {}

  ngOnInit() {
    this.detailsForm = this.fb.group({
      title: ["Sunday Game", Validators.compose([Validators.required])],
      location: ["Mowbray", Validators.compose([Validators.required])],
      date: ["this sunday", Validators.compose([Validators.required])],
      time: ["09:00", Validators.compose([Validators.required])],
      players: [],
    });
    this.eventForm = this.fb.group({
      name: [""],
      state: ["", Validators.compose([Validators.required])],
    });
  }

  addDetails() {
    this.details = this.detailsForm.value;
  }

  addConfirmed() {
    this.player = this.eventForm.value;
    let newArray = [];
    this.players.push(...newArray, this.player);
  }

  addGameDetails() {
    // let group;
    console.log("details ", this.details, "players ", ...this.players);
    this.gameDetails.push(this.details);
    this.details.players = this.players;
    console.log("THE DEETs", this.gameDetails);
    // this.gameDetails = group.concat(this.details, this.players);
    // this.gameDetails = group = this.details.push(this.players)
  }

  deleteConfirmed(name: string) {
    return this.players.filter((value) => {
      if (value.name === name) {
        return this.players.splice(this.players.indexOf(value), 1);
      }
    });
  }

  // https://www.reddit.com/r/learnprogramming/comments/bs4vjf/tsfirebaseerror_function_documentreferenceset/

  CraeteGameEvent() {
    let record = {};
    record["date"] = this.details.date;
    record["location"] = this.details.location;
    record["players"] = this.details.players;
    record["time"] = this.details.time;
    record["title"] = this.details.title;
    this.isLoading = true;
    this.gameService.createGame(record).then(
      (response) => {
        console.log("the full details ", this.gameDetails);
        console.log("the full response ", response);
        this.isLoading = false;
        this.router.navigate(["/"]),
          this.toastr.showSuccess(
            "Has been successfully created.",
            "Footy game"
          );
      },
      (error) => {
        console.log(error);
        this.toastr.showFail(
          "Something went wrong, please select the reset option to try again.",
          "Error"
        );
      }
    );
  }
}
