import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/server';

describe('API Tests', () => {
  it('should return ok from /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toBe('ok');
  });
});

describe('Static page', () => {
  it('should serve the default page at /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
    expect(res.text).toContain('Streamliners');
  });
});
