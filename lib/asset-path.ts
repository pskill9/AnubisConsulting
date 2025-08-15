import { config } from './config';

export function assetPath(path: string): string {
  const basePath = config.basePath;
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}