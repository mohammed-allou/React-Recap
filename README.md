# Pour créer une nouvelle application React App dans un dossier vide

#### `npm install -g create-react-app`

##### Puis

#### `npx create-react-app <name-project>`

#### Pour naviguer entre les pages il vous faut react-router:

#### `npm i -s react-router-dom`

#### Pour ajouter le framework d'interface utilisateur React Material-UI :

#### `npm install @material-ui/core`

#### Pour utiliser les icônes et les SVG de Material icons :

#### `npm install @material-ui/icons`

#### Dans le repertoire de projet pour commencer :

#### `yarn start`

Par default le projet va se lancer dans le port: [http://localhost:3000] pour avoir une visualisation dans le navigateur.

# Tests unitaires

#### Dans un terminal il faut installer ces dependences:

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

#### `yarn add --dev @testing-library/react-hooks`

#### `yarn add -dev react-test-renderer`

#### Pour lancer le test d'un composant bien défini:

#### `npx jest <nomDuComposant.test.js>`

#### Pour que tous les tests soient exécutés automatiquement en tape:

#### `npx jest --watch`

