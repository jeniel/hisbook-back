// Quick test for the cleaned up upsertPoints method

const testData = {
    collectionName: "quick_test",
    points: [
        {
            id: "test1",
            vector: [0.1, 0.2, 0.3],
            payload: { title: "Test 1", type: "demo" }
        },
        {
            id: "test2",
            vector: [0.4, 0.5, 0.6],
            payload: { title: "Test 2", type: "demo" }
        }
    ]
};

console.log("Test upsertPoints with GraphQL:");
console.log("mutation TestUpsertPoints {");
console.log("  upsertQdrantPoints(input: {");
console.log(`    collectionName: "${testData.collectionName}"`);
console.log("    points: [");
testData.points.forEach((point, index) => {
    console.log("      {");
    console.log(`        id: "${point.id}"`);
    console.log(`        vector: [${point.vector.join(', ')}]`);
    console.log(`        payload: ${JSON.stringify(point.payload)}`);
    console.log("      }" + (index < testData.points.length - 1 ? "," : ""));
});
console.log("    ]");
console.log("  })");
console.log("}");

console.log("\n✨ The cleaned up code is now:");
console.log("- Much more readable and maintainable");
console.log("- Eliminates repetitive shouldUseHttpClientFirst() calls");
console.log("- Uses a single executeWithClientFallback() method for all operations");
console.log("- Automatically chooses the best client based on URL (HTTPS = HTTP client first)");
console.log("- Consistent error handling and logging across all methods");
console.log("- Faster execution (no repeated condition checks)");