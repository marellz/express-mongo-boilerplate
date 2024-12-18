import mongoose from "mongoose";
import userSeeder from "./_users";

const seeders = new Map([["users", userSeeder]]);

seeders.forEach(async (value, key, map) => {
  try {
    console.log(`-----------------------`)
    console.log(`SEEDING: ${key}`);
    
    const connected = mongoose.connection.readyState;
    if (connected == 0) {
      throw 'DB not connected';
    }
    
    await value();
    
    console.log(`SUCCESSFULLY SEEDED: ${key}`);
  } catch (error) {
    console.log(`SEED FAILED: ${key}`);
    console.error(error);
  } finally{
    console.log(`-----------------------`);
  }
});
