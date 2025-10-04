// apps/api-gateway/scripts/migrate.js

import { config } from 'dotenv';
import { execSync } from 'child_process';
import { resolve } from 'path';

// Load the dotenv configuration
config({ path: resolve(process.cwd(), '.env') });

// Capture all arguments passed to this script (e.g., '--name init...')
const args = process.argv.slice(2).join(' ');

// Construct the full Prisma command
// We use 'npx' here because we are running from a Node script, not the shell
const command = `npx prisma migrate dev ${args}`;

console.log(`Executing: ${command}`);

try {
  // Execute the command synchronously, inheriting I/O (output/input)
  // This will now use the DATABASE_URL loaded above
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}s