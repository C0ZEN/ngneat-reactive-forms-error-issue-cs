import { BrowserModule } from "@angular/platform-browser";
import { ClassProvider, ErrorHandler, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

class GlobalErrorHandler implements ErrorHandler {
  public handleError(error: unknown): void {
    console.debug("Catched error!");
    console.error(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    } as ClassProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
