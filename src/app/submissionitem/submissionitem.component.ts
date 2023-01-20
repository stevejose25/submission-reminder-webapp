import { Component,Input } from '@angular/core';
import { Submission } from '../models/submission';

@Component({
  selector: 'app-submissionitem',
  templateUrl: './submissionitem.component.html',
  styleUrls: ['./submissionitem.component.scss']
})
export class SubmissionitemComponent 
{

  @Input() submission: Submission

}
