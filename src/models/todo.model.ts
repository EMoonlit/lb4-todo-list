import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
