import { MigrationInterface, QueryRunner } from "typeorm"
import * as bcrypt from 'bcrypt';

export class AddAdminUser1684919920120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const pwd = 'qwerty'
        const hashedPwd = await bcrypt.hash(pwd, 10)
        hashedPwd.toString()
        await queryRunner.query(`insert into user_entity (username, "firstName", "lastName", "hashedPassword", role)
        values('adik', 'Adilet', 'Amaddyq', '${hashedPwd}', 'admin')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DELETE FROM user_entity WHERE username = 'adik';`);
    }

}
