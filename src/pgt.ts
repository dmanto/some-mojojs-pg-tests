import Pg from '@mojojs/pg';

// Use standard PostgreSQL connection URIs
const pg = new Pg('postgres://localhost:5432/test');

// Single query with safe placeholder
// const results = await pg.query`SELECT ${'One'} AS one`;
// for (const row of results) {
//   console.log(row.one);
// }

// Multiple queries on the same connection
const db = await pg.db();
const results = await db.query<Number>`SELECT 2`;
const otherResults = await db.query`SELECT 3`;
await db.release();
console.log(results);
console.log(otherResults);

export {}; // Export nothing to avoid compiler errors (e.g. if this file is compiled as a module)