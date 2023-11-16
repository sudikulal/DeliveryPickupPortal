# DeliveryPickupPortal
## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sudikulal/DeliveryPickupPortal/
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Update Configuration:**

    - Add your Firebase credentials to the `serviceAccount.json` file.

4. **Run Database Migration:**

    ```bash
    node migrateDb.js
    ```

5. **Run the Express Server:**

    ```bash
    npm run dev
    ```

6. **Generate Firebase Token:**

    Use the `test.js` file to generate a Firebase token for authentication.

## Postman Collection

Explore and test the API endpoints using the provided Postman collection:

[![Postman Collection](https://run.pstmn.io/button.svg)](https://api.postman.com/collections/30867123-f067b023-8f1d-4b98-a7ca-87c156d46cb7?access_key=PMAT-01HFCMPZY3RMZ46028KE80J3Q9)

## Running Unit Tests

Execute the following command to run unit tests:
```bash
npm test
```





