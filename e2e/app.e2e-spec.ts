import { AngularTabNavPage } from './app.po';

describe('angular-tab-nav App', function() {
  let page: AngularTabNavPage;

  beforeEach(() => {
    page = new AngularTabNavPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
