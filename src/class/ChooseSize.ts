import { Checkbox } from "../interface/checkbox";
import { FormatSize } from "../interface/formatSize";
import React from 'react';

export class ChooseSize {
  public size: FormatSize[];
  private setSize: React.Dispatch<React.SetStateAction<FormatSize[]>>;
  public checkbox: Checkbox[];
  private setCheckbox: React.Dispatch<React.SetStateAction<Checkbox[]>>;

  constructor(size: FormatSize[], setSize: React.Dispatch<React.SetStateAction<FormatSize[]>>, checkbox: Checkbox[], setCheckbox: React.Dispatch<React.SetStateAction<Checkbox[]>>) {
    this.size = size;
    this.setSize = setSize;
    this.checkbox = checkbox;
    this.setCheckbox = setCheckbox;
  }

  controlCheckbox(id: string, valueSize: number): void{
    const index = this.checkbox.findIndex((checked) => checked.id === id);

    if (index !== -1) {
      const currentChecked = [...this.checkbox];
      const updateChecked = currentChecked[index];

      if (!updateChecked.size.includes(valueSize)) {
        updateChecked.size.push(valueSize);
      }
      this.setCheckbox(currentChecked);
    } else {
      this.setCheckbox((previus) => [...previus, {id: id, size: [valueSize]}]);
    }
  }

  chooseSize = (id: string, valueSize: number): void => {
    this.controlCheckbox(id, valueSize);
    const index = this.size.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updateSize = [...this.size];
      const currentSize = updateSize[index];

      if (!currentSize.size.includes(valueSize)) {
        currentSize.size.push(valueSize);
      }

      this.setSize(updateSize);
    } else {
      this.setSize((previusValue) => [...previusValue, { id: id, size: [valueSize] }]);
    }
  };

  clearSize(id: string):void {
    const clearCheck = this.checkbox.filter((item) => item.id !== id);
    this.setCheckbox(clearCheck);
    this.setSize([]);
  }
}
