import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ValueClass from '../../models/value';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor() {}

  values: ValueClass[] | null = null;
  currentValue: Subject<ValueClass | null> = new Subject<ValueClass | null>();

  public setValuesFromContent(pValuesContent: any): void {
    if (
      pValuesContent === null ||
      typeof pValuesContent !== 'object' ||
      pValuesContent.length === 0
    )
      throw new Error('Invalid values content');

    try {
      this.values = pValuesContent.map((valueData: any) => {
        return new ValueClass(
          valueData.title,
          valueData.description,
          valueData.img
        );
      });

      this.currentValue.next(this.values![0]);
    } catch (error) {
      throw new Error('Invalid values content');
    }
  }

  public setCurrentValue(value: ValueClass): void {
    this.currentValue.next(value);
  }
}
