export const testEnvironment = "jsdom";
export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
export const moduleNameMapper = {
  "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mapea archivos de estilo para evitar errores
};
// module.exports = {
//   transform: {
//     "^.+\\.(js|jsx)$": "babel-jest",
//   },
//   testEnvironment: "jsdom",
//   moduleFileExtensions: ['js','jsx'],
// };
