const { Selector } = require("testcafe");

const user = Selector('#user_email');
const password = Selector('#user_password');
const loginButton = Selector('button.button');

fixture`Div with text`
    .page`https://hopin.com/sign_in`
    .beforeEach(async (t) => {
        await t
            .typeText(user, 'vasile.pop+666@gmail.com')
            .typeText(password, 'password123')
            .click(loginButton);
    });

test('Div with attribute', async t => {
    const navLink = Selector('a').withAttribute('data-testid', 'nav-link');
    const nameSpan = Selector('span').withText('Vicus');
    const nameDiv = Selector('div').withText('Vicus');
    const tabsDiv = Selector('div').withAttribute('data-testid', 'tabs-wrapper');

    await t
        // selector based on anchor element works fine
        .expect(navLink.visible).ok()
        // selector based on span element works fine
        .expect(nameSpan.exists).ok()
        // selector based on div throws "Function that specifies a selector can only return a DOM node"
        .expect(nameDiv.exists).ok()
        .click(nameDiv)
        .expect(tabsDiv.visible).ok();
});