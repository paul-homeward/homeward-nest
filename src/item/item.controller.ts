import { Controller, Get, Body, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import {ItemDTO} from './item.dto';
import {User} from '../user.decorator'

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get()
  public getAll(): Promise<ItemDTO[]> {
    return this.serv.getAll()
  }

  @Post()
  public post(@User() user: User, @Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.serv.create(dto, user);
  }
}