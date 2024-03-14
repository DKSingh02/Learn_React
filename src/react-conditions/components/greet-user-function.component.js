import React from 'react';

export default function GreetingFromFunctionalComponent({ name, isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back, {name}!</p>;
  } else {
    return <p>Welcome to guest user!</p>;
  }
};
