# Node.js Architecture

Node.js follows a **single-threaded, event-driven, non-blocking I/O architecture** that makes it fast and scalable.

## JavaScript Engine (V8)
- Developed by **Google**
- Converts JavaScript code into **machine code**
- Executes JavaScript very fast
- Used in **Chrome browser** and **Node.js**

JavaScript code written by the developer runs inside the **V8 engine**.
---
## Node.js Core APIs

-Built-in APIs provided by Node.js
-Mostly written in **JavaScript**
-Allow interaction with system resources

### Examples:
- `fs`- File system
- `http` - Create servers
- `path`-File paths
- `os`-Operating system details
- `crypto`-Encryption

---

## Native Bindings

-Written in **C and C++**
-Act as a bridge between:
    - JavaScript code
    - Low-level system operations
- Connect **Node.js Core APIs** with **libuv**

Native bindings help Node.js communicate efficiently with the operating system.

---

## Event Loop

- Implemented using **libuv**
- Handle all **asynchronous operations**
- Executes callbacks when tasks are completed
- Enables **non-blocking I/O**


### Event Loop Phases:
1. Timers (`setTimeout` , `setInterval`)
2. I/O callbacks
3. Idle, prepare
4. Poll
5. Check(`setImmediate`)
6. Close callbacks

The event loop allows Node.js to handle **multiple requests using a single thread**.


## libuv
### What is libuv?
**libuv** is a cross-platform C library used by Node.js to handle asynchronous synchronous operations.  
It provides the **event loop**, **thread pool**, and support for non-blocking I/O operations.

---

### Why Node.js Needs libuv
- JavaScript is single-threaded
- Node.js must handle multiple I/O operations efficiently
- libuv enables non-blocking, asynchronous behavior
- Provides OS-level abstractions for networking and file system access

---

### Responsibilities of libuv
- Managing the event loop
- Handling asynchronous I/O operations
- Managing the thread pool
- Performing file system operations
- Handling timers and callbacks
- Supporting networking (TCP, UDP)

### Thread Pool

#### What is a Thread Pool?
A **thread pool** is a set of background threads used to execute blocking or CPU-intensive tasks without blocking the main event loop.

#### Why Node.js Uses a Thread Pool
- To handle operations that cannot be done asynchronously by the OS
- To prevent blocking the main JavaScript thread
- To improve performance and responsiveness

---

#### Operations Handled by the Thread Pool
- File system operations (`fs.readFile`, `fs.writeFile`)
- Cryptographic operations (`crypto.pbkdf2`, `crypto.randomBytes`)
- DNS lookups (`dns.lookup`)
- Data compression (`zlib`)
> Default thread pool size is **4**, configurable using `UV_THREADPOOL_SIZE`.

---

## Worker Threads

### What are Worker Threads?
**Worker threads** are separate JavaScript threads that run in parallel with the main thread.  
They are used for CPU-intensive JavaScript tasks.

---

### Why Are Worker Threads Needed?
- JavaScript execution is CPU-bound
- Heavy computations block the event loop
- Worker threads allow true parallelism

### Difference Between Thread Pool and Worker Threads

| Thread Pool | Worker Threads |
|------------|----------------|
| Managed by libuv | Managed by Node.js |
| Executes native tasks | Executes JavaScript code |
| Used automatically | Must be created manually |
| Shared pool | Dedicated threads |


---

## Event Loop Queues

### Macro Task Queue
The **Macro Task Queue** holds callbacks from asynchronous operations.

#### Examples of Macro Tasks
- `setTimeout`
- `setInterval`
- `setImmediate`
- I/O callbacks

---

### Micro Task Queue
The **Micro Task Queue** holds tasks that must be executed immediately after the current operation.

#### Examples of Micro Tasks
- `Promise.then()`
- `Promise.catch()`
- `queueMicrotask()`
- `process.nextTick()`

---

### Execution Priority Between Queues
1. Current execution stack
2. **Micro Task Queue**
3. **Macro Task Queue**

Micro tasks are always executed **before** macro tasks.

---


