import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/out-tsc',
      '**/package.json',
      '**/package-lock.json',
      '**/tsconfig.lib.json',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: false,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'scope:@org/api',
              onlyDependOnLibsWithTags: [
                'scope:@org/api',
                'scope:@org/db',
                'scope:@org/models',
              ],
            },
            {
              sourceTag: 'scope:@org/web',
              onlyDependOnLibsWithTags: [
                'scope:@org/web',
                'scope:@org/models',
                'scope:@org/ui',
                'scope:@org/styles',
                'scope:@org/assets',
              ],
            },
            {
              sourceTag: 'scope:@org/db',
              onlyDependOnLibsWithTags: ['scope:@org/db'],
            },
            {
              sourceTag: 'scope:@org/ui',
              onlyDependOnLibsWithTags: [
                'scope:@org/ui',
                'scope:@org/assets',
                'scope:@org/models',
              ],
            },
            {
              sourceTag: 'scope:@org/models',
              onlyDependOnLibsWithTags: ['scope:@org/models'],
            },
            {
              sourceTag: 'scope:@org/styles',
              onlyDependOnLibsWithTags: ['scope:@org/styles'],
            },
            {
              sourceTag: 'scope:@org/assets',
              onlyDependOnLibsWithTags: ['scope:@org/assets'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
