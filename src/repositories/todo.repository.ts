import {generateUniqueId, inject} from '@loopback/core';
import {AnyObject, DataObject, DefaultCrudRepository} from '@loopback/repository';
import {Lb4TodoDbDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.lb4_todo_db') dataSource: Lb4TodoDbDataSource,
  ) {
    super(Todo, dataSource);
  }

  create(entity: DataObject<Todo>, options?: AnyObject | undefined): Promise<Todo> {

    const newId = generateUniqueId();
    entity.id = newId;

    return super.create(entity);
  }
}
