import { Component } from '@angular/core';
import { Submission } from '../models/submission';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent 
{
     submissions: Submission[] =
     [
      {

        id:1,
        subject_id:1,
        type_id: 2,
        date: "10/1/2023"
    },
    {

        id:2,
        subject_id:1,
        type_id: 2,
        date: "10/1/2023"
    }

     ]
}
