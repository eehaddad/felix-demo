import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsn-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public commonQuestions = [
    {
      question: "Do you accept private insurance?",
      answer: "At this time, we are only accepting Kaiser insurance or cash pay."
    },
    {
      question: "Do you provide services for minors?",
      answer: "At this time, we are only providing services for individuals 18 years or older."
    },
    {
      question: "Can you be retained by a private attorney? ",
      answer: "Yes, you can contact our providers to obtain fees for services rendered."
    },
    {
      question: "For forensic evaluations, can you conduct an evaluation if the examinee is in custody? ",
      answer: "Yes, we can conduct in-custody and out-of-custody evaluations."
    },
    {
      question: "What types of therapy/counseling do you offer? ",
      answer: `Our providers practice from a variety of perspectives and treatment strategies. 
      Each provider has their own unique style and manner that contributes to the success of
      the therapy they offer. In general, we have clinicians who practice from treatment models such as cognitive-
      behavioral, solution-focused, brief or long-term models, and faith-based.`
    },
  ]
}
