import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from 'src/dto/create-tasks.dto';
import { Console } from 'console';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: '123', title: 'hello', description: '1234', status: TaskStatus.OPEN },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => {
      return task.id === id;
    });
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTaskbyId(id: string): Task[] {
    const tasks: Task[] = this.tasks.filter((task) => {
      return task.id !== id;
    });
    console.log(tasks);
    return tasks;
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
