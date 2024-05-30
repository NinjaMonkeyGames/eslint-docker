# README #

## What is this repository for? ##

The purpose of this repository is to maintain and control versions of-
ESLint. This repository lints ESLint files.

## Links ##

**Docker pull address:** monkeyknuckles/eslint

**Website**                 <https://eslint.org/>
**NPM ESLint**              <https://www.npmjs.com/package/eslint>
**Github ESLint**           <https://github.com/eslint/eslint>
**VSC Plugin:**             <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

## Includes ##

* Alpine Linux  v3.19.1
* Node          v20.12.1
* NPM           v10.2.5
* ESLint        v9.3.0 - Based on ECMA 2023 Standard

## Files ##

| File Or Folder Name:      | Files | Description Of File Or Folder Contents |
|---------------------------|-------|----------------------------------------|
| js-fail                   |  244  | Contains examples for each MD error.   |
| eslint.config.mjs         |   1   | Contains JS ruleset.                   |
| pipeline.yml              |   1   | Lints all JS files in docker.          |
| Dockerfile                |   1   | Information on how to build docker.    |
| README.md                 |   1   | Contains information about project.    |
| .gitignore                |   1   | List of files and folders to ignore.   |

## Version History ##

| Version No:    | Description Of Update              |
|----------------|------------------------------------|
| 0.0.0.0        | Base files included.               |
