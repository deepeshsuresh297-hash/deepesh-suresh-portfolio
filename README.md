# Deepesh Suresh — Mechatronics Engineering Portfolio

A complete, responsive website containing a personal profile photograph, professional biography, current M.Sc. Mechanical Engineering studies at Karlsruhe Institute of Technology (KIT) specializing in Mechatronics, earlier education, internships, technical skills, **18 detailed project case studies**, original project images and **15 locally playable videos**, and downloadable PDF CV.

## Open the website on Windows

1. Right-click the ZIP file and choose **Extract All...**.
2. Open the extracted **Deepesh_Suresh_Portfolio_Final_Clean_Profile** folder.
3. Double-click `index.html`. **Do not open index.html from inside a ZIP preview** — that will result in missing styling and photographs.
4. Keep `index.html`, `project.html`, `style.css`, `app.js`, `data.js`, `config.js` and the `assets` folder in the **same folder structure**.

No external library, build step, or internet connection is required for the static website to work locally.

Detailed instructions are also provided in **PUBLISHING_GUIDE.md**.

## Public website link / how to publish

**This delivered package is not yet hosted publicly.** A shareable public URL is created only when you publish it through GitHub Pages or another hosting service. Do not share the local `file:///C:/...` address: it works only on your own computer.

### GitHub Pages (free)

1. Create a new public repository on GitHub, for example `deepesh-suresh-portfolio`.
2. Upload the entire **contents** of this folder (not the ZIP itself) into that repository, so that `index.html` sits at the repository root.
3. In **Settings > Pages**, select **Deploy from a branch**, your primary branch (e.g. `main`) and **/ (root)**.
4. GitHub shows the website address when deployment is complete. The usual format is `https://YOUR-USERNAME.github.io/deepesh-suresh-portfolio/` if your repository is named `deepesh-suresh-portfolio`. This is a format example, not an already-live site.
5. If using Git (recommended for a site with many media files):
   ```bash
   git init
   git add .
   git commit -m "Publish Deepesh Suresh portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/deepesh-suresh-portfolio.git
   git push -u origin main
   ```

Alternatively, you can drag this folder into a static-site host that supports multi-file static uploads, such as Netlify Drop. The shareable URL is displayed by the host after successful publishing.

## Content & updates

- `index.html`: hero with portrait, featured projects, project archive, six areas of expertise, engineering experience, education, about and contact.
- `project.html?id=1` through `project.html?id=18`: project details, evidence, images, and working videos.
- `config.js`: **Deepesh Suresh**, current KIT master's information, phone, email, LinkedIn, bio and CV location. Update contact fields here.
- `data.js`: all 18 project descriptions. Update as your work develops.
- `style.css`: responsive dark visual design.
- `assets/docs/Deepesh_Suresh_CV.pdf`: the previously supplied two-page Mechatronics CV. This is the original CV and has not been edited to reflect the new KIT master's information; update the CV separately if you want consistency.
- `assets/images/deepesh-suresh-portrait.webp`: user-provided professional photograph.
- `assets/videos/`: locally playable project demos.
- `assets/docs/project-01-presentation.pdf`: original presentation from Project 01, web-optimized for hosting.

## Accuracy & privacy

Personal information and education/experience are based on the supplied CV. Project outcomes reflect the descriptions, photographs, and videos supplied. Future upgrades are shown as plans, and unverified performance numbers are labelled reported. The provided CV and contact details are publicly visible once you publish the site: review them before sharing a public link.
