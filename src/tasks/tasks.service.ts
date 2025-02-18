import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Samuel dos santos Oliveira',
      description: 'Desenvolvedor fullstack',
      completed: false,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findOne(id: string) {
    return this.tasks.find((task) => task.id === Number(id));
  }

  create(body: any) {
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...body,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  update(id: string, body: any) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex >= 0) {
      const taskItem = this.tasks[taskIndex];

      this.tasks[taskIndex] = {
        ...taskItem,
        ...body,
      };
    }

    return 'Tarefa atualizada com sucesso!';
  }

  delete(id: string) {
    return id;
  }
}
