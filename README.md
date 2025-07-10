This is the backend for a full-stack blog application built using **Strapi v4**. It provides a REST API for managing and serving blog content, including images and rich text, to be consumed by a frontend like **Next.js**.

---

## 🚀 Tech Stack

- [Strapi v4](https://docs.strapi.io/)
- Node.js
- SQLite / PostgreSQL (configurable)
- RESTful API

---

## 📦 Features

- Blog post content type with rich text and images
- Upload and manage media files
- Auto-generated REST API endpoints
- JWT-based authentication system
- Admin panel at `/admin`

---

## 📁 Project Structure

```

.
├── src/               # Strapi APIs, content types, controllers, services
├── config/            # App/database config
├── public/            # Static files (e.g., uploads)
├── .env               # Local environment variables
├── package.json
└── README.md

````

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ghost-web-ops/my-blog-backend.git
cd my-blog-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
# App
APP_KEYS=your_app_key1,your_app_key2
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret

# Database (optional if using SQLite)
DATABASE_CLIENT=sqlite
```

> ⚠️ Generate secrets securely using:

```bash
openssl rand -hex 32
```

### 4. Start the development server

```bash
npm run develop
```

Visit the Strapi admin panel at:
📍 `http://localhost:1337/admin`

---

## 🌐 Deployment (e.g. Railway)

You can deploy this project to [Railway](https://railway.app) or any Node.js-compatible platform:

1. Push your repo to GitHub.
2. Go to Railway and create a new project.
3. Link your GitHub repo.
4. Add your environment variables from `.env`.
5. Railway will auto-install dependencies and start the app.

Then use your deployed backend URL in the frontend's `.env.local`.

---

## 🔗 Frontend Repository

👉 [https://github.com/Ghost-web-ops/my-blogspot](https://github.com/Ghost-web-ops/my-blogspot)

---

## 👤 Author

Created by [Omar Yasser](https://github.com/Ghost-web-ops)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

````
