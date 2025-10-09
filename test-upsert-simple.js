#!/usr/bin/env node

/**
 * Simple test script for upsertPoints functionality
 * Run with: node test-upsert-simple.js
 */

const axios = require('axios');

const QDRANT_URL = 'https://qdrant.acemcbohol.dev';
const API_KEY = 'e3d5f4104d8d76394d142fbffb9d91a0e7f9a73b';
const COLLECTION_NAME = 'test_upsert';

async function testUpsertPoints() {
    console.log('🧪 Testing upsertPoints functionality...\n');

    try {
        // Step 1: Create test collection
        console.log('1️⃣ Creating test collection...');
        const createCollectionResponse = await axios.put(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}`,
            {
                vectors: {
                    size: 5,
                    distance: 'Cosine'
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );
        console.log('✅ Collection created successfully');

        // Step 2: Prepare test points
        const testPoints = [
            {
                id: 'point1',
                vector: [0.1, 0.2, 0.3, 0.4, 0.5],
                payload: {
                    title: 'Test Document 1',
                    category: 'testing',
                    timestamp: new Date().toISOString()
                }
            },
            {
                id: 'point2',
                vector: [0.6, 0.7, 0.8, 0.9, 1.0],
                payload: {
                    title: 'Test Document 2',
                    category: 'testing',
                    timestamp: new Date().toISOString()
                }
            },
            {
                id: 'point3',
                vector: [0.2, 0.4, 0.6, 0.8, 1.0],
                payload: {
                    title: 'Test Document 3',
                    category: 'demo',
                    timestamp: new Date().toISOString()
                }
            }
        ];

        // Step 3: Upsert points
        console.log('2️⃣ Upserting test points...');
        const upsertResponse = await axios.put(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}/points`,
            {
                wait: true,
                points: testPoints
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );
        console.log(`✅ Upserted ${testPoints.length} points successfully`);
        console.log('Response:', upsertResponse.data);

        // Step 4: Verify points were inserted
        console.log('3️⃣ Verifying points were inserted...');
        const pointIds = testPoints.map(p => p.id);
        const retrieveResponse = await axios.post(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}/points`,
            {
                ids: pointIds,
                with_payload: true,
                with_vector: true
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );

        console.log(`✅ Retrieved ${retrieveResponse.data.result.length} points`);
        retrieveResponse.data.result.forEach((point, index) => {
            console.log(`   Point ${index + 1}: ID=${point.id}, Payload=${JSON.stringify(point.payload)}`);
        });

        // Step 5: Test search functionality
        console.log('4️⃣ Testing search with one of the vectors...');
        const searchVector = testPoints[0].vector;
        const searchResponse = await axios.post(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}/points/search`,
            {
                vector: searchVector,
                limit: 3,
                with_payload: true
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );

        console.log(`✅ Found ${searchResponse.data.result.length} similar points:`);
        searchResponse.data.result.forEach((result, index) => {
            console.log(`   Result ${index + 1}: ID=${result.id}, Score=${result.score.toFixed(4)}`);
        });

        // Step 6: Update existing point (test upsert functionality)
        console.log('5️⃣ Testing upsert update (updating existing point)...');
        const updatedPoint = {
            id: 'point1', // Same ID as before
            vector: [0.15, 0.25, 0.35, 0.45, 0.55], // Slightly different vector
            payload: {
                title: 'Test Document 1 - UPDATED',
                category: 'testing',
                timestamp: new Date().toISOString(),
                updated: true
            }
        };

        const updateResponse = await axios.put(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}/points`,
            {
                wait: true,
                points: [updatedPoint]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );
        console.log('✅ Point updated successfully');

        // Verify update
        const verifyUpdateResponse = await axios.post(
            `${QDRANT_URL}/collections/${COLLECTION_NAME}/points`,
            {
                ids: ['point1'],
                with_payload: true,
                with_vector: true
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': API_KEY
                }
            }
        );

        console.log('✅ Verified update:', verifyUpdateResponse.data.result[0].payload);

        console.log('\n🎉 All upsertPoints tests completed successfully!');
        console.log('\n📊 Summary:');
        console.log(`   - Collection "${COLLECTION_NAME}" created`);
        console.log(`   - ${testPoints.length} points upserted`);
        console.log(`   - Points retrieved and verified`);
        console.log(`   - Search functionality tested`);
        console.log(`   - Update functionality tested`);

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        process.exit(1);
    }
}

// Cleanup function
async function cleanup() {
    try {
        console.log(`\n🧹 Cleaning up test collection "${COLLECTION_NAME}"...`);
        await axios.delete(`${QDRANT_URL}/collections/${COLLECTION_NAME}`, {
            headers: {
                'api-key': API_KEY
            }
        });
        console.log('✅ Test collection deleted');
    } catch (error) {
        console.log('⚠️ Cleanup warning:', error.message);
    }
}

// Handle cleanup on exit
process.on('SIGINT', async () => {
    console.log('\n🛑 Interrupted. Cleaning up...');
    await cleanup();
    process.exit(0);
});

// Run the test
if (require.main === module) {
    testUpsertPoints()
        .then(() => {
            console.log('\n❓ Would you like to keep the test collection? (Ctrl+C to keep, or wait 5 seconds to auto-delete)');
            setTimeout(async () => {
                await cleanup();
                process.exit(0);
            }, 5000);
        })
        .catch(async (error) => {
            console.error('Test execution failed:', error);
            await cleanup();
            process.exit(1);
        });
}