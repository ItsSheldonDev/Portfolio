import 'nitropack';

declare module 'nitropack' {
  interface NitroConfig {
    externals?: {
      exclude?: string[];
    };
  }
}
