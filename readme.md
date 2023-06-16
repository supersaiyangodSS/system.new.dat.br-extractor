# system.new.dat.br-extractor

This Node.js code is designed to decompress a `.br` file in the `system.new.dat` format using the Brotli compression algorithm. It takes an input file in the `.br` format, decompresses it, and saves the decompressed data to an output file.

## Prerequisites

Before running this code, ensure that you have the following prerequisites:

- Node.js installed on your machine
- The `fs` and `zlib` modules, which are part of the Node.js standard library

## Installation

1. Clone or download the code from the [GitHub repository](https://github.com/vedant8177/system.new.dat.br-extractor).

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

## Usage

1. Place the `.br` file you want to decompress in the `input` directory.

2. Open the `app.js` file and modify the following variables according to your needs:

   - `inputFilePath`: The path to the input `.br` file.
   - `outputFilePath`: The path to the output file where the decompressed data will be saved.

3. Save the changes to `app.js`.

4. Run the code by executing the following command:

   ```bash
   npm run build
   ```

   This will start the decompression process.

5. Once the process is complete, the decompressed data will be saved to the specified `outputFilePath`. You will see a message in the console indicating that the decompression is complete.

6. You can find the decompressed data in the `output` directory.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/vedant8177/system.new.dat.br-extractor/issues).

## License

This code is licensed under the [MIT License](LICENSE).
