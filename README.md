# Task Manager API (MySQL + JWT)

## Setup
1. Clone repo
2. Install deps: `npm install`
3. Create `.env` file (see `.env.example`)
4. Start server: `npm run dev` or `npm start`

## DB Setup
- MySQL schema: `task_manager_db`
- Tables auto-created via Sequelize (`Users`, `Tasks`)

## Test with Postman
- Import collection + environment JSON
- Run `Auth -> Register`, then `Auth -> Login`
- Use the `Tasks` requests with saved token
