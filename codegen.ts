import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:5555/graphql",
  documents: ["src/**/*.ts", "!src/generated/gql/**/*"],
  generates: {
    "./src/generated/gql/": {
      preset: "client",
      config: {
        scalars: {
          DateTime: "Date",
        },
      },
    },
  },
};

export default config;
