import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import jwt_decode from "jwt-decode";
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allNotes;
  token;
  decoded;
  isRenedered = false;
  isRenedered2 = false;
  NoteID;
  
  constructor(private _Router:Router, private _NotesService:NotesService) {
    try {
      this.token = localStorage.getItem('NotesToken');
      this.decoded = jwt_decode(this.token);
    } catch (error) {
      localStorage.clear()
      this._Router.navigate(['/signin'])
    }
    
    // console.log(this.decoded);
    let dataExctractedJWT = {
      token: this.token,
      userID: this.decoded._id
    }
    this._NotesService.getAllNotes(dataExctractedJWT).subscribe((data)=>{
      this.isRenedered = true;
      this.allNotes = data.Notes
    })

    if(!localStorage.getItem('NotesToken')) {
      this._Router.navigate(['/signin'])
    }
  }

  addNoteFormGroup = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required])
  })
  
  editNoteFormGroup = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required])
  })

  addNewNote(){
    let data = {
      title: this.addNoteFormGroup.value.title,
      desc: this.addNoteFormGroup.value.desc,
      token: this.token,
      citizenID: this.decoded._id
    }
    // console.log(this.addNoteFormGroup.value)
    $('#addNote').modal('hide')
    this.isRenedered = false;
    this._NotesService.addNoteToDB(data).subscribe((data)=>{
      if (data.message == 'success') {
        let dataExctractedJWT = {
          token: this.token,
          userID: this.decoded._id
        }
        this._NotesService.getAllNotes(dataExctractedJWT).subscribe((data)=>{
          this.isRenedered = true;
          this.allNotes = data.Notes
        })
        this.addNoteFormGroup.reset()
      }
    })
  }

  getID(id) {
    console.log(id)
    this.NoteID = id
  }

  deleteNote () {
    let data = {
      NoteID: this.NoteID,
      token: this.token
    }
    $('#deleteNote').modal('hide')
    this.isRenedered = false;
    this._NotesService.deleteNoteFromDB(data).subscribe((data)=>{
      if (data.message == 'deleted') {
        let dataExctractedJWT = {
          token: this.token,
          userID: this.decoded._id
        }
        this._NotesService.getAllNotes(dataExctractedJWT).subscribe((data)=>{
          this.isRenedered = true;
          this.allNotes = data.Notes
        })
      }
    })
  }

  setValue() {
    for (let index = 0; index < this.allNotes.length; index++) {
      if (this.allNotes[index]._id == this.NoteID) {
        console.log(this.allNotes[index]);
        this.editNoteFormGroup.controls.title.setValue(this.allNotes[index].title)
        this.editNoteFormGroup.controls.desc.setValue(this.allNotes[index].desc)
      }
    }
  }

  editNote() {
    let editData = {
      title:this.editNoteFormGroup.value.title,
      desc:this.editNoteFormGroup.value.desc,
      NoteID:this.NoteID,
      token:this.token
    }
    $("#editNote").modal("hide");
    this.isRenedered = false;
    this._NotesService.updateNoteInDB(editData).subscribe((res)=>{
      if(res.message == 'updated') {
        let dataExctractedJWT = {
          token: this.token,
          userID: this.decoded._id
        }
        this._NotesService.getAllNotes(dataExctractedJWT).subscribe((data)=>{
          this.isRenedered = true;
          this.allNotes = data.Notes
        })
      }
    })
  }

  ngOnInit() {
    // $('#profile').particleground()   
  }

  // displayAllNotes() {
  //   let data = {
  //     token: this.token,
  //     userID: this.decoded._id,
  //   };
  //   this._NotesService.getAllNotes(data).subscribe((res) => {
  //     console.log(res);
  //     if (res.message == "success") {
  //       this.isRenedered = true;
  //       this.allNotes = res.Notes;
  //     } else {
  //       localStorage.clear();
  //       this._Router.navigate(["/signin"]);
  //     }
  //   });
  // }

}
