# ☁️ BreezyBuddy — Landing Page

A clean, mobile-friendly one-page website for **BreezyBuddy**, a creative
focus-support app for neurodivergent students. Built with plain HTML, CSS, and
a tiny bit of JavaScript — no frameworks, no backend. Perfect for GitHub Pages
and for sharing via a QR code at a pitch.

---

## 📁 Project structure

```
breezybuddy/
├── index.html        # The page content (all sections)
├── styles.css        # All styling + colors + responsive layout
├── script.js         # Tiny scroll fade-in animation (optional)
├── README.md         # This file
└── assets/
    └── (mascot.png)  # Optional: add your own mascot image here
```

---

## ✏️ Where to edit your links & text

Open **`index.html`** and look for the clearly commented `CONTACT` section
near the bottom:

| What           | How to change it                                                        |
|----------------|-------------------------------------------------------------------------|
| **LinkedIn**   | Edit the `href` of the LinkedIn button → currently `https://www.linkedin.com/in/sasimatic` |
| **GitHub**     | Edit the `href` of the GitHub button → currently `https://github.com/sasilab` |
| **Email**      | Edit the address after `mailto:` → currently `sas1924s@hs-coburg.de`     |

The hero title, subtitle, and all section text are also in `index.html` with
comments marking each section, so you can rewrite them freely.

To change the **colors**, edit the variables at the top of `styles.css` under
`:root { ... }`.

---

## 🐱 Adding your own mascot

The page shows a hand-drawn CSS/SVG smiling cloud by default.

To use your own image instead:

1. Save your mascot picture as **`assets/mascot.png`**
2. That's it — the page automatically shows it. If the image is missing, the
   built-in SVG cloud is shown as a fallback.

---

## 🚀 Deploy on GitHub Pages (free)

1. **Push to GitHub** — create a repository and push these files to it.
   ```bash
   git init
   git add .
   git commit -m "BreezyBuddy landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under *Build and deployment* → *Source*, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**.
5. Click **Save**, wait ~1 minute, then copy the published URL
   (it looks like `https://<your-username>.github.io/<your-repo>/`).

---

## 📱 Making the QR code

Once your page is live, paste the published URL into any free QR-code generator
and place the QR image on your pitch slide. The page is mobile-optimized, so it
will look great when scanned on a phone.

---

Made with 💙 for focus, creativity, and kinder tools.
