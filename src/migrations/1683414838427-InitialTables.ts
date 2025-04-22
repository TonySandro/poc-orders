import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTables1683414838427 implements MigrationInterface {
    name = 'InitialTables1683414838427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying(50) NOT NULL, "state" character varying(150) NOT NULL, "city" character varying(200) NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Wastes" ("wastes_id" SERIAL NOT NULL, "points" integer NOT NULL, "type" character varying NOT NULL, "category" character varying, "device" character varying, "state" character varying, "weight" character varying, "solicitaitonSolicitationId" integer, CONSTRAINT "PK_fe9e32c44f46c42ec539335ba6c" PRIMARY KEY ("wastes_id"))`);
        await queryRunner.query(`CREATE TABLE "Solicitation" ("solicitation_id" SERIAL NOT NULL, "points" integer NOT NULL, "status" character varying NOT NULL, "isReceive" boolean NOT NULL DEFAULT false, "create_date" TIMESTAMP NOT NULL, "update_date" TIMESTAMP NOT NULL, "usersUserId" integer, CONSTRAINT "PK_907ee0025408337ce191e3287c2" PRIMARY KEY ("solicitation_id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("user_id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "phone" character varying NOT NULL, "points" integer NOT NULL DEFAULT '10000', "email" character varying NOT NULL, "password" character varying NOT NULL, "cpf" character varying NOT NULL, "addressId" uuid, CONSTRAINT "PK_af4be3eb77a4bdbafac6f808ff3" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "Orders" ("order_id" SERIAL NOT NULL, "user_id" integer NOT NULL, "status" character varying NOT NULL, "points" integer NOT NULL, "create_date" TIMESTAMP NOT NULL, "update_date" TIMESTAMP NOT NULL, CONSTRAINT "REL_b55f5a5f5d6443a0c5689df4d3" UNIQUE ("user_id"), CONSTRAINT "PK_6e8c9a313479da38ab0430e3d7f" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "Product" ("product_id" SERIAL NOT NULL, "image_primary" character varying NOT NULL, "quantity" integer NOT NULL, "image_lateral_1" character varying NOT NULL, "points" integer NOT NULL, "type" character varying NOT NULL, "describe" character varying NOT NULL, "isPromotion" boolean NOT NULL, CONSTRAINT "PK_88e34a2a8ebfe028a62350c0a79" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`ALTER TABLE "Wastes" ADD CONSTRAINT "FK_127f29ef3868076efd7e0537330" FOREIGN KEY ("solicitaitonSolicitationId") REFERENCES "Solicitation"("solicitation_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Solicitation" ADD CONSTRAINT "FK_dd0e6847aee6e6d8d8cb40f9c9b" FOREIGN KEY ("usersUserId") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Orders" ADD CONSTRAINT "FK_b55f5a5f5d6443a0c5689df4d31" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP CONSTRAINT "FK_b55f5a5f5d6443a0c5689df4d31"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644"`);
        await queryRunner.query(`ALTER TABLE "Solicitation" DROP CONSTRAINT "FK_dd0e6847aee6e6d8d8cb40f9c9b"`);
        await queryRunner.query(`ALTER TABLE "Wastes" DROP CONSTRAINT "FK_127f29ef3868076efd7e0537330"`);
        await queryRunner.query(`DROP TABLE "Product"`);
        await queryRunner.query(`DROP TABLE "Orders"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Solicitation"`);
        await queryRunner.query(`DROP TABLE "Wastes"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
