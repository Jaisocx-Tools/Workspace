import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

export default {
  resolve: {
    alias: {
      '@jaisocx-tooltip-assets': path.resolve(__dirname, 'assets/')
    }
  }
};
