// Copyright (C) 2018 Aleksey Melnikov
// This project is licensed under the terms of the MIT license.
// https://github.com/m-alx/yopsilon-mask

export class MaskSectionValue {

  //public inSection: boolean;

  public beforeChars: string;
  public currentChar: string;
  public afterChars: string;

  public append(s: string) {
    this.afterChars += s;
  }

  public value(newChar: string = null) {
    if(newChar != null)
      return this.beforeChars + newChar + this.afterChars;
    else
      return this.beforeChars + this.currentChar + this.afterChars;
  }

  public get length() {
    return this.value().length;
  }

  constructor(sectionValue: string, sectionPos: number, selStart: number) {

    let selStart_local = selStart - sectionPos;

    if(selStart_local < 0 || selStart_local > sectionValue.length)
    {
      this.beforeChars = sectionValue;
      this.currentChar = "";
      this.afterChars = "";
      //this.inSection = false;
      return;
    }

    //this.inSection = true;

    // Отрежем лишнее, если вдруг
    /*
    if(sectionValue.length > maxLength) {
      console.log("Invalid value length: " + sectionValue);
      sectionValue = sectionValue.substring(0, maxLength - 1);
    }*/

    this.beforeChars = sectionValue.substring(0, selStart_local);
    this.currentChar = sectionValue.substring(selStart_local, selStart_local + 1);
    this.afterChars = sectionValue.substring(selStart_local + 1);

  }

}
