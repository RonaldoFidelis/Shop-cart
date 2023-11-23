import { FormatSize } from "../interface/formatSize";
import React from 'react';

export class ChooseSize {
  public size: FormatSize[];
  private setSize: React.Dispatch<React.SetStateAction<FormatSize[]>>;

  constructor(size: FormatSize[], setSize: React.Dispatch<React.SetStateAction<FormatSize[]>>) {
    this.size = size;
    this.setSize = setSize;
  }

  chooseSize = (id: string, valueSize: number): void => {
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

  clearSize():void {
    this.setSize([]);
  }
}
