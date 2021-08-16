 
 Qualité logicielle: 

 - Fiabilité:
 Autrement dit, est-ce que votre produit comporte des bugs ? Est-ce que ces derniers sont gênants ?

 - Facilité d'utilisation:
 Par exemple, votre produit est-il utilisable par des personnes malvoyantes, ou qui ne parlent pas votre langue ?

 - Maintenabilité:
 Autrement dit, est-ce que votre logiciel est capable d’être mis à jour et développé facilement ?

 - Compatibilité:
 Par exemple, est-ce que votre site est utilisable par différents navigateurs du marché ou par différents appareils ?

 Jest est l'outil de base pour Les tests, et que React Testing Library est l'outil qui facilite les tests des composants.
 
 `test(), it()` : prend une string  en premier argument  , puis une fonction en deuxième argument.
 `expect()`  :  compare un élément avec un matcher
 `toBe,toEqual, toContain... `:  sont appellés des matchers
 `describe` : permet d'englober plusieurs tests

 exemple de code:

 ```javascript
 test('render sum', () => {
  expect(2+2).toBe(4);
});
 
 ```

 On peut tester si un composent est rendu ou non:

 ```javascript
 il faut importer le composent ainsi que render
 import Home from "./Home";
 import { render } from '@testing-library/react'

 describe('render component', () => {
    it('render', async  () => {
        render(<Home />)
    })
})
 
 ```

 screen  : est en quelque sorte le body  qui contient les composants 
 getByRole : Ce sélecteur permettre d'accéder à L'élément en question
 exemple en va tester que si le button affiche 'click':

 ```javascript
 il faut importer screen depuis la librairie
 import { render, screen } from '@testing-library/react'
 describe('render component', () => {
    it('render', async  () => {
        render(<Home />)
        const buttonClick = screen.getByRole('button')
        expect(buttonClick.textContent).toBe('click')
    })
})
 ```

 fireEvent : permettre de déclencher des événements du DOM, exp: ' un click'
 not.toBe : permet de faire le contraire

 ```javascript
 il faut importer fireEvent depuis la librairie
 import { render, screen, fireEvent } from '@testing-library/react'
 describe('render component', () => {
    it('render', async  () => {
        render(<Home />)
        const buttonClick = screen.getByRole('button')
        expect(buttonClick.textContent).toBe('click')
        fireEvent.click(buttonClick)
    expect(buttonClick.textContent).not.toBe('click')
    })
})
 ```

Pour inspecter que si le code renvoi bien l'élément text

```javascript
// Methode 1

describe('render component', () => {
    it('render', async  () => {
        render(<Home />)
        expect(screen.getByText('le contenu du text chercher')).toBeTruthy()
    })
})

// Methode 2
describe('render component', () => {
    it('render', async  () => {
        render(<Home />)
        expect(screen.getByRole('heading',{
            // heading: s'il s'agit du titre
            level:1,
            //level : le niveau du text h1, h2..
            text:'le contenu du text chercher'
        })).toBeTruthy()
    })
})

```


 En peut passer 'data-testid'au composant et ensuite y accéder avec le sélecteur 'getByTestId'

Pour tester n'import quoi sauf `undifined` et `null`
Le x c'rst une variable qui peut être `string` ou `number`

```javascript
test('expect anything', ()=>{
    expect(x).toEqual(expect.anything())
})
```

Pour tester par la specification du constructor

```javascript
test('expect any constructor', ()=>{
    expect(13).toEqual(expect.any(number))
    expect('Momo').toEqual(expect.any(string))
})
```

Pour tester si Le tableau contient des éléments

```javascript
test('expect arrayContaining', ()=>{
    const myArray=[1,2,3,5,7]
    expect(myArray).toEqual(expect.arrayContaining([2,5])
})

const getAmis = () => ["milo", "adiml", "bolo", "momo"]

describe('toContain Unit Test Suite', () => {
    it('should contain the name "momo"', () => {
        expect(getAmis()).toContain('momo')
    })
    
    it('should not contain the name "thomas"', () => {
        expect(getAmis()).not.toContain('thomas')
    })
})
```
Pour tester les fonctions

```javascript
describe('mock function', () => {
    test('mocker function', () => {
        const mocker = jest.fn((name) => `Hello ${name}`)
        expect(mocker('momo')).toBe('Hello momo')

        //Si la fonction est appelée ou non
        expect(mocker).toHaveBeenCalled()
        
        //Pour avoir le nombre d'appel de la fonction  
        expect(mocker).toHaveBeenCalledTimes(1)
        
        //L'argument par lequel est appelée la fonction
        expect(mocker).toHaveBeenCalledWith('momo')
    })
})
})
```

Pour plus d'information :
 [https://devhints.io/jest]
Pour plus d'information :
 [https://testing-library.com/docs/react-testing-library/cheatsheet/]
