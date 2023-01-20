import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.scss']
})
export class SubjectSelectorComponent 
{

  @Input() subject_id: number

  handler = (payload:any) => 
  { 
    this.subject_id = payload.target.value
    this.changeEvent.emit({subject_id:this.subject_id})
  }

  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>()

  subjects: Subject[] = 
  [
    {
      id:1,
      name: "Project Management",
      subjectCode: "TM291",
      professor: "X"

  },
  {
      id:2,
      name: "Technology Entrepreneurship",
      subjectCode: "TM251",
      professor: "Mr. Bean"
  }
  ]}