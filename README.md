This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<h1>💡Mr Judge - Product Spec</h1>
🤔 <b>A coding challenge is a competitive event in which a group of participants solve a set of coding questions within a specified timeframe, typically ranging from a few hours to a few days. Participants who have registered beforehand compete by submitting their solutions, which are
evaluated against concealed test cases. Based on the test results, participants are assigned scores.</b>

<h1>👀 Areas of concern</h1>
<li>Malicious code execution</li>
<li>Network congestion</li>

<h1>💭 Proposal</h1>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Technology</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Front-end</td>
      <td>React / Django User Interface</td>
      <td>Provides the user interface for interacting with the platform.</td>
    </tr>
    <tr>
      <td>User Registration and Authentication</td>
      <td>AWS Cognito</td>
      <td>Manages user registration, login, and authentication processes securely.</td>
    </tr>
    <tr>
      <td>Coding Questions and Submissions</td>
      <td  >Amazon S3</td>
      <td>Stores coding problems, user submissions, and related resources.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon DynamoDB</td>
      <td>Stores metadata for coding problems, user profiles, submission history, and verdicts.</td>
    </tr>
    <tr>
      <td>Code Evaluation Backend Servers</td>
      <td  >Amazon ECS</td>
      <td>Runs the code evaluation service, securely executing user-submitted code against test cases.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon EC2 (Worker)</td>
      <td>Handles compute-intensive tasks related to code evaluation.</td>
    </tr>
    <tr>
      <td>Test Case Management</td>
      <td>Amazon S3</td>
      <td>Stores test cases and expected results.</td>
    </tr>
    <tr>
      <td>Code Evaluation Service</td>
      <td>ECS Task</td>
      <td>Retrieves test cases from S3, runs code, and compares output to expected results.</td>
    </tr>
    <tr>
      <td>Returning Verdicts</td>
      <td  >Backend Servers (Amazon ECS)</td>
      <td>Processes the results of code execution and returns the verdict to the user.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon DynamoDB</td>
      <td>Stores verdicts and execution logs for user submissions.</td>
    </tr>
    <tr>
      <td>Visualizing User Interaction</td>
      <td >AWS AppSync</td>
      <td>Provides a GraphQL API for real-time updates and data synchronization between frontend and backend.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon Timestream</td>
      <td>Stores time-series data such as user interactions, problem views, and submission times.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon API Gateway</td>
      <td>Exposes APIs for fetching user interaction data.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon S3 (DataLake)</td>
      <td>Stores raw interaction data for further analysis and visualization.</td>
    </tr>
    <tr>
      <td>Scalability and High Availability</td>
      <td>Elastic Load Balancer</td>
      <td>Distributes incoming traffic across multiple backend servers.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon ECS</td>
      <td>Manages containerized backend services for scalability and reliability.</td>
    </tr>
    <tr>
      <td> </td>
      <td>AWS Amplify</td>
      <td>Provides scalable hosting for the frontend application with built-in CDN for fast content delivery.</td>
    </tr>
    <tr>
      <td>Asynchronous Processing and Event Management</td>
      <td  >Amazon SQS</td>
      <td>Queues user submissions and other asynchronous tasks to ensure reliable processing.</td>
    </tr>
    <tr>
      <td> </td>
      <td>Amazon EventBridge</td>
      <td>Facilitates event-driven architecture, triggering actions based on user submissions and system events.</td>
    </tr>
    <tr>
      <td>Data Transfer and Synchronization</td>
      <td>AWS DataSync</td>
      <td>Ensures data consistency and efficient transfer between on-premises storage (if needed) and AWS storage services.</td>
    </tr>
    <tr>
      <td>Data Transfer and Synchronization</td>
      <td>Amazon SES</td>
      <td>Sends email notifications to users regarding submission status, results, and other updates.</td>
    </tr>
  </tbody>
</table>


<h1>🛫 Plan</h1>
<li>System components for Online Judge</li>
<img src="https://github.com/VikkiSinghs/Mr.-Judge/blob/main/Screenshot%20(13).png" >
