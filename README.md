# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst-case big $\Theta$ time complexity of my implementation would be $\Theta(n)$. This is because we start off the implementation by initializing two constants, sum and factorial. These are both constant time operations of $\Theta(1)$. Next the for loop runs from i=0 to n, giving us a run time of n+1. Continuing for each iteration the loop will do a constant amount of work so we get $Theta(1)$. The total work done would then come out to be (n+1) * $\Theta(1)$, which is equal to $\Theta(n)$. When we finally return the sum value we will get another constant time for this so $\Theta(1)$. The final complexity would be $\Theta(1)+\Theta(n)+\Theta(1)$ which gives us the final complexity of $\Theta(n)$. The reason this is the worst time compelxity is because since the runtime grows linearly with n inputs, the upper bound is going to be reached in every case. 

I referenced DJReflexive's repository to see a general implementation of this problem, and how he approached his test code. As well as Tyler Laceby's test code to see how a different test code should look. 

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
