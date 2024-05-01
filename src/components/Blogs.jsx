// Blogs.js
import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationData from "../lottie/Animation.json";
import "./style.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      {/* Blog 1: Understanding Redux */}
      <div className="blog">
        <h2>Understanding Redux: A Tutorial with Examples</h2>
        <p>
          Redux is a predictable state container designed to help you manage application state consistently across client, server, and native environments. It's mostly used with React, but you can also use it with other JavaScript frameworks or libraries.
        </p>
        <p>
          In this blog, we'll explain the foundational concepts of Redux, including actions, reducers, and the Redux store. We'll also highlight its benefits, such as predictable state management, ease of testing, and server-side rendering.
        </p>
        {/* Video placeholder for Redux tutorial */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D2MqT4OEgoE"
          title="Redux Tutorial"
          allowFullScreen
        />
      </div>

      {/* Blog 2: JavaScript Promises Explained */}
      <div className="blog">
        <h2>JavaScript Promises Explained</h2>
        <p>
          Promises are a way to handle asynchronous operations in JavaScript. They allow you to work with asynchronous code in a more readable and maintainable manner.
        </p>
        <p>
          In this blog, we'll cover how promises work, how to create and consume them, and common use cases. We'll include examples demonstrating promise chaining and error handling.
        </p>
        {/* Video placeholder for JavaScript Promises explanation */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RvYYCGs45L4"
          title="JavaScript Promises"
          allowFullScreen
        />
      </div>

      {/* Blog 3: Explaining Key JavaScript Functions */}
      <div className="blog">
        <h2>Explaining Key JavaScript Functions</h2>
        <p>
          Let's dive into some essential JavaScript functions:
        </p>
        <ul>
          <li><strong>map:</strong> Used for transforming arrays.</li>
          <li><strong>filter:</strong> Used for filtering elements based on a condition.</li>
          <li><strong>reduce:</strong> Used for aggregating values in an array.</li>
          <li><strong>async/await:</strong> Used for handling asynchronous code.</li>
        </ul>
        {/* Video placeholder for JavaScript functions explanation */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EzB6Pk66XW8"
          title="JavaScript Functions"
          allowFullScreen
        />
      </div>

      {/* Blog 4: React Best Practices and Tips */}
      <div className="blog">
        <h2>React Best Practices and Tips</h2>
        <p>
          In this blog, we'll share best practices for structuring React components, managing state, and handling side effects. We'll also provide tips on performance optimization, component lifecycle methods, and common pitfalls to avoid.
        </p>
        {/* Video placeholder for React best practices */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YaHnww6I5Y8"
          title="React Best Practices"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Blogs;
