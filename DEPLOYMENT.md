# Déploiement sur Vercel

Votre application SIDITECH est prête à être déployée sur Vercel. Voici les étapes à suivre :

## Option 1: Via l'interface web de Vercel (Recommandé)

1. **Connectez-vous à Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub, GitLab ou Bitbucket

2. **Importez votre projet**
   - Cliquez sur "Add New Project"
   - Sélectionnez "Import Git Repository"
   - Choisissez votre repository GitHub contenant ce code
   - Ou uploadez le dossier manuellement

3. **Configurez le projet**
   - Framework Preset: Laissez "Other" ou "Static"
   - Build Command: Laissez vide (pas de build nécessaire)
   - Output Directory: Laissez vide (par défaut: "/")
   - Cliquez sur "Deploy"

4. **Accédez à votre site**
   - Une fois le déploiement terminé, vous recevrez une URL comme:
     `https://votre-projet.vercel.app`
   - Votre site sera accessible dans le navigateur

## Option 2: Via la CLI Vercel (Nécessite authentification)

```bash
# Installer Vercel CLI (déjà fait)
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
```

## Structure du projet

Le projet contient:
- `index.html` - Page d'accueil principale (SIDITECH)
- `ong.html` - Page dédiée aux solutions pour ONG
- Tous les styles et scripts sont inclus directement dans les fichiers HTML

## Personnalisation

Avant de déployer, vous pouvez modifier:
- Les textes et contenus dans `index.html` et `ong.html`
- Les couleurs dans les variables CSS (:root)
- Les liens de contact (WhatsApp, email)
- Les statistiques et informations de l'entreprise

## Après le déploiement

1. Configurez un domaine personnalisé dans Vercel (optionnel)
2. Activez HTTPS (automatique avec Vercel)
3. Partagez l'URL de votre site avec vos clients

## Support

Pour toute question sur Vercel: https://vercel.com/docs
