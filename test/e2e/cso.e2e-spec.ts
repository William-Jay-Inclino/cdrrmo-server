import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { AppModule } from '../../src/app.module';


const apiEndpoint = '/api/v1/cso'
const label = 'CSO'

describe('CsoController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = app.get(PrismaService);
    await app.init();

  });

  afterEach(async () => {
    // Clean up the database after each test
    await prismaService.cleanDb();
  });

  afterAll(async () => {
    await app.close();
  });

  describe(`POST ${apiEndpoint}`, () => {
    it(`should return 201 for creating a new ${label}`, async () => {

      const createDto = {
        name: 'New ' + label,
        description: 'Description of New ' + label,
      };

      const response = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send(createDto)
        .expect(201);

        expect(response.body.name).toBe(createDto.name);
        expect(response.body.description).toBe(createDto.description);
    });

    it('should return 409 for duplicate data (Unique Constraint Violation)', async () => {
      // ... (existing test case for unique constraint violation)

      // Create a training skill with the same name as an existing one
      const existing = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: 'Duplicate ' + label, description: 'Description of Duplicate ' + label });

      await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: 'Duplicate ' + label, description: 'Duplicate Description' })
        .expect(409);
    });

    it('should return 400 for missing name (Input Validation)', async () => {
      // Attempt to create a training skill without a name
      await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ description: 'Description without a name' })
        .expect(400);
    });

  });

  describe(`PATCH ${apiEndpoint}/:id`, () => {
    it('should return 200 for updating a ' + label, async () => {
      const createResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: label + ' 3', description: `Description of ${label} 3` });

      const id = createResponse.body.id;

      const updateData = { name: 'Updated ' + label, description: 'Updated Description' };

      const response = await request(app.getHttpServer())
        .patch(`${apiEndpoint}/${id}`)
        .send(updateData)
        .expect(200);

        expect(response.body.name).toBe(updateData.name);
        expect(response.body.description).toBe(updateData.description);
    });

    it(`should return 409 for not update a ${label} for duplicate data (Unique Constraint Violation)`, async () => {
      const createDto = {
        name: 'Original ' + label,
        description: 'Description of Original ' + label,
      };
  
      const originalResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send(createDto)
        .expect(201);
  
      const duplicateDto = {
        name: 'Duplicate ' + label,
        description: 'Description of Duplicate ' + label,
      };
  
      const duplicateResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send(duplicateDto)
        .expect(201);
  
      const updateData = {
        name: duplicateDto.name, 
        description: 'Updated Description',
      };
  
      await request(app.getHttpServer())
        .patch(`${apiEndpoint}/${originalResponse.body.id}`)
        .send(updateData)
        .expect(409);
    });

    it('should return 404 for updating a non-existent ' + label, async () => {
      const nonExistentId = 'nonexistentid';
      const updateData = { name: 'Updated ' + label, description: 'Updated Description' };

      await request(app.getHttpServer())
        .patch(`${apiEndpoint}/${nonExistentId}`)
        .send(updateData)
        .expect(404);
    });

    it('should return 400 for invalid request payload (Input Validation)', async () => {
      const createResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: label + ' 5', description: 'Valid Description' });
    
      const id = createResponse.body.id;
    
      // Send an invalid request payload with an empty name
      const invalidUpdateData = {
        name: '', // Empty name, which violates the validation criteria
        description: 'Updated Description',
      };
    
      await request(app.getHttpServer())
        .patch(`${apiEndpoint}/${id}`)
        .send(invalidUpdateData)
        .expect(400);
    });
  });

  describe(`GET ${apiEndpoint}`, () => {
    it('should return 200 for retrieving all ' + label, async () => {
      await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: label + ' 1', description: `Description of ${label} 1` });

      const response = await request(app.getHttpServer())
        .get(apiEndpoint)
        .expect(200);

      expect(response.body).toHaveLength(1);
      expect(response.body[0].name).toBe(label + ' 1');
    });
  });

  describe(`GET ${apiEndpoint}/:id`, () => {
    it('should return 200 for retrieving a specific ' + label, async () => {
      const createResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: label + ' 2', description: `Description of ${label} 2` });

      const id = createResponse.body.id;

      const response = await request(app.getHttpServer())
        .get(`${apiEndpoint}/${id}`)
        .expect(200);

      expect(response.body.name).toBe(label + ' 2');
    });

    it('should return 404 for a non-existent ' + label, async () => {
      const nonExistentId = 'nonexistentid';

      await request(app.getHttpServer())
        .get(`${apiEndpoint}/${nonExistentId}`)
        .expect(404);
    });
  });

  describe(`DELETE ${apiEndpoint}/:id`, () => {
    it('should delete a ' + label, async () => {
      const createResponse = await request(app.getHttpServer())
        .post(apiEndpoint)
        .send({ name: label + ' 4', description: `Description of ${label} 4` });

      const skillId = createResponse.body.id;

      await request(app.getHttpServer())
        .delete(`${apiEndpoint}/${skillId}`)
        .expect(204);

      // Verify that the skill has been deleted
      await request(app.getHttpServer())
        .get(`${apiEndpoint}/${skillId}`)
        .expect(404);
    });

    it('should return 404 for deleting a non-existent ' + label, async () => {
      const nonExistentId = 'nonexistentid';

      await request(app.getHttpServer())
        .delete(`${apiEndpoint}/${nonExistentId}`)
        .expect(404);
    });
  });
});
