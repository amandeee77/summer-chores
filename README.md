# Summer Chores - Callback & Promise Versions  

## Overview of Summer Chores  
This assignment demonstrates two approaches to managing **asynchronous operations** in JavaScript: **callback functions** and **Promises**. By simulating a sequence of summer chores, we explore how different methods affect readability, error handling, and flow control.  

The person completing the chores follows a strict order but may fall asleep due to exhaustion before finishing all tasks, introducing **conditional flow control** through asynchronous execution.    

### Callback Version (`callbackVersion.js`)  
- Uses **nested callbacks** to manage chore execution in sequence.  
- Simulates real-world asynchronous tasks using `setTimeout()`.  
- Implements a failure scenario where the person may **fall asleep** before finishing all chores.  

### Promise Version (`promiseVersion.js`)  
- **Replaces callbacks** with JavaScript **Promises** for better readability.  
- Uses `.then()` chaining to **avoid callback hell** and improve error handling.  
- A **`.catch()` block** gracefully handles interruptions in the chore sequence.  
- Allows easier scalability—new chores can be added without deep nesting.  

## Chore List & Execution Order  
1. Mowing the yard  
2. Weed eating  
3. Trimming hedges  
4. Collecting wood  
5. Watering the garden  

Each task is completed **sequentially**, and a failure (falling asleep) interrupts the flow.  

## Getting Started  

### Prerequisites  
- Install [Node.js](https://nodejs.org/) to run the project.  

### Installation  
1. Clone the repository:  
   ```sh  
   git clone https://github.com/your-username/summer-chores.git  

2. Navigate to the project folder:
   ```sh
   cd summer-chores

3. Run the callback version:
   ```sh
   node callbackVersion.js

4. Run the Promise-based version:
   ```sh
   node promiseVersion.js