import { test, expect, request } from '@playwright/test';

test('task 5 - Api handling', async ( { request } ) => {
  const host = 'https://jsonplaceholder.typicode.com';
  const endpoint = 'users';
  const response = await request.get(`${host}/${endpoint}`);
  const result = await response.json();
  for (const item of result) {
    console.log(item.name, '|', item.email);
  }
  expect(result[0].email).toContain('@');
  console.log(`${result[0].email} contains @`);
});