import { LocalDate } from "./localdate.model";

export class User {
    private _name: string;
    private _family: string;
    private _itemNum: number;
    private _birthday: LocalDate;
    private _numberOfChild: number;
  
    constructor(name: string, family: string, itemNum?: number, birthday?: LocalDate, numberOfChild?: number) {
      this._name = name;
      this._family = family;
      this._birthday = birthday;
      this._numberOfChild = numberOfChild;
    }
  
    get name(): string {
      return this._name;
    }
  
    get family(): string {
      return this._family;
    }
  
    get itemNum(): number {
      return this._itemNum;
    }
  
    get birthday(): LocalDate {
      return this._birthday;
    }

    get numberOfChild(): number {
      return this._numberOfChild;
    }

  }