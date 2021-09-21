# react-svg-icon-library

This is an example project including the library generation and the demo of using the library.

## Quickstart

```sh
# Clone the repo
git clone git@github.com:jiayi1992/react-svg-icon-library.git

# Move into the generate-library folder
cd generate-library

# Build bundle
npm run build

```

## Test local package

```sh
# Move into the demo folder
cd demo

# Generate the local package
npm pack ../generate-library

# Install the package
npm i react-svg-icon-library-1.0.0.tgz

# Run the demo
npm start

```

## Test published package

```sh
# Move into the generate-library folder
cd generate-library

# Publish the package
npm publish --access public

# Install the package
npm i <your-package-name>

# Run the demo
npm start

```
