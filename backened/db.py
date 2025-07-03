import psycopg2
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus

# Load .env variables
load_dotenv()
raw_url = os.getenv("DATABASE_URL")

if raw_url and '@' in raw_url.split(':')[2]:
    parts = raw_url.split(':')
    user = parts[1][2:]
    password = quote_plus(parts[2].split('@')[0])
    rest = raw_url.split('@', 1)[1]
    DATABASE_URL = f"postgresql://{user}:{password}@{rest}"
else:
    DATABASE_URL = raw_url

def get_connection():
    return psycopg2.connect(DATABASE_URL)

def insert_user(name, email, password, age):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (name, email, password, age) VALUES (%s, %s, %s, %s)",
            (name, email, password, age)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

def check_user_credentials(email, password):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE email = %s AND password = %s",
            (email, password)
        )
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        return user is not None
    except Exception:
        return False

def insert_score(user_email, game_name, score, level):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO game_scores (user_email, game_name, score, level) VALUES (%s, %s, %s, %s)",
            (user_email, game_name, score, level)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}
