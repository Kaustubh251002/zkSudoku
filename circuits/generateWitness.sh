#!/bin/bash
circom main.circom --r1cs --wasm --sym --c
cp input.json sudoku_js/input.json
cd sudoku_js
node generate_witness.js sudoku.wasm input.json witness.wtns