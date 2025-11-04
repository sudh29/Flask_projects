"""
Quick API validation script to test all endpoints
Run this after starting the Flask app to verify everything works
"""

import requests
import json

BASE_URL = "http://localhost:5000"


def print_result(test_name, response):
    """Print test results in a formatted way"""
    status = "✅ PASS" if response.status_code < 400 else "❌ FAIL"
    print(f"\n{status} {test_name}")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")


def main():
    print("=" * 60)
    print("Flask Store API - Validation Tests")
    print("=" * 60)

    try:
        # Test 1: API Info
        print("\n[Test 1] GET /api - API Information")
        response = requests.get(f"{BASE_URL}/api")
        print_result("API Info", response)

        # Test 2: Get All Stores
        print("\n[Test 2] GET /store - Get All Stores")
        response = requests.get(f"{BASE_URL}/store")
        print_result("Get All Stores", response)

        # Test 3: Create Store
        print("\n[Test 3] POST /store - Create New Store")
        response = requests.post(f"{BASE_URL}/store", json={"name": "Test Store"})
        print_result("Create Store", response)

        # Test 4: Create Duplicate Store (Should fail)
        print("\n[Test 4] POST /store - Create Duplicate (Expected Error)")
        response = requests.post(f"{BASE_URL}/store", json={"name": "Test Store"})
        print_result("Duplicate Store Error", response)

        # Test 5: Get Specific Store
        print("\n[Test 5] GET /store/<name> - Get Specific Store")
        response = requests.get(f"{BASE_URL}/store/Test Store")
        print_result("Get Specific Store", response)

        # Test 6: Add Item to Store
        print("\n[Test 6] POST /store/<name>/item - Add Item")
        response = requests.post(
            f"{BASE_URL}/store/Test Store/item",
            json={"name": "Test Item", "price": 99.99},
        )
        print_result("Add Item", response)

        # Test 7: Add Invalid Item (Negative price)
        print("\n[Test 7] POST /store/<name>/item - Invalid Price (Expected Error)")
        response = requests.post(
            f"{BASE_URL}/store/Test Store/item",
            json={"name": "Invalid Item", "price": -10},
        )
        print_result("Invalid Price Error", response)

        # Test 8: Get Store Items
        print("\n[Test 8] GET /store/<name>/item - Get Items")
        response = requests.get(f"{BASE_URL}/store/Test Store/item")
        print_result("Get Store Items", response)

        # Test 9: Delete Store
        print("\n[Test 9] DELETE /store/<name> - Delete Store")
        response = requests.delete(f"{BASE_URL}/store/Test Store")
        print_result("Delete Store", response)

        # Test 10: Get Deleted Store (Should fail)
        print("\n[Test 10] GET /store/<name> - Get Deleted Store (Expected Error)")
        response = requests.get(f"{BASE_URL}/store/Test Store")
        print_result("Store Not Found Error", response)

        print("\n" + "=" * 60)
        print("✅ All validation tests completed!")
        print("=" * 60)

    except requests.exceptions.ConnectionError:
        print("\n❌ ERROR: Cannot connect to Flask app!")
        print("Make sure the Flask app is running on http://localhost:5000")
        print("Run: python myapp.py")
    except Exception as e:
        print(f"\n❌ ERROR: {str(e)}")


if __name__ == "__main__":
    main()
