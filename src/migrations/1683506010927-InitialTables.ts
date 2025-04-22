import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTables1683506010927 implements MigrationInterface {
    name = 'InitialTables1683506010927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP CONSTRAINT "FK_b55f5a5f5d6443a0c5689df4d31"`);
        await queryRunner.query(`ALTER TABLE "Orders" DROP CONSTRAINT "REL_b55f5a5f5d6443a0c5689df4d3"`);
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD "image_primary" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD "usersUserId" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_ed0b2f871e3f4a5a24db60c6644" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD CONSTRAINT "FK_1c20029552b5dd2a540af57fdc5" FOREIGN KEY ("usersUserId") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP CONSTRAINT "FK_1c20029552b5dd2a540af57fdc5"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_ed0b2f871e3f4a5a24db60c6644"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "usersUserId"`);
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "image_primary"`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD CONSTRAINT "REL_b55f5a5f5d6443a0c5689df4d3" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD CONSTRAINT "FK_b55f5a5f5d6443a0c5689df4d31" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
