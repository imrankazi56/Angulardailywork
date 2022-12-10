import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Assinment1Component } from './assinment1/assinment1.component';

import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CustdirDirective } from './custdir.directive';

import { TestComponent } from './test/test.component';
import { YesComponent } from './yes/yes.component';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { HooksComponent } from "./hooks/HooksComponent";
import { DirectiveAssigComponent } from './directive-assig/directive-assig.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ArrayCompComponent } from './array-comp/array-comp.component';
import { IncreDecrementComponent } from './incre-decrement/incre-decrement.component';
import { ChildComponent } from './child/child.component';
import { ChildAdditionComponent } from './child-addition/child-addition.component';
import { AdditionComponent } from './addition/addition.component';
import { PractiseComponent } from './practise/practise.component';
import { ArryPushNdRemoveComponent } from './arry-push-nd-remove/arry-push-nd-remove.component';
import { PasswordComponent } from './password/password.component';
import { HookPractiseComponent } from './hook-practise/hook-practise.component';
// import { SimpleTemplateFormComponent } from './simple-template-form/simple-template-form.component';
import { LifeCycleHookParentComponent } from './life-cycle-hook-parent/life-cycle-hook-parent.component';
import { LifeCycleHookChildComponent } from './life-cycle-hook-child/life-cycle-hook-child.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { RegistrartionFormComponent } from './registrartion-form/registrartion-form.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { FormImranComponent } from './form-imran/form-imran.component';
import { HeroComponent } from './hero/hero.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';


@NgModule({
  declarations: [
 LifeCycleHookParentComponent,
 LifeCycleHookChildComponent,

    AppComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assinment1Component,
   
    NgSwitchComponent,
    AttributeComponent,
    CustdirDirective,
  
    TestComponent,
  
    YesComponent,
  
    EventComponent,
  
    PropertyComponent,
  
    HooksComponent,
  
    DirectiveAssigComponent,
  
    TemplateReferenceComponent,
  
    ArrayCompComponent,
  
    IncreDecrementComponent,
  
    ChildComponent,
  
    ChildAdditionComponent,
  
    AdditionComponent,
  
    PractiseComponent,
  
    ArryPushNdRemoveComponent,
  
    PasswordComponent,
  
    HookPractiseComponent,
  
    // SimpleTemplateFormComponent,
  
    FormExampleComponent,
  
    RegistrartionFormComponent,
    SimpleformComponent,
    FormImranComponent,
    HeroComponent,
    StudentRegistrationFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
