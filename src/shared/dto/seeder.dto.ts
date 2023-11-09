import { IsEnum } from "class-validator";
import { TableEnum } from "../entities";




export class TableSeederDto {
    @IsEnum(TableEnum)
    tbl_name: TableEnum;
}