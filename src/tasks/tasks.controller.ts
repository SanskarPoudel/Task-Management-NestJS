import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-tasks.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  //   @Post()
  //   createTask(@Body() body: { title: string; description: string }) {
  //     return this.tasksService.createTask(body.title, body.description);
  //   }

  //Alternatively

  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }

  //Using DTO
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskbyId(@Param('id') id: string): Task[] {
    return this.tasksService.deleteTaskbyId(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ) {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
