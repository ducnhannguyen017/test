import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'prj-training-1';
  data = data;
  result:string[];
  searchString="";
  innerHTML = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
  textAreaValue="adjv\nadfadf\n\a&#10;daf"
  @ViewChild('textArea') textArea:ElementRef;

  search(searchString:any){
    if(searchString===""){
      this.result = this.data;
    }else{
      this.result = this.data.filter((item) => item === searchString);
    }
  }
  change(){
    
    console.log(this.textArea)
  }
  ngOnInit(): void {
    this.result = this.data;
  }
  ngAfterViewInit():void{
    console.log(this.textArea)

  }
  check(){
    // var inp     = document.getElementById("box");
    var str2 = "&#8592; cant touch this";
    var str = this.textAreaValue.split('\n').map((e,index)=>{
        console.log(index)
        if(index===0||index===4){
            return "<br/>"
        }else{
            return `<i style="color:red;margin:0px; position:relative; left:${e.length*12}px" >${str2}</i><br/>`
        }
    }).join("");
    var data = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${this.textArea.nativeElement.offsetWidth}" height="${this.textArea.nativeElement.offsetHeight}">
        <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" 
        style="font-family:monospace;font-style: normal; font-variant: normal; font-size:13.3px;padding:2px;">`+str+`
        
        </div>
        </foreignObject>
        </svg>`;
    var blob = new Blob( [data], {type:'image/svg+xml'} );
    // var url=URL.createObjectURL(blob);
    this.textArea.nativeElement.style.backgroundImage= "url("+URL.createObjectURL(blob)+")";
    console.log("59")
  }
}
