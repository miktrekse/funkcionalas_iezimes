# 🚀 Deployment Instrukcijas

## 1. Git Setup

```bash
# Inicializējiet Git (ja vēl nav)
git init

# Pievienojiet visus failus
git add .

# Pirmā commit
git commit -m "Initial commit: Gherkin termini tulkojumi"

# Augšupielādējiet uz GitHub
git remote add origin https://github.com/YOUR_USERNAME/funkcionalas_iezimes.git
git branch -M main
git push -u origin main
```

## 2. Vercel Deployment

### Opcija A: Automātisks deployment (Ieteiktā)

1. Dodieties uz [vercel.com](https://vercel.com)
2. Pierakstieties ar GitHub konta
3. Noklikšķiniet "New Project"
4. Atlasiet `funkcionalas_iezimes` repozitoriju
5. Vercel automātiski atpazīs `vercel.json` konfigurāciju
6. Noklikšķiniet "Deploy"

**Vercel automātiski:**
- Sāks `npm run build`
- Augšupielādēs `dist` mapi
- Piešķirs URL (piemēram: `funkcionalas_iezimes.vercel.app`)
- Iespējošs GitHub integrāciju (automātisks deployment push uz main)

### Opcija B: CLI Deployment

```bash
# Instalējiet Vercel CLI
npm install -g vercel

# Pierakstieties
vercel login

# Deployjiet
vercel --prod
```

## 3. Cloudflare Pages Deployment

### Opcija A: Automātisks deployment (Ieteiktā)

1. Dodieties uz [dash.cloudflare.com/pages](https://dash.cloudflare.com/pages)
2. Noklikšķiniet "Connect to Git"
3. Autorizējiet GitHub
4. Atlasiet `funkcionalas_iezimes` repozitoriju
5. **Build command:** `npm run build`
6. **Output directory:** `dist`
7. **Root directory:** `/`
8. Noklikšķiniet "Save and Deploy"

**Cloudflare Pages automātiski:**
- Sāks `npm run build`
- Augšupielādēs `dist` mapi
- Piešķirs URL (piemēram: `funkcionalas_iezimes.pages.dev`)
- Iespējošs GitHub integrāciju (automātisks deployment push uz main)

### Opcija B: Wrangler CLI Deployment

```bash
# Instalējiet Wrangler
npm install -g @cloudflare/wrangler

# Pierakstieties
wrangler login

# Deployjiet
npm run build && wrangler deploy
```

## 4. Pārbaude un Validācija

### Lokālā testēšana pirms deployment

```bash
# Pārbaudiet, ka build darbojas
npm run build

# Skatiet, ko viņš uzbūvēs
npm run preview
```

Atvērt [http://localhost:4173](http://localhost:4173)

### Deployment pēc iesniegšanas

- ✅ Pēc noklikšķināšanas "Deploy" Vercel/Cloudflare sāks build
- ✅ Būvējums parasti aizņem 30-60 sekundes
- ✅ Kad finished — URL ir aktīvs un pieejams
- ✅ Pārbaudiet, ka tabula tiek attēlota pareizi

## 5. Bieži Uzdotie Jautājumi

### "Kāpēc Vercel vs Cloudflare Pages?"

| Vercel | Cloudflare Pages |
|--------|------------------|
| Speciāli veidots React | Ātrāks globāli (CDN) |
| Maksimāla React integrācija | Lēts/Bezmaksas |
| Maksas opcijas | Maksas opcijas |

**Ieteikums:** Sāciet ar Cloudflare Pages (bezmaksas, ātrs). Pāreiti uz Vercel, ja nepieciešami papildu features.

### "Kā atjaunināt deployment?"

- Vercel/Cloudflare Pages: Vienkārši `git push` uz `main` — automātisks deployment!
- Vercel CLI: `vercel --prod`
- Wrangler CLI: `npm run deploy:cloudflare`

### "Kā paziņot domēnu?"

**Vercel:**
```bash
# Dodieties uz Vercel projekta iestatījumi → Domains → Add
# vai izmantojiet Vercel CLI
vercel --prod --alias manas-noredes.com
```

**Cloudflare Pages:**
1. Dodieties uz Cloudflare dashboard
2. Atlasiet jūsu domēnu
3. Noklikšķiniet Pages → Setup custom domain
4. Ievadiet domēnu
5. Atjaunojiet DNS ierakstus (parasti automātisks)

## 6. GitHub Integrācija (Iesaka)

### Iestatīt automātisko deployment

1. Vercel/Cloudflare Web UI jau to dara — vienkārši savienojiet GitHub
2. Katru reizi, kad push uz `main`:
   - Automātiski sākas builds
   - Automātiski deployjieties
   - Pieņem ~2-5 minūtes

### Revert Deployment

Vienkārši `git revert` commit uz GitHub — automātisks redeploy ar veco versiju!

## 7. Monitoring & Logs

### Vercel Logs

```bash
vercel logs [YOUR_URL]
```

vai Vercel Web UI → Project → Analytics

### Cloudflare Pages Logs

Cloudflare Web UI → Pages → jūsu projekts → Analytics

## 8. Beigu Checklist

- [ ] Git rep lokāli
- [ ] GitHub rep augšupielādēts
- [ ] Vercel/Cloudflare savienots
- [ ] Deployment izpildīts
- [ ] URL pieejams un darbojas
- [ ] GitHub integrācija testēta (push → automātisks deployment)

## 9. Optimizācijas (Nākotne)

```bash
# Pievienojiet optimizācijas
npm install --save-dev vite-plugin-compression  # Gzip kompresija
npm install --save-dev vite-plugin-html        # HTML optimizācija
```

---

**Problēmas?** Skatiet [DOCUMENTATION.md](./DOCUMENTATION.md)
