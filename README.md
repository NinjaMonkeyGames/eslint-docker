# README #

## What is this repository for? ##

The purpose of this repository is to maintain control over versions of eslint. This maintains uniformity-
when enforcing coding standards and formatting rules. This allows for easier upgrades and prevents newer versions from
breaking the pipeline.

---

## Configuration information ##

There is a '.eslint.config.mjs' file containing the eslint configuration in the root of the project directory. You can
use the following YAML line to copy this into your project directory.

```shell
cp /app/eslint.config.mjs $GITHUB_WORKSPACE
```

Alternately you can use the following command to use your own configuration file.

```shell
run: eslint -c eslint.config.mjs .
```

See links below for more information about ESLint and Alpine Linux.

---

## Useful links ##
  
* **Project links:**
  
  * **Project Docker pull address:**  docker pull monkeyknuckles/eslint

  * **Project Docker landing page:**  <https://hub.docker.com/r/monkeyknuckles/eslint>
  * **Project clone address:**        <https://github.com/NinjaMonkeyGames/eslint-docker.git>
  * **Project landing page:**         <https://github.com/NinjaMonkeyGames/eslint-docker>
  * **Project wiki page:**            <https://github.com/NinjaMonkeyGames/eslint-docker/wiki>

* **3rd Party links:**

  * **Alpine source pull address:**   docker pull alpine:3.20.0

    **ESLint website**          <https://eslint.org/>
    **NPM ESLint**              <https://www.npmjs.com/package/eslint>
    **Github ESLint**           <https://github.com/eslint/eslint>
    **VSC Plugin:**             <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

---

## Includes ##

* Alpine Linux  v3.20.0
* Node          v20.13.1
* NPM           v10.8.0
* ESLint        v9.3.0 - Based on ECMA 2023 Standard

---

## Files ##

| File Or Folder Name:                  | Files | Description Of File Or Folder Contents                               |
|---------------------------------------|-------|----------------------------------------------------------------------|
| > css-fail                            |   49  | Contains examples of every possible CSS error.                       |
| .eslint.config.mjs                    |   1   | Contains JavaScript rule configuration.                              |
| > .github > workflows > pipeline.yml  |   1   | Lints all JavaScript files in docker.                                |
| dockerfile                            |   1   | Information on how to build docker.                                  |
| README.md                             |   1   | Contains information about the project.                              |
| LICENSE                               |   1   | Repository license agreement.                                        |
| avatar.png                            |   1   | Personal avatar for (Daniel Mallet) internal company use.            |
| logo.png                              |   1   | Company logo.                                                        |

---

## Version history ##

This project uses a sequential versioning system.

| Version No:    | Description Of Update                                                                               |
|----------------|-----------------------------------------------------------------------------------------------------|
| 0.0.0.0        | Base files included.                                                                                |
| 0.0.0.1        | Updated 'READEME.md' to align with the layout of the other linter projects.                         |
| 0.0.0.2        | Fixed a number of incorrect comments and 'README.md' information.                                   |
| 0.0.0.3        | Added --color option to ESLint output text.                                                         |
---

## Contact information ##

Author: Daniel Mallett (Monkey Knuckles)

![Ninja Monkey Games](logo.png "Logo")
![Monkey Knuckles](avatar.png "Avatar")

If you have any problems with the repository or have any suggestions please contact us at <info@ninjamonkeygames.com>.

You may also contact us via our [website](https://ninjamonkeygames.com).

Any bugs should be raised as an [issue](https://github.com/NinjaMonkeyGames/eslint-docker/issues) on GitHub.

---

## Copyright ##

*Ninja Monkey Games Copyright © 2024 All rights reserved.*
