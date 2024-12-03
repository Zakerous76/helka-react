import { openDb, addFormSubmission, getFormSubmissions } from "./database.js";

async function setupAndTest() {
  // Open the database (this will create it if it doesn't exist)
  await openDb();

  // Add a test submission
  const testSubmission = {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    subject: "Test Subject",
    message: "This is a test message.",
  };

  const newId = await addFormSubmission(testSubmission);
  console.log(`Added new submission with ID: ${newId}`);

  // Retrieve all submissions (note: sensitive data is not returned)
  const submissions = await getFormSubmissions();
  console.log("All submissions:", submissions);
}

setupAndTest().catch(console.error);
