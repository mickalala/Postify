import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreatePublicationsDto {
    @IsInt()
    @IsNotEmpty()
    mediaId: number;

    @IsInt()
    @IsNotEmpty()
    postId: number;

    @IsNotEmpty()
    date: string;
}
