import { Component, ViewChild, ViewContainerRef, Type, ComponentRef } from '@angular/core';
import { MobileComponent } from './products/mobile/mobile.component';
import { copyFile } from 'fs/promises';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TabComponent } from './products/tab/tab.component';
import { PcComponent } from './products/pc/pc.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  @ViewChild('userChoice', { read: ViewContainerRef, static: true }) userChoice !: ViewContainerRef;

  dynamicComponentName: any = { mobile: "mobile", laptop: "laptop", tab: "tab", pc: "pc" };
  componentMap = new Map<string, ComponentRef<any>>();

  index = 0;

  onChoiceClick(choice: string) {
    //this.userChoice.clear();
    const comp = this.getComponentType(choice);
    const component = this.userChoice.createComponent(comp);
    let uniqueName = choice + " - " + this.index;
    component.instance.name = uniqueName;
    
    component.instance.close.subscribe((res : any)=>{
    this.onDeleteComponent(res.name);
   });

    this.componentMap.set(uniqueName, component);
    this.index++;
  }

onDeleteComponent( delComp : string){
if(this.componentMap.has(delComp)){
  this.componentMap.get(delComp)?.destroy();
  this.componentMap.delete(delComp);
}
}

  getComponentType(name: string): Type<any> {
    let componentType: Type<any> = this.dynamicComponentName.mobile;

    switch (name) {
      case this.dynamicComponentName.mobile:
        {
          componentType = MobileComponent;
          break;
        }

      case this.dynamicComponentName.laptop:
        {
          componentType = LaptopComponent;
          break;
        }

      case this.dynamicComponentName.tab:
        {
          componentType = TabComponent;
          break;
        }

      case this.dynamicComponentName.pc:
        {
          componentType = PcComponent;
          break;
        }

    }

    return componentType;
  }

}
