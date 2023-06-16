const fs = require('fs');
const zlib = require('zlib');

const inputFilePath = './input/system.new.dat.br';
const outputFilePath = './output/system.new.dat';
const input = fs.createReadStream(inputFilePath);
const output = fs.createWriteStream(outputFilePath);

const decompressor = zlib.createBrotliDecompress();

input.pipe(decompressor).pipe(output);

output.on('finish', () => {
  console.log('Decompression complete.');
});

output.on('error', (err) => {
  console.error('Error during decompression:', err);
});
