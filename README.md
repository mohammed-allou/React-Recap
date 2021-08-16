### Pour créer une nouvelle application React App, placez-vous dans un dossier vide puis exécuter cette commande :

```javascript
 npm install -g create-react-app
```
#### Cette commande install l'outil 'create-react-app' d'une manière globale qui permet de créer le squelete d'un projet React.

##### Puis

```javascript
npx create-react-app <name-project>
```

#### Pour naviguer entre les pages il vous faut react-router:

```javascript
npm i react-router-dom
```

#### Pour ajouter le framework d'interface utilisateur React Material-UI :

```javascript
npm install @material-ui/core
```

#### Pour utiliser les icônes et les SVG de Material icons :

```javascript
npm install @material-ui/icons
```

#### Pour démarrer l'application en local, executer la commande suivante :

```
yarn start
```

Par default le projet va se lancer dans le port: [http://localhost:3000] pour avoir une visualisation dans le navigateur.

# Tests unitaires

Pour éviter toutes erreurs de compilation consernant la reconnaissance du syntaxe jsx et d'autres modules il est recommandé d'ajouter ces librairies =>
Pour plus de detail sur la configuration de l'environement de test:
[https://jestjs.io/docs/configuration]
[https://create-react-app.dev/docs/running-tests#initializing-test-environment]
[https://testing-library.com/docs/react-testing-library]

#### Dans un terminal il faut installer ces dépendences:

```javascript
yarn add --dev react-test-renderer
yarn add -D babel-jest @babel/preset-env @babel/preset-react
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

###### Dans le fichier babel.config.js il faut ajouter ces lignes:

```json
// babel.config.js

module.exports = {
 presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

###### Dans le fichier package.json il faut ajouter ces lignes:

```javascript
    // package.json

"jest": {
    "collectCoverageFrom": [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ],
    "verbose": true
  },
```

###### Dans un fichier setupTests.js il faut ajouter ces lignes:

```javascript
// setupTests.js

import '@testing-library/jest-dom/extend-expect';
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;
```

###### Dans un fichier bebel.config.js il faut ajouter:

```javascript
//bebel.config.js

export const presets = [['@babel/preset-env', '@babel/preset-react', {
    targets: {
        node: "current",
    },
}], "next/babel"];

```

###### Puis dans le package.json :

```javascript
//package.json

"babel": {
    "presets": [
      "react-app"
    ]
  },
  ```

#### Pour tester les HOOKS il faut ajouter ces librairies :

```javascript
yarn add --dev @testing-library/react-hooks

yarn add -dev react-test-renderer
```

#### Pour lancer le test d'un composant bien défini:

```javascript
npx jest <nomDuComposant.test.js>
```

#### Pour lancer les tests automatiquement, executer la commande :

```javascript
npx jest --watch
```
