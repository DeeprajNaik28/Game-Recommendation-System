# 🎮 Spec2Play

A modern Game Recommendation System built using React + Vite that helps users discover games based on their interests and system specifications.

---

# 🚀 Live Demo

Deployed using Vercel. - https://game-recommendation-system-wheat.vercel.app/

---

# 📌 Project Overview

Spec2Play is a responsive web application that recommends games based on:

* Game similarity
* Genre
* Tags
* System requirements
* RAM compatibility
* Storage similarity
* GPU family matching

The platform also allows users to search games, filter them, and discover games compatible with their PC.

---

# ✨ Features

## 🔍 Search System

* Real-time game search
* Dynamic filtering
* Instant results

## 🎯 Smart Recommendation Engine

Games are recommended using a weighted similarity scoring system based on:

* Genre matching
* Shared tags
* RAM similarity
* Storage similarity
* GPU family similarity
Games with higher scores are ranked higher in recommendations.

## 💻 System Requirement Finder

Users can:

* Select RAM configuration
* Discover compatible games
* Browse optimized recommendations

## 🎨 Modern UI

* Responsive design
* Gaming-inspired dark theme
* Gradient hero section
* Smooth hover animations
* Mobile-friendly layout

## 🌐 API Integration

Integrated with the RAWG API to fetch:

* Game images
* Ratings
* Release dates

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM

## API

* RAWG API

## Deployment

* Vercel

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── GameCard.jsx
│   └── Navbar.jsx
│
├── data/
│   └── game_recommendation_dataset.json
│
├── pages/
│   ├── Home.jsx
│   ├── GameDetails.jsx
│   └── SystemFinder.jsx
│
├── services/
│   └── rawgApi.js
│
└── App.jsx
```

---

# ⚙️ How It Works

## 1. Game Search

Users search for a game using the search bar.

## 2. Recommendation Engine

When a game is selected:

* The application compares it with other games in the dataset.
* Similarity scores are calculated.
* Best matching games are recommended.

## 3. System Compatibility

Users can choose their RAM configuration.

The application filters games that are compatible with the selected hardware.

## 4. API Data Fetching

Additional game details are dynamically fetched from the RAWG API.

---

# 📱 Responsive Design

Spec2Play is optimized for:

* Mobile phones
* Tablets
* Laptops
* Desktop screens

---

# 🖥️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/DeeprajNaik28/Game-Recommendation-System.git
```

## Navigate Into Project

```bash
cd Game-Recommendation-System
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

# 📜 License

This project is developed for educational and portfolio purposes.
