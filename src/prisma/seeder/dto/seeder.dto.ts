import { IsEnum } from "class-validator";
import { TableEnum } from "../../../shared/entities";


export class TableSeederDto {
    @IsEnum(TableEnum)
    tbl_name: TableEnum;
}