import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
 .setEndpoint("https://cloud.appwrite.io/v1")
 .setProject("660ed538b8764fc963f3"); // Replace with your project ID

export const account = new Account(client);
export const db = new Databases(client);

export async function getDocument() {
 const response = await db.listDocuments(
  "660ed562eca4dee86a5f",
  "660ed5885f507958e739"
 );
 console.log(response.documents);
}
export { ID } from "appwrite";
