# Bubble-Sort-Visualizer

Authors: Hamza Siddiqui

About:
Bubble Sort: Bubble Sort is a simple sorting algorithm that compares values that neighbor eachother in a data-set/structure. 
Given two things to compare, once Bubble Sort sees that a comparison being tested is true, it swaps those values in the set. 
This algorithm does O(n^2) time because of its reliance on a nested loop.

This implementation: For my implementation, I used an array to hold values corresponding to the heights of the shapes used to visualize the sort. 
The array was populated with random values bounded by the height of the window, and had a length of the width of the window.
I used standard Bubble Sort to sort all the values in the array from least to greatest.
The algorithm involved nesting a loop that spans the entire array inside another loop that spans the array.
The outer loop and its i variable are used to define how many values have already been sorted 
(the end of the array is gradually sorted as the algorithm progresses).
The inner loop is meant to compare each element to the next element in the array.
A standard swap method is used to swap any values for which the comparison returns true.
This implementation uses a JavaScript framework based on processing called p5.js.

Demo: https://editor.p5js.org/Hamza_sid/present/GFy27Z9Np
