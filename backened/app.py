from flask import Flask, request, jsonify
from flask_cors import CORS
from db import insert_user, insert_score, check_user_credentials
from db import insert_user, insert_score, check_user_credentials, get_connection

app = Flask(__name__)
CORS(app)

@app.route("/api/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")
        age = data.get("age")

        if not all([name, email, password, age]):
            return jsonify({"success": False, "error": "All fields are required"}), 400

        result = insert_user(name, email, password, age)

        if result["success"]:
            return jsonify({"success": True}), 201
        else:
            return jsonify({"success": False, "error": result["error"]}), 500

    except Exception as e:
        return jsonify({"success": False, "error": f"Server error: {str(e)}"}), 500

@app.route("/api/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"success": False, "error": "Email and password required"}), 400

        user_exists = check_user_credentials(email, password)

        if user_exists:
            return jsonify({"success": True}), 200
        else:
            return jsonify({"success": False, "error": "Invalid credentials"}), 401

    except Exception as e:
        return jsonify({"success": False, "error": f"Server error: {str(e)}"}), 500

@app.route("/api/score", methods=["POST"])
def save_score():
    try:
        data = request.get_json()
        print("📥 Received score data:", data)  # 👈 ADD THIS LINE

        user_email = data.get("email")
        game_name = data.get("game_name")
        score = data.get("score")
        level = data.get("level")

        if not all([user_email, game_name, score is not None, level is not None]):
            print("❌ Missing data")  # 👈 LOG missing values
            return jsonify({"success": False, "error": "Missing score data"}), 400

        result = insert_score(user_email, game_name, score, level)
        print("📝 DB Insert Result:", result)  # 👈 LOG DB result

        if result["success"]:
            return jsonify({"success": True}), 201
        else:
            return jsonify({"success": False, "error": result["error"]}), 500

    except Exception as e:
        print("🔥 Server Error:", str(e))  # 👈 LOG full exception
        return jsonify({"success": False, "error": f"Server error: {str(e)}"}), 500

@app.route("/api/progress", methods=["GET"])
def get_progress():
    try:
        user_email = request.args.get("email")
        if not user_email:
            return jsonify({"success": False, "error": "Email is required"}), 400

        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT
                DATE(created_at) AS date,
                game_name,
                ROUND(AVG(score), 2) AS avg_score
            FROM game_scores
            WHERE user_email = %s
            GROUP BY game_name, date
            ORDER BY date ASC
            LIMIT 14;
        """, (user_email,))
        rows = cursor.fetchall()
        cursor.close()
        conn.close()

        # Merge by date, then rename date to "Week N"
        grouped = {}
        week_labels = {}
        week_count = 1

        for row in rows:
            date_str = row[0].isoformat()  # date
            game = row[1]
            score = row[2]

            if date_str not in grouped:
                grouped[date_str] = {"week": f"Week {week_count}"}
                week_labels[date_str] = f"Week {week_count}"
                week_count += 1

            grouped[date_str][game] = score

        # Convert to list
        chart_data = list(grouped.values())

        return jsonify({"success": True, "data": chart_data}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True, port=5000)

