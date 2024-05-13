import { MigrationInterface, QueryRunner } from "typeorm";

export class UsernameUnique1687423879376 implements MigrationInterface {
    name = 'UsernameUnique1687423879376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e"`);
    }

}
