# LeetCode Solutions

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project contains solutions to various LeetCode problems, implemented in TypeScript. It is designed to help developers and learners improve their coding skills by providing organized and categorized solutions to a wide range of algorithmic challenges. The solutions are categorized by difficulty level into three main categories: easy, medium, and hard.

### Key Features

- **Easy**: Solutions to simpler problems suitable for beginners.
- **Medium**: Solutions to moderately challenging problems that require more thought and effort.
- **Hard**: Solutions to complex problems that challenge advanced users and involve intricate logic.

### Technology Stack

- **Language**: TypeScript
- **Node.js**: Used as the runtime environment
- **bun**: Used as the bundler (optional)
- **npm**: For managing dependencies

### Project Goals

- **Educational**: To provide a comprehensive learning resource with solutions categorized by difficulty.
- **Practical**: To offer ready-to-use solutions for common algorithmic problems.
- **Collaborative**: To encourage contributions and improvements from the community.

### Getting Started

To get started with this project, clone the repository and install the necessary dependencies using `npm install`. The source code is located in the `src` directory, organized by difficulty levels.

## Folder Structure

```
root
├── node_modules
├── src
│   ├── easy
│   ├── hard
│   ├── medium
│   └── index.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

- **node_modules**: Contains all npm packages.
- **src**: Source code directory.
  - **easy**: Contains solutions to easy problems.
  - **hard**: Contains solutions to hard problems.
  - **medium**: Contains solutions to medium problems.
  - **index.ts**: Entry point of the application.
- **.gitignore**: Specifies files to be ignored by git.
- **package-lock.json**: Describes the tree of packages that were installed.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: This file.
- **tsconfig.json**: TypeScript configuration file.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zdnemz/leetcode-solutions.git
   ```

2. Navigate to the project directory:

   ```bash
   cd leetcode-solutions
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run the solutions, you can use the following commands:

```bash
# To start the application
npm start
```

### Running the Application

When you start the application using `npm start`, you will be prompted to select a folder and a specific file within that folder to run. Here's an example of the interactive prompt you will see:

```bash
$ npm start

> leetcode-solutions@1.0.0 start
> ts-node src/index.ts

? Which folder do you want to run? (Use arrow keys)
> easy
  hard
  medium
  exit
```

```bash
$ npm start

> leetcode-solutions@1.0.0 start
> ts-node src/index.ts

? Which folder do you want to run? easy
? Which file do you want to run? (Use arrow keys)
  back
> twoSum.ts
  exit
```

- **Which folder do you want to run**: Choose the difficulty level (e.g., easy, medium, hard).
- **Which file do you want to run?**: Choose the specific problem solution file to run.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
