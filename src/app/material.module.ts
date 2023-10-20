import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    exports: [
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}