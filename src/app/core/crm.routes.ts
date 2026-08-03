import { Routes } from "@angular/router";
import { Outreach } from "../features/outreach/components/outreach/outreach";
import { ClientDirectoryView } from "../features/clientDirectory/components/client-directory-view/client-directory-view";

export const CRM_ROUTES : Routes = [
   {
    path:'', component:Outreach
   },
   {
    path:"clientDirectory", component:ClientDirectoryView
   }
]