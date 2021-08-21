import { AfterViewInit, Component, Directive, OnInit } from "@angular/core";
import { ElementRef, ViewChild, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as $ from "jquery";
declare var $: any;
@Directive({ selector: "child-directive" })
class ChildDirective {}

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  @ViewChild(ChildDirective) child!: ChildDirective;
  @ViewChild("available", { read: TemplateRef }) available!: TemplateRef<any>;
  @ViewChild("booked", { read: TemplateRef }) booked!: TemplateRef<any>;
  @ViewChild("availablelink", { read: TemplateRef })
  availablelink!: TemplateRef<any>;
  data: Date = new Date();
  focus;
  focus1;
  nodes: any = [
    {
      name: "Yeswanth Sai",

      image: "",
      title: "Chief Executive Officer",
      childs: [
        {
          name: "Varsha",
          cssClass: "ngx-org-ceo",
          image: "assets/node.svg",
          title: "HR",
        },
      ],
    },
  ];
  constructor(private httpClient: HttpClient, private modalService: NgbModal) {}  
  projectName: any = "Bloom-City-2";
  mapPath: any = "../../../assets/vacancy/" + this.projectName + "/map.jpg";
  vacancyPath: any =
    "../../../assets/vacancy/" + this.projectName + "/vacancy.json";
  vacancy: any;
  viewBoxSize: any;
  iFrameModel = "https://www.klapty.com/tour/tunnel/Fpu0P7qcMs";
  closeResult: string;
  forwardLink: any;
  forwardName: any;
  ngOnInit(): void {
    this.httpClient.get(this.vacancyPath).subscribe((data) => {
    
      this.vacancy = data;
      console.log( this.vacancy);
    });
    this.viewBoxSize = "0 0 1200 1920"
  }
  ngAfterViewInit(): void {
    //const ele = this._elementRef.nativeElement.querySelector('img-container');
    const imageContainer = $(".img-container");
    let paths = $(".path");
    const desc = $(".desc-container");
    $(".path").bind("mouseover", function (event: any) {
      desc.text("Available");
    });
    $(".path").bind("mouseout", function () {
      desc.text("");
    });
  }
  getStatus(phase: any, plotno: any, status: any) {
    // getStatus : Based on the selection, Shows a modal to know the
    // status whether the plot is available or booked.
    console.log("Clicked inside svg path with plot no");
    console.log(phase);
    console.log(plotno);
    console.log(status);

    this.openModal(this.availablelink, "modal_mini", "");

    if (status == "available") {
      this.openModal(this.available, "modal_mini", "");
    } else {
      this.openModal(this.booked, "modal_mini", "");
    }
  }

  openModal(content, type, modalDimension) {
    if (modalDimension === "sm" && type === "modal_mini") {
      this.modalService
        .open(content, { windowClass: "modal-mini modal-primary", size: "sm" })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else if (modalDimension == undefined && type === "Login") {
      this.modalService
        .open(content, { windowClass: "modal-login modal-primary" })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else {
      this.modalService.open(content).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
