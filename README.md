# Get pupil repositories

The project enables to clone all student repositories for the specified intensive.

## Setup

1. Clone this repo and install dependencies with `npm i`.
2. Create GitHub personal access token as described [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

    You will have to give access only for the `repo` group.

3. Set the given token into the `config.js` file, like this: `const getToken = () => "token";`.

    **Do not publish this token anywhere!**

## Usage

To clone student repositories for an intensive you have to run the script with the following command:

`node gpr.js <intensive-descriptor> <target-dir>`,

where:

- `intensive-descriptor` is a course and an intensive number, e.g. `ecmascript-15`
- `target-dir` is a full path, e.g. `/home/username/htmlacademy/js2_15/`

### An example for real working command:

`node gpr.js ecmascript-15 /home/dtsaryov/htmlacademy/js2_15/`

## Result

The script creates the following directory structure:

```
target-dir/
|
- John.Doe/
| - 111111-cinemaaddict-15/
- John.Snow/
| - 222222-bigtrip-15/
```
