# React Native useEffect Cleanup Function Error

This repository demonstrates a common error in React Native where a cleanup function within the `useEffect` hook throws an error after the component unmounts.  The error arises from attempting to access or modify the component's state or props after it has been unmounted from the DOM.

## Problem
The `useEffect` hook's cleanup function is executed when the component is unmounted or when the dependencies change. If this function tries to access state or props that no longer exist, an error occurs.  This is particularly common with asynchronous operations like subscriptions or timers.

## Solution
The solution involves checking if the component is still mounted before performing any actions within the cleanup function.  This can be achieved using a ref to track the component's mounted status.