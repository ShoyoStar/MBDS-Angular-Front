import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit{
  titre = 'Application de gestion des assignments';
  // champs du formulaire
  nomAssignment = '';
  dateDeRendu?:Date;
  boutonActif = false;

  assignmentSelectionne?:Assignment;

  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2022-01-10"),
      rendu : false
    },
    {
      nom:"Devoir Grails de Mr Galli",
      dateDeRendu: new Date("2022-12-10"),
      rendu : true
    },
    {
      nom:"Devoir IOS de Mr Amosse",
      dateDeRendu: new Date("2022-09-15"),
      rendu : true
    }
  ];

  ngOnInit() {
    /*
    console.log("avant affichage du composant !");

    setTimeout(() => {
      console.log("3 secondes se sont écoulées");
      this.boutonActif = true;
    }, 3000);
    */
  }

  onSubmit() {
    if((!this.nomAssignment) || (!this.dateDeRendu)) { return; }

    console.log(this.nomAssignment + " " + this.dateDeRendu);

    let assignment = new Assignment();
    assignment.nom = this.nomAssignment;
    assignment.dateDeRendu = this.dateDeRendu;
    assignment.rendu = false;

    this.assignments.push(assignment);
  }

  assignmentClicke(a:Assignment) {
    console.log("Assignment cliqué : " + a.nom);
    
    this.assignmentSelectionne = a;
  }
}
