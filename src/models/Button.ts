import {Action} from './Action';
import {Alignment} from './Alignment';
import {Direction} from './Direction';

export type OperationType = string | number;
export type KeyType = number | number[];

export class Button {
  private _id: string;
  private _action: Action;
  private _alignment?: Alignment;
  private _className?: string;
  private _direction?: Direction;
  private _key?: KeyType;
  private _label: string;
  private _operation: OperationType;

  static counter = 1;

  constructor() {
    this._id = 'btn_' + Button.counter
    Button.counter++;
  }

  get id(): string {
    return this._id;
  }

  get action(): Action {
    return this._action;
  }
  set action(action: Action) {
    this._action = action;
  }

  get alignment(): Alignment {
    return this._alignment;
  }
  set alignment(alignment: Alignment) {
    this._alignment = alignment;
  }

  get className(): string {
    return this._className;
  }
  set className(className: string) {
    this._className = className;
  }

  get direction(): Direction {
    return this._direction;
  }
  set direction(direction: Direction) {
    this._direction = direction;
  }

  get key(): KeyType {
    return this._key;
  }
  set key(key: KeyType) {
    this._key = key;
  }

  get label(): string {
    return this._label || this._operation.toString();
  }
  set label(label: string) {
    this._label = label;
  }

  get operation(): OperationType {
    return this._operation;
  }
  set operation(operation: OperationType) {
    this._operation = operation;
  }

}
