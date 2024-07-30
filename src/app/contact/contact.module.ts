import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes =[
{path: '', component: ContactComponent},
];
@NgModule({

    declarations: [ContactComponent,],

    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule],
})



export class contactModule{

}