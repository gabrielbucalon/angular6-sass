import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-forms',
  templateUrl: './general-forms.component.html',
  styleUrls: ['./general-forms.component.scss']
})
export class GeneralFormsComponent implements OnInit {

  brandPhotoWorker = ' Foto do trabalhador';
  brandTitlePhoto = 'Anexar Foto';
  brandTitlePersonalData = ' Dados pessoais';
  attachDocument = 'Anexar Documento';
  outherFile = {field: 'Outro Arquivo'};
  brandEndress = 'Endereço';

  sendFiles = [
    {name: 'Exame Medico'},
    {name: 'Carteira de trabalho'},
    {name: 'CNH'},
    {name: 'Comprovante de endereço'},
  ];

  endress = [
    {name: 'CEP'},
    {name: 'Endereço'},
    {name: 'Complemento'},
    {name: 'Bairro'},
    {name: 'Estado'},
    {name: 'Cidade'},
  ];

  personalData = [
    {name: 'Matricula'},
    {name: 'Nome'},
    {name: 'N° Pis *'},
    {name: 'CPF'},
    {name: 'RG'},
    {name: 'N° CTPS'},
    {name: 'Data Nascimento'},
    {name: 'Data Admissão'},
    {name: 'Data Admissão'},
    {name: 'Mãe'},
    {name: 'Pai'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
