import type {KnipConfig} from 'knip';

const config: KnipConfig = {
    includeEntryExports: true,
    compilers: {
        json: (content, fileName) => {
            if (!fileName.includes('tsconfig')) {
                return `export default ${content};`;
            }

            return '';
        },
    },
};

export default config;
