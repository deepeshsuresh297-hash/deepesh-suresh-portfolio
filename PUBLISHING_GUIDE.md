# Publishing Deepesh Suresh's portfolio with GitHub Pages

## 1. Extract the website
Right-click `Deepesh_Suresh_Portfolio_Final_Clean_Profile.zip` and choose **Extract All**. Open the folder `Deepesh_Suresh_Portfolio_Final_Clean_Profile`. Do not open `index.html` from inside the ZIP.

## 2. Create your GitHub repository
Sign in at https://github.com, click the **+** menu and select **New repository**. Name it `deepesh-suresh-portfolio`, set visibility to **Public**, and select **Create repository**.

## 3. Upload the actual website files
Open the new repository and choose **uploading an existing file** (or **Add file > Upload files**). In Windows File Explorer open the extracted portfolio folder, select all its contents (including `index.html`, `style.css`, `config.js`, `app.js`, `data.js`, `project.html` and the `assets` folder) and drag them into the GitHub file upload area. **Do not upload the ZIP as a single file.** Commit the files to the `main` branch. If the browser refuses a folder upload, use GitHub Desktop instead; this package has many image and video assets. All individual videos are below GitHub's 25 MiB browser file upload size limit.

## 4. Enable Pages
In the repository open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then click **Save**.

## 5. Open the public link
After GitHub publishes, return to **Settings > Pages** and click **Visit site**. For username `YOUR-USERNAME` and repository `deepesh-suresh-portfolio`, the expected URL pattern is:

`https://YOUR-USERNAME.github.io/deepesh-suresh-portfolio/`

This is an example, not an active link until you publish it.

## 6. Test and share
Check that the homepage loads, all 18 projects open, video demonstrations work, your CV downloads and your LinkedIn/email links open. Then copy the real Pages link into your CV and LinkedIn profile.

## Notes
GitHub Pages makes the site publicly viewable. Your photo, email, phone number and CV are included, so review all personal information before publishing. The embedded CV is the version supplied earlier and does not yet mention the master's at KIT.

Official guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
