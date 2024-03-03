export default {
  test: {
    chaiConfig: {
      includeStack: true,
      truncateThreshold: 1000,
    },
    typecheck: {
      enabled: true,
      tsconfig: 'tests/tsconfig.json',
    },
    watch: false,
  },
};
