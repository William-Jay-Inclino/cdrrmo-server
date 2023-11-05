import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { AppModule } from '../../src/app.module';

describe('TrainingSkillController (e2e)', () => {
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

  describe('POST /api/v1/training-skill', () => {
    it('should create a new training skill', async () => {

      const createSkillDto = {
        name: 'New Skill',
        description: 'Description of New Skill',
      };

      const response = await request(app.getHttpServer())
        .post('/api/v1/training-skill')
        .send(createSkillDto)
        .expect(201);

        expect(response.body.name).toBe(createSkillDto.name);
        expect(response.body.description).toBe(createSkillDto.description);
    });
  });

  describe('GET /api/v1/training-skill', () => {
    it('should retrieve all training skills', async () => {
      await request(app.getHttpServer())
        .post('/api/v1/training-skill')
        .send({ name: 'Skill 1', description: 'Description of Skill 1' });

      const response = await request(app.getHttpServer())
        .get('/api/v1/training-skill')
        .expect(200);

      expect(response.body).toHaveLength(1);
      expect(response.body[0].name).toBe('Skill 1');
    });
  });

  describe('GET /api/v1/training-skill/:id', () => {
    it('should retrieve a specific training skill', async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/api/v1/training-skill')
        .send({ name: 'Skill 2', description: 'Description of Skill 2' });

      const skillId = createResponse.body.id;

      const response = await request(app.getHttpServer())
        .get(`/api/v1/training-skill/${skillId}`)
        .expect(200);

      expect(response.body.name).toBe('Skill 2');
    });

    it('should return 404 for a non-existent training skill', async () => {
      const nonExistentId = 'nonexistentid';

      await request(app.getHttpServer())
        .get(`/api/v1/training-skill/${nonExistentId}`)
        .expect(404);
    });
  });

  describe('PATCH /api/v1/training-skill/:id', () => {
    it('should update a training skill', async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/api/v1/training-skill')
        .send({ name: 'Skill 3', description: 'Description of Skill 3' });

      const skillId = createResponse.body.id;

      const updateData = { name: 'Updated Skill', description: 'Updated Description' };

      const response = await request(app.getHttpServer())
        .patch(`/api/v1/training-skill/${skillId}`)
        .send(updateData)
        .expect(200);

        expect(response.body.name).toBe(updateData.name);
        expect(response.body.description).toBe(updateData.description);
    });

    it('should return 404 for updating a non-existent training skill', async () => {
      const nonExistentId = 'nonexistentid';
      const updateData = { name: 'Updated Skill', description: 'Updated Description' };

      await request(app.getHttpServer())
        .patch(`/api/v1/training-skill/${nonExistentId}`)
        .send(updateData)
        .expect(404);
    });
  });

  describe('DELETE /api/v1/training-skill/:id', () => {
    it('should delete a training skill', async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/api/v1/training-skill')
        .send({ name: 'Skill 4', description: 'Description of Skill 4' });

      const skillId = createResponse.body.id;

      await request(app.getHttpServer())
        .delete(`/api/v1/training-skill/${skillId}`)
        .expect(204);

      // Verify that the skill has been deleted
      await request(app.getHttpServer())
        .get(`/api/v1/training-skill/${skillId}`)
        .expect(404);
    });

    it('should return 404 for deleting a non-existent training skill', async () => {
      const nonExistentId = 'nonexistentid';

      await request(app.getHttpServer())
        .delete(`/api/v1/training-skill/${nonExistentId}`)
        .expect(404);
    });
  });
});
