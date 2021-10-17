# Get pupil repositories

The project enables to clone all student repositories for the specified intensive.

## Table of Contents

1. [Setup](#setup)
2. [Usage](#usage)
    1. [Intensive descriptors](#descriptors)
    2. [Command example](#command-example)
    3. [Alias](#alias)
3. [Result example](#result-example)

## Setup <a name="setup"></a>

1. Clone this repo and install dependencies with `npm i`.
2. Create GitHub personal access token as described [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

    You will have to give access only for the `repo` group.

3. Set the given token into the `config.js` file, like this: `const getToken = () => "token";`.

    **Do not publish this token anywhere!**

## Usage <a name="usage"></a>

To clone student repositories for an intensive you have to run the script with the following command:

`node gpr.js <intensive-descriptor> <target-dir>`,

where:

- `intensive-descriptor` is a course and an intensive number, e.g. `ecmascript-15`
- `target-dir` is a full path, e.g. `/home/username/htmlacademy/js2_15/`

### Intensive descriptors <a name="descriptors"></a>

| Intensive   | Descriptor   |
| ----------- | ------------ |
| HTML/CSS 1  | `htmlcss`    |
| HTML/CSS 2  | `adaptive`   |
|             |              |
| JS1         | `javascript` |
| JS2         | `ecmascript` |
| JS3         | `react`      |
|             |              |
| PHP 1       | `php`        |
| PHP 2       | `php2`       |
|             |              |
| NodeJS      | `nodejs`     |
| Animation   | `animation`  |
| Email       | `email`      |
| Vue         | `vue`        |

### An example for real working command: <a name="command-example"></a>

`node gpr.js ecmascript-15 /home/dtsaryov/htmlacademy/js2_15/`

### Alias (Linux/MacOS) <a name="alias"></a>

You can create an alias to be able to run the script from any location:

1. Open or create the `~/.bash_profile` file (`~/.zshrc` for ZSH)
2. Add the following command to the end of the file:

    `alias gpr='node <path-to-gpr.js>'`

    for example:

    `alias gpr='node /Users/daniil.tsaryov/uphtmlacademy/ha-get-ppl-repos/gpr.js'`

3. Refresh environment with a command: `source ~/.bash_profile` (or `source ~/.zshrc` for ZSH)

Now you are able to clone all repos to the current dir with command: `gpr javascript-24 .`

## Result <a name="result-example"></a>

The script creates the following directory structure:

```
target-dir/
|
- John.Doe/
| - 111111-cinemaaddict-15/
- John.Snow/
| - 222222-bigtrip-15/
```
