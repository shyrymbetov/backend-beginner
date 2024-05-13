import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBookCover1686815515119 implements MigrationInterface {
    name = 'AddBookCover1686815515119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_entity" ADD "coverImageName" character varying`);
        await queryRunner.query(`ALTER TABLE "book_entity" ADD "coverMimeType" character varying`);
        await queryRunner.query(`ALTER TABLE "book_entity" ADD "coverImageBuffer" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_entity" DROP COLUMN "coverImageBuffer"`);
        await queryRunner.query(`ALTER TABLE "book_entity" DROP COLUMN "coverMimeType"`);
        await queryRunner.query(`ALTER TABLE "book_entity" DROP COLUMN "coverImageName"`);
    }

}
