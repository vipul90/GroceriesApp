
module.exports ={
    "moduleNameMapper":{
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__Jest/styleMock.js",
        "\\.(gif|ttf|eot|svg|jpg)$": "<rootDir>/__mocks__Jest/fileMock.js"
  },
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!src/app/shared/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}