"""Portfolio API tests - root, contact create/list, validation"""
import os
import pytest
import requests

BASE_URL = os.environ['REACT_APP_BACKEND_URL'].rstrip('/') if os.environ.get('REACT_APP_BACKEND_URL') else None
if not BASE_URL:
    # Fallback: read from frontend/.env
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                break


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_root_returns_200(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert isinstance(data["message"], str)


# ---- Contact create + persistence ----
def test_create_contact_valid_returns_201_and_persists(api):
    payload = {
        "name": "TEST_User Thanoj",
        "email": "TEST_user@example.com",
        "message": "TEST_Hello, this is a portfolio contact test message."
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 201, r.text
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["message"] == payload["message"]
    assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
    assert "_id" not in body
    assert "created_at" in body

    # verify in list
    r2 = api.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    ids = [i["id"] for i in items]
    assert body["id"] in ids
    # No _id leakage
    for it in items:
        assert "_id" not in it


# ---- Validation ----
def test_contact_invalid_email_returns_422(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_Bad", "email": "not-an-email", "message": "hi"
    })
    assert r.status_code == 422


def test_contact_empty_name_returns_422(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "", "email": "ok@example.com", "message": "hi"
    })
    assert r.status_code == 422


def test_contact_empty_message_returns_422(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_X", "email": "ok@example.com", "message": ""
    })
    assert r.status_code == 422


def test_contact_missing_fields_returns_422(api):
    r = api.post(f"{BASE_URL}/api/contact", json={"name": "TEST_only"})
    assert r.status_code == 422
