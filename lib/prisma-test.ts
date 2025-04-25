const { prisma } = require('./prisma'); // Adjust the import


const testPrismaConnection = async () => {
  try {
    // Test if the Prisma client can connect and fetch data
    const priceAlerts = await prisma.priceAlert.findMany();
    console.log('Price Alerts:', priceAlerts);
  } catch (error) {
    console.error('Error connecting to Prisma:', error);
  }
};

// Run the test
testPrismaConnection();
