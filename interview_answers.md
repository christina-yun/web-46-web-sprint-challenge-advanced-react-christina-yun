# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A: a. If we're talking about the difference between a functional component before hooks and a class component with state(or just about a functional component that is only used for display), the difference is that before hooks, functional components were nothing really more than display components that didn't have complex processes. They were only able to take in information and display whatever props were passed down and were not built to be responsible for changes to state or handling dynamic information.

2. When would a componentWillMount function be called? What about a componentWillUpdate?

A: componentWillMount will be called the first time a page renders and no more or less than that, whereas a componentWillUpdate is called just before rendering when new props or state are being received but is not called during the initial render.

3. Define stateful logic.

A: Stateful logic is any logic built into a component that handles dynamic information (e.g. changes as state changes or helps facilitate state changing).

4. What are the three step of creating a successful test? What is done in each phase?

A: The 3 phases of a successful test are as follows:
    a. Arrange - The phase that sets up the testing environment (i.e. rendering the virtual DOM so that you have things to act and assert on)
    b. Act - The phase where you query and set up what you're looking for (and determine whether they're on the DOM and therefore available to be seen while navigating the browser)
    c. Assert - You 'assert' that something has definitely been rendered to the screen. Basically, you're telling the computer what you're expecting to see and making sure that that is actually happening.