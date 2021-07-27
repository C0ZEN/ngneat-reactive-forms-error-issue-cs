import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  AbstractControl,
  AsyncValidatorFn
} from "@ngneat/reactive-forms";
import { Observable } from "rxjs";
import { of } from "rxjs";

interface IForm {
  count: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public form: FormGroup<IForm> | undefined;
  public error: unknown;

  public ngOnInit(): void {
    try {
      this.form = new FormGroup<IForm>({
        count: new FormControl<number | null>(
          8,
          undefined,
          this._getCountValidators()
        )
      });
    } catch (error) {
      this.error = error;
      console.error(error);
    }
  }

  private _getCountValidators(): AsyncValidatorFn[] {
    return [this._getCountValidator()];
  }

  private _getCountValidator(): (
    control: AbstractControl<number | null>
  ) => Observable<null> {
    return (): Observable<null> => {
      return of(null);
    };
  }
}
